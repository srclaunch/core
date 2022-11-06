import { TestConfig } from '@srclaunch/types';
import { Report } from 'c8';
import { emptyDir, ensureDir } from 'fs-extra';
import path from 'node:path';
import pc from 'picocolors';

import { DEFAULT_TEST_OPTIONS } from './index';

export async function run(config: TestConfig): Promise<Report> {
  try {
    const coverageDir = path.join(
      process.cwd(),
      config.coverage?.directory ?? DEFAULT_TEST_OPTIONS.coverage.directory,
    );

    await ensureDir(coverageDir);
    await emptyDir(coverageDir);

    const report = new Report({
      all: true,
      reporter: (config.coverage?.reporters ??
        DEFAULT_TEST_OPTIONS.coverage.reporters) as string[],
      reportsDirectory: coverageDir,
      src: [path.join(process.cwd(), 'src')],
      tempDirectory: coverageDir,
    });

    await report.run();

    console.log(
      `${pc.green('✔')} generated coverage report in ${pc.bold(coverageDir)}`,
    );

    return report;
  } catch (error) {
    console.warn('Error encountered while generating coverage reports');
    console.error(error);
    throw error;
  }
}
