import { EnvironmentType, PackageManager } from '@srclaunch/types';

export const PackageManagers = {
  [PackageManager.NPM]: {
    commands: {
      install: ({
        environmentType = EnvironmentType.CI,
      }: {
        readonly environmentType?: EnvironmentType;
      }) => `npm ${environmentType === EnvironmentType.CI ? 'ci' : 'install'}`,
      publish: () => 'npm publish',
      run: (script?: string) => `npm run ${script}`,
      test: ({
        args = '',
        coverage = true,
      }: {
        readonly args?: string;
        readonly coverage?: boolean;
      }) => `npm test${coverage ? ':coverage' : ''} ${args}`,
    },
    name: 'NPM',
  },
  [PackageManager.PNPM]: {
    commands: {
      install: ({
        environmentType = EnvironmentType.CI,
      }: {
        readonly environmentType?: EnvironmentType;
      }) =>
        `pnpm ${
          environmentType === EnvironmentType.CI
            ? 'install --frozen-lockfile'
            : 'install'
        }`,
      publish: () => 'pnpm publish',
      run: (script?: string) => `pnpm ${script}`,
      test: ({
        args = '',
        coverage = true,
      }: {
        readonly args?: string;
        readonly coverage?: boolean;
      }) => `pnpm test${coverage ? ':coverage' : ''} ${args}`,
    },
    name: 'PNPM',
  },
  [PackageManager.Yarn]: {
    commands: {
      install: ({
        environmentType = EnvironmentType.CI,
      }: {
        readonly environmentType?: EnvironmentType;
      }) =>
        `yarn ${
          environmentType === EnvironmentType.CI
            ? 'install --frozen-lockfile'
            : 'install'
        }`,
      publish: () => 'yarn npm publish',
      run: (script?: string) => `yarn ${script}`,
      test: ({
        args = '',
        coverage = true,
      }: {
        readonly args?: string;
        readonly coverage?: boolean;
      }) => `yarn test${coverage ? ':coverage' : ''} ${args}`,
    },
    name: 'Yarn',
  },
};
