import {
  ComponentLibraryConfig,
  Environments,
  ProjectConfig,
  ProjectType,
  WebAppConfig,
} from '@srclaunch/types';
import { TypedFlags } from 'meow';
import path from 'node:path';

import { SOURCE_DIR } from '../constants/dev';
import { Command, CommandType } from '../lib/command';
import { run as runVite } from '../lib/run/vite';

type RunFlags = TypedFlags<{
  readonly ssr: {
    readonly default: false;
    readonly description: 'Serve web application using server-side rendering';
    readonly type: 'boolean';
  };
}>;

export default new Command<ProjectConfig, RunFlags>({
  commands: [
    new Command<ProjectConfig, RunFlags>({
      description: 'Start project in development mode',
      name: 'dev',
      run: async ({ config, flags }) => {
        try {
          switch (config.type) {
            case ProjectType.ComponentLibrary:
            case ProjectType.IconLibrary:
            case ProjectType.ThemeLibrary:
              {
                const docConfig = config as ComponentLibraryConfig;
                await runVite({
                  environment: Environments.Development,
                  project: config,
                  ...docConfig.docs,
                });
              }

              break;
            case ProjectType.WebApplication:
              {
                await runVite({
                  environment: Environments.Development,
                  project: config,
                  ...config,
                });
              }

              break;
          }
        } catch (error: unknown) {
          console.error(error);
          process.exit(1);
        }
      },
      type: CommandType.Project,
    }),
    // new Command<Project, RunFlags>({
    //   description: 'Start project in preview mode',
    //   name: 'preview',
    //   run: async ({ config, flags }) => {},
    //   type: CommandType.Project,
    // }),
    // new Command<Project, RunFlags>({
    //   description: 'Start project in qa mode',
    //   name: 'qa',
    //   run: async ({ config, flags }) => {},
    //   type: CommandType.Project,
    // }),
    // new Command<Project, RunFlags>({
    //   description: 'Start project in production mode',
    //   name: 'production',
    //   run: async ({ config, flags }) => {},
    //   type: CommandType.Project,
    // }),
    // new Command<Project, RunFlags>({
    //   description: 'Shows help for run commands',
    //   name: 'help',
    //   run: async () => {
    //     console.info(
    //       'Available serve commands are: dev, preview, production, and help',
    //     );
    //   },
    //   type: CommandType.Project,
    // }),
  ],
  description: 'Commands for running an application or service',
  name: 'run',
  run: async ({ config, flags }) => {},
  type: CommandType.Project,
});
