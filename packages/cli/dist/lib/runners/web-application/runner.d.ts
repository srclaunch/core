import { EnvironmentType, WebApplicationOptions } from '@srclaunch/types';
import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
export declare const getVitePlugins: ({ react: reactApp, pwa, styledComponents, }: {
    readonly pwa?: boolean | undefined;
    readonly react?: boolean | undefined;
    readonly styledComponents?: boolean | undefined;
}) => readonly PluginOption[];
interface WebApplicationRunnerOptions extends WebApplicationOptions {
    readonly environment?: EnvironmentType;
}
export declare class WebApplicationRunner {
    private readonly environment?;
    private process?;
    private invoked;
    constructor(props: WebApplicationRunnerOptions);
    run(): Promise<void>;
}
export {};
//# sourceMappingURL=runner.d.ts.map