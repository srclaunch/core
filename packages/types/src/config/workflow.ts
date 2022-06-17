import { ProjectEvent } from '../event/project';
import { RepositoryEvent } from '../event/repository';
import { Workflow } from '../workflow';
import { GitHubWorkflow } from '../workflow/github';

export type WorkflowConfig = {
  readonly [key in ProjectEvent | RepositoryEvent]?: Workflow;
};
