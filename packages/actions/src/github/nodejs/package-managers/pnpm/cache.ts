import { GitHubAction } from '../../../../types';
import { SetupCache } from '../../../cache/index';

export class GetPNPMCache extends GitHubAction<undefined> {
  public override readonly id = 'pnpm-cache';
  public override readonly description = 'Get PNPM cache directory';
  public override readonly shell = {
    pnpm_cache_dir: 'pnpm store path',
  };
}

export class EnablePNPMCache extends GitHubAction {
  public override readonly id = 'setup-pnpm-cache';
  public override readonly description = 'Setup PNPM cache';
  public override readonly steps = {
    getPnpmCache: new GetPNPMCache(),
    setupCache: new SetupCache({
      key: "${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}",
      paths: ['${{ steps.pnpm-cache.outputs.pnpm_cache_dir }}'],
      restoreKeys: ['${{ runner.os }}-pnpm-store-'],
    }),
  };
}
