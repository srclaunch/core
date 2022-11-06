import { ReactElement } from 'react';
export declare type ButtonProps = {
    readonly backgroundColor?: string;
    readonly label: ReactElement | string;
    readonly onFocus?: () => unknown;
    readonly onSelect?: () => unknown;
    readonly textColor?: string;
};
declare const Button: ({ backgroundColor, label, onSelect, onFocus, textColor, }: ButtonProps) => JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map