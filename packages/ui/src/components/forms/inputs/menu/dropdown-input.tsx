import { ValidationProblem } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';

import { getDropdownMinHeight } from '../../../../lib/forms/dropdowns';
import { Amount, DepthShadow, Sizes } from '../../../../types';
import { Container, ContainerProps } from '../../../layout/container';
import { Menu, MenuProps } from '../../../menus/menu';
import { MenuItemProps } from '../../../menus/menu-item';
import { InputLabel } from '../../../typography/labels/forms/input-label';
import { DropdownControl } from '../shared/dropdown-control';
import { DropdownPanel } from '../shared/dropdown-panel';
import { InputProps } from '../shared/input';

export type DropdownInputProps<V = unknown> = ContainerProps &
  MenuProps &
  InputProps<V>;

export const DropdownInput = memo(
  ({
    borderRadius = {},
    className = '',
    defaultValue,
    events = {},
    label,
    menu,
    name,
    padding = {},
    placeholder,
    size = {},
    states = {},
    validation,
    ...props
  }: DropdownInputProps): ReactElement => {
    // const [value, setValue] = useState(defaultValue);
    const [focused, setFocused] = useState(states.state?.focused ?? false);
    const focusedRef = useRef(focused);
    const [menuVisible, setMenuVisible] = useState(
      states?.state?.dropdown?.visible ?? false,
    );
    const menuVisibleRef = useRef(menuVisible);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [item, setItem] = useState<MenuItemProps | undefined>(
      menu?.find((i: MenuItemProps) => i.value === defaultValue),
    );
    const [valueChanged, setValueChanged] = useState(false);

    // useEffect(() => {
    //   if (onChange && item)
    //     onChange({
    //       value: item.value as CountryCode | CurrencyCode | LanguageCode,
    //     });
    // }, [item]);

    useEffect(() => {
      if (valueChanged) {
        if (validation && validation?.conditions) {
          // const probs = validate(
          //   item,
          //   validation.conditions,
          // ) as ValidationProblem[];

          const probs: ValidationProblem[] = [];
          setProblems(probs);

          if (events.input?.onValueChange)
            events.input.onValueChange({
              validation: {
                problems: probs,
                validated: probs.length === 0,
              },
              value: item?.value,
            });
        } else {
          if (events.input?.onValueChange)
            events.input.onValueChange({
              value: item?.value,
            });
        }
      }
    }, [item]);

    useEffect(() => {
      setItem(
        menu?.find((i: MenuItemProps) => i.value === defaultValue) ??
          item ??
          undefined,
      );
    }, [defaultValue]);

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel states={{ state: { error: problems } }}>
            {label}
          </InputLabel>
        )}

        <Container
          borderRadius={Object.assign(
            {},
            { all: Amount.Least, ...borderRadius },
            menuVisible
              ? {
                  bottomLeft: Amount.None,
                  bottomRight: Amount.None,
                }
              : {},
          )}
          className={`${className} dropdown-input`}
          // depth={menuVisible ? Depth.Higher : Depth.Surface}
          events={{
            mouse: {
              onMouseLeave: () => {
                menuVisibleRef.current = false;
                setMenuVisible(false);
              },
            },
          }}
          size={{
            height: Sizes.Default,
            ...size,
          }}
          shadow={menuVisible ? DepthShadow.Higher : DepthShadow.Surface}
          {...props}
        >
          <DropdownControl
            component={item?.component}
            events={{
              focus: {
                onBlur: () => {
                  focusedRef.current = false;
                  setFocused(false);
                },
                onFocus: () => {
                  focusedRef.current = true;
                  setFocused(true);
                },
              },
              mouse: {
                onClick: () => {
                  menuVisibleRef.current = !menuVisibleRef.current;
                  setMenuVisible(menuVisibleRef.current);
                },
              },
            }}
            icon={item?.icon}
            label={item?.label}
            name={name}
            placeholder={placeholder}
            states={{
              state: {
                dropdown: { visible: menuVisibleRef.current },
                error: problems,
                // focused: focusedRef.current,
              },
              ...states,
            }}
            size={{
              height: Sizes.Default,
              ...size,
            }}
          />

          <DropdownPanel
            padding={{ all: Amount.Least, ...padding }}
            position={{ top: `calc(${Sizes.Default} - 3px)` }}
            size={{
              maxHeight: 320,
              minHeight: getDropdownMinHeight(menu?.length ?? 1, Amount.Less),
            }}
            states={{
              ...states,
              state: {
                ...states.state,
                dropdown: { visible: menuVisibleRef.current },
                // focused: focusedRef.current,
              },
            }}
            {...props}
          >
            <Menu
              menu={menu}
              onItemClick={i => {
                setValueChanged(true);
                setItem(i);
                menuVisibleRef.current = false;
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
