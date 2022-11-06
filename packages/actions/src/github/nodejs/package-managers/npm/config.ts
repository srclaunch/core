import { GitHubAction } from '../../../../types';
import { WriteFile } from '../../../fs/write-file';

export interface WriteNPMConfigOptions {
  readonly contents: string;
}
export class WriteNPMConfig extends GitHubAction<WriteNPMConfigOptions> {
  public override readonly id = 'write-npm-config';
  public override readonly description = 'Write NPM config file';

  public constructor({ contents }: WriteNPMConfigOptions) {
    super({ contents });

    this.action = new WriteFile({
      contents,
      path: '.npmrc',
    });
  }
}
