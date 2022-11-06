import { Action } from '../../../../lib/class';
import { GitHubAction } from '../../../../types';
import { EnablePNPMCache } from './cache';

export class SetupPNPM extends GitHubAction {
  public override readonly id = 'install-pnpm';
  public override readonly description = 'Install PNPM';

  public constructor({
    version,
    installDependencies,
    useCache,
  }: {
    readonly installDependencies?: boolean;
    readonly useCache?: boolean;
    readonly version?: number;
  } = {}) {
    super({ installDependencies, useCache, version });

    this.steps = {
      setup: new Action({
        id: 'pnpm-setup',
        input: {
          'run-install': installDependencies ?? false,
          version: version ?? 7,
        },
        uses: 'pnpm/action-setup@2.0.1',
      }),
    };

    if (useCache) {
      this.steps = { ...this.steps, enableCache: new EnablePNPMCache() };
    }
  }
}
