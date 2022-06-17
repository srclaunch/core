import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Route as RouteType } from '@srclaunch/types';

const initialState: {
  // eslint-disable-next-line functional/prefer-readonly-type
  list?: Omit<RouteType, 'component'>[];
} = {
  list: [],
};

const slice = createSlice({
  initialState,
  name: 'routes',
  reducers: {
    setRoutes: (
      state,
      // eslint-disable-next-line functional/prefer-readonly-type
      action: PayloadAction<Omit<RouteType, 'component'>[]>,
    ) => {
      state.list = action.payload;
    },
  },
});

export const { setRoutes } = slice.actions;
export default slice.reducer;
