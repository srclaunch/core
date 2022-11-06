import { Action } from '../lib/class';
import { ActionInput, ActionOutput, ActionType } from '.';

export enum GitHubRunnerOS {
  UbuntuLatest = 'ubuntu-latest',
}

export enum GitHubActions {
  Cache = 'actions/cache@v3',
  Checkout = 'actions/checkout@v3',
  DownloadArtifact = 'actions/download-artifact@v3',
  SetupNode = 'actions/setup-node@v3',
  UploadArtifact = 'actions/upload-artifact@v3',
}

export class GitHubAction<I = ActionInput, O = ActionOutput> extends Action<
  I,
  O
> {
  public override readonly type = ActionType.GitHub;

  public constructor(input?: I) {
    super(input);
  }
}
