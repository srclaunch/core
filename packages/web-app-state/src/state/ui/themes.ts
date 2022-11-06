import { createSlice } from '@reduxjs/toolkit';
import { AppLabDarkTheme, AppLabLightTheme } from '@srclaunch/themes';
import { Theme } from '@srclaunch/types';

type ThemeState = {
  readonly current?: Theme['id'];
  readonly list?: readonly Theme[];
};

const initialState: ThemeState = {
  current: AppLabLightTheme.id,
  list: [AppLabLightTheme, AppLabDarkTheme],
};

const slice = createSlice({
  initialState,
  name: 'themes',
  reducers: {
    addThemes: (state, action) => {
      state.list = action.payload;
    },
    setTheme: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { addThemes, setTheme } = slice.actions;
export default slice.reducer;
