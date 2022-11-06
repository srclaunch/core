import { Action } from '../../../lib/class';

export class EmptyDirectory extends Action<{
  readonly path: string;
}> {
  public override readonly name = 'Empty directory';
  public override readonly description = 'Empty contents of directory';
  public override readonly run = async () => {
    const { path } = this.input;
    const { emptyDir } = await import('fs-extra');

    return await emptyDir(path);
  };
}
