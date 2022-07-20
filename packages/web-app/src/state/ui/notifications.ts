import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Notification } from '@srclaunch/types';
import { nanoid } from 'nanoid';

import { AppThunk } from '../../types';

const notificationAdapter = createEntityAdapter<Notification>({
  selectId: notification => notification.id.toString(),
});

const slice = createSlice({
  initialState: notificationAdapter.getInitialState(),
  name: 'notifications',
  reducers: {
    closeNotification: (state, action) => {
      notificationAdapter.removeOne(state, action.payload);
    },
    showNotification: (state, action) => {
      const notification = action.payload;

      notificationAdapter.addOne(state, {
        ...notification,
        id: notification.id,
      });
    },
  },
});

export function addToastNotification({
  color,
  icon,
  message,
  timed,
  seconds,
}: {
  readonly color: string;
  readonly icon: string;
  readonly message: string;
  readonly timed: boolean;
  readonly seconds: number;
}): AppThunk {
  return async (dispatch, getState) => {
    const id = nanoid(6);

    dispatch(
      slice.actions.showNotification({
        notification: {
          color,
          icon,
          id,
          message,
          seconds,
          timed,
        },
      }),
    );

    if (timed && seconds) {
      setTimeout(() => {
        dispatch(slice.actions.closeNotification(id));
      }, 3000);
    }
  };
}

export default slice.reducer;
