import { PackageConfig, PackageType } from '@srclaunch/types';
export declare type PackageYMLGeneratorOptions = {
    readonly author?: string;
    readonly dependencies?: Record<string, string>;
    readonly description?: string;
    readonly devDependencies?: Record<string, string>;
    readonly engines?: {
        readonly node?: string;
        readonly npm?: string;
        readonly yarn?: string;
    };
    readonly exports?: PackageConfig['exports'];
    readonly files?: readonly string[];
    readonly license?: string;
    readonly main?: string;
    readonly module?: string;
    readonly name: string;
    readonly peerDependencies?: Record<string, string>;
    readonly publishConfig?: Record<string, string>;
    readonly scripts?: Record<string, string>;
    readonly type?: PackageType;
    readonly types?: string;
    readonly version?: string;
};
export declare function generatePackageJSON({ author, dependencies, description, devDependencies, engines, exports, files, license, main, module, name, peerDependencies, publishConfig, scripts, type, types, version, }: PackageYMLGeneratorOptions): Promise<Record<string, unknown>>;
//# sourceMappingURL=package-yml.d.ts.map