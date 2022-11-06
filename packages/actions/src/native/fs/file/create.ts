import { Action } from '../../../lib/class';

export class CreateFile extends Action<{
  readonly content: string;
  readonly path: string;
}> {
  public override readonly name = 'Create file';
  public override readonly description = 'Create file';

  public override readonly run = async () => {
    const { path, content } = this.input;
    const { writeFile } = await import('fs-extra');

    return await writeFile(path, content);
  };
}
