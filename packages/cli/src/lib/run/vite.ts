import {
  BuildOptions,
  Environments,
  Project,
  RunOptions,
} from '@srclaunch/types';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import pc from 'picocolors';
import {
  BuildOptions as ViteBuildOptions,
  createServer,
  ViteDevServer,
} from 'vite';

import { SOURCE_DIR } from '../../constants/dev';

export function getViteRootDirectory(build: Project['build']) {
  if (build && !Array.isArray(build)) {
    return path.resolve((build as BuildOptions).input?.directory ?? SOURCE_DIR);
  } else if (Array.isArray(build) && build) {
    return path.resolve(build[0].input?.directory ?? SOURCE_DIR);
  }
}

export async function run({
  options,
  environment,
}: {
  readonly options?: RunOptions;
  readonly environment: Environments;
}) {
  try {
    switch (environment) {
      case Environments.Development:
        {
          const config = {
            envPrefix: 'SRCLAUNCH_',
            optimizeDeps: {
              exclude: (options?.bundle?.optimize?.exclude ?? []) as string[],
              include: (options?.bundle?.optimize?.include ?? []) as string[],
            },
            plugins: [react()],
            root: getViteRootDirectory(project.build),
          };

          const server: ViteDevServer = await createServer(config);

          await server.listen();

          server.printUrls();

          `${pc.green('✔')} started ${pc.bold(project.name)} in the ${pc.bold(
            environment,
          )} environment.`;
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
