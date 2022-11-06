import path from 'node:path';
import { createServer, InlineConfig, PluginOption } from 'vite';

import { getVitePlugins } from './runner';

// import { getVitePlugins } from '../vite';

let externalDeps: readonly string[] = [];

const react = process.env.REACT ? true : false;
const styledComponents = process.env.STYLED_COMPONENTS ? true : false;
const pwa = process.env.PWA ? true : false;
const basePath = process.env.BASE_PATH;
const exclude = process.env.EXCLUDE?.split(',') ?? [];
const include = process.env.INCLUDE?.split(',') ?? [];
const port = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000;
const publicDir = process.env.PUBLIC_DIR ?? 'public';
const inputDirectory = process.env.INPUT_DIRECTORY ?? 'src';

if (react) {
  externalDeps = ['react', 'react-dom'];
}

if (styledComponents) {
  externalDeps = [...externalDeps, 'styled-components'];
}

const config: InlineConfig = {
  base: basePath,
  // define: {
  //   // eslint-disable-next-line @typescript-eslint/naming-convention
  //   __CWD_RELATIVE__: process.cwd(),
  // },
  envPrefix: 'SRCLAUNCH_',
  optimizeDeps: {
    // eslint-disable-next-line functional/prefer-readonly-type
    exclude: (exclude ?? []) as string[],
    // eslint-disable-next-line functional/prefer-readonly-type
    include: (include ?? []) as string[],
  },
  plugins: getVitePlugins({
    pwa,
    react,
    styledComponents,
    // eslint-disable-next-line functional/prefer-readonly-type
  }) as PluginOption[],
  publicDir,
  root: path.join(path.resolve(), inputDirectory),
  // server: {
  //   watch: true,
  // },
  worker: {
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // eslint-disable-next-line functional/prefer-readonly-type
      external: externalDeps.filter(Boolean) as string[],
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

const server = await createServer(config);

const listener = await server.listen(port);

process.on('SIGINT', async () => {
  await server.close();
  await listener.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await server.close();
  await listener.close();
  process.exit(0);
});

//             this.server.printUrls();
// export class ViteServer {
//   private readonly port?: number;
//   // eslint-disable-next-line functional/prefer-readonly-type
//   private server: ViteDevServer | undefined = undefined;
//   private readonly config: InlineConfig;
//   private readonly environment?: EnvironmentType;
//   private listener: ViteDevServer | undefined;
//   // eslint-disable-next-line functional/prefer-readonly-type
//   private logs: string[] = [];

//   public constructor({

//   }: WebApplicationRunnerOptions) {

//     this.port = port ?? 3000;
//     this.environment = environment;
//     this.config = {

//     };

//     console.log('this.config', this.config);

//     this.init();
//   }

//   public async restart() {
//     if (this.server) {
//       await this.server.restart();
//     }
//   }

//   public async start() {
//     try {
//       console.log(
//         pc.green(`Starting development server on port ${this.port}...`),
//       );

//       this.server = await createServer(this.config);

//       switch (this.environment) {
//         case EnvironmentType.Development:
//           if (this.server) {
//
//             // `${pc.green('✔')} ${pc.bold(environment)} environment started`;

//             console.log(pc.green(`Server listening on port ${this.port}`));
//           }

//           break;
//         default:
//       }
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.error(pc.red(error.name + ': ' + error.message));
//       }

//       process.exit(1);
//     }
//   }

//   private async init() {}

//   public async stop() {
//     if (this.server) {
//       await this.server.close();
//     }
//   }
// }
