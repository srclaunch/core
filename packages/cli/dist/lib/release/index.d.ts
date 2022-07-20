import { ReleaseConfig } from '@srclaunch/types';
export declare function createSemanticRelease({ dryRun, local, name, }: ReleaseConfig): Promise<{
    readonly commits?: number;
    readonly type?: string;
    readonly version: string;
} | false>;
//# sourceMappingURL=index.d.ts.map