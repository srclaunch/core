import { ProjectConfig } from '@srclaunch/types';
export declare function getPackageScripts({ build, development, release, run, test, }: {
    readonly build?: boolean;
    readonly development?: boolean;
    readonly release?: boolean;
    readonly run?: ProjectConfig['environments'];
    readonly test?: boolean;
}): Record<string, string>;
//# sourceMappingURL=package.d.ts.map