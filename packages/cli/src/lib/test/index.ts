import { TestReporter, TestTool } from '@srclaunch/types';

export const DEFAULT_TEST_OPTIONS = {
  concurrency: 1,
  coverage: {
    directory: 'coverage',
    reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    thresholds: {
      global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0,
      },
    },
  },
  fail: {
    fast: true,
    noTests: false,
  },
  tool: TestTool.Ava,
  verbose: true,
};
