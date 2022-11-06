import { CodeFormatter, CodeLinter, ProjectConfig, StaticTyping } from '@srclaunch/types';
export declare function writeToolingConfiguration({ formatters, linters, project, staticTyping, }: {
    readonly formatters?: readonly CodeFormatter[];
    readonly linters?: readonly CodeLinter[];
    readonly project: ProjectConfig;
    readonly staticTyping?: readonly StaticTyping[];
}): Promise<void>;
//# sourceMappingURL=tooling.d.ts.map