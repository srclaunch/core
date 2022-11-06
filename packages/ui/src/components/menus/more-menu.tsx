import { memo, ReactElement, useRef, useState } from 'react';

import { getDropdownMinHeight } from '../../lib/forms/dropdowns';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  Color,
  ContrastColor,
  Cursor,
  Depth,
  Orientation,
  Shadow,
  Size,
} from '../../types';
import { Button } from '../forms/buttons/button';
import { Container } from '../layout/container';
import { HoverPanel } from '../modals/hover-panel';
import { Menu, MenuProps } from './menu';

export type MoreMenuProps = MenuProps<{
  readonly dotColor?: BackgroundColor;
}>;

export const MoreMenu = memo(
  ({
    backgroundColor = BackgroundColor.Dark,
    className = '',
    dotColor = BackgroundColor.Darker,
    padding = Amount.Least,
    size = Size.Default,
    state,
    items,
    ...props
  }: MoreMenuProps): ReactElement => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const menuVisibleReference = useRef(menuVisible);
    const dotFillColor =
      menuVisible || hovered ? ContrastColor.Primary : dotColor;

    return (
      // @ts-ignore
      <Container
        className={`${className} more-menu`}
        onMouseLeave={() => {
          menuVisibleReference.current = false;
          setMenuVisible(false);
        }}
      >
        <Button
          alignHorizontal={AlignHorizontal.Center}
          alignVertical={AlignVertical.Center}
          orientation={Orientation.Horizontal}
          as="button"
          cursor={Cursor.Pointer}
          backgroundColor={
            menuVisibleReference.current
              ? BackgroundColor.Primary
              : backgroundColor
          }
          backgroundColorOpacity={menuVisibleReference.current ? 70 : 100}
          borderRadius={Amount.All}
          depth={Depth.Surface}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            menuVisibleReference.current = !menuVisibleReference.current;
            setMenuVisible(menuVisibleReference.current);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          height={size ?? Size.Default}
          width={size ?? Size.Default}
          hovered={{
            backgroundColor: BackgroundColor.Primary,
          }}
          state={{
            focused,
            ...state,
          }}
          {...props}
        >
          {Array.from({ length: 3 })
            .fill(0)
            .map((color, index) => (
              <Container
                borderRadius={Amount.All}
                backgroundColor={dotFillColor}
                key={index}
                marginLeft={1}
                marginRight={1}
                height={5}
                width={5}
              />
            ))}
        </Button>

        <HoverPanel
          padding={padding}
          positionTop={`calc(${Size.Default} - 3px)`}
          maxHeight={320}
          minHeight={getDropdownMinHeight(items?.length ?? 1, Amount.Least)}
          state={{
            focused,
            visible: menuVisibleReference.current,
            ...state,
          }}
          {...props}
        >
          <Menu
            backgroundColor={BackgroundColor.Transparent}
            items={items}
            onClick={() => {
              menuVisibleReference.current = false;
              setMenuVisible(false);
            }}
            shadow={Shadow.Surface}
          />
        </HoverPanel>
      </Container>
    );
  },
);
