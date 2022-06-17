import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebAppOptions } from '@srclaunch/types';

const initialState: WebAppOptions | undefined = {
  aws: {},
};

const slice = createSlice({
  initialState,
  name: 'config',
  reducers: {
    setConfig: (state, action: PayloadAction<WebAppOptions | undefined>) => {
      if (action.payload) {
        const { aws } = action.payload;

        state.aws = aws;
      }
    },
  },
});

export const { setConfig } = slice.actions;
export default slice.reducer;
