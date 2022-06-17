import { GitHubAction, GitHubActions, PackageManager } from '@srclaunch/types';

export class SetupNode extends GitHubAction {
  public override readonly input = {};
  public override readonly id = 'setup-node';
  public override readonly description = 'Setup Node';
  public override readonly uses = GitHubActions.SetupNode;

  public constructor(
    props: {
      readonly packageManager?: PackageManager;
      readonly cache?: boolean;
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
