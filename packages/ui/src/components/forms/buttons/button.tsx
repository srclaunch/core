import { ComponentType, memo, ReactElement, useEffect, useState } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderStyle,
  Cursor,
  Orientation,
  Size,
  TextAlign,
  TextColor,
  TextDecorationPosition,
  TextSize,
  TextWeight,
} from '../../../types/index';
import { Container, ContainerProps } from '../../layout/container';
import { Label, LabelProps } from '../../typography/label';

export enum ButtonType {
  Default = 'default',
  Error = 'error',
  Info = 'info',
  Inline = 'inline',
  Link = 'link',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Transparent = 'transparent',
  Warning = 'warning',
  White = 'white',
}

export type ButtonProps = ContainerProps<
  LabelProps<{
    readonly form?: string;
    readonly label?: string;
    readonly type?: ButtonType;
  }>,
  HTMLButtonElement
>;

// const Wrapper = styled.button<ButtonProps>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${FocusedStyles};

//   * {
//     cursor: ${props => props.cursor};
//   }

//   &:before {
//     border-color: rgb(${props => props.backgroundColor});
//     border-radius: ${props => `calc(${props.borderRadius} + 3px)`};
//   }

//   ${props =>
//     props.disabled &&
//     css`
//       cursor: default;
//       opacity: 0.5;

//       * {
//         cursor: default;
//       }
//     `};

//   ${props =>
//     props.type === ButtonType.Link &&
//     css`
//       padding-left: calc($ {props.size} / 5) !important;
//       padding-right: calc($ {props.size} / 5) !important;

//       &:before {
//         border-radius: ${Amount.All};
//         left: -9px;
//         right: -9px;
//       }
//     `};
// `;

/**
 * General purpose button component.
 *
 * @example
 * One
 * ```
 * {children}
 * ```
 * @example
 * Two
 * ```
 * // Prints "0":
 * console.log(add(1,-1));
 * ```
 */
export const Button = memo(
  ({
    alignHorizontal = AlignHorizontal.Center,
    alignVertical = AlignVertical.Center,
    orientation = Orientation.Horizontal,
    as = 'button',
    backgroundColor,
    borderStyle = BorderStyle.None,
    borderRadius = Amount.All,
    children,
    className = '',
    hovered,
    cursor = Cursor.Pointer,
    active,
    form,
    focusable = true,
    icon,
    label = 'Submit',
    lineHeight = Size.Default,
    paddingLeft = Amount.Default,
    paddingRight = Amount.Default,
    state,
    textAlign = TextAlign.Center,
    textColor,
    textDecorationPosition = TextDecorationPosition.None,
    textSize = TextSize.Default,
    textWeight = TextWeight.Default,
    type = ButtonType.Default,
    ...props
  }: ButtonProps): ReactElement => {
    const [focused, setFocused] = useState(false);
    const [colors, setColors] = useState<{
      backgroundColor?: BackgroundColor;
      textColor?: TextColor;
    }>();

    const getColors = () => {
      if (!type) {
        return {
          backgroundColor,
          textColor,
        };
      }

      switch (type) {
        case ButtonType.Default:
          return {
            backgroundColor: BackgroundColor.Black,
            textColor: TextColor.BlackContrast,
          };
        case ButtonType.Error:
          return {
            backgroundColor: BackgroundColor.Error,
            textColor: TextColor.ErrorContrast,
          };
        case ButtonType.Info:
          return {
            backgroundColor: BackgroundColor.Info,
            textColor: TextColor.InfoContrast,
          };
        case ButtonType.Inline:
          return {
            backgroundColor: BackgroundColor.Transparent,
            textColor: TextColor.Primary,
          };

        case ButtonType.Link:
          return {
            backgroundColor: BackgroundColor.Transparent,
            textColor: TextColor.Primary,
          };
        case ButtonType.Primary:
          return {
            backgroundColor: BackgroundColor.Primary,
            textColor: TextColor.PrimaryContrast,
          };
        case ButtonType.Secondary:
          return {
            backgroundColor: BackgroundColor.Secondary,
            textColor: TextColor.SecondaryContrast,
          };
        case ButtonType.Success:
          return {
            backgroundColor: BackgroundColor.Success,
            textColor: TextColor.SuccessContrast,
          };
        case ButtonType.Transparent:
          return {
            backgroundColor: BackgroundColor.Transparent,
            textColor: TextColor.Default,
          };
        case ButtonType.Warning:
          return {
            backgroundColor: BackgroundColor.Warning,
            textColor: TextColor.WarningContrast,
          };
        case ButtonType.White:
          return {
            backgroundColor: BackgroundColor.White,
            textColor: TextColor.WhiteContrast,
          };
      }
    };

    useEffect(() => {
      setColors(getColors());
    }, []);

    useEffect(() => {
      setColors(getColors());
    }, [backgroundColor, type]);

    return (
      <Container
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        orientation={orientation}
        as={as}
        backgroundColor={backgroundColor ?? colors?.backgroundColor}
        borderStyle={borderStyle}
        borderRadius={borderRadius}
        className={`${className} button`}
        focusable={focusable}
        cursor={cursor}
        onBlur={() => {
          setFocused(false);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        form={form}
        paddingLeft={
          typeof children === 'string' || (!children && label)
            ? `calc((${lineHeight} / 4) * 2)`
            : paddingLeft
        }
        paddingRight={
          typeof children === 'string' || (!children && label)
            ? `calc((${lineHeight} / 4) * 2)`
            : paddingRight
        }
        // shadow={{
        //   radius: 8,
        //   color: colors?.backgroundColor,
        //   x: 0,
        //   y: 2,
        //   opacity: 35,
        //   spread: 4,
        // }}
        active={{
          backgroundColor: active?.backgroundColor ?? colors?.backgroundColor,
          backgroundColorOpacity: 80,
        }}
        hovered={{
          backgroundColor: hovered?.backgroundColor ?? colors?.backgroundColor,
          backgroundColorOpacity: 90,
        }}
        state={{
          ...state,
          focused,
        }}
        {...props}
      >
        {typeof children === 'string' || (!children && label) ? (
          <Label
            icon={icon}
            lineHeight={lineHeight}
            textSelectable={false}
            textAlign={textAlign}
            textColor={textColor ?? colors?.textColor}
            textDecorationPosition={textDecorationPosition}
            textSize={textSize}
            textWeight={textWeight}
            alignHorizontal={alignHorizontal}
            alignVertical={alignVertical}
            orientation={orientation}
            // {...props}
          >
            {children ?? label}
          </Label>
        ) : (
          <>{children}</>
        )}
      </Container>
    );
  },
);

(Button as ComponentType).defaultProps = {
  alignHorizontal: AlignHorizontal.Center,
  alignVertical: AlignVertical.Center,
  as: 'button',
  cursor: Cursor.Pointer,
  label: 'Submit',
  lineHeight: Size.Default,
  textAlign: TextAlign.Center,
  textSize: TextSize.Default,
  textWeight: TextWeight.Default,
  type: ButtonType.Default,
};
