import { Theme } from '@srclaunch/types';
import {
  RootState,
  setTheme,
  useDispatch,
  useSelector,
} from '@srclaunch/web-app-state';
import { memo, ReactElement } from 'react';

import {
  DropdownInput,
  DropdownInputProps,
} from '../forms/inputs/menu/dropdown-input';

export type ThemeSelectorProps = DropdownInputProps<Theme['id']> & {
  readonly label?: string;
};

export const ThemeSelector = memo(
  ({ label, ...props }: ThemeSelectorProps): ReactElement => {
    const dispatch = useDispatch();

    const { current, list } = useSelector(
      (state: RootState) =>
        state.ui.themes as {
          current: Theme;
          list: Theme[];
        },
    );

    return (
      <DropdownInput
        defaultValue={current}
        onValueChange={({ value }) => {
          const newTheme = list.find((t: Theme) => t.id === value);

          dispatch(setTheme(newTheme?.id));
        }}
        label={label}
        name="theme"
        items={list.map((index: Theme) => {
          return {
            label: index.name,
            value: index.id,
          };
        })}
        placeholder="Choose a theme"
        {...props}
      />
    );
  },
);
