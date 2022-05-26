import { GitHubAction } from './github';

export interface Action {
  readonly action?: string | keyof typeof GitHubAction;
  readonly environment?: { [key: string]: unknown };
  readonly input?: Record<string, unknown>;
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly output?: Record<string, unknown>;
  readonly run?: () => Promise<unknown>;
  readonly runEnvironment?: { [key: string]: unknown };
  readonly shell?: string;
  readonly uses?: GitHubAction | string;
}
