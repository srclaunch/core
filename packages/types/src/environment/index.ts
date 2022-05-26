import { Deployment } from '../deployment';
import {
  CodeFormatterTool,
  CodeLinterTool,
  StaticTypingTool,
} from '../development';
import { DNSConfig } from '../deployment/infrastructure';
import { RunnerOptions } from './runner';

export enum Environments {
  Development = 'development',
  QA = 'qa',
  Preview = 'preview',
  Production = 'production',
}

export enum EnvironmentType {
  CI = 'CI',
  Development = 'development',
  Production = 'production',
}

export type Environment = DNSConfig & {
  readonly id?: Environments;
  readonly type?: EnvironmentType;
  readonly name?: string;
  readonly description?: string;
};

export type RemoteEnvironment = Environment & {
  readonly deployment?: Deployment;
};

export type DevelopmentEnvironment = Environment & {
  readonly formatters?: CodeFormatterTool[];
  readonly linters?: CodeLinterTool[];
  readonly run?: RunnerOptions;
  readonly staticTyping?: StaticTypingTool[];
};

export type PreviewEnvironment = RemoteEnvironment & {
  readonly branches?: {
    readonly [key: string]: RemoteEnvironment & {
      readonly ssr?: boolean;
    };
  };
};

export type ProductionEnvironment = RemoteEnvironment;

export type QAEnvironment = RemoteEnvironment & {
  readonly e2e?: boolean;
  readonly integration?: boolean;
  readonly lint?: boolean;
  readonly unit?: boolean;
};

export interface EnvironmentOptions {
  readonly development?: DevelopmentEnvironment;
  readonly preview?: PreviewEnvironment;
  readonly qa?: QAEnvironment;
  readonly production?: ProductionEnvironment;
}
