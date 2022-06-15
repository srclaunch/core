import { TestReporter, TestTool } from '@srclaunch/types';
export declare const DEFAULT_TEST_OPTIONS: {
    concurrency: number;
    coverage: {
        directory: string;
        reporters: TestReporter[];
        thresholds: {
            global: {
                branches: number;
                functions: number;
                lines: number;
                statements: number;
            };
        };
    };
    fail: {
        fast: boolean;
        noTests: boolean;
    };
    tool: TestTool;
    verbose: boolean;
};
//# sourceMappingURL=index.d.ts.map