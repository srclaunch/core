import { Action } from '../../../lib/class';

export class ReadFile extends Action<
  {
    readonly path: string;
  },
  { readonly contents: string }
> {
  public override readonly name = 'Create file';
  public override readonly description = 'Create file';

  public override readonly run = async () => {
    const { path } = this.input;
    const { readFile } = await import('fs-extra');

    const contents = await readFile(path).toString();

    this.output = {
      contents,
    };

    return this.output;
  };
}
