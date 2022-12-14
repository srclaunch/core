import { ProjectType } from '@srclaunch/types';
import { CodeGenWorkflow } from '../../../codegen';
interface SrcLaunchWebApplicationGeneratorOptions {
    readonly description?: string;
    readonly name: string;
    readonly owner?: string;
    readonly type?: ProjectType;
}
export declare class SrcLaunchWebApplicationGenerator extends CodeGenWorkflow {
    constructor(options: SrcLaunchWebApplicationGeneratorOptions);
}
export {};
//# sourceMappingURL=web-application.d.ts.map