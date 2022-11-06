import { memo, ReactElement } from 'react';

import { IconProps } from '../media/icon';
import {
  AlignHorizontal,
  Amount,
  BackgroundColor,
  Size,
  TextColor,
  TextOverflow,
} from '../../types';
import { Button, ButtonProps, ButtonType } from '../forms/buttons/button';
import { NavigationLink } from '../navigation/navigation-link';
import { Label } from '../typography/label';

export type MenuItemProps = ButtonProps & {
  readonly component?: ReactElement;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly title?: string;
  readonly to?: string;
  readonly value?: unknown;
};

export const MenuItem = memo(
  ({
    alignHorizontal = AlignHorizontal.Left,
    as = 'button',
    borderRadius = Amount.Least,
    className = '',
    component,
    paddingLeft = Amount.Less,
    paddingRight = Amount.Less,
    icon,
    label,
    onClick,
    lineHeight = Size.Default,
    state,
    to,
    textColor = TextColor.Default,
    ...props
  }: MenuItemProps): ReactElement => {
    if (to) {
      return (
        <NavigationLink
          alignHorizontal={alignHorizontal}
          as={as}
          borderRadius={borderRadius}
          // background={{
          //   color: hovered
          //     ? BackgroundColor.Primary
          //     : BackgroundColor.Transparent,
          //   ...background,
          // }}
          className={`${className} menu-item`}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();

            if (onClick) onClick(e);
          }}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          active={{
            backgroundColor: BackgroundColor.Primary,

            // shadow: {
            //   blur: 7,
            //   color: BackgroundColor.Primary,
            //   opacity: 35,
            //   x: 0,
            //   y: 2,
            //   spread: 4,
            // },
            textColor: TextColor.PrimaryContrast,
          }}
          focused={{
            textColor: TextColor.PrimaryContrast,
          }}
          hovered={{
            backgroundColor: BackgroundColor.Primary,
            textColor: TextColor.PrimaryContrast,
          }}
          to={to}
          {...props}
        >
          {component ?? (
            <Label
              icon={icon}
              lineHeight={lineHeight}
              lineWrap={false}
              textOverflow={TextOverflow.Ellipsis}
              {...props}
            >
              {label}
            </Label>
          )}
        </NavigationLink>
      );
    }

    return (
      <Button
        alignHorizontal={AlignHorizontal.Left}
        borderRadius={borderRadius}
        backgroundColor={
          state?.hovered ? BackgroundColor.Primary : BackgroundColor.Transparent
        }
        form="null"
        icon={icon}
        lineHeight={lineHeight}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();

          if (onClick) onClick(e);
        }}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        type={ButtonType.Transparent}
        state={state}
        {...props}
      >
        {component ?? (
          <Label
            icon={icon}
            lineHeight={lineHeight}
            textColor={textColor}
            state={state}
            {...props}
          >
            {label}
          </Label>
        )}
      </Button>
    );
    // return (
    //   <Container
    //     as={as}
    //     backgroundColor={backgroundColor}
    //     boxShadow={boxShadow}
    //     borderRadius={borderRadius}
    //     className={`${className} menu-item`}
    //     {...props}
    //   >
    //     {title && <Label>{title}</Label>}

    //     {icon && <Icon {...icon} />}
    //     {label && <Label>{label}</Label>}

    //     {to && <NavigationLink to={to}>{to}</NavigationLink>}
    //     {value && <Label>{value}</Label>}
    //     {onClick && (
    //       <Button
    //         type={ButtonType.Secondary}
    //         onClick={(e: MouseEvent<HTMLButtonElement>): void => {
    //           onClick({
    //             event: e,
    //             value,
    //           });
    //         }}
    //       >
    //         {label}
    //       </Button>
    //     )}
    //   </Container>
    // );
  },
);
