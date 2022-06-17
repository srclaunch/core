import { Action, Environment, PackageManager } from '@srclaunch/types';

import { NPMInstall } from './npm';
import { PNPMInstall } from './pnpm';
import { YarnInstall } from './yarn';

export interface InstallDependenciesOptions {
  readonly packageManager?: PackageManager;
  readonly environment?: Environment;
}

export class InstallDependencies extends Action<
  InstallDependenciesOptions | undefined
> {
  public override readonly action: NPMInstall | PNPMInstall | YarnInstall =
    new NPMInstall();

  public override readonly id = 'install-dependencies';

  public constructor({
    environment,
    packageManager,
  }: InstallDependenciesOptions | undefined = {}) {
    super({ environment, packageManager });

    switch (packageManager) {
      case PackageManager.NPM:
        this.action = new NPMInstall({ environment });
        return;
      case PackageManager.PNPM:
        this.action = new PNPMInstall({ environment });
        return;
      case PackageManager.Yarn:
        this.action = new YarnInstall({ environment });
        return;
    }
  }
}
