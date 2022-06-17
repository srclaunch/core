import { ReleaseOptions } from '@srclaunch/types';
export declare function createSemanticRelease({ dryRun, local, name, }: ReleaseOptions): Promise<{
    readonly commits?: number;
    readonly type?: string;
    readonly version: string;
} | false>;
//# sourceMappingURL=index.d.ts.map