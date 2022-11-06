export enum TaskStatus {
  Failure = 'failure',
  NotStarted = 'not-started',
  Pending = 'pending',
  Running = 'running',
  Success = 'success',
}

export type TaskInput = unknown;
export type TaskOutput = unknown;

export interface TaskOptions<I = TaskInput, O = TaskOutput> {
  readonly description?: string;
  readonly environment?: Record<string, unknown>;
  readonly id?: string;
  readonly if?: ReadonlyArray<Record<string, boolean | number | string>>;
  readonly input?: I;
  readonly name?: string;
  readonly needs?: readonly string[];
  readonly output?: O;
  readonly status?: TaskStatus;
  // readonly steps: { readonly [id: string]: Action };
}

export class Task<I = TaskInput, O = TaskOutput> implements TaskOptions<I, O> {
  public readonly description?: string = '';
  public readonly environment?: Record<string, unknown> = {};
  public readonly id?: string = '';
  public readonly if?: ReadonlyArray<
    Record<string, boolean | number | string>
  > = [];
  public readonly input?: I;
  public readonly name?: string;
  public readonly needs?: readonly string[] = [];
  public readonly output?: O;
  public readonly status?: TaskStatus = TaskStatus.NotStarted;
  // public readonly steps: {
  //   readonly [name: string]: Action;
  // };

  public constructor({
    description,
    environment,
    id,
    if: ifConditions,
    input,
    name,
    needs,
    output,
  }: // steps,
  TaskOptions) {
    this.description = description ?? '';
    this.environment = environment ?? {};
    this.id = id ?? '';
    this.if = ifConditions ?? [];
    this.input = input as unknown as I;
    this.name = name ?? '';
    this.output = output as unknown as O;
    this.needs = needs ?? [];
    // this.steps = steps ?? {};
  }
}
