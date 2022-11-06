import { Flag, FlagType } from 'meow';
import { PropsWithChildren } from 'react';
declare type AppContainerProps<T = Record<string, Flag<FlagType, unknown>>> = PropsWithChildren<{
    readonly cliVersion?: string;
}>;
export declare const AppContainer: ({ children, cliVersion }: AppContainerProps) => JSX.Element;
export {};
//# sourceMappingURL=AppContainer.d.ts.map