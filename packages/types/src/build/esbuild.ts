import { BuildFormat, BuildOptions, BuildTool } from '.';

export enum BuildPlatform {
  Browser = 'browser',
  Node = 'node',
  Universal = 'universal',
}
export type ESBuildFormat =
  | BuildFormat.CJS
  | BuildFormat.ESM
  | BuildFormat.IIFE;

export type ESBuildOptions = BuildOptions & {
  readonly format?: ESBuildFormat;
  readonly formats?: readonly ESBuildFormat[];
  readonly platform?: BuildPlatform;
  readonly tool: BuildTool.ESBuild;
};
