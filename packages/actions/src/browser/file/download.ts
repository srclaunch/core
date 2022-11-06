import fileDownload from 'js-file-download';

import { Action } from '../../lib/class';

export class DownloadFile extends Action<{
  readonly contents: string;
  readonly name: string;
}> {
  public override readonly name = 'Download file';
  public override readonly description = 'Download file';
  public override readonly run = async () => {
    const { contents, name } = this.input;
    return await fileDownload(contents, name);
  };
}
