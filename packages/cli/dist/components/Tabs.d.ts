import { BoxProps } from 'ink';
import { PropsWithChildren, ReactElement } from 'react';
declare type TabsProps = PropsWithChildren<BoxProps & {
    readonly title?: string;
}>;
export declare const Tabs: ({ children, title, ...props }: TabsProps) => JSX.Element;
declare type TabProps = PropsWithChildren<{
    readonly initial?: boolean;
    readonly label: string;
    readonly status?: string;
}>;
export declare const Tab: ({ children }: TabProps) => ReactElement;
export {};
//# sourceMappingURL=Tabs.d.ts.map