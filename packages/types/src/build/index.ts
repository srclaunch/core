export enum BuildFormat {
  CJS = 'cjs',
  ESM = 'esm',
  IIFE = 'iife',
  UMD = 'umd',
}

export interface BundleOptions {
  readonly css?: boolean;
  readonly define?: Record<string, string>;
  readonly exclude?: readonly string[];
  readonly globals?: Record<string, string>;
  readonly preserveModules?: boolean;
}

export enum BuildTarget {
  ES5 = 'es5',
  ES6 = 'es6',
  ES2015 = 'es2015',
  ES2016 = 'es2016',
  ES2017 = 'es2017',
  ES2018 = 'es2018',
  ES2019 = 'es2019',
  ES2020 = 'es2020',
  ES2021 = 'es2021',
  ES2022 = 'es2022',
  ESNext = 'esnext',
  Latest = 'latest',
  Modules = 'modules',
}

export enum BuildTool {
  ESBuild = 'esbuild',
  Vite = 'vite',
}

export type BuildOptions = {
  readonly bundle?: boolean | BundleOptions;
  readonly clean?: boolean;
  readonly configPath?: string;
  readonly format?: BuildFormat;
  readonly formats?: readonly BuildFormat[];
  readonly input?: {
    readonly directory: string;
    readonly file?: string;
    readonly files?: readonly string[];
  };
  readonly manifest?: boolean;
  readonly minify?: boolean;
  readonly output?: {
    readonly directory: string;
    readonly file?: string;
  };
  readonly react?: boolean;
  readonly sourcemap?: boolean;
  readonly splitting?: boolean;
  readonly ssr?: boolean;
  readonly target?: BuildTarget;
  readonly tool: BuildTool;
  readonly treeShaking?: boolean;
  readonly types?:
    | boolean
    | {
        readonly configPath?: string;
      };
};
