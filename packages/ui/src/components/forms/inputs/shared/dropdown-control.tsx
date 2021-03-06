import { BasicIcons } from '@srclaunch/icons';
import { ComponentRef, memo, ReactElement, useRef, useState } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  Depth,
  DepthShadow,
  Fill,
  Orientation,
  Sizes,
  TextColors,
  TextOverflow,
  TextSize,
} from '../../../../types';
import { Container } from '../../../layout/container';
// import { Spacer } from '../../../layout/spacer';
import { Icon, IconProps } from '../../../media/icon';
import { Label } from '../../../typography/label';
// import { Text, TextProps } from '../../../typography/text';
import { InputContainer, InputContainerProps } from './input-container';

type DropdownControlProps = InputContainerProps<string> & {
  readonly component?: ReactElement;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly ref?: ComponentRef<any>;
};

export const DropdownControl = memo(
  ({
    alignment = {},
    background = {},
    border = {},
    borderRadius = {},
    className = '',
    component,
    cursor = Cursor.Pointer,
    events = {},
    // icon,
    label,
    placeholder = 'Select an option',
    states = {},
    size = {},
    textSize = TextSize.Default,
    textColor = TextColors.DropdownMenu,
    ...props
  }: DropdownControlProps): ReactElement => {
    // const [focused, setFocused] = useState(false);
    // const focusedRef = useRef(focused);

    return (
      <InputContainer
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        as="button"
        background={{ color: BackgroundColors.DropdownMenu, ...background }}
        borderRadius={Object.assign(
          {},
          { all: Amount.Least, ...borderRadius },
          states.state?.dropdown?.visible
            ? {
                bottomLeft: Amount.None,
                bottomRight: Amount.None,
              }
            : {},
        )}
        border={Object.assign(
          {},
          {
            all: {
              color:
                states.state?.error &&
                Array.isArray(states.state.error) &&
                states?.state.error.length > 0
                  ? BorderColors.Error
                  : border?.all?.color ?? BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          },
          states.state?.dropdown?.visible
            ? {
                bottom: {
                  color: BorderColors.Transparent,
                  style: BorderStyle.Solid,
                  width: 1,
                },
              }
            : {},
        )}
        depth={states.state?.dropdown?.visible ? Depth.Highest : Depth.Surface}
        className={`${className} dropdown-control`}
        cursor={cursor}
        events={{
          ...events,
          focus: {
            onBlur: e => {
              // focusedRef.current = false;
              // setFocused(false);

              if (events.focus?.onBlur) {
                events.focus.onBlur(e);
              }
            },

            onFocus: e => {
              // focusedRef.current = true;
              // setFocused(true);

              if (events.focus?.onFocus) {
                events.focus.onFocus(e);
              }
            },
          },
        }}
        form="null"
        shadow={
          states.state?.dropdown?.visible
            ? DepthShadow.Surface
            : DepthShadow.Low
        }
        size={{
          fill: Fill.Horizontal,
          ...size,
        }}
        states={{
          state: {
            // focused:
            //   states.state?.focused !== undefined
            //     ? states.state.focused
            //     : focusedRef.current,
          },
          ...states,
        }}
        {...props}
      >
        {component ? (
          component
        ) : (
          <Label
            lineHeight={size?.height ?? Sizes.Default}
            padding={{
              left: Amount.Less,
              right: Amount.Less,
            }}
            selectable={false}
            size={{
              fill: Fill.Horizontal,
              minWidth: 100,
            }}
            textSize={textSize}
            textColor={
              !label && placeholder ? TextColors.InputPlaceholder : textColor
            }
            textOverflow={TextOverflow.Ellipsis}
          >
            {label ?? placeholder ?? ''}
          </Label>
        )}

        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            vertical: AlignVertical.Center,
          }}
          border={{
            left: {
              color: states.state?.dropdown?.visible
                ? BorderColors.Transparent
                : BorderColors.Light,

              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          className="down-arrow"
          padding={{
            left: Amount.Least,
            right: Amount.Least,
          }}
          size={{
            height: `calc(${size?.height ?? Sizes.Default} / 100 * 60)`,
            width: `calc(${size?.height ?? Sizes.Default} / 100 * 90)`,
          }}
        >
          <Icon
            color={
              states.state?.visible ? TextColors.Lightest : TextColors.Lighter
            }
            name={BasicIcons.CaretDownArrow}
            className={states.state?.visible ? 'up' : 'down'}
            size={{
              height: Sizes.Smallest,
              width: Sizes.Smallest,
            }}
            // transform={{
            //   rotate: menuVisible ? -180 : 0,
            // }}
          />
        </Container>
      </InputContainer>
    );
  },
);
