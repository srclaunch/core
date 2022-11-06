import {
  BuildOptions,
  BuildTool,
  ESBuildOptions,
  ProjectConfig,
  ViteBuildOptions,
} from '@srclaunch/types';
import * as fs from 'fs-extra';
import { TypedFlags } from 'meow';

import { build as esbuild } from '../lib/build/esbuild';
import { build as buildTypes } from '../lib/build/types';
import { build as vite } from '../lib/build/vite';
import { Command, CommandType } from '../lib/command';

type BuildFlags = TypedFlags<{
  readonly clean: {
    readonly alias: 'c';
    readonly default: true;
    readonly description: 'Clean build directory before building';
    readonly type: 'boolean';
  };
  readonly types: {
    readonly alias: 't';
    readonly default: true;
    readonly description: 'Build types definitions';
    readonly type: 'boolean';
  };
}>;

export default new Command<ProjectConfig, BuildFlags>({
  commands: [
    new Command<ProjectConfig, BuildFlags>({
      description: 'Compiles and optionally bundles a package using esbuild',
      name: 'esbuild',
      run: async ({
        config,
      }: {
        readonly config: ProjectConfig;
        readonly flags: BuildFlags;
      }) => {
        const options = config.build as BuildOptions | BuildOptions[];

        if (!options) {
          throw new Error('Missing build configuration');
        }

        if (typeof options === 'object' && !Array.isArray(options)) {
          await esbuild(options as ESBuildOptions);
        } else if (Array.isArray(options) && options) {
          for (const build of options) {
            await esbuild({
              ...build,
            } as ESBuildOptions);
          }
        }
      },
    }),
    new Command<ProjectConfig, BuildFlags>({
      description: 'Compiles and bundles a package using Vite',
      name: 'vite',
      run: async ({ config }) => {
        const BuildOptions = config.build;

        if (!BuildOptions) {
          throw new Error('Missing build configuration');
        }

        if (typeof BuildOptions === 'object' && !Array.isArray(BuildOptions)) {
          const options = BuildOptions as ViteBuildOptions;
          await vite({
            ...options,
            library: options.library
              ? typeof options.library === 'boolean'
                ? { name: config.name }
                : { name: config.name, ...options.library }
              : false,
          } as ViteBuildOptions);
        } else if (Array.isArray(BuildOptions)) {
          const options = BuildOptions as ViteBuildOptions[];

          for (const build of options) {
            await vite({
              ...build,
              library: build.library
                ? typeof build.library === 'boolean'
                  ? { name: config.name }
                  : { name: config.name, ...build.library }
                : false,
            } as ViteBuildOptions);
          }
        }
      },
      type: CommandType.Project,
    }),
    new Command({
      description: 'Builds Typescript definitions',
      name: 'types',
      run: async ({ config, flags }) => {
        const BuildOptions = config.build as BuildOptions | BuildOptions[];

        if (typeof BuildOptions === 'object' && !Array.isArray(BuildOptions)) {
          const options = BuildOptions as BuildOptions;
          if (options.clean) {
            await fs.emptyDir(options.output?.directory ?? 'dist');
          }
          await buildTypes({
            ...options,
          });
        } else if (Array.isArray(BuildOptions)) {
          const options = BuildOptions as BuildOptions[];
          for (const build of options) {
            if (build.clean) {
              await fs.emptyDir(build.output?.directory ?? 'dist');
            }

            if (build.types) {
              await buildTypes({
                ...build,
              });
            }
          }
        }
      },
    }),
    new Command({
      description: 'Shows help for build commands',
      name: 'help',
      run: async () => {
        console.info(
          'Available build commands are: lib, web-app, web-service, types, and help',
        );
      },
      type: CommandType.Project,
    }),
  ],
  description: 'Commands for building various types of projects',
  name: 'build',
  run: async ({
    config,
    flags,
  }: {
    readonly config: ProjectConfig;
    readonly flags: BuildFlags;
  }) => {
    const BuildOptions = config.build as BuildOptions | BuildOptions[];

    if (!BuildOptions) {
      throw new Error('Missing build configuration');
    }

    if (typeof BuildOptions === 'object' && !Array.isArray(BuildOptions)) {
      const options = BuildOptions as BuildOptions;
      switch (options.tool) {
        case BuildTool.Vite:
          await vite({
            ...options,
            clean: options.clean ?? flags.clean,
            library: options.library
              ? typeof options.library === 'boolean'
                ? { name: config.name }
                : { name: config.name, ...options.library }
              : false,
          } as ViteBuildOptions);
          break;
        default: {
          await esbuild({
            ...options,
            clean: options.clean ?? flags.clean,
          } as ESBuildOptions);
        }
      }

      if (options.types ?? flags.types) {
        await buildTypes({
          ...options,
        });
      }
    } else if (Array.isArray(BuildOptions)) {
      const options = BuildOptions as BuildOptions[];
      for (const build of options) {
        switch (build.tool) {
          case BuildTool.Vite:
            await vite({
              ...build,
              library: build.library
                ? typeof build.library === 'boolean'
                  ? { name: config.name }
                  : { name: config.name, ...build.library }
                : false,
            } as ViteBuildOptions);
            break;
          default:
            await esbuild(build as ESBuildOptions);
        }

        if (build.types) {
          await buildTypes({
            ...build,
          });
        }
      }
    }
  },
});
