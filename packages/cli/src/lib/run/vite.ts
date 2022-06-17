import { Environments, ProjectConfig, WebAppOptions } from '@srclaunch/types';
import path from 'node:path';
import pc from 'picocolors';
import { createServer, InlineConfig, PluginOption, ViteDevServer } from 'vite';

import { SOURCE_DIR } from '../../constants/dev';
import { getVitePlugins } from '../vite';

export async function run({
  basePath = '/',
  assetsDir,
  environment,
  input,
  optimize,
  pwa,
  styledComponents,
  react,
}: WebAppOptions & {
  readonly environment: Environments;
  readonly project: ProjectConfig;
}) {
  try {
    switch (environment) {
      case Environments.Development:
        {
          const config: InlineConfig = {
            base: basePath,
            envPrefix: 'SRCLAUNCH_',
            optimizeDeps: {
              exclude: (optimize?.exclude ?? []) as string[],
              include: (optimize?.include ?? []) as string[],
            },
            plugins: getVitePlugins({
              pwa,
              react,
              styledComponents,
            }) as PluginOption[],
            publicDir: assetsDir,
            root: path.join(path.resolve(), input?.directory ?? SOURCE_DIR),
          };

          const server: ViteDevServer = await createServer(config);

          const devServer = await server.listen();

          devServer.printUrls();

          `${pc.green('✔')} ${pc.bold(environment)} environment started`;
        }

        break;
      default:
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(pc.red(error.name + ': ' + error.message));
    }
    process.exit(1);
  }
}
