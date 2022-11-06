import { GitHubAction } from '../../../types';

export class UploadCoverageToCoveralls extends GitHubAction<{
  readonly 'github-token': string;
}> {
  public override readonly id = 'upload-coverage-to-coveralls';
  public override readonly name = 'Upload coverage to Coveralls';
  public override readonly uses = 'coverallsapp/github-action@master';

  public constructor({ token }: { readonly token: string }) {
    super({ 'github-token': token });
  }
}
