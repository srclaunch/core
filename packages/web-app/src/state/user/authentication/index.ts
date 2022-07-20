import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISO8601String } from '@srclaunch/types';
import { DateTime } from 'luxon';

import login from './login';
import signup from './signup';
import usernameAvailability from './username-availability';
import verification from './verification';

type AuthenticationState = {
  readonly initialized: boolean;
  readonly lastUpdated?: ISO8601String;
  readonly loggedIn: boolean;
  readonly tokens?: {
    readonly accessToken: string;
  };
};

const initialState: AuthenticationState = {
  initialized: false,
  lastUpdated: undefined,
  loggedIn: false,
};

const slice = createSlice({
  initialState,
  name: 'authentication',
  reducers: {
    setLoggedIn: (
      state,
      action: PayloadAction<{
        readonly accessToken: string;
      }>,
    ) => {
      state.lastUpdated = DateTime.now().toISO();
      state.tokens = action.payload;
      state.loggedIn = true;
    },
    setLoggedOut: state => {
      state.lastUpdated = DateTime.now().toISO();
      state.tokens = undefined;
      state.loggedIn = false;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = slice.actions;

export default combineReducers({
  login,
  signup,
  state: slice.reducer,
  usernameAvailability,
  verification,
});
