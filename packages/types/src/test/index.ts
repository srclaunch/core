export enum TestTool {
  Ava = 'ava',
  Jest = 'jest',
  Tape = 'tape',
  Vitest = 'vitest',
}

export enum TestReporter {
  Clover = 'clover',
  Cobertura = 'cobertura',
  HTML = 'html',
  JSONSummary = 'json-summary',
  JSON = 'json',
  Lcov = 'lcov',
  Lcovonly = 'lcovonly',
  None = 'none',
  TeamCity = 'teamcity',
  TextLcov = 'text-lcov',
  TextSummary = 'text-summary',
  Text = 'text',
}

export interface TestConfig {
  readonly concurrency?: number;
  readonly coverage?: {
    readonly directory?: string;
    readonly files?: {
      readonly exclude?: readonly string[];
      readonly include?: readonly string[];
    };
    readonly reporters?: readonly TestReporter[];
    readonly thresholds?: {
      readonly [arg: string | 'global']: {
        readonly branches?: number;
        readonly functions?: number;
        readonly lines?: number;
        readonly statements?: number;
      };
    };
  };
  readonly fail?: {
    readonly fast?: boolean;
    readonly noTests?: boolean;
  };
  readonly files?: {
    readonly exclude?: readonly string[];
    readonly include?: readonly string[];
  };
  readonly match?: readonly string[];
  readonly tool?: TestTool;
  readonly watch?: boolean;
  readonly verbose?: boolean;
}
