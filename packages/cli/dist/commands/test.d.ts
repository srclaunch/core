import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
declare const _default: Command<ProjectConfig, TypedFlags<{
    readonly coverage: {
        readonly alias: "c";
        readonly default: false;
        readonly description: "Collect test coverage after test run";
        readonly type: "boolean";
    };
    readonly match: {
        readonly alias: "m";
        readonly description: "Run tests matching the specified pattern";
        readonly type: "string";
    };
    readonly watch: {
        readonly alias: "w";
        readonly description: "Watch for changes and run tests automatically";
        readonly type: "boolean";
    };
}>>;
export default _default;
//# sourceMappingURL=test.d.ts.map