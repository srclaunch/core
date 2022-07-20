import {
  ProjectConfig,
  ProjectType,
  SrcLaunchConfig,
  WorkspaceConfig,
} from '@srclaunch/types';
import { loadConfig } from 'unconfig';

export async function getConfig(): Promise<SrcLaunchConfig> {
  const { config } = await loadConfig<SrcLaunchConfig>({
    // if false, the only the first matched will be loaded
    // if true, all matched will be loaded and deep merged
    cwd: process.cwd(),
    merge: false,
    sources: [
      {
        // default extensions
        extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
        files: ['.srclaunchrc', 'srclaunch.config'],
      },

      {
        extensions: [],
        files: 'package.json',
        rewrite(cfg: { srclaunch?: SrcLaunchConfig }) {
          return cfg?.srclaunch;
        },
      },
    ],
  });

  const isProject = (config as ProjectConfig)?.type in ProjectType;

  if (!isProject) {
    return config as WorkspaceConfig;
  }

  return config as ProjectConfig;
}
