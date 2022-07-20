import { EnvironmentType, WebApplicationOptions } from '@srclaunch/types';
import path from 'node:path';
import pc from 'picocolors';
import { createServer, InlineConfig, PluginOption, ViteDevServer } from 'vite';

import { SOURCE_DIR } from '../../constants/dev';
import { getVitePlugins } from '../vite';

export async function runWebApplication({
  basePath = '/',
  assetsDir,
  environment,
  input,
  optimize,
  pwa,
  styledComponents,
  react,
}: WebApplicationOptions & {
  readonly environment: EnvironmentType;
}) {
  try {
    switch (environment) {
      case EnvironmentType.Development:
        {
          const externalDeps = [
            react ? 'react' : null,
            styledComponents ? 'styled-components' : null,
          ].filter(Boolean) as string[];

          const config: InlineConfig = {
            base: basePath,
            // define: {
            //   // eslint-disable-next-line @typescript-eslint/naming-convention
            //   __CWD_RELATIVE__: process.cwd(),
            // },
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
            worker: {
              rollupOptions: {
                // make sure to externalize deps that shouldn't be bundled
                // into your library
                external: externalDeps,
                output: {
                  // Provide global variables to use in the UMD build
                  // for externalized deps
                  globals: react
                    ? {
                        react: 'React',
                      }
                    : {},
                },
              },
            },
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
