import { GitHubActionsWorkflow } from '../workflow/github-action';

export type RepositoryOptions = {
  readonly name?: string;
  readonly url?: string;
  readonly workflows?: GitHubActionsWorkflow[];
};
