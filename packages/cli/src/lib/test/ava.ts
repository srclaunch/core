import {
  chunksToLinesAsync,
  onExit,
  streamEnd,
  streamWrite,
} from '@rauschma/stringio';
import { TestConfig } from '@srclaunch/types';
import { exec, execSync, spawn } from 'node:child_process';

import { DEFAULT_TEST_OPTIONS } from './index';

function logOutput(output?: Buffer) {
  if (!output) {
    return;
  }

  if (output.length <= 1) {
    return;
  }

  console.log(output.toString());
}

function logError(output?: Buffer) {
  const outputStr = output?.toString();

  if (!output || !outputStr) {
    return;
  }

  if (outputStr.length <= 1) {
    return;
  }

  if (outputStr.includes('ExperimentalWarning')) {
    return;
  }

  if (outputStr.includes('node --trace-warnings')) {
    return;
  }

  console.error(outputStr);
}

export async function run({
  config,
  match,
  watch,
}: {
  readonly config: TestConfig;
  readonly match?: string;
  readonly watch?: boolean;
}): Promise<void> {
  try {
    const all = ['--all'];
    const color = ['--color'];
    const concurrencyArg = config?.concurrency
      ? ['--concurrency', config.concurrency.toString()]
      : [];
    const configArg = ['--config', 'node_modules/@srclaunch/dx/ava.config.mjs'];
    const failFast = config?.fail?.fast ? ['--fail-fast'] : [];
    const failWithNoTests =
      config?.fail?.noTests ?? DEFAULT_TEST_OPTIONS.fail.noTests
        ? []
        : ['--failWithoutAssertions'];
    const matchFlag = match ? [`--match='${match.toString()}'`] : [];
    // const tapReporter = ['--tap'];
    const verbose = config?.verbose ? ['--verbose'] : [];
    const watchFlag = watch ? ['--watch'] : [];

    const args = [
      ...all,
      ...color,
      ...concurrencyArg,
      ...configArg,
      ...failFast,
      ...failWithNoTests,
      ...matchFlag,
      ...verbose,
      ...watchFlag,
    ];

    const shellCommand = `ava ${args.join(' ')}`;

    const childProcess = spawn(shellCommand, {
      env: process.env,
      shell: true,
    });
    // console.log(childProcess);
    //  args, {
    // stdio: [process.stdin, process.stdout, process.stderr],
    // }
    // );

    // if (childProcess) {

    childProcess.stdout.on('data', data => {
      logOutput(data.toString());
    });

    // // // if (childProcess.stderr) {
    childProcess.stderr.on('data', data => {
      logError(data.toString());
    });
    // // // }

    // childProcess.on('exit', code => {
    //   if (code && code > 0) {
    //     process.exit(code);
    //   }
    // });

    // childProcess.on('error', err => {
    //   console.log('child process error:');
    //   console.error(err);
    // });

    // childProcess.on('close', code => {
    //   console.log('child process closed');
    // });

    await onExit(childProcess);

    // }
  } catch (error) {
    // logError(error);
    // console.log('Error caught while spawning ava process:');
    console.log('error:');
    console.error(error);
    throw error;
  }
}
