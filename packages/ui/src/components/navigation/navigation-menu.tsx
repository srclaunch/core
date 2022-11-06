import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  Orientation,
  Overflow,
  Size,
  TextColor,
} from '../../types';
import { Container } from '../layout/container';
import { MenuProps } from '../menus/menu';
import { NavigationLink } from './navigation-link';

export type NavigationMenuProps = MenuProps<{
  readonly matchExactPath?: boolean;
}>;

export const NavigationMenu = memo(
  ({
    className = '',
    backgroundColor = BackgroundColor.NavigationMenu,
    alignHorizontal = AlignHorizontal.Stretch,
    alignVertical = AlignVertical.Stretch,
    matchExactPath = false,
    items = [],
    overflow = Overflow.Visible,
    paddingBottom = Amount.Least,
    paddingLeft = Amount.Default,
    paddingRight = Amount.Default,
    paddingTop = Amount.Least,
    marginBottom = Amount.Least,
    width = 160,
    ...props
  }: NavigationMenuProps): ReactElement => {
    const NavigationMenuLinks = () => {
      return (
        <>
          {items.map((item, key) => {
            return (
              <NavigationLink
                alignHorizontal={AlignHorizontal.Left}
                orientation={Orientation.Horizontal}
                backgroundColor={
                  item?.backgroundColor ?? BackgroundColor.Transparent
                }
                borderRadius={item.borderRadius ?? Amount.Least}
                className="navigation-menu-item"
                // icon={item.icon}
                key={key}
                label={item.label}
                lineHeight={Size.Large}
                marginBottom={marginBottom}
                matchExactPath={matchExactPath}
                paddingBottom={paddingBottom}
                paddingLeft={paddingLeft}
                paddingRight={paddingRight}
                paddingTop={paddingTop}
                active={{
                  backgroundColor: BackgroundColor.Dark,
                  textColor: TextColor.Darker,
                }}
                current={{
                  backgroundColor: BackgroundColor.Primary,
                  // lineHeight: Size.Large,
                  textColor: TextColor.PrimaryContrast,
                  // shadow: {
                  //   radius: 5,
                  //   color: BackgroundColor.Primary,
                  //   offsetX: 0,
                  //   offsetY: 1,
                  //   opacity: 35,
                  //   spreadRadius: 3,
                  // },
                }}
                focused={{
                  textColor: TextColor.PrimaryContrast,
                }}
                hovered={{
                  backgroundColor: BackgroundColor.Light,
                  textColor: TextColor.Darker,
                }}
                textColor={TextColor.Default}
                to={item.to ?? '#'}
                {...item}
              />
            );
          })}
        </>
      );
    };

    return (
      <Container
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        as="nav"
        backgroundColor={backgroundColor}
        className={`${className} navigation-menu`}
        overflow={overflow}
        padding={Amount.Less}
        width={width}
        {...props}
      >
        {/* {scrollable ? (
          <Scrollable>
            <NavigationMenuLinks />
          </Scrollable>
        ) : ( */}
        <NavigationMenuLinks />
        {/* )} */}
      </Container>
    );
  },
);
