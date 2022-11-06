import { Action } from '../../../lib/class';

export class RenameDirectory extends Action<{
  readonly newPath: string;
  readonly path: string;
}> {
  public override readonly name = 'Create directory';
  public override readonly description = 'Create directory';
  public override readonly run = async () => {
    const { path, newPath } = this.input;
    const { rename } = await import('fs-extra');

    return await rename(path, newPath);
  };
}
