export declare class CodeGenWorkflow {
    private operations;
    constructor();
    addFile(path: string, content?: string, props?: Record<string, unknown>): this;
    createDirectory(path: string): this;
    generate(): Promise<void>;
}
//# sourceMappingURL=codegen.d.ts.map