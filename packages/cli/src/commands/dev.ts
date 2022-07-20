import {
  ComponentLibraryConfig,
  ComponentLibraryDocumentationConfig,
  DevelopmentEnvironmentConfig,
  EnvironmentType,
  ProjectConfig,
  ProjectType,
  Runner,
  WebApplicationOptions,
} from '@srclaunch/types';
import { TypedFlags } from 'meow';

import { Command, CommandType } from '../lib/command';
import { runWebApplication } from '../lib/run/web-application';

type DevFlags = TypedFlags<{
  readonly ssr: {
    readonly default: false;
    readonly description: 'Serve web application using server-side rendering';
    readonly type: 'boolean';
  };
}>;

/*
           // await runVite({
            //   environment: Environments.Development,
            //   project: config,
            //   ...options,
            // });
          
            */

export default new Command<ProjectConfig, DevFlags>({
  description: 'Start project in development mode',
  name: 'dev',
  run: async ({ config }) => {
    try {
      switch (config.type) {
        case ProjectType.ComponentLibrary:
          {
            const options = config.environments?.development
              ?.run as DevelopmentEnvironmentConfig<ComponentLibraryConfig>;

            await runWebApplication({
              environment: EnvironmentType.Development,
              ...options,
            });
          }
          break;
        case ProjectType.WebApplication:
          {
            const options = config.environments?.development
              ?.run as DevelopmentEnvironmentConfig<WebApplicationOptions>;

            await runWebApplication({
              environment: EnvironmentType.Development,
              ...options,
            });
          }
          break;
        default: {
          const options = config.environments?.development?.run;

          switch (options?.runner) {
            case Runner.Vite:
              {
                await runWebApplication({
                  environment: EnvironmentType.Development,
                  ...options,
                });
                // const pagesDir = options.pagesDir ?? 'src/pages';
                // const pagesPathExists = fs.existsSync(pagesDir);

                // if (options.pagesDir) {
                //   if (fs.existsSync(pagesDir)) {
                //     if (pagesPathExists) {
                //       const files = await fs.promises.readdir(pagesDir);
                //       console.log(files);
                //       console.log(`Found ${files.length} pages`);
                //     }
                //   } else {
                //     const dir = prompt('Enter pages directory path');

                //     if (dir) {
                //       const files = await fs.promises.readdir(dir);

                //       console.log(dir);
                //       console.log(`Found ${dir.length} pages`);
                //     }
                //   }
                // }
              }
              break;
            default:
              break;
          }
        }
      }
    } catch (error: unknown) {
      console.error(error);
      process.exit(1);
    }
  },
  type: CommandType.Project,
});
