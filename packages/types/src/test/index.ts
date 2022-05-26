export enum TestTool {
  Ava = 'ava',
  Jest = 'jest',
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

export interface TestOptions {
  concurrency?: number;
  coverage?: {
    directory?: string;
    files?: {
      exclude?: string[];
      include?: string[];
    };
    reporters?: TestReporter[];
    thresholds?: {
      [arg: string | 'global']: {
        branches?: number;
        functions?: number;
        lines?: number;
        statements?: number;
      };
    };
  };
  fail?: {
    fast?: boolean;
    noTests?: boolean;
  };
  files?: {
    exclude?: string[];
    include?: string[];
  };
  match?: string[];
  tool?: TestTool;
  watch?: boolean;
  verbose?: boolean;
}
