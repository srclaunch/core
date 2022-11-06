import { Dependencies, Package, ProjectType } from '@srclaunch/types';
export declare function getProjectTypeDependencies(type: ProjectType): {};
export declare function getProjectTypeDevDependencies(type?: ProjectType): {};
export declare function getPackageDependencies(package_: Package): {};
export declare function getPackageDevDependencies(package_: Package): {};
export declare function sortDependencies(dependencies: Dependencies): Dependencies;
export declare function getDependencyLatestVersion(dependency: string, version?: string): Promise<string>;
export declare function getDependenciesLatestVersions(dependencies: Dependencies): Promise<Dependencies>;
export declare function getDependencies({ dev: development, packages, }: {
    readonly dev?: boolean;
    readonly packages?: readonly Package[];
}): Promise<Dependencies>;
export declare function getDevDependencies({ ava, eslint, github, jest, jestReact, prettier, react, reactRouter, srclaunch, styledComponents, stylelint, testCoverage, typescript, }: {
    readonly ava?: boolean;
    readonly eslint?: boolean;
    readonly github?: boolean;
    readonly jest?: boolean;
    readonly jestReact?: boolean;
    readonly packages?: readonly Package[];
    readonly prettier?: boolean;
    readonly react?: boolean;
    readonly reactRouter?: boolean;
    readonly srclaunch?: {
        readonly cli?: boolean;
        readonly dx?: boolean;
        readonly types?: boolean;
    };
    readonly styledComponents?: boolean;
    readonly stylelint?: boolean;
    readonly testCoverage?: boolean;
    readonly typescript?: boolean;
}): Promise<Dependencies>;
//# sourceMappingURL=dependencies.d.ts.map