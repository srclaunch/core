import { SrcLaunchConfig } from '@srclaunch/types';
import { loadConfig } from 'unconfig';

export const loadSrcLaunchConfig = async (): Promise<SrcLaunchConfig> => {
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
      {
        files: 'vite.config',
        async rewrite(
          cfg:
            | { srclaunch?: SrcLaunchConfig }
            | (() => Promise<
                Record<string, unknown> & { srclaunch?: SrcLaunchConfig }
              >),
        ) {
          const viteConfig = await (typeof cfg === 'function' ? cfg() : cfg);
          return viteConfig?.srclaunch;
        },
      },
    ],
  });

  return config;
};
