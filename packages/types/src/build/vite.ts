import { BuildFormat, BuildOptions, BuildTool } from '.';

export type ViteBuildFormat =
  | BuildFormat.CJS
  | BuildFormat.ESM
  | BuildFormat.IIFE
  | BuildFormat.UMD;

export type ViteBuildOptions = BuildOptions & {
  readonly assetsDir?: string;
  readonly basePath?: string;
  readonly format?: ViteBuildFormat;
  readonly formats?: readonly ViteBuildFormat[];
  readonly manifest?: boolean;
  readonly optimize?: {
    readonly exclude?: readonly string[];
    readonly include?: readonly string[];
  };
  readonly pwa?: boolean;
  readonly react?: boolean;
  readonly rootDir?: string;
  readonly ssr?: boolean;
  readonly styledComponents?: boolean;
  readonly tool: BuildTool.Vite;
};
