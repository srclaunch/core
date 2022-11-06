import { ProjectConfig, WorkspaceConfig } from '@srclaunch/types';
import { paramCase } from 'change-case';
import fs from 'fs-extra';
import path from 'node:path';
import pluralize from 'pluralize';

function constructHttpClientIndexScript({
  environments,
  models,
}: {
  readonly environments?: WorkspaceConfig['sdk']['coreApi']['environments'];
  readonly models: readonly string[];
}) {
  let imports = `import { HttpClient } from '@srclaunch/http-client';
import { Environment } from '@srclaunch/types';
import { getEnvironment } from '@srclaunch/web-environment';
`;

  for (const name of models) {
    imports += `import ${name.toLowerCase()}Endpoints from './${name}Endpoints';\n`;
  }

  let hosts = '';
  if (environments && environments.development) {
    hosts += `development: '${
      environments?.development?.https ? 'https' : 'http'
    }://${environments?.development?.host ?? 'localhost'}${
      environments?.development?.port !== 80
        ? `:${(environments?.development?.port ?? 3000).toString()}`
        : ''
    }',\n`;
  }

  if (environments && environments.preview) {
    hosts += `preview: '${environments?.preview?.https ? 'https' : 'http'}://${
      environments?.preview?.host
    }${
      environments?.preview?.port !== 80
        ? `:${(environments?.preview?.port ?? 8080).toString()}`
        : ''
    }',\n`;
  }

  if (environments && environments.qa) {
    hosts += `qa: '${environments?.qa?.https ? 'https' : 'http'}://${
      environments?.qa?.host
    }${
      environments?.qa?.port !== 80
        ? `:${(environments?.qa?.port ?? 8080).toString()}`
        : ''
    }',\n`;
  }

  if (environments && environments.production) {
    hosts += `production: '${
      environments?.production?.https ? 'https' : 'http'
    }://${environments?.production?.host}${
      environments?.production?.port !== 80
        ? `:${(environments?.production?.port ?? 8080).toString()}`
        : ''
    }',\n`;
  }

  return `${imports}

const environment: Environment = getEnvironment();

const hosts = {
  ${hosts}
}

export const httpClient = new HttpClient({
  basePath: 'core-api',
  // @ts-ignore
  host: hosts[environment.id],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // headers: { 'X-Requested-With': 'XMLHttpRequest' },
  },
  retry: {
    condition: error => !error.response,
    count: 2,
    delay: 5000,
  },
  preAuthResourceIncludes: '/auth',
  responseType: 'json',
  withCredentials: true,
});

export default {
  ${models.map(name => {
    return `...${name}Endpoints\n`;
  })}
};`;
}

function getHttpClientEndpoints({
  modelName,
  typesProjectName,
}: {
  readonly modelName: string;
  readonly typesProjectName: string;
}): string {
  const lowercase = modelName.toLowerCase();
  const lowercasePlural = pluralize(modelName.toLowerCase());
  const capitalizedPlural = pluralize(modelName);
  const urlParameter = paramCase(pluralize(modelName));

  return `import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { ${modelName} } from '${typesProjectName}';

  function getFormData(props: object) {
    try {
      const formData = new FormData();
      const keys =  Object.keys(props);
     
      for (const key of keys) {
        // @ts-ignore
        const value = props[key];
        if (Array.isArray(value) && value.length > 0) {
          for (let i = 0; i < value.length; i++) {
            const item = value[i];
            console.log('item', item);
            
            if ('size' in item) {
              if (item) formData.append(\`\${key}[\${i}]\`, item);
            } else {
              if (item) formData.append(\`\${key}[\${i}]\`, JSON.stringify(item));
            }
          }
        } else {
          if (value) formData.append(key, value);
        }
      }
    
      return formData;
    } catch (err: any) {
      console.error(err);
    }
 }

  export default {
    create${modelName}: (props: ${modelName}): Promise<HttpResponse<${modelName}> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/${urlParameter}', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    create${capitalizedPlural}: ({
      ...props
    }: ${modelName}[]): Promise<HttpResponse<${modelName}> | void> =>
      httpClient.post('/${urlParameter}', props),
    delete${modelName}: (id: ${modelName}['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(\`/${urlParameter}/\${id}\`),
    delete${capitalizedPlural}: (ids: ${modelName}['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(\`/${urlParameter}/\${ids.join(',')}\`),
    get${modelName}: (id: ${modelName}['id']): Promise<HttpResponse<${modelName}> | void> =>
      httpClient.get(\`/${urlParameter}/\${id}\`),
    get${capitalizedPlural}: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<${modelName}> | void> => 
      httpClient.get(\`/${urlParameter}?\${filters ? stringify(filters) : ''}limit=\${limit}&offset=\${offset}\`),
    update${modelName}: (
      id: ${modelName}['id'],
      props: ${modelName},
    ): Promise<HttpResponse<${modelName}> | void> => {
      const formData = getFormData(props);
      return httpClient.put(\`/${urlParameter}\/\${id}\`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    update${capitalizedPlural}: (
      {
        ...props
      }: ${modelName}[],
    ): Promise<HttpResponse<${modelName}> | void> =>
      httpClient.put(\`/${urlParameter}\`, props),
  };  
  `;
}

export async function buildHttpClient(
  workspaceConfig: WorkspaceConfig,
): Promise<void> {
  try {
    // const projectConfigContents = await fs.readFile(projectConfigPath);
    // const projectConfig = await JSON.parse(projectConfigContents.toString());
    const MODELS_PATH = path.join(path.resolve(), `sdk/models/src/srclaunch`);
    const BUILD_PATH = path.join(path.resolve(), `sdk/http-client/src`);
    const DIST_PATH = path.join(path.resolve(), `sdk/http-client/dist`);

    await fs.emptyDir(BUILD_PATH);
    await fs.emptyDir(DIST_PATH);

    const files = await fs.readdir(MODELS_PATH);

    for (const file of files) {
      if (file !== 'index.ts') {
        const name = `${file.toLowerCase().replace('.ts', '')}Endpoints.ts`;

        const modelHttpClientEndpoints = getHttpClientEndpoints({
          modelName: file.replace('.ts', ''),
          typesProjectName: '@srclaunch/types-sdk',
        });

        // logger.info(`Writing ${name} HTTP client endpoints`);

        await fs.writeFile(
          path.join(BUILD_PATH, name),
          modelHttpClientEndpoints,
          'utf8',
        );
      }
    }

    const indexFileContent = constructHttpClientIndexScript({
      environments: workspaceConfig.sdk.coreApi?.environments,
      models: files
        .filter(f => f !== 'index.ts')
        .map(file => pluralize(file.toLowerCase()).replace('.ts', '')),
    });

    await fs.writeFile(
      path.join(BUILD_PATH, 'index.ts'),
      indexFileContent,
      'utf8',
    );
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
