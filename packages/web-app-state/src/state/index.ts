import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { Model } from '@srclaunch/types';

import app from './app';
import { createModelsReducer } from './models';
import ui from './ui';
import user from './user';

export const createRootReducer = ({
  models,
  reducers,
}: {
  readonly models?: Record<string, Model>;
  readonly reducers?: { readonly [k: string]: Reducer<unknown, AnyAction> };
}): Reducer => {
  return combineReducers({
    ...reducers,
    app,
    models: createModelsReducer(models),
    ui,
    user,
  });
};
