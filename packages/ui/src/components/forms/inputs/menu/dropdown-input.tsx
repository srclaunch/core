import { ValidationProblem } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';

import { getDropdownMinHeight } from '../../../../lib/forms/dropdowns';
import { Amount, Depth, Fill, Shadow, Size } from '../../../../types';
import { Container, ContainerProps } from '../../../layout/container';
import { Menu, MenuProps } from '../../../menus/menu';
import { MenuItemProps } from '../../../menus/menu-item';
import { InputLabel } from '../../../typography/labels/forms/input-label';
import { DropdownControl } from '../shared/dropdown-control';
import { DropdownPanel } from '../shared/dropdown-panel';
import { InputProps } from '../shared/input';

export type DropdownInputProps<V = unknown> = ContainerProps<
  InputProps<V> & MenuProps
>;

export const DropdownInput = memo(
  ({
    borderRadius = Amount.Least,
    className = '',
    defaultValue,
    padding = Amount.Least,
    label,
    fill = Fill.Horizontal,
    items,
    height = Size.Default,
    name,
    onValueChange,
    placeholder,
    size = Size.Default,
    state,
    validation,
    ...props
  }: DropdownInputProps): ReactElement => {
    // const [value, setValue] = useState(defaultValue);
    const [focused, setFocused] = useState(state?.focused ?? false);
    const focusedRef = useRef(focused);
    const [menuVisible, setMenuVisible] = useState(
      state?.dropdownVisible ?? false,
    );
    const menuVisibleReference = useRef(menuVisible);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [item, setItem] = useState<MenuItemProps | undefined>(
      items?.find((index: MenuItemProps) => index.value === defaultValue),
    );

    // useEffect(() => {
    //   if (onChange && item)
    //     onChange({
    //       value: item.value as CountryCode | CurrencyCode | LanguageCode,
    //     });
    // }, [item]);

    useEffect(() => {
      if (item?.id !== defaultValue) {
        setItem(
          items?.find((index: MenuItemProps) => index.value === defaultValue) ??
            item ??
            undefined,
        );
      }
    }, [defaultValue]);

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel state={{ error: problems }}>{label}</InputLabel>
        )}

        <Container
          borderRadius={borderRadius}
          borderRadiusBottomLeft={menuVisible ? Amount.None : borderRadius}
          borderRadiusBottomRight={menuVisible ? Amount.None : borderRadius}
          fill={fill}
          className={`${className} dropdown-input`}
          depth={menuVisible ? Depth.Highest : Depth.Surface}
          onMouseLeave={() => {
            menuVisibleReference.current = false;
            setMenuVisible(false);
          }}
          height={height}
          shadow={menuVisible ? Shadow.Higher : Shadow.Surface}
          {...props}
        >
          <DropdownControl
            component={item?.component}
            onClick={() => {
              menuVisibleReference.current = !menuVisibleReference.current;
              setMenuVisible(menuVisibleReference.current);
            }}
            onBlur={() => {
              focusedRef.current = false;
              setFocused(false);
            }}
            onFocus={() => {
              focusedRef.current = true;
              setFocused(true);
            }}
            icon={item?.icon}
            label={item?.label}
            name={name}
            placeholder={placeholder}
            state={{
              ...state,
              dropdownVisible: menuVisible ?? menuVisibleReference.current,
              error: problems,
              focused: focusedRef.current,
            }}
            height={size}
            {...props}
          />

          <DropdownPanel
            padding={padding}
            positionTop={`calc(${size} - 3px)`}
            maxHeight={320}
            minHeight={getDropdownMinHeight(items?.length ?? 1, Amount.Less)}
            state={{
              ...state,
              dropdownVisible: menuVisible ?? menuVisibleReference.current,
              error: problems,
              focused: focusedRef.current,
            }}
            {...props}
          >
            <Menu
              items={items}
              onItemClick={index => {
                setItem(index);

                if (validation && validation?.conditions) {
                  // const probs = validate(
                  //   item,
                  //   validation.conditions,
                  // ) as ValidationProblem[];

                  const probs: ValidationProblem[] = [];
                  // setProblems(probs);

                  if (onValueChange)
                    onValueChange({
                      validation: {
                        problems: probs,
                        validated: probs.length === 0,
                      },
                      value: index.value,
                    });
                } else {
                  if (onValueChange)
                    onValueChange({
                      value: index?.value,
                    });
                }

                menuVisibleReference.current = false;
                setMenuVisible(false);
              }}
              padding={padding}
              // {...props}
            />
          </DropdownPanel>
        </Container>
      </>
    );
  },
);
