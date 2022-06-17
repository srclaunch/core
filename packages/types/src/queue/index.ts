import { ISO8601 } from '../data/primitive';
import { Task } from '../workflow/task';

export enum Status {
  Canceled = 'canceled',
  Completed = 'completed',
  Failed = 'failed',
  Queued = 'queued',
  Running = 'running',
  Started = 'started',
}

export type QueueLog = {
  readonly id?: string;
  readonly message?: string;
  readonly status?: Task['status'];
  readonly task?: Task['id'];
  readonly timestamp?: ISO8601;
  readonly type?: 'info' | 'error';
};

export type Queue = {
  readonly description?: string;
  readonly ended?: ISO8601;
  readonly finished: readonly Task['id'][];
  readonly id: string;
  readonly input?: Record<string, string | number | boolean>;
  readonly logs?: readonly QueueLog[];
  readonly name: string;
  readonly output?: Record<string, string | number | boolean>;
  readonly queued: readonly Task['id'][];
  readonly running: readonly Task['id'][];
  readonly started?: ISO8601;
  readonly status?: Status;
  readonly tasks?: readonly Task[];
};

export type QueueInitializationResult = {
  readonly error: boolean | Error;
};
