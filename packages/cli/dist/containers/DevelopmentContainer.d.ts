/// <reference types="react" />
import { WorkspaceConfig } from '@srclaunch/types';
import { Flag, FlagType } from 'meow';
import { Package } from 'update-notifier';
declare type AppContainerProps<T = Record<string, Flag<FlagType, unknown>>> = React.PropsWithChildren<{
    readonly config: WorkspaceConfig & {
        readonly package: Package;
    };
    readonly initialTab?: string;
}>;
export declare enum RunStatus {
    Error = "error",
    Idle = "idle",
    Running = "running",
    Starting = "starting",
    Stopped = "stopped"
}
export declare const DevelopmentContainer: ({ children, config, initialTab, }: AppContainerProps) => JSX.Element;
export {};
//# sourceMappingURL=DevelopmentContainer.d.ts.map