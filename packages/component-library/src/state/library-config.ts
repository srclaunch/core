import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentLibraryDocumentationConfig } from '@srclaunch/types';
import { RootState } from '@srclaunch/web-app';

export type ComponentLibraryState = {
  readonly config?: ComponentLibraryDocumentationConfig;
};
const initialState: ComponentLibraryState = {};
const configSlice = createSlice({
  initialState,
  name: 'libraryConfig',
  reducers: {
    setConfig: (
      state: RootState,
      action: PayloadAction<ComponentLibraryDocumentationConfig>,
    ) => {
      state.config = action.payload;
    },
  },
});

export const { setConfig } = configSlice.actions;
export default configSlice.reducer;
