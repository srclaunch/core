import { TestOptions } from '@srclaunch/types';
import { Report } from 'c8';
import pc from 'picocolors';
import { emptyDir, ensureDir } from '@srclaunch/logic';
import path from 'path';
import { DEFAULT_TEST_OPTIONS } from './index';

export async function run(config: TestOptions): Promise<Report> {
  try {
    const coverageDir = path.join(
      process.cwd(),
      config.coverage?.directory ?? DEFAULT_TEST_OPTIONS.coverage.directory,
    );

    await ensureDir(coverageDir);
    await emptyDir(coverageDir);

    const report = new Report({
      all: true,
      reportsDirectory: coverageDir,
      src: [path.join(process.cwd(), 'src')],
      tempDirectory: coverageDir,
      reporter:
        config.coverage?.reporters ?? DEFAULT_TEST_OPTIONS.coverage.reporters,
    });

    await report.run();

    console.info(
      `${pc.green('✔')} generated coverage report in ${pc.bold(
        coverageDir,
      )}`,
    );

    return report;
  } catch (err) {
    console.warn('Error encountered while generating coverage reports');
    console.error(err);
    throw err;
  }
}
