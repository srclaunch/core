import { GitHubAction, GitHubActions } from '@srclaunch/types';

export class SetupCache extends GitHubAction {
  public override readonly input: {
    readonly path?: readonly string[];
    readonly key?: string;
    readonly ['restore-keys']?: readonly string[];
  } = {};
  public override readonly id = 'setup-cache';
  public override readonly description = 'Setup cache';
  public override readonly uses = GitHubActions.Cache;

  public constructor(props: {
    readonly paths: readonly string[];
    readonly key?: string;
    readonly restoreKeys?: readonly string[];
  }) {
    super(props);

    const { paths, key, restoreKeys } = props;

    this.input = {
      key,
      path: paths,
      'restore-keys': restoreKeys,
    };
  }
}
