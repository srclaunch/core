import { DeploymentOptions } from '../deployment';
import { DNSOptions } from '../deployment/infrastructure';
import { CodeFormatter, CodeLinter, StaticTyping } from '../development';
import { RunOptions } from '../run';
export * from './platform';

export enum EnvironmentType {
  CI = 'ci',
  Development = 'dev',
  Preview = 'preview',
  Production = 'production',
  Test = 'test',
}

export type Environment<T = Record<string, unknown>> = DNSOptions & {
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly run?: RunOptions<T>;
  readonly type?: EnvironmentType;
};

export type RemoteEnvironmentOptions<T = Record<string, unknown>> =
  Environment<T> & {
    readonly deployment?: DeploymentOptions;
  };

export type DevelopmentEnvironmentOptions<T = Record<string, unknown>> =
  Environment<T> & {
    readonly formatters?: readonly CodeFormatter[];
    readonly linters?: readonly CodeLinter[];
    readonly staticTyping?: readonly StaticTyping[];
  };

export type PreviewEnvironmentOptions<T = Record<string, unknown>> =
  RemoteEnvironmentOptions<T> & {
    readonly branches?: {
      readonly [key: string]: RemoteEnvironmentOptions & {
        readonly ssr?: boolean;
      };
    };
  };

export type ProductionEnvironmentOptions<T = Record<string, unknown>> =
  RemoteEnvironmentOptions<T>;

export type QAEnvironmentOptions<T = Record<string, unknown>> =
  RemoteEnvironmentOptions<T> & {
    readonly e2e?: boolean;
    readonly integration?: boolean;
    readonly lint?: boolean;
    readonly unit?: boolean;
  };

export interface EnvironmentOptions {
  readonly development?: DevelopmentEnvironmentOptions;
  readonly preview?: PreviewEnvironmentOptions;
  readonly production?: ProductionEnvironmentOptions;
  readonly qa?: QAEnvironmentOptions;
}
