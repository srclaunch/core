export declare function add(path: string): Promise<string>;
export declare function commit(message: string): Promise<void>;
export declare function getBranchName(): Promise<string>;
export declare function push({ followTags }: {
    followTags?: boolean;
}): Promise<{
    branch: string;
    repo: string | undefined;
}>;
//# sourceMappingURL=git.d.ts.map