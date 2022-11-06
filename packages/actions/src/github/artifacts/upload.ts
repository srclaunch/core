import { GitHubAction, GitHubActions } from '../../types';

export class UploadArtifact extends GitHubAction<{
  readonly name?: string;
  readonly path?: string;
  readonly paths?: readonly string[];
}> {
  public override readonly id = 'upload-artifact';
  public override readonly description = 'Upload artifact';
  public override readonly uses = GitHubActions.UploadArtifact;

  public constructor(props: {
    readonly name?: string;
    readonly path?: string;
    readonly paths?: readonly string[];
  }) {
    super(props);

    const { name, paths, path } = props;

    this.input = {
      name,
      path,
      paths,
    };
  }
}
