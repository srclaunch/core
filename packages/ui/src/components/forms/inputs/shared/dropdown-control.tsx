import { BasicIcons } from '@srclaunch/icons';
import { ComponentRef, memo, ReactElement, useRef, useState } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Cursor,
  Depth,
  Fill,
  IconColor,
  Orientation,
  Overflow,
  Shadow,
  Size,
  TextColor,
  TextOverflow,
  TextSize,
} from '../../../../types';
import { Container } from '../../../layout/container';
// import { Spacer } from '../../../layout/spacer';
import { Icon, IconProps } from '../../../media/icon';
import { Label } from '../../../typography/label';
// import { Text, TextProps } from '../../../typography/text';
import { InputContainer, InputContainerProps } from './input-container';

type DropdownControlProps = InputContainerProps<unknown> & {
  readonly component?: ReactElement;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly ref?: ComponentRef<any>;
};

export const DropdownControl = memo(
  ({
    alignVertical = AlignVertical.Center,
    orientation = Orientation.Horizontal,
    backgroundColor = BackgroundColor.DropdownMenu,
    borderColor = BorderColor.InputControl,
    borderRadius = Amount.Least,
    className = '',
    component,
    cursor = Cursor.Pointer,
    onBlur,
    onFocus,
    // icon,
    label,
    fill = Fill.Horizontal,
    placeholder = 'Select an option',
    state,
    size = Size.Default,
    textSize = TextSize.Default,
    textColor = TextColor.DropdownMenu,
    ...props
  }: DropdownControlProps): ReactElement => {
    const [focused, setFocused] = useState(false);
    const focusedRef = useRef(focused);

    const getContent = () => {
      if (component) {
        return component;
      }

      return (
        <Label
          lineHeight={size}
          paddingLeft={Amount.Less}
          paddingRight={Amount.Less}
          textSelectable={false}
          fill={fill}
          overflow={Overflow.Hidden}
          textSize={textSize}
          textColor={
            !label && placeholder ? TextColor.InputPlaceholder : textColor
          }
          textOverflow={TextOverflow.Ellipsis}
        >
          {label ?? placeholder ?? ''}
        </Label>
      );
    };

    return (
      <InputContainer
        orientation={orientation}
        alignVertical={alignVertical}
        as="button"
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        borderRadiusBottomLeft={
          state?.dropdownVisible ? Amount.None : undefined
        }
        borderRadiusBottomRight={
          state?.dropdownVisible ? Amount.None : undefined
        }
        borderColor={
          state?.error && Array.isArray(state.error) && state.error.length > 0
            ? BorderColor.Error
            : borderColor
        }
        borderBottomColor={
          state?.dropdownVisible
            ? BorderColor.Transparent
            : state?.error &&
              Array.isArray(state.error) &&
              state.error.length > 0
            ? BorderColor.Error
            : borderColor
        }
        depth={state?.dropdownVisible ? Depth.Highest : Depth.Surface}
        className={`${className} dropdown-control`}
        cursor={cursor}
        onBlur={e => {
          focusedRef.current = false;
          setFocused(false);

          if (onBlur) {
            onBlur(e);
          }
        }}
        onFocus={e => {
          focusedRef.current = true;
          setFocused(true);

          if (onFocus) {
            onFocus(e);
          }
        }}
        form="null"
        shadow={state?.dropdownVisible ? Shadow.Surface : Shadow.Low}
        fill={fill}
        state={{
          ...state,
          focused:
            state?.focused !== undefined ? state.focused : focusedRef.current,
        }}
        {...props}
      >
        {getContent()}

        <Container
          alignHorizontal={AlignHorizontal.Center}
          alignVertical={AlignVertical.Center}
          orientation={Orientation.Horizontal}
          borderLeftColor={
            state?.dropdownVisible ? BorderColor.Transparent : BorderColor.Light
          }
          className="down-arrow"
          fill={Fill.None}
          height={Size.Smaller}
          width={size}
        >
          <Icon
            color={
              state?.dropdownVisible ? IconColor.Lightest : IconColor.Lighter
            }
            name={BasicIcons.CaretDownArrow}
            className={state?.dropdownVisible ? 'up' : 'down'}
            size={Size.Smallest}
            rotate={state?.dropdownVisible ? 180 : 0}
          />
        </Container>
      </InputContainer>
    );
  },
);
