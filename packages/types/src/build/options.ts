import { Platform } from '../environment';
import { BundleOptions } from './bundle';
import { BuildFormat } from './format';
import { BuildTarget } from './target';
import { BuildTool } from './tool';

export type BuildOptions = {
  readonly bundle?: BundleOptions | boolean;
  readonly clean?: boolean;
  readonly configPath?: string;
  readonly format?: BuildFormat;
  readonly formats?: readonly BuildFormat[];
  readonly input?: {
    readonly directory: string;
    readonly file?: string;
    readonly files?: readonly string[];
  };
  readonly library?:
    | boolean
    | {
        readonly name?: string;
      };
  readonly manifest?: boolean;
  readonly minify?: boolean;
  readonly output?: {
    readonly directory: string;
    readonly file?: string;
    readonly path?: string;
  };
  readonly platform?: Platform;
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
