/* eslint-disable sort-keys */
import { WriteNPMConfig } from '../../../../github';
import { Action } from '../../../../lib/class';

export interface PNPMPublishOptions {
  readonly token?: string;
}

export class PNPMPublish extends Action<PNPMPublishOptions> {
  public override readonly id = 'pnpm-publish';
  public override readonly name: string = 'Publish package';
  public override readonly shell = {
    install: 'pnpm publish',
  };

  public constructor({ token }: PNPMPublishOptions = {}) {
    super({ token });

    this.steps = {
      writeConfig: new WriteNPMConfig({
        contents: `//npm.pkg.github.com/:_authToken='${token}'`,
      }),
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      publish: new Action({
        needs: ['writeConfig'],
        shell: 'pnpm publish',
      }),
    };
  }
}
