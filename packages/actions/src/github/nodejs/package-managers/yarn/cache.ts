import { GitHubAction } from '../../../../types';
import { SetupCache } from '../../../cache/index';

export class GetYarnCache extends GitHubAction<undefined> {
  public override readonly id = 'pnpm-cache';
  public override readonly description = 'Get PNPM cache directory';
  public override readonly shell = {
    yarn_cache_dir: 'yarn cache dir',
  };
}

export class SetupYarnCache extends GitHubAction<undefined> {
  public override readonly id = 'setup-pnpm-cache';
  public override readonly description = 'Setup PNPM cache';
  public override readonly steps = {
    getYarnCache: new GetYarnCache(),
    setupCache: new SetupCache({
      key: '${{ runner.os }}-yarn-${{ hashFiles("**/yarn.lock") }}',
      paths: [
        '.yarn/cache',
        '.yarn/patches',
        '.yarn/plugins',
        '.yarn/releases',
        '.yarn/sdks',
        '.yarn/versions',
      ],
      restoreKeys: ['${{ runner.os }}-yarn-'],
    }),
  };
}
