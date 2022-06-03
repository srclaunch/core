import { Environments, Project, Runner, RunOptions } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import pc from 'picocolors';

import { Command, CommandType } from '../lib/command';
import { run as runVite } from '../lib/run/vite';

type RunFlags = TypedFlags<{
  readonly ssr: {
    readonly default: false;
    readonly description: 'Serve web application using server-side rendering';
    readonly type: 'boolean';
  };
}>;

export default new Command<Project, RunFlags>({
  commands: [
    new Command<Project, RunFlags>({
      description: 'Start project in development mode',
      name: 'dev',
      run: async ({ config, flags }) => {
        const options = config.environments?.development?.run as RunOptions;

        if (!options) {
          throw new Error('Missing development configuration');
        }

        switch (options?.runner) {
          case Runner.Vite:
            await runVite({
              environment: Environments.Development,
              options,
              project: config,
            });
            break;
          default:
            console.error(
              `${pc.red('✘')} ${pc.bold('Unsupported run tool')} ${pc.bold(
                options?.runner,
              )}`,
            );
            break;
        }
      },
      type: CommandType.Project,
    }),
    new Command<Project, RunFlags>({
      description: 'Start project in preview mode',
      name: 'preview',
      run: async ({ config, flags }) => {},
      type: CommandType.Project,
    }),
    new Command<Project, RunFlags>({
      description: 'Start project in qa mode',
      name: 'qa',
      run: async ({ config, flags }) => {},
      type: CommandType.Project,
    }),
    new Command<Project, RunFlags>({
      description: 'Start project in production mode',
      name: 'production',
      run: async ({ config, flags }) => {},
      type: CommandType.Project,
    }),
    new Command<Project, RunFlags>({
      description: 'Shows help for run commands',
      name: 'help',
      run: async () => {
        console.info(
          'Available serve commands are: dev, preview, production, and help',
        );
      },
      type: CommandType.Project,
    }),
  ],
  description: 'Commands for running an application or service',
  name: 'run',
  run: async ({ config, flags }) => {},
  type: CommandType.Project,
});
