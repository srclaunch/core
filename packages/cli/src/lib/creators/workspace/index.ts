import path from 'node:path';
import url from 'node:url';

import { Creator, CreatorArgs } from '../creator';

export class WorkspaceCreator extends Creator {
  public constructor(args?: CreatorArgs) {
    super(args);

    this.templates = path.join(
      path.dirname(url.fileURLToPath(import.meta.url)),
      'templates',
    );

    console.log(this.templates);
  }
}
