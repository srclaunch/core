import { Action } from '../../../lib/class';

export class ListDirectoryContents extends Action<
  {
    readonly path: string;
  },
  {
    readonly files: readonly string[];
  }
> {
  public override readonly name = 'List directory contents';
  public override readonly description = 'List directory contents';
  public override readonly run = async () => {
    const { path } = this.input;
    const { readdir } = await import('fs-extra');

    const files = await readdir(path);

    return {
      files,
    };
  };
}
