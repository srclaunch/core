import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  ViteBuildOptions,
} from '@srclaunch/types';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import pc from 'picocolors';
import { build as buildCommand, LibraryFormats, LibraryOptions } from 'vite';

import { ASSETS_DIR } from '../../constants/assets';
import { BUILD_DIR } from '../../constants/build';
import { SOURCE_DIR, SOURCE_MAIN_FILE } from '../../constants/dev';
import { getViteFormatFileExtension } from './formats';

export type ViteBuildFormats = LibraryFormats;

export async function build({
  assets,
  bundle,
  clean = true,
  format = BuildFormat.ESM,
  formats,
  input,
  library = false,
  optimize,
  manifest = true,
  minify = true,
  output,
  platform = BuildPlatform.Browser,
  rootDir = path.join(path.resolve(), SOURCE_DIR),
  sourcemap = true,
  target = BuildTarget.ESNext,
  webApp,
}: ViteBuildOptions) {
  try {
    const viteFormats = (
      formats && formats.length > 0
        ? formats?.map(f => (f === BuildFormat.ESM ? 'es' : f))
        : [format === BuildFormat.ESM ? 'es' : format]
    ) as ViteBuildFormats[];

    const config = {
      build: {
        assetsDir: assets?.directory
          ? path.join(path.resolve(), assets?.directory)
          : ASSETS_DIR,
        emptyOutDir: clean,
        lib: library
          ? <LibraryOptions>{
              entry: path.join(
                path.resolve(),
                input?.directory ?? SOURCE_DIR,
                input?.file ?? SOURCE_MAIN_FILE,
              ),
              fileName: fmt =>
                `${output?.file ?? 'index'}${getViteFormatFileExtension(fmt)}`,
              formats: viteFormats,
              name:
                library && typeof library === 'object'
                  ? library?.name
                  : undefined,
            }
          : undefined,
        manifest,
        minify,
        outDir: path.join(path.resolve(), output?.directory ?? BUILD_DIR),
        rollupOptions: {
          external: (typeof bundle === 'object'
            ? bundle.exclude ?? []
            : []) as string[],
          output: {
            // entryFileNames:
            //   typeof bundle === 'object' && bundle.preserveModules
            //     ? '[name].mjs'
            //     : undefined,
            globals:
              typeof bundle === 'object' ? bundle.globals ?? {} : undefined,
            preserveModules:
              typeof bundle === 'object' && bundle.preserveModules
                ? true
                : false,
          },
        },
        sourcemap,
        ssrManifest: manifest && webApp?.ssr,
        target,
      },
      define: typeof bundle === 'object' ? bundle?.define : undefined,
      envPrefix: 'SRCLAUNCH_',
      optimizeDeps: {
        exclude: (optimize?.exclude ?? []) as string[],
        include: (optimize?.include ?? []) as string[],
      },
      plugins: webApp?.react ? [react()] : [],
      root: rootDir,
    };

    console.log(config);

    await buildCommand(config);

    // console.log('result', result);

    // if (Array.isArray(result) && result.length > 0 && result[0]) {
    //   for (const output of result) {
    //     if (Array.isArray(output) && output.length > 0) {
    //       for (const line of output) {
    //         if (line.output) {
    //           for (const line of output.output) {
    //             if (line.type === 'asset') {
    //               `Wrote asset ${line.fileName}...`;
    //             } else {
    //               console.log(
    //                 `Wrote chunk ${line.fileName}... ${
    //                   line.code.length / 1024
    //                 } kb`,
    //               );
    //             }
    //           }
    //         }
    //       }
    //     }
    //     //  else if (typeof output === 'object') {
    //     //   if (output.output) {
    //     //     for (const line of output.output) {
    //     //       console.log(line);
    //     //     }
    //     //   }
    //     // }
    //   }
    // }

    // if (result.errors) {
    //   result.errors.forEach(error => {
    //     console.error(error.text);
    //   });
    // }

    console.info(
      `${pc.green('✔')} bundled to ${
        formats && formats.length > 0
          ? `${pc.bold(formats.join(', ').toLocaleUpperCase())} formats`
          : `${pc.bold(format.toLocaleUpperCase())} format`
      }`,
    );
  } catch (error: any) {
    console.error(`Error occurred while building: ${error.name}`, error);
  }
}
