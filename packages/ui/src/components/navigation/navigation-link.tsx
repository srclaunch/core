import { memo, ReactElement, useEffect, useState } from 'react';
import {
  NavLink,
  useLocation,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

import { useConfig } from '../../lib/hooks/use-config';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Cursor,
  LinkProps as LinkProperties,
  Orientation,
  Size,
  Sizes,
  TextColors,
} from '../../types';
import {
  Container,
  ContainerProps as ContainerProperties,
} from '../layout/container';
import { IconProps as IconProperties } from '../media/icon';
import { MenuItemProps as MenuItemProperties } from '../menus/menu-item';
import { Label, LabelProps as LabelProperties } from '../typography/label';

export type NavigationLinkProps = LabelProperties &
  LinkProperties & {
    readonly activeClassName?: string;
    readonly icon?: IconProperties;
    readonly inline?: boolean;
    readonly label?: string;
    readonly matchExactPath?: boolean;
    readonly menu?: readonly MenuItemProperties[];
    readonly size?: Size;
  };

export const NavigationLink = memo(
  ({
    activeClassName = 'active',
    alignment = {},
    as = 'span',
    // background = {},
    borderRadius = {},
    children,
    className = '',
    cursor = Cursor.Pointer,
    events = {},
    inline = false,
    label,
    lineHeight = Sizes.Smaller,
    margin,
    matchExactPath = false,
    menu,
    padding = {},
    rel,
    states = {},
    target,
    textColor = TextColors.Primary,
    textSize,
    textWeight,
    to,
    ...properties
  }: NavigationLinkProps): ReactElement => {
    const config = useConfig();
    const resolved = useResolvedPath(to);
    const match = useMatch({ end: matchExactPath, path: resolved.pathname });
    const location = useLocation();

    // console.log('config,', config);
    return (
      <NavLink
        className={`${className} navigation-link`}
        rel={rel}
        target={target}
        to={to + location.search}
        style={{
          color: 'unset',
          display: inline ? 'inline-flex' : 'flex',
          textDecoration: 'unset',
        }}
      >
        {label ? (
          <Label
            alignment={{
              // horizontal: menu ? AlignHorizontal.Stretch : AlignHorizontal.Left,
              // orientation: menu ? Orientation.Vertical : Orientation.Horizontal,
              // vertical: AlignVertical.Center,
              ...alignment,
            }}
            as={as}
            borderRadius={borderRadius}
            className={`${className} ${match ? activeClassName : ''} link`}
            cursor={cursor}
            margin={margin}
            padding={{
              bottom: menu ? padding?.left : padding?.bottom,
              ...padding,
            }}
            // shadow={{
            //   radius: 8,
            //   color: background?.color,
            //   x: 0,
            //   y: 3,
            //   opacity: 35,
            //   spread: 3,
            // }}

            lineHeight={lineHeight}
            states={{
              ...states,
              state: {
                current: match ? true : false,
                ...states.state,
              },
            }}
            textColor={textColor}
            textSize={textSize}
            textWeight={textWeight}
            {...properties}
          >
            {label}
          </Label>
        ) : (
          children
        )}
      </NavLink>
    );
  },
);

// const Container = styled.span<Omit<NavigationLinkProps, 'to'>>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${FocusedStyles};

//   cursor: pointer;
//   text-decoration: none;

//   * {
//     cursor: pointer;
//   }

//   &:before {
//     border-radius: calc(${props => props.borderRadius} + 3px);
//   }
// `;
