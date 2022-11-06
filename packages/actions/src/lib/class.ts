import { ActionInput, ActionOutput, ActionStatus, ActionType } from '../types';

export class Action<I = ActionInput, O = ActionOutput> {
  // eslint-disable-next-line functional/prefer-readonly-type
  public action?: Action;
  public readonly environment?: { readonly [key: string]: unknown };
  // eslint-disable-next-line functional/prefer-readonly-type
  public input: I;
  public readonly description?: string;
  public readonly id?: string;
  // eslint-disable-next-line functional/prefer-readonly-type
  public name?: string;
  // eslint-disable-next-line functional/prefer-readonly-type
  public output?: O;
  public readonly run?: () => Promise<O>;
  // eslint-disable-next-line functional/prefer-readonly-type
  public shell?: { readonly [key: string]: string };
  public readonly status?: ActionStatus = ActionStatus.Pending;
  // eslint-disable-next-line functional/prefer-readonly-type
  public steps?: {
    readonly [key: string]: Action<ActionInput, ActionOutput>;
  };
  public readonly type?: ActionType = ActionType.Universal;
  public readonly uses?: string;

  public constructor(input?: I) {
    this.input = input as I;
    this.status = ActionStatus.Initialized;
  }
}
