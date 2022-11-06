import { GitHubAction } from '../../types';

export interface WriteFileOptions {
  readonly contents: string;
  readonly path: string;
}

export class WriteFile extends GitHubAction<WriteFileOptions> {
  public override readonly id = 'write-file';
  public override readonly description = 'Write file';

  public constructor(input: WriteFileOptions) {
    super(input);

    const { contents, path } = input;

    this.shell = {
      write: `echo '${contents}' > ${path}`,
    };
  }
}
