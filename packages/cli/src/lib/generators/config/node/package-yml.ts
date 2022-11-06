// import { transformObjectToYAML } from '@srclaunch/transform';
import { PackageConfig, PackageType } from '@srclaunch/types';

export type PackageYMLGeneratorOptions = {
  readonly author?: string;
  readonly dependencies?: Record<string, string>;
  readonly description?: string;
  readonly devDependencies?: Record<string, string>;
  readonly engines?: {
    readonly node?: string;
    readonly npm?: string;
    readonly yarn?: string;
  };
  readonly exports?: PackageConfig['exports'];
  readonly files?: readonly string[];
  readonly license?: string;
  readonly main?: string;
  readonly module?: string;
  readonly name: string;
  readonly peerDependencies?: Record<string, string>;
  readonly publishConfig?: Record<string, string>;
  readonly scripts?: Record<string, string>;
  readonly type?: PackageType;
  readonly types?: string;
  readonly version?: string;
};

export async function generatePackageJSON({
  author,
  dependencies,
  description,
  devDependencies,
  engines,
  exports,
  files,
  license,
  main,
  module,
  name,
  peerDependencies,
  publishConfig,
  scripts,
  type,
  types,
  version,
}: PackageYMLGeneratorOptions): Promise<Record<string, unknown>> {
  if (!name) {
    throw new Error('Name is required');
  }

  let exportsProperty = {};
  for (const _export of exports ?? []) {
    exportsProperty = {
      ...exports,
      [_export.path]: {
        import: _export.import,
        require: _export.require,
      },
    };
  }

  return {};
  // return transformObjectToYAML({
  //   author,
  //   dependencies,
  //   description,
  //   devDependencies,
  //   engines,
  //   exports: exportsProperty,
  //   files,
  //   license,
  //   main,
  //   module,
  //   name,
  //   peerDependencies,
  //   publishConfig,
  //   scripts,
  //   type,
  //   types,
  //   version,
  // });
}
