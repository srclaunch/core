import { TypedFlags } from 'meow';
declare type AppContainerProps = {
    initialTab?: string;
    cliVersion?: string;
    flags?: TypedFlags<{}> & Record<string, unknown>;
};
export declare const AppContainer: ({ initialTab, cliVersion, }: AppContainerProps) => void;
export {};
//# sourceMappingURL=AppContainer.d.ts.map