import { TestConfig } from '@srclaunch/types';
// import path from 'node:path';
import { createVitest, startVitest } from 'vitest/node';

// import { DEFAULT_TEST_OPTIONS } from './index';

export async function run({
  config,
  match,
  watch,
}: {
  readonly config: TestConfig;
  readonly match?: string;
  readonly watch?: boolean;
}) {
  try {
    // const colors = ['--colors'];
    // const concurrencyArg = config?.concurrency
    //   ? ['--maxConcurrency', config.concurrency?.toString() ?? '5']
    //   : [];
    // const coverageProvider = ['--coverageProvider', 'v8'];
    // const failFast = config?.fail?.fast ? ['--bail'] : [];
    // const failWithNoTests =
    //   config?.fail?.noTests ?? DEFAULT_TEST_OPTIONS.fail.noTests
    //     ? []
    //     : ['--passWithNoTests'];
    // const matchFlag = match ? [`--t ${match.toString()}`] : [];
    // // const tapReporter = ['--tap'];
    // const preset = ['--preset', 'ts-jest'];
    // const rootDir = ['--rootDir', path.resolve(process.cwd())];
    // const verbose = config?.verbose ? ['--verbose'] : [];
    // const watchFlag = watch ? ['--watch'] : [];

    // const args = [
    //   ...colors,
    //   ...concurrencyArg,
    //   ...coverageProvider,
    //   ...failWithNoTests,
    //   ...failFast,
    //   ...matchFlag,
    //   ...preset,
    //   ...rootDir,
    //   ...verbose,
    //   ...watchFlag,
    // ];
    // await jest.run(args, path.resolve());
    // const api = new Vitest();

    // api.start();

    const result = await createVitest({});
    console.log('resut', result);
  } catch (error) {
    console.error(error);
  }
}
