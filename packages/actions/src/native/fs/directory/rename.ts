import { Action } from '@srclaunch/types';

export class RenameDirectory extends Action<{
  readonly path: string;
  readonly newPath: string;
}> {
  public override readonly name = 'Create directory';
  public override readonly description = 'Create directory';
  public override readonly run = async () => {
    const { path, newPath } = this.input;
    const { rename } = await import('fs-extra');

    return await rename(path, newPath);
  };
}
