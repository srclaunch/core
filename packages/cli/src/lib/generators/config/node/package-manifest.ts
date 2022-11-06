import { Dependencies, PackageConfig, PackageType } from '@srclaunch/types';

export async function generateNodePackageManifest({
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
}: {
  readonly author?: string;
  readonly dependencies?: Dependencies;
  readonly description?: string;
  readonly devDependencies?: Dependencies;
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
  readonly peerDependencies?: Dependencies;
  readonly publishConfig?: Record<string, string>;
  readonly scripts?: Record<string, string>;
  readonly type?: PackageType;
  readonly types?: string;
  readonly version?: string;
}): Promise<string> {
  if (!name) {
    throw new Error('Name is required');
  }

  let exportsProperty = {};
  for (const _export of exports ?? []) {
    exportsProperty = {
      ...exportsProperty,
      [_export.path]: {
        import: _export.import,
        require: _export.require,
      },
    };
  }

  return JSON.stringify(
    {
      author,
      dependencies,
      description,
      devDependencies,
      engines,
      exports: exportsProperty,
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
    },
    null,
    2,
  );
}
