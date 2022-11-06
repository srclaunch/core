import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  ESBuildOptions,
} from '@srclaunch/types';
import { build as buildCommand, Format, Platform } from 'esbuild';
import * as fs from 'fs-extra';
import path from 'node:path';
import pc from 'picocolors';

import { BUILD_DIR } from '../../constants/build';
import { getFormatFileSubExtension } from './formats';

export async function build({
  bundle = true,
  clean = true,
  format,
  formats = [BuildFormat.ESM, BuildFormat.IIFE],
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
    const getEntryPoints = () => {
      return [
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
    };

    const getPlatform = (): Platform => {
      switch (platform) {
        case BuildPlatform.Browser:
          return 'browser';
        case BuildPlatform.Node:
          return 'node';
        case BuildPlatform.Universal:
          return 'neutral';
        default:
          return 'neutral';
      }
    };

    const buildFormat = async (formatType: BuildFormat) => {
      const buildOptions = {
        bundle: Boolean(bundle),
        entryNames: `[dir]/[name].${getFormatFileSubExtension(formatType)}`,
        entryPoints: getEntryPoints(),
        external:
          typeof bundle === 'object' ? (bundle.exclude as string[]) : [],
        format: formatType as Format,
        minify,
        outdir: splitting ? output?.directory ?? BUILD_DIR : undefined,
        outfile: splitting
          ? undefined
          : `${output?.directory ?? BUILD_DIR}/${
              output?.file ?? `index.${getFormatFileSubExtension(formatType)}`
            }`,
        platform: getPlatform(),
        sourcemap,
        splitting: format === BuildFormat.ESM && splitting,
        target,
        treeShaking,
      };

      const result = await buildCommand(buildOptions);

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
    };

    if (clean) {
      await fs.emptyDir(
        path.join(path.resolve(), output?.directory ?? BUILD_DIR),
      );
    }

    if (format) {
      await buildFormat(format);
    } else if (formats.length > 0) {
      for (const f of formats) {
        await buildFormat(f);
      }
    }
  } catch (error: any) {
    console.error(error);
  }
}
