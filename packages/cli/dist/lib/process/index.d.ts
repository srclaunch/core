/// <reference types="node" />
import EventEmitter from 'node:events';
export declare class Process extends EventEmitter {
    private readonly command;
    private process?;
    private invoked;
    private output;
    private readonly args;
    constructor(command: string, args?: Record<string, unknown>);
    emit(eventName: string | symbol, args?: unknown): boolean;
    run(): Promise<void>;
    kill(): void;
}
//# sourceMappingURL=index.d.ts.map