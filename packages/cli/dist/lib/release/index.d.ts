export declare function createSemanticRelease({ name, }: {
    readonly name: string;
}): Promise<{
    readonly commits?: number;
    readonly type?: string;
    readonly version: string;
} | false>;
//# sourceMappingURL=index.d.ts.map