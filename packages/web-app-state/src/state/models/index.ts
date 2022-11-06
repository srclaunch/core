import { AnyAction, createSlice, Reducer } from '@reduxjs/toolkit';
import { Model } from '@srclaunch/types';

import { AppThunk } from '../../types';
// import { useRouteMatch } from 'react-router-dom';

type ModelState = {
  readonly models?: {
    readonly [name: string]: Model;
  };
};

export const createModelsReducer = (
  models: Record<string, Model> = {},
): Reducer<ModelState, AnyAction> => {
  const initialState: ModelState = {
    models: { ...models },
  };

  return createSlice({
    initialState,
    name: 'models',
    reducers: {
      init: () => {},
    },
  }).reducer;
};

export const showModelPanel =
  ({
    edit = false,
    model,
    id,
  }: {
    readonly edit?: boolean;
    readonly model: Model['name'];
    readonly id?: Model['id'];
  }): AppThunk =>
  async (dispatch, getState) => {
    // const { pathname } = getState().router.location;

    if (model && id && edit) {
      // dispatch(push(`${pathname}?model=${model}&id=${id}&edit=true`));
    } else if (model && id) {
      // dispatch(push(`${pathname}?model=${model}&id=${id}`));
    } else if (model && !id) {
      // dispatch(push(`${pathname}?model=${model}`));
    }
  };

export const hideModelPanel = (): AppThunk => async (dispatch, getState) => {
  // const { pathname } = getState().router.location;
  // dispatch(push(pathname));
};
