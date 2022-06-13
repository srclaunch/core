import { ProjectConfig, WorkspaceConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
export declare type GenerateSrcLaunchProjectFlags = TypedFlags<{
    readonly name: {
        readonly type: 'string';
        readonly required: true;
    };
    readonly description: {
        readonly type: 'string';
        readonly required: true;
    };
    readonly type: {
        readonly type: 'string';
        readonly required: true;
    };
}>;
declare const _default: Command<ProjectConfig & WorkspaceConfig, TypedFlags<import("meow").AnyFlags> & Record<string, unknown>>;
export default _default;
//# sourceMappingURL=generate.d.ts.map