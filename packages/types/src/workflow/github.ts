import { Workflow, WorkflowOptions } from '.';

export interface GitHubWorkflowOptions extends WorkflowOptions {
  readonly branch?: string;
}

export class GitHubWorkflow extends Workflow implements GitHubWorkflowOptions {
  public readonly branch?: string;

  public constructor({
    branch,
    description,
    input,
    name,
    tasks,
  }: GitHubWorkflowOptions) {
    super({ description, input, name, tasks });

    this.branch = branch;
  }
}
