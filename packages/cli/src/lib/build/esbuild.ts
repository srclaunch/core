import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  ESBuildOptions,
} from '@srclaunch/types';
import { build as buildCommand, Format } from 'esbuild';
import * as fs from 'fs-extra';
import path from 'node:path';
import pc from 'picocolors';

import { BUILD_DIR } from '../../constants/build';
import { getFormatFileExtension } from './formats';

export async function build({
  bundle = true,
  clean = true,
  format = BuildFormat.ESM,
  input,
  minify = true,
  output,
  platform = BuildPlatform.Universal,
  sourcemap = true,
  splitting = true,
  target = BuildTarget.ESNext,
  treeShaking = true,
}: ESBuildOptions) {
  try {
    const entryPoints = [
      path.join(
        path.resolve(),
        input?.directory ?? 'src',
        input?.file ?? 'index.ts',
      ),
      ...(input?.files
        ? input.files.map(f =>
            path.join(path.resolve(), input?.directory ?? 'src', f),
          )
        : []),
    ];

    if (clean) {
      await fs.emptyDir(BUILD_DIR);
    }

    const result = await buildCommand({
      bundle: Boolean(bundle),
      entryPoints,
      external: typeof bundle === 'object' ? (bundle.exclude as string[]) : [],
      format: format as Format,
      minify,
      outdir: splitting ? output?.directory ?? BUILD_DIR : undefined,
      outfile: splitting
        ? undefined
        : `${output?.directory ?? BUILD_DIR}/${
            output?.file ?? 'index'
          }${getFormatFileExtension(format)}`,
      platform:
        platform === BuildPlatform.Universal
          ? 'neutral'
          : platform === BuildPlatform.Browser
          ? 'browser'
          : platform === BuildPlatform.Node
          ? 'node'
          : undefined,
      sourcemap,
      splitting: format === BuildFormat.ESM && splitting,
      target,
      treeShaking,
    });

    if (result.warnings) {
      for (const warning of result.warnings) {
        console.warn(warning.text);
      }
    }

    if (result.errors) {
      for (const error of result.errors) {
        console.error(error.text);
      }
    }

    console.info(
      `${pc.green('✔')} bundled to ${pc.bold(
        format.toLocaleUpperCase(),
      )} format`,
    );
  } catch (error: any) {
    console.error(error);
  }
}
