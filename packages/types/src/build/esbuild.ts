import { BuildFormat, BuildOptions, BuildTool } from '.';

export type ESBuildFormat =
  | BuildFormat.CJS
  | BuildFormat.ESM
  | BuildFormat.IIFE;

export type ESBuildOptions = Omit<BuildOptions, 'tool'> & {
  readonly format?: ESBuildFormat;
  readonly formats?: readonly ESBuildFormat[];
};
