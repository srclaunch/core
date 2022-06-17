import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
import { InteractiveModeFlag } from '../lib/flags';
declare const _default: Command<ProjectConfig, TypedFlags<InteractiveModeFlag & {
    readonly local: {
        readonly alias: "l";
        readonly default: true;
        readonly description: "Bypasses the CI checks";
        readonly isRequired: false;
        readonly type: "boolean";
    };
    readonly debug: {
        readonly default: false;
        readonly description: "Runs a dry run of the release process";
        readonly isRequired: false;
        readonly type: "boolean";
    };
    readonly dryRun: {
        readonly alias: "dry-run";
        readonly default: false;
        readonly description: "Runs a dry run of the release process";
        readonly isRequired: false;
        readonly type: "boolean";
    };
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