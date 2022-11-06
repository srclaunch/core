import { GitHubAction, GitHubActions } from '../../types';

export class DownloadArtifact extends GitHubAction<{
  readonly name: string;
}> {
  public override readonly id = 'download-artifact';
  public override readonly description = 'Download artifact';
  public override readonly uses = GitHubActions.DownloadArtifact;
}
