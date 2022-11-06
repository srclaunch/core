import { ProjectConfig, TestTool } from '@srclaunch/types';
import { TypedFlags } from 'meow';

import { Command, CommandType } from '../lib/command';
import { run as runAvaTests } from '../lib/test/ava';
import { run as runC8Coverage } from '../lib/test/coverage';
import { run as runJestTests } from '../lib/test/jest';
import { run as runTapeTests } from '../lib/test/tape';
import { run as runVitestTests } from '../lib/test/vitest';

type TestFlags = TypedFlags<{
  readonly coverage: {
    readonly alias: 'c';
    readonly default: false;
    readonly description: 'Collect test coverage after test run';
    readonly type: 'boolean';
  };
  readonly match: {
    readonly alias: 'm';
    readonly description: 'Run tests matching the specified pattern';
    readonly type: 'string';
  };
  readonly watch: {
    readonly alias: 'w';
    readonly description: 'Watch for changes and run tests automatically';
    readonly type: 'boolean';
  };
}>;

export default new Command<ProjectConfig, TestFlags>({
  commands: [
    new Command<ProjectConfig, TestFlags>({
      description: 'Run tests using Ava',
      name: 'ava',
      run: async ({
        config,
        flags,
      }: {
        readonly config: ProjectConfig;
        readonly flags: TestFlags;
      }) => {
        if (typeof config.test === 'object' && !Array.isArray(config.test)) {
          await runAvaTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
        } else if (Array.isArray(config.test)) {
          for (const test of config.test) {
            await runAvaTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
          }
        }
      },
    }),
    new Command<ProjectConfig, TestFlags>({
      description: 'Runs tests using Jest',
      name: 'jest',
      run: async ({ config, flags }) => {
        if (typeof config.test === 'object' && !Array.isArray(config.test)) {
          await runJestTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
        } else if (Array.isArray(config.test)) {
          for (const test of config.test) {
            await runJestTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
          }
        }
      },
      type: CommandType.Project,
    }),
    new Command<ProjectConfig, TestFlags>({
      description: 'Run tests using Tape',
      name: 'tape',
      run: async ({
        config,
        flags,
      }: {
        readonly config: ProjectConfig;
        readonly flags: TestFlags;
      }) => {
        if (typeof config.test === 'object' && !Array.isArray(config.test)) {
          await runTapeTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
        } else if (Array.isArray(config.test)) {
          for (const test of config.test) {
            await runTapeTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
          }
        }
      },
    }),
    new Command<ProjectConfig, TestFlags>({
      description: 'Run tests using Vitest',
      name: 'vitest',
      run: async ({
        config,
        flags,
      }: {
        readonly config: ProjectConfig;
        readonly flags: TestFlags;
      }) => {
        if (typeof config.test === 'object' && !Array.isArray(config.test)) {
          await runVitestTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
        } else if (Array.isArray(config.test)) {
          for (const test of config.test) {
            await runVitestTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
          }
        }
      },
    }),
    new Command<ProjectConfig, TestFlags>({
      description: 'Generates coverage reports',
      name: 'coverage',
      run: async ({ config }) => {
        if (typeof config.test === 'object' && !Array.isArray(config.test)) {
          await runC8Coverage(config.test);
        } else if (Array.isArray(config.test)) {
          for (const test of config.test) {
            await runC8Coverage(test);
          }
        }
      },
      type: CommandType.Project,
    }),
    new Command<ProjectConfig, TestFlags>({
      description: 'Shows help for test commands',
      name: 'help',
      run: async () => {
        console.info('Available test commands are: ava, jest');
      },
      type: CommandType.Project,
    }),
  ],
  description: 'Commands for running tests',
  name: 'test',
  run: async ({
    config,
    flags,
  }: {
    readonly config: ProjectConfig;
    readonly flags: TestFlags;
  }) => {
    if (typeof config.test === 'object' && !Array.isArray(config.test)) {
      switch (config.test.tool) {
        case TestTool.Ava:
          await runAvaTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
          break;
        case TestTool.Jest:
          await runJestTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
          break;
        case TestTool.Tape:
          await runTapeTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
          break;
        case TestTool.Vitest:
          await runVitestTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
          break;
        default:
          await runAvaTests({
            config: config.test,
            match: flags.match,
            watch: flags.watch,
          });
      }

      if (config.test.coverage || flags.coverage) {
        await runC8Coverage(config.test);
      }
    } else if (Array.isArray(config.test)) {
      for (const test of config.test) {
        switch (test.tool) {
          case TestTool.Ava:
            await runAvaTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
            break;
          case TestTool.Jest:
            await runJestTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
            break;
          case TestTool.Tape:
            await runTapeTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
            break;
          case TestTool.Vitest:
            await runVitestTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
            break;
          default:
            await runAvaTests({
              config: test,
              match: flags.match,
              watch: flags.watch,
            });
            break;
        }

        if (test.coverage || flags.coverage) {
          await runC8Coverage(test);
        }
      }
    }
  },
});
