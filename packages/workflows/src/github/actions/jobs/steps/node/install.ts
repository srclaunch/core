import {
  Action,
  EnvironmentType,
  PackageManager,
  Task,
} from '@srclaunch/types';

import { PackageManagers } from '../../../packageManagers';

export function getNodeEnvEnvironmentVariable(
  environmentType?: EnvironmentType,
) {
  switch (environmentType) {
    case EnvironmentType.CI:
      return 'ci';
    case EnvironmentType.Development:
      return 'development';
    case EnvironmentType.Production:
      return 'production';
  }
}

export function getPackageManagerInstallCommand(
  environmentType?: EnvironmentType,
  packageManager: PackageManager = PackageManager.Yarn,
) {
  return PackageManagers[packageManager].commands.install({ environmentType });
}

export const installDependencies = ({
  environmentType = EnvironmentType.CI,
  packageManager = PackageManager.Yarn,
}: {
  readonly environmentType?: EnvironmentType;
  readonly packageManager?: PackageManager;
}): Task => ({
  environment: {
    NODE_ENV: getNodeEnvEnvironmentVariable(environmentType),
  },
  name: 'Install dependencies',
  steps: {
    install: new Action({
      shell: getPackageManagerInstallCommand(environmentType, packageManager),
    }),
  },
});
