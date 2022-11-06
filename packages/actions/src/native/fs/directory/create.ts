import { Action } from '../../../lib/class';

export class CreateDirectory extends Action<{
  readonly path: string;
}> {
  public override readonly name = 'Create directory';
  public override readonly description = 'Create directory';
  public override readonly run = async () => {
    const { path } = this.input;
    const { mkdirs } = await import('fs-extra');

    return await mkdirs(path);
  };
}
