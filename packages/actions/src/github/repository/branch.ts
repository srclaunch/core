import { GitHubAction } from '../../types';

export class GetBranch extends GitHubAction<
  undefined,
  {
    readonly name: string;
  }
> {
  public override readonly id = 'get-branch';
  public override readonly description = 'Get branch name';
  public override readonly shell = {
    name: '${GITHUB_REF#refs/heads/}',
  };
}
