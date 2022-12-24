import { Platform, Primitives, ProjectType } from '@srclaunch/types';

import { CodeGenWorkflow } from '../../../codegen';
import {
  getGitHubActionTemplate,
  GitHubActionRunnerOS,
  GitHubActionTrigger,
} from '../../../templates/ci-cd/github-action';
import { getEditorConfigTemplate } from '../../../templates/dx/editor-config';
import { getESLintConfigTemplate } from '../../../templates/dx/eslint-config';
import { getESLintIgnoreTemplate } from '../../../templates/dx/eslint-ignore';
import { getPrettierConfigTemplate } from '../../../templates/dx/prettier-config';
import { getPrettierIgnoreTemplate } from '../../../templates/dx/prettier-ignore';
import { getStyleLintConfigTemplate } from '../../../templates/dx/stylelint-config';
import { getTurboConfigTemplate } from '../../../templates/dx/turbo-config';
import { getTypeScriptConfigTemplate } from '../../../templates/dx/typescript-config';
import { getTypescriptTypeDefinitionTemplate } from '../../../templates/dx/typescript-type-definition';
import { getGitIgnoreTemplate } from '../../../templates/package/gitignore';
import { getPackageConfigTemplate } from '../../../templates/package/package-config';
import { getChangeLogTemplate } from '../../../templates/project/changelog';
import { getLicenseTemplate } from '../../../templates/project/license';
import { getReadmeTemplate } from '../../../templates/project/readme';
import { getExampleIndexPageComponent } from '../../../templates/project/web-application/example-index-page';
import { getSrcLaunchModelTemplate } from '../../../templates/srclaunch/model';
import { getSrcLaunchWorkspaceConfigTemplate } from '../../../templates/srclaunch/workspace-config';
import { getPnpmWorkspaceConfigTemplate } from '../../../templates/workspace/pnpm-workspace';

interface SrcLaunchCoreApiGeneratorOptions {
  readonly description?: string;
  readonly name: string;
  readonly owner?: string;
  readonly type?: ProjectType;
}

export class SrcLaunchCoreApiGenerator extends CodeGenWorkflow {
  public constructor(options: SrcLaunchCoreApiGeneratorOptions) {
    super();

    const { description, name, owner } = options;

    this.createDirectory(`./apps/${name}/.github`)
      .createDirectory(`./apps/${name}/.github/workflows`)
      .createDirectory(`./apps/${name}/.srclaunch`)
      .addFile('./tsconfig.json', getTypeScriptConfigTemplate())
      .createDirectory(`./apps/${name}/assets`)
      .createDirectory(`./apps/${name}/src`)
      .createDirectory(`./apps/${name}/src/components`)
      .createDirectory(`./apps/${name}/src/layouts`)
      .createDirectory(`./apps/${name}/src/pages`)
      .addFile(`./apps/${name}/pages/index.tsx`, getExampleIndexPageComponent())
      .createDirectory(`./apps/${name}/src/state`)
      // .addFile('src/index.html', getSrcLaunchWebApplicationIndexHtmlTemplate())
      // .addFile('src/index.tsx', getSrcLaunchWebApplicationIndexTsTemplate())
      // .addFile('src/react-app-env.d.ts', getSrcLaunchWebApplicationReactAppEnvDtsTemplate())
      // .addFile('src/routes.ts', getSrcLaunchWebApplicationRoutesTsTemplate())

      .addFile(
        `./apps/${name}/.eslintrc.cjs`,
        getESLintConfigTemplate({
          platform: Platform.Browser,
        }),
      )
      .addFile(`./apps/${name}/.prettierrc.cjs`, getPrettierConfigTemplate())
      .addFile(
        `./apps/${name}/.srclaunchrc.ts`,
        getSrcLaunchWorkspaceConfigTemplate({ name, owner }),
      )
      .addFile(`./apps/${name}/.stylelintrc.js`, getStyleLintConfigTemplate())
      .addFile(`./apps/${name}/CHANGELOG.md`, getChangeLogTemplate())
      // .addFile('commitlint.config.cjs', '')
      .addFile(`./apps/${name}/LICENSE.md`, getLicenseTemplate())
      .addFile(
        `./apps/${name}/package.json`,
        getPackageConfigTemplate({
          description,
          name,
          owner,
        }),
      )
      .addFile(`./apps/${name}/tsconfig.json`, getTypeScriptConfigTemplate())
      .addFile(`./apps/${name}/README.md`, getReadmeTemplate({ name, owner }));
  }
}
