import { BuildFormat, BuildTarget, ViteBuildOptions } from '@srclaunch/types';
import path from 'node:path';
import pc from 'picocolors';
import {
  build as buildCommand,
  BuildOptions,
  LibraryFormats,
  LibraryOptions,
  PluginOption,
} from 'vite';

import { ASSETS_DIR } from '../../constants/assets';
import { BUILD_DIR } from '../../constants/build';
import { SOURCE_DIR, SOURCE_MAIN_FILE } from '../../constants/dev';
import { getVitePlugins } from '../runners/web-application/runner';
// import { getVitePlugins } from '../vite';
import { getViteFormatFileExtension } from './formats';

export async function build({
  assetsDir,
  bundle = true,
  clean = true,
  format = BuildFormat.ESM,
  formats,
  input,
  library = false,
  manifest = true,
  minify = true,
  optimize,
  output,
  pwa,
  react,
  rootDir,
  sourcemap = true,
  ssr,
  styledComponents,
  target = BuildTarget.ESNext,
}: ViteBuildOptions) {
  try {
    const viteFormats = (
      formats && formats.length > 0
        ? formats?.map(f => (f === BuildFormat.ESM ? 'es' : f))
        : [format === BuildFormat.ESM ? 'es' : format]
    ) as LibraryFormats[];

    const getLibraryOptions = (): LibraryOptions => {
      return {
        entry: path.join(
          path.resolve(),
          input?.directory ?? SOURCE_DIR,
          input?.file ?? SOURCE_MAIN_FILE,
        ),
        fileName: fmt =>
          `${output?.file ?? 'index'}${getViteFormatFileExtension(fmt)}`,
        formats: viteFormats,
        name:
          library && typeof library === 'object' ? library?.name : undefined,
      };
    };

    const getRollupOptions = (): BuildOptions['rollupOptions'] => {
      let options: BuildOptions['rollupOptions'] = {
        external: [],
      };

      if (
        typeof bundle === 'object' &&
        bundle.exclude &&
        bundle.exclude.length > 0
      ) {
        options = {
          ...options,
          external: (bundle.exclude ?? []) as string[],
        };
      }

      if (styledComponents) {
        options = {
          ...options,
          external: [...(options.external as string[]), 'styled-components'],
        };
      }

      if (typeof bundle === 'object' && bundle.preserveModules) {
        options = {
          ...options,
          output: {
            entryFileNames: '[name].[format].js',
          },
        };
      }

      if (typeof bundle === 'object' && bundle.globals) {
        options = {
          ...options,
          output: {
            ...options.output,
            globals: bundle.globals,
          },
        };
      }

      return Object.entries(options).length > 0
        ? options
        : {
            output: undefined,
          };
    };

    await buildCommand({
      base: output?.path,
      build: {
        // assetsDir,
        emptyOutDir: clean,
        lib: library ? getLibraryOptions() : undefined,
        manifest,
        minify,
        outDir: path.join(path.resolve(), output?.directory ?? BUILD_DIR),
        rollupOptions: getRollupOptions(),
        sourcemap,
        ssrManifest: manifest && ssr,
        target,
      },
      define: typeof bundle === 'object' ? bundle?.define : undefined,
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
      root:
        rootDir ?? path.join(path.resolve(), input?.directory ?? SOURCE_DIR),
    });

    // if (Array.isArray(buildOutput)) {
    //   for (const result of buildOutput) {
    //     for (const o of result.output) {
    //       console.log(o);
    //     }
    //   }
    // }

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

    console.log(
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
