import { Environments, ProjectConfig, Runner } from '@srclaunch/types';
import { TypedFlags } from 'meow';

import { Command, CommandType } from '../lib/command';
import { run as runVite } from '../lib/run/vite';

type DevFlags = TypedFlags<{
  readonly ssr: {
    readonly default: false;
    readonly description: 'Serve web application using server-side rendering';
    readonly type: 'boolean';
  };
}>;

export default new Command<ProjectConfig, DevFlags>({
  description: 'Start project in development mode',
  name: 'dev',
  run: async ({ config }) => {
    try {
      const options = config.run?.development;

      switch (options?.runner) {
        case Runner.Vite:
          await runVite({
            environment: Environments.Development,
            project: config,
            ...options,
          });
      }
    } catch (error: unknown) {
      console.error(error);
      process.exit(1);
    }
  },
  type: CommandType.Project,
});
