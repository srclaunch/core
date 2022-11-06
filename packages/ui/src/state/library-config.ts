// import {  } from '@reduxjs/toolkit';
import { ComponentLibraryDocumentationConfig } from '@srclaunch/types';
import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  AnyAction,
  CaseReducerActions,
  createSlice,
  PayloadAction,
  Reducer,
  RootState,
  Slice,
  SliceCaseReducers,
} from '@srclaunch/web-app-state';

export type ComponentLibraryState = {
  readonly config?: ComponentLibraryDocumentationConfig;
};

const initialState: ComponentLibraryState = {
  config: undefined,
};

export const configSlice = createSlice({
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
export default configSlice.reducer as Reducer<
  ComponentLibraryState,
  PayloadAction<ComponentLibraryDocumentationConfig>
>;
