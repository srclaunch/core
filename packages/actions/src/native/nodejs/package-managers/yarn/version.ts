import { Action } from '../../../../lib/class';

export interface SetYarnVersionOptions {
  readonly version: string;
}

export class SetYarnVersion extends Action<SetYarnVersionOptions> {
  public override readonly id = 'set-yarn-version';

  public constructor({ version }: SetYarnVersionOptions) {
    super({ version });

    this.name = `Use Yarn verson ${version ?? 'stable'}`;
    this.shell = {
      setVersion: `yarn set version ${version ?? 'stable'}`,
    };
  }
}
