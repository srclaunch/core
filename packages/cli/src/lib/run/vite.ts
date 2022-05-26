import {
  Environment,
  Environments,
  EnvironmentType,
  Project,
} from '@srclaunch/types';
import pc from 'picocolors';
import path from 'path';
import { createServer, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

export async function run({
  // options,
  project,
  environment,
}: {

  project: Project;
  environment: Environments;
}) {
  try {
    // console.log('options', options);
    console.log('environment', environment);
    switch (environment) {
      case Environments.Development:
        const config = {
          build: {
            rollupOptions: {
              // external: options?.external ?? [],
            },
          },
          configFile: undefined,
          envPrefix: 'SRCLAUNCH_',
          optimizeDeps: {
            // exclude: options?.optimize?.exclude ?? [],
            // include: options?.optimize?.include ?? [],
          },
          root: path.join(path.resolve()),
          plugins: [react()],
        };

        const server = await createServer(config);

        await server.listen();

        server.printUrls();

        `${pc.green('✔')} started ${pc.bold(
          project.name,
        )} in the ${pc.bold(environment)} environment.`;
        break;
      default:
    }
  } catch (err: any) {
    console.error(pc.red(err.message));
    process.exit(1);
  }
}
