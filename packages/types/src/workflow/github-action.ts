import { GitHubRunnerOS } from '../action/github';
import { RepositoryEvent } from '../event/repository';

export interface GitHubActionsWorkflowStep {
  env?: Record<string, unknown>;
  id?: string;
  if?: string;
  name?: string;
  run?: string | string[];
  uses?: string;
  with?: Record<string, unknown>;
}

export interface GitHubActionsWorkflowJob {
  environment?: {
    name?: string;
    url?: string;
  };
  env?: Record<string, unknown>;
  if?: string;
  name?: string;
  needs?: string[];
  outputs?: Record<string, unknown>;
  runsOn: GitHubRunnerOS;
  steps: GitHubActionsWorkflowStep[];
}

export interface GitHubActionsWorkflow {
  input?: Record<string, unknown>;
  jobs: {
    [name: string]: GitHubActionsWorkflowJob;
  }[];
  name?: string;
  on: {
    [key in RepositoryEvent]?: {
      branches: string[];
    };
  };
}
