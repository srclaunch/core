import { DeploymentOptions } from '../deployment';
import { DNSConfig } from '../deployment/infrastructure';
import { CodeFormatter, CodeLinter, StaticTyping } from '../development';
import { RunConfig } from '../run';

export enum EnvironmentType {
  CI = 'ci',
  Development = 'development',
  QA = 'qa',
  Preview = 'preview',
  Production = 'production',
}

export type Environment<T = Record<string, unknown>> = DNSConfig & {
  readonly id?: string;
  readonly type?: EnvironmentType;
  readonly name?: string;
  readonly description?: string;
  readonly run?: RunConfig<T>;
};

export type RemoteEnvironmentConfig<T = Record<string, unknown>> =
  Environment<T> & {
    readonly deployment?: DeploymentOptions;
  };

export type DevelopmentEnvironmentConfig<T = Record<string, unknown>> =
  Environment<T> & {
    readonly formatters?: readonly CodeFormatter[];
    readonly linters?: readonly CodeLinter[];
    readonly staticTyping?: readonly StaticTyping[];
  };

export type PreviewEnvironmentConfig<T = Record<string, unknown>> =
  RemoteEnvironmentConfig<T> & {
    readonly branches?: {
      readonly [key: string]: RemoteEnvironmentConfig & {
        readonly ssr?: boolean;
      };
    };
  };

export type ProductionEnvironmentConfig<T = Record<string, unknown>> =
  RemoteEnvironmentConfig<T>;

export type QAEnvironmentConfig<T = Record<string, unknown>> =
  RemoteEnvironmentConfig<T> & {
    readonly e2e?: boolean;
    readonly integration?: boolean;
    readonly lint?: boolean;
    readonly unit?: boolean;
  };

export interface EnvironmentConfig {
  readonly development?: DevelopmentEnvironmentConfig;
  readonly preview?: PreviewEnvironmentConfig;
  readonly qa?: QAEnvironmentConfig;
  readonly production?: ProductionEnvironmentConfig;
}
