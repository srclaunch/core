import { Package } from '../package';

export type RequirementOptions = {
  readonly devPackages?: readonly Package[];
  readonly node?: string;
  readonly npm?: string;
  readonly os?: string;
  readonly packages?: readonly Package[];
  readonly peerPackages?: readonly Package[];
  readonly srclaunch?: {
    readonly cli?: boolean;
    readonly dx?: boolean;
    readonly types?: boolean;
  };
  readonly yarn?: string;
};
