/* eslint-disable functional/prefer-readonly-type */
export enum ActionStatus {
  Failure = 'failure',
  Initialized = 'initialized',
  Pending = 'pending',
  Running = 'running',
  Success = 'success',
}

export enum ActionType {
  Browser = 'browser',
  GitHub = 'github',
  Native = 'native',
  Universal = 'universal',
}

export type ActionInput = unknown;
export type ActionOutput = unknown;

export declare interface ActionOptions<I = ActionInput, O = ActionOutput> {
  readonly action?: Action;
  readonly environment?: { readonly [key: string]: unknown };
  readonly input: I;
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly output?: O;
  readonly shell?: { readonly [key: string]: string };
  readonly status?: ActionStatus;
  readonly steps?: {
    readonly [key: string]: Action<ActionInput, ActionOutput>;
  };
  readonly type?: ActionType;
}

export class Action<I = ActionInput, O = ActionOutput>
  implements ActionOptions<I, O>
{
  public action?: Action;
  public environment?: { readonly [key: string]: unknown };
  public input: I;
  public description?: string;
  public id?: string;
  public name?: string;
  public output?: O;
  public run?: () => Promise<O>;
  public shell?: { readonly [key: string]: string };
  public status?: ActionStatus = ActionStatus.Pending;
  public steps?: { readonly [key: string]: Action<ActionInput, ActionOutput> };
  public type?: ActionType = ActionType.Universal;

  public constructor(input?: I) {
    this.input = input as I;
    this.status = ActionStatus.Initialized;
  }
}
