import { PackageManager } from '@srclaunch/types';

import { GitHubAction, GitHubActions } from '../../types';

export class SetupNode extends GitHubAction {
  public override readonly input = {};
  public override readonly id = 'setup-node';
  public override readonly description = 'Setup Node';
  public override readonly uses = GitHubActions.SetupNode;

  public constructor(
    props: {
      readonly cache?: boolean;
      readonly packageManager?: PackageManager;
      readonly version?: 14 | 16 | 18;
    } = {},
  ) {
    super(props);

    const { cache, version, packageManager } = props;

    this.input = {
      cache: cache ? packageManager : undefined,
      'node-version': version ?? 16,
    };
  }
}
