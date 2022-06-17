import {
  BuildOptions,
  BuildTool,
  DeploymentOptions,
  DeploymentPlatform,
  ESBuildOptions,
  ProjectConfig,
  ProjectType,
  ReleaseOptions,
  ViteBuildOptions,
} from '@srclaunch/types';
import * as fs from 'fs-extra';
import { AnyFlag, AnyFlags, TypedFlags } from 'meow';

import { build as esbuild } from '../lib/build/esbuild';
import { build as buildTypes } from '../lib/build/types';
import { build as vite } from '../lib/build/vite';
import { Command, CommandType } from '../lib/command';
import { deployToGitHubPages } from '../lib/deploy/github-pages';

type DeployFlags = TypedFlags<AnyFlags>;

export default new Command<ProjectConfig, DeployFlags>({
  description: 'Commands for deploying applications and services',
  name: 'deploy',
  run: async ({
    config,
    flags,
  }: {
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
