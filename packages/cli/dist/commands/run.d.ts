import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command.js';
declare const _default: Command<ProjectConfig, TypedFlags<{
    readonly workspace: {
        readonly default: false;
        readonly description: "Run the script in all projects in the workspace";
        readonly type: "boolean";
    };
}>>;
export default _default;
//# sourceMappingURL=run.d.ts.map