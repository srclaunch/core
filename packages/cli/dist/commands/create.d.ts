import { ProjectConfig, WorkspaceConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
export declare type CreateFlags = TypedFlags<{
    readonly description: {
        readonly required: true;
        readonly type: 'string';
    };
    readonly name: {
        readonly required: true;
        readonly type: 'string';
    };
    readonly type: {
        readonly required: true;
        readonly type: 'string';
    };
}>;
declare const _default: Command<ProjectConfig & WorkspaceConfig, Record<string, unknown> & TypedFlags<import("meow").AnyFlags>>;
export default _default;
//# sourceMappingURL=create.d.ts.map