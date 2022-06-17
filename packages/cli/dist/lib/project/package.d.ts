import { ProjectConfig } from '@srclaunch/types';
export declare function getPackageScripts({ build, release, run, test, }: {
    readonly build?: boolean;
    readonly release?: boolean;
    readonly run?: ProjectConfig['environments'];
    readonly test?: boolean;
}): Record<string, string>;
//# sourceMappingURL=package.d.ts.map