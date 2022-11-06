import { Action } from '../../../lib/class';

export class FileExists extends Action<
  { readonly path: string },
  { readonly exists: boolean }
> {
  public override readonly name = 'Create file';
  public override readonly description = 'Create file';

  public override readonly run = async () => {
    const { path } = this.input;
    const { access } = await import('fs-extra');

    try {
      await access(path);

      this.output = {
        exists: true,
      };
      return this.output;
    } catch {
      this.output = {
        exists: false,
      };
      return this.output;
    }
  };
}
