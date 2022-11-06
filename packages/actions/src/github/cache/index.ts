import { GitHubAction, GitHubActions } from '../../types';

export class SetupCache extends GitHubAction {
  public override readonly input: {
    readonly key?: string;
    readonly path?: readonly string[];
    readonly ['restore-keys']?: readonly string[];
  } = {};
  public override readonly id = 'setup-cache';
  public override readonly description = 'Setup cache';
  public override readonly uses = GitHubActions.Cache;

  public constructor(props: {
    readonly key?: string;
    readonly paths: readonly string[];
    readonly restoreKeys?: readonly string[];
  }) {
    super(props);

    const { paths, key, restoreKeys } = props;

    this.input = {
      key,
      path: paths,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'restore-keys': restoreKeys,
    };
  }
}
