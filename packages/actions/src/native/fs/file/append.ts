import { Action } from '../../../lib/class';

export class AppendToFile extends Action<{
  readonly content: string;
  readonly path: string;
}> {
  public override readonly name = 'Write to file';
  public override readonly description = 'Write to file';
  public override readonly run = async () => {
    const { path, content } = this.input;
    const { appendFile } = await import('fs-extra');

    return await appendFile(path, content);
  };
}
