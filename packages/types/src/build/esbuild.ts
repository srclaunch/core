import { BuildFormat, BuildOptions, BuildTool } from '.';

export type ESBuildFormat =
  | BuildFormat.CJS
  | BuildFormat.ESM
  | BuildFormat.IIFE;

export type ESBuildOptions = BuildOptions & {
  readonly format?: ESBuildFormat;
  readonly formats?: readonly ESBuildFormat[];
  readonly tool: BuildTool.ESBuild;
};
