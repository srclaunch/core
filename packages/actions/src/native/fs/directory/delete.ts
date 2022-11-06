import { Action } from '../../../lib/class';

export class DeleteDirectory extends Action<{
  readonly path: string;
}> {
  public override readonly name = 'Create directory';
  public override readonly description = 'Create directory';
  public override readonly run = async () => {
    const { path } = this.input;
    const { remove } = await import('fs-extra');

    return await remove(path);
  };
}
