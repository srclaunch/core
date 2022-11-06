import { ReleaseConfig } from '@srclaunch/types';
export declare function createSemanticRelease({ dryRun, force, local, name, }: ReleaseConfig): Promise<false | {
    readonly commits?: number;
    readonly type?: string;
    readonly version: string;
}>;
//# sourceMappingURL=index.d.ts.map