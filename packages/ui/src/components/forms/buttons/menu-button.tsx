import { memo, ReactElement, useEffect, useRef, useState } from 'react';

import { getDropdownMinHeight } from '../../../lib/forms/dropdowns';
import {
  Amount,
  Color,
  ContrastColor,
  Depth,
  Shadow,
  Size,
} from '../../../types';
import { Container, ContainerProps } from '../../layout/container';
import { Menu, MenuProps } from '../../menus/menu';
import { TextProps } from '../../typography/text';
import { DropdownControl } from '../inputs/shared/dropdown-control';
import { DropdownPanel } from '../inputs/shared/dropdown-panel';

export type MenuButtonProps = ContainerProps<
  MenuProps &
    TextProps<{
      readonly label?: string;
    }>
>;

export const MenuButton = memo(
  ({
    backgroundColor = Color.Black,
    borderRadius = Amount.Least,
    className = '',
    items,
    label,
    size = Size.Default,
    state,
    padding = Amount.Least,
    textColor = ContrastColor.Black,
    ...props
  }: MenuButtonProps): ReactElement => {
    const [focused, setFocused] = useState(state?.focused ?? false);
    const focusedReference = useRef(focused);
    const [menuVisible, setMenuVisible] = useState(
      state?.dropdownVisible ?? false,
    );
    const menuVisibleReference = useRef(menuVisible);
    useEffect(() => {
      setFocused(menuVisible);
    }, [menuVisible]);

    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        borderRadiusBottomLeft={menuVisible ? Amount.None : borderRadius}
        borderRadiusBottomRight={menuVisible ? Amount.None : borderRadius}
        className={`${className} dropdown-input`}
        depth={menuVisible ? Depth.Higher : Depth.Surface}
        onBlur={() => {
          focusedReference.current = false;
          setFocused(false);
        }}
        onFocus={() => {
          focusedReference.current = true;
          setFocused(true);
        }}
        onMouseLeave={() => {
          menuVisibleReference.current = false;
          setMenuVisible(false);
        }}
        size={size}
        shadow={menuVisible ? Shadow.Higher : Shadow.Surface}
        {...props}
      >
        <DropdownControl
          backgroundColor={backgroundColor}
          onClick={() => {
            menuVisibleReference.current = !menuVisibleReference.current;
            setMenuVisible(menuVisibleReference.current);
          }}
          label={label}
          shadow={menuVisible ? Shadow.Surface : Shadow.High}
          size={size}
          state={{
            dropdownVisible:
              state?.dropdownVisible ?? menuVisibleReference.current,
          }}
          textColor={menuVisible ? ContrastColor.Black : textColor}
        />

        <DropdownPanel
          backgroundColor={backgroundColor}
          padding={padding}
          position={{ top: `calc(${Size.Default} - 3px)` }}
          maxHeight={320}
          minHeight={getDropdownMinHeight(items?.length ?? 1, Amount.Least)}
          state={{
            ...state,
            dropdownVisible: menuVisibleReference.current,
          }}
          {...props}
        >
          <Menu
            backgroundColor={Color.Transparent}
            items={items}
            onClick={() => {
              menuVisibleReference.current = false;
              setMenuVisible(false);
            }}
            padding={Amount.None}
            shadow={Shadow.Surface}

            // {...props}
          />
        </DropdownPanel>
      </Container>
    );
  },
);
