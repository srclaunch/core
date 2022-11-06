import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
declare const _default: Command<ProjectConfig, TypedFlags<{
    readonly clean: {
        readonly alias: "c";
        readonly default: true;
        readonly description: "Clean build directory before building";
        readonly type: "boolean";
    };
    readonly types: {
        readonly alias: "t";
        readonly default: true;
        readonly description: "Build types definitions";
        readonly type: "boolean";
    };
}>>;
export default _default;
//# sourceMappingURL=build.d.ts.map