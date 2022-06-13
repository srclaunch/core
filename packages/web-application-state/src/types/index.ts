import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { createStore } from '../index';

export type AppStore = ReturnType<typeof createStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;

export type AppThunk<ReturnType = RootState> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type AppDispatch = RootState['dispatch'];
