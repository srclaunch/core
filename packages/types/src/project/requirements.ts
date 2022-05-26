import { Package } from '../package';

export type RequirementOptions = {
  readonly devPackages?: Package[];
  readonly node?: string;
  readonly npm?: string;
  readonly os?: string;
  readonly packages?: Package[];
  readonly peerPackages?: Package[];
  readonly srclaunch?: {
    readonly cli?: boolean;
    readonly dx?: boolean;
    readonly types?: boolean;
  };
  readonly yarn?: string;
};
