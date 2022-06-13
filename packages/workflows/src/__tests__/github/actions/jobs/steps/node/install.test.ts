import { EnvironmentType, PackageManager } from '@srclaunch/types';
import test from 'ava';

import { installDependencies } from '../../../../../../github/actions/jobs/steps/node/install';

test('installDependencies()', t => {
  t.deepEqual(installDependencies({ environmentType: EnvironmentType.CI }), {
    env: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      NODE_ENV: 'ci',
    },
    name: 'Install dependencies',
    run: 'yarn install --frozen-lockfile',
  });

  t.deepEqual(
    installDependencies({
      environmentType: EnvironmentType.CI,
      packageManager: PackageManager.NPM,
    }),
    {
      env: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        NODE_ENV: 'ci',
      },
      name: 'Install dependencies',
      run: 'npm ci',
    },
  );

  t.pass();
});
