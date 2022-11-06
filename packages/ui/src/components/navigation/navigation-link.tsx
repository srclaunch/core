import { memo, ReactElement } from 'react';
import {
  NavLink,
  useLocation,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

// import { useConfig } from '../../lib/hooks/use-config';
import { Cursor, Fill, Size, TextColor } from '../../types';
import { LinkProps } from '../typography';
import { Label, LabelProps } from '../typography/label';

export type NavigationLinkProps = LabelProps &
  LinkProps & {
    readonly activeClassName?: string;
    readonly inline?: boolean;
    readonly label?: string;
    readonly matchExactPath?: boolean;
    readonly size?: Size;
  };

export const NavigationLink = memo(
  ({
    activeClassName = 'active',

    // background = {},
    children,
    className = '',
    cursor = Cursor.Pointer,
    inline = false,
    fill = Fill.Horizontal,
    label,
    lineHeight = Size.Smaller,
    margin,
    matchExactPath = false,
    rel,
    state,
    target,
    textColor = TextColor.Primary,
    textSize,
    textWeight,
    to,
    ...props
  }: NavigationLinkProps): ReactElement => {
    // const config = useConfig();
    const resolved = useResolvedPath(to ?? '');
    const match = useMatch({ end: matchExactPath, path: resolved.pathname });
    const location = useLocation();

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
            className={`${className} ${match ? activeClassName : ''} link`}
            cursor={cursor}
            margin={margin}
            // shadow={{
            //   radius: 8,
            //   color: background?.color,
            //   x: 0,
            //   y: 3,
            //   opacity: 35,
            //   spread: 3,
            // }}
            fill={fill}
            lineHeight={lineHeight}
            state={{
              ...state,
              current: match ? true : false,
            }}
            textColor={textColor}
            textSize={textSize}
            textWeight={textWeight}
            {...props}
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
