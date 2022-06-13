import { ProjectEvent } from '../event/project';
import { RepositoryEvent } from '../event/repository';
import { Workflow } from '../workflow';
import { GitHubWorkflow } from '../workflow/github';

export type WorkflowConfig = {
  readonly project?: {
    readonly [key in ProjectEvent]?: Workflow;
  };
  readonly repository?: {
    readonly [key in RepositoryEvent]?: GitHubWorkflow;
  };
};
