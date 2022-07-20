import { GitHubWorkflow } from '../workflow/github';

export type RepositoryConfig = {
  readonly name?: string;
  readonly url?: string;
  readonly workflows?: { readonly [id: string]: GitHubWorkflow };
};
