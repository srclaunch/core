import { RunStatus } from '../containers/DevelopmentContainer';
import { ButtonProps } from './Button';
declare type StatusButtonProps = ButtonProps & {
    readonly status?: RunStatus;
};
declare const StatusButton: ({ label, status, ...props }: StatusButtonProps) => JSX.Element;
export default StatusButton;
//# sourceMappingURL=StatusButton.d.ts.map