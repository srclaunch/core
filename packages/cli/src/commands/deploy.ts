import {
  DeploymentOptions,
  DeploymentPlatform,
  ProjectConfig,
} from '@srclaunch/types';
import { TypedFlags } from 'meow';

import { Command } from '../lib/command';
import { deployToGitHubPages } from '../lib/deploy/github-pages';
import { InteractiveModeFlag } from '../lib/flags';

type DeployFlags = TypedFlags<{
  readonly ci: {
    readonly alias: 'c';
    readonly default: true;
    readonly description: 'Bypasses the CI checks';
    readonly isRequired: false;
    readonly type: 'boolean';
  };
  readonly debug: {
    readonly alias: 'd';
    readonly default: false;
    readonly description: 'Runs a dry run of the release process';
    readonly isRequired: false;
    readonly type: 'boolean';
  };
  readonly dryRun: {
    readonly alias: 'dry-run';
    readonly default: false;
    readonly description: 'Runs a dry run of the release process';
    readonly isRequired: false;
    readonly type: 'boolean';
  };
  readonly push: {
    readonly alias: 'p';
    readonly default: false;
    readonly description: 'Pushes changes to remote repository';
    readonly isRequired: false;
    readonly type: 'boolean';
  };
}>;
export default new Command<ProjectConfig, DeployFlags>({
  description: 'Commands for deploying applications and services',
  name: 'deploy',
  run: async ({
    config,
  }: // flags,
  {
    readonly config: ProjectConfig;
    readonly flags: DeployFlags;
  }) => {
    const deploymentConfig = config.release?.deployment as
      | DeploymentOptions
      | DeploymentOptions[];

    if (!deploymentConfig) {
      throw new Error('Missing deployment configuration');
    }

    if (
      typeof deploymentConfig === 'object' &&
      !Array.isArray(deploymentConfig)
    ) {
      const { platform, input, output } = deploymentConfig;

      switch (platform) {
        case DeploymentPlatform.GitHubPages:
          await deployToGitHubPages({
            input,
            output,
          });
          break;
      }
    } else if (Array.isArray(deploymentConfig)) {
      const options = deploymentConfig as DeploymentOptions[];
      for (const deployment of options) {
        const { platform, input, output } = deployment;

        switch (platform) {
          case DeploymentPlatform.GitHubPages:
            await deployToGitHubPages({
              input,
              output,
            });
            break;
        }
      }
    }
  },
});
