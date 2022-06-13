import { transformObjectToYAML } from '@srclaunch/transform';
import { PackageOptions, PackageType } from '@srclaunch/types';

export type PackageYMLGeneratorOptions = {
  readonly author?: string;
  readonly description?: string;
  readonly dependencies?: Record<string, string>;
  readonly devDependencies?: Record<string, string>;
  readonly engines?: {
    readonly node?: string;
    readonly npm?: string;
    readonly yarn?: string;
  };
  readonly exports?: PackageOptions['exports'];
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
}: PackageYMLGeneratorOptions): Promise<string> {
  if (!name) {
    throw new Error('Name is required');
  }

  let exportsProp = {};
  for (const _export of exports ?? []) {
    exportsProp = {
      ...exports,
      [_export.path]: {
        import: _export.import,
        require: _export.require,
      },
    };
  }

  return transformObjectToYAML({
    author,
    dependencies,
    description,
    devDependencies,
    engines,
    exports: exportsProp,
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
  });
}
