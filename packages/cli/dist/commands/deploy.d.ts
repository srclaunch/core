import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
declare const _default: Command<ProjectConfig, TypedFlags<{
    readonly ci: {
        readonly alias: "c";
        readonly default: true;
        readonly description: "Bypasses the CI checks";
        readonly isRequired: false;
        readonly type: "boolean";
    };
    readonly debug: {
        readonly alias: "d";
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
//# sourceMappingURL=deploy.d.ts.map