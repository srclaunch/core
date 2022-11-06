export declare type CreatorArgs = {
    readonly templates: string;
} | undefined;
export declare class Creator {
    protected templates?: string;
    private runner?;
    constructor(args: CreatorArgs);
    create(): Promise<void>;
}
//# sourceMappingURL=creator.d.ts.map