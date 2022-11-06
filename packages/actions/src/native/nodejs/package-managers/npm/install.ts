import { Environment, EnvironmentType } from '@srclaunch/types';

import { Action } from '../../../../lib/class';

export interface NPMInstallInput {
  readonly environment?: Environment;
}

export class NPMInstall extends Action<NPMInstallInput | undefined> {
  public override readonly id = 'npm-install';
  public override readonly name: string = 'npm-install';
  public override readonly shell = {
    install: 'npm install',
  };

  public constructor({ environment }: NPMInstallInput | undefined = {}) {
    super({ environment });

    this.name = `Installing ${this.getEnvironmentTypeName(
      environment?.type,
    )} dependencies`;
  }

  protected getEnvironmentTypeName(type: Environment['type']) {
    switch (type) {
      case EnvironmentType.CI:
        return 'CI';
      case EnvironmentType.Development:
        return 'development';
      case EnvironmentType.Production:
        return 'production';
      default:
        return 'production';
    }
  }
}
