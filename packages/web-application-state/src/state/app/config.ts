import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebApplicationConfiguration } from '@srclaunch/types';

type AppState = WebApplicationConfiguration | undefined;

const initialState: AppState = {
  aws: {},
};

const slice = createSlice({
  initialState,
  name: 'config',
  reducers: {
    setConfig: (
      state,
      action: PayloadAction<WebApplicationConfiguration | undefined>,
    ) => {
      if (action.payload) {
        const { aws } = action.payload;

        state.aws = aws;
      }
    },
  },
});

export const { setConfig } = slice.actions;
export default slice.reducer;
