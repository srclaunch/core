import { Environment, EnvironmentType } from '@srclaunch/types';

import { Action } from '../../../../lib/class';

export interface YarnInstallInput {
  readonly environment?: Environment;
}

export class YarnInstall extends Action<YarnInstallInput> {
  public override readonly id = 'yarn-install';
  public override readonly shell = {
    install: `yarn install`,
  };
  public constructor({ environment }: YarnInstallInput | undefined = {}) {
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
