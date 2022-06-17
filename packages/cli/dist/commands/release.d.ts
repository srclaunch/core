import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
import { InteractiveModeFlag } from '../lib/flags';
declare const _default: Command<ProjectConfig, TypedFlags<InteractiveModeFlag & {
    readonly push: {
        readonly alias: "p";
        readonly default: false;
        readonly description: "Pushes changes to remote repository";
        readonly isRequired: false;
        readonly type: "boolean";
    };
}>>;
export default _default;
//# sourceMappingURL=release.d.ts.map