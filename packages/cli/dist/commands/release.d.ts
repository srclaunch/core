import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
declare const _default: Command<ProjectConfig, TypedFlags<{
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
    readonly force: {
        readonly alias: "force";
        readonly default: false;
        readonly description: "Force a release even if there are no changes";
        readonly isRequired: false;
        readonly type: "boolean";
    };
    readonly local: {
        readonly alias: "l";
        readonly default: true;
        readonly description: "Bypasses the CI checks";
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