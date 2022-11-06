import { EnvironmentType } from '@srclaunch/types';
interface NodeRunnerOptions {
    readonly environment?: EnvironmentType;
    readonly script: string;
}
export declare class NodeRunner {
    private readonly environment?;
    private readonly script?;
    private process?;
    private invoked;
    constructor({ script, environment }: NodeRunnerOptions);
    run(): Promise<void>;
}
export {};
//# sourceMappingURL=runner.d.ts.map