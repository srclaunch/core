import { Action } from '../../../lib/class';

export class DeleteFile extends Action<
  {
    readonly path: string;
  },
  void
> {
  public override readonly name = 'Create file';
  public override readonly description = 'Create file';
  public override readonly run = async () => {
    const { path } = this.input;
    const { remove } = await import('fs-extra');

    return await remove(path);
  };
}
