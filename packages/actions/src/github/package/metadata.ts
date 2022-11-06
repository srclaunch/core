import { GitHubAction } from '../../types';

export class GetPackageMetadata extends GitHubAction<
  undefined,
  { readonly version: string }
> {
  public override readonly id = 'get-version';
  public override readonly description = 'Get package version';
  public override readonly shell = {
    version: 'jq -r .version package.json',
  };
}
