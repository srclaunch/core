import { DeploymentOptions } from '../deployment';
import { License } from '../legal/license';

export enum PublishAccess {
  Public = 'public',
  Restricted = 'restricted',
}

export type PublishOptions = {
  readonly access?: PublishAccess;
  readonly license?: License;
  readonly registry?: string;
};

export type ReleaseConfig = {
  readonly deployment?: DeploymentOptions | readonly DeploymentOptions[];
  readonly dryRun?: boolean;
  readonly force?: boolean;
  readonly local?: boolean;
  readonly name?: string;
  readonly publish?: PublishOptions;
  readonly version?: string;
};
