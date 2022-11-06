import { Action } from '../../../lib/class';

export class DirectoryExists extends Action<
  {
    readonly path: string;
  },
  {
    readonly exists?: boolean;
  }
> {
  public override readonly name = 'Create directory';
  public override readonly description = 'Create directory';
  public override readonly run = async () => {
    const { path } = this.input;
    const { ensureDir } = await import('fs-extra');

    try {
      await ensureDir(path);

      this.output = { exists: true };
      return this.output;
    } catch {
      this.output = { exists: false };
      return this.output;
    }
  };
}
