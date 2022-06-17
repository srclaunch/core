import { WorkspaceConfig } from '@srclaunch/types';
export declare type ModelsBuildOptions = {
    readonly paths: {
        readonly dependencies: WorkspaceConfig['dependencies'];
    };
};
export declare function buildModels(path: string, { dependencies }: {
    readonly dependencies: WorkspaceConfig['dependencies'];
}): Promise<void>;
//# sourceMappingURL=index.d.ts.map