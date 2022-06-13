import { Action, Environment, EnvironmentType } from '@srclaunch/types';

export interface PNPMInstallInput {
  readonly environment?: Environment;
}

export class PNPMInstall extends Action<PNPMInstallInput> {
  public override readonly id = 'pnpm-install';
  public override readonly name: string = 'pnpm-install';
  public override readonly shell = {
    install: 'pnpm install',
  };

  public constructor({ environment }: PNPMInstallInput = {}) {
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
