import { Action } from '../action';
import { GitHubRunnerOS } from '../action/github';
import { ISO8601 } from '../data/primitive';
import { LogLevel } from '../logging/level';

export type WorkflowStepLog = {
  readonly time?: ISO8601;
  readonly level?: LogLevel;
  readonly message?: string;
};

export interface WorkflowStep extends Action {
  readonly context?: Record<string, unknown>;
  readonly conditions?: [{ [key: string]: string | number | boolean }];
  readonly description?: string;
  readonly id?: string;
  readonly logs?: WorkflowStepLog[];
  readonly requires?: string[];
}

export type WorkflowJob = {
  readonly context?: Record<string, unknown>;
  readonly environment?: Record<string, unknown>;
  readonly id?: string;
  readonly if?: Array<Record<string, string | number | boolean>>;
  readonly logs?: Record<string, WorkflowStepLog[]>;
  readonly name?: string;
  readonly output?: Record<string, unknown>;
  readonly requires?: string[];
  readonly runsOn?: GitHubRunnerOS;
  readonly steps: Array<WorkflowStep | { [name: string]: WorkflowStep }>;
};

export interface Workflow {
  readonly input?: Record<string, unknown>;
  readonly jobs?: {
    [name: string]: (job: WorkflowJob) => Promise<unknown>;
  };
  readonly name?: string;
  readonly on?: string[];
  readonly output?: Record<string, unknown>;
}
