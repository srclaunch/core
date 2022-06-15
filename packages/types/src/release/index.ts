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

export type ReleaseOptions = {
  readonly deployment?: DeploymentOptions;
  readonly publish?: PublishOptions;
};
