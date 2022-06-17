import { GitHubWorkflow } from '../workflow/github';

export type RepositoryOptions = {
  readonly name?: string;
  readonly url?: string;
  readonly workflows?: { readonly [id: string]: GitHubWorkflow };
};
