import { Theme } from '@srclaunch/types';
import {
  RootState,
  setTheme,
  useDispatch,
  useSelector,
} from '@srclaunch/web-app';
import { memo, ReactElement } from 'react';

import { AlignVertical, Fill, Overflow } from '../../types';
import {
  DropdownInput,
  DropdownInputProps,
} from '../forms/inputs/menu/dropdown-input';
import { Container, ContainerProps } from '../layout/container';
import { InputLabel } from '../typography/labels/forms/input-label';

export type ThemeSelectorProps = ContainerProps &
  DropdownInputProps & {
    readonly label?: string;
  };

export const ThemeSelector = memo(
  ({ label, ...props }: ThemeSelectorProps): ReactElement => {
    const dispatch = useDispatch();

    const { current, list } = useSelector(
      (state: RootState) => state.ui.themes,
    );

    return (
      <>
        {label && <InputLabel>{label}</InputLabel>}

        <DropdownInput
          defaultValue={current}
          events={{
            input: {
              onValueChange: ({ value }: { value: string }) => {
                const newTheme = list.find((t: Theme) => t.id === value);

                dispatch(setTheme(newTheme.id));
              },
            },
          }}
          name="theme"
          menu={list.map((i: Theme) => {
            return {
              label: i.name,
              value: i.id,
            };
          })}
          placeholder="Choose a theme"
          {...props}
        />
      </>
    );
  },
);
