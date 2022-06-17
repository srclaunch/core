import { Task } from './task';

export type WorkflowInput = unknown;
export type WorkflowOutput = unknown;

export interface WorkflowOptions<I = WorkflowInput, O = WorkflowOutput> {
  readonly description?: string;
  readonly input?: I;
  readonly tasks?: { readonly [id: string]: Task };
  readonly name?: string;
  readonly output?: O;
}

export class Workflow<I = WorkflowInput, O = WorkflowOutput>
  implements WorkflowOptions<I, O>
{
  public readonly name?: string;
  public readonly description?: string;
  public readonly input: I;
  public readonly tasks?: { readonly [id: string]: Task };

  public constructor({ description, input, tasks, name }: WorkflowOptions) {
    this.description = description;
    this.input = input as unknown as I;
    this.tasks = tasks;
    this.name = name;
  }
}
