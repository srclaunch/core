import { memo, ReactElement } from 'react';

// import { FocusedStyles } from '../../../../styles/focused';
import {
  Amount,
  BackgroundColor,
  BorderColor,
  Color,
  Fill,
  Position,
  Shadow,
  Size,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/container';

type DropdownPanelProps = ContainerProps<{
  readonly setMenuVisible?: (visible: boolean) => unknown;
  readonly visible?: boolean;
}>;

export const DropdownPanel = memo(
  ({
    backgroundColor = BackgroundColor.DropdownMenu,
    borderColor = BorderColor.InputControl,
    borderRadius = Amount.Least,
    children,
    className = '',
    fill = Fill.Both,
    size = Size.Default,
    state,
    ...props
  }: DropdownPanelProps): ReactElement => {
    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        borderRadiusTopLeft={
          state?.dropdownVisible ? Amount.None : borderRadius
        }
        borderRadiusTopRight={
          state?.dropdownVisible ? Amount.None : borderRadius
        }
        borderColor={
          state?.error && Array.isArray(state.error) && state.error.length > 0
            ? Color.Error
            : borderColor
        }
        borderTopColor={
          state?.dropdownVisible ? BorderColor.Transparent : undefined
        }
        className={`${className} dropdown-panel`}
        // depth={state?.dropdownVisible ? Depth.Higher : Depth.Surface}
        position={Position.Absolute}
        positionLeft={0}
        positionRight={0}
        positionTop={size}
        fill={fill}
        shadow={state?.dropdownVisible ? Shadow.Higher : Shadow.Surface}
        minHeight={size}
        state={{
          ...state,
          hidden: !state?.dropdownVisible,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
