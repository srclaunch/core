import { Environments, ProjectConfig, WebAppOptions } from '@srclaunch/types';
export declare function run({ basePath, assetsDir, environment, input, optimize, pwa, styledComponents, react, }: WebAppOptions & {
    readonly environment: Environments;
    readonly project: ProjectConfig;
}): Promise<void>;
//# sourceMappingURL=vite.d.ts.map