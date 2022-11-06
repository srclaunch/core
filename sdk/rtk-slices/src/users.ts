import { User } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<User>();

export const UserSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.users,
);

type UserState = {
  action: {
    createUser: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createUsers: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteUser: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteUsers: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getUser: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getUsers: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateUser: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateUsers: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
  },
  inProgress?: boolean;
  lastUpdated?: ISO8601String;
};

const initialState = {
  action: {
    createUser: {
      inProgress: false,
    },
    createUsers: {
      inProgress: false,
    },
    deleteUser: {
      inProgress: false,
    },
    deleteUsers: {
      inProgress: false,
    },
    getUser: {
      inProgress: false,
    },
    getUsers: {
      inProgress: false,
    },
    updateUser: {
      inProgress: false,
    },
    updateUsers: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<UserState>(initialState),
  name: 'users',
  reducers: {
    addUser: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addUsers: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeUser: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeUsers: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateUser: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateUsers: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createUser' | 'createUsers' |
        'deleteUser' | 'deleteUsers' |
        'getUser' | 'getUsers' |
        'updateUser' | 'updateUsers';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createUser' | 'createUsers' |
        'deleteUser' | 'deleteUsers' |
        'getUser' | 'getUsers' |
        'updateUser' | 'updateUsers';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createUser = (user: User): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createUser',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createUser(user);
  
      dispatch(slice.actions.addUser(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createUser',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating User', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createUser',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUser',
        inProgress: false,
      }));
    }
  };

export const createUsers = (users: User[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createUsers',
        inProgress: true,
      }));

      const response = await httpClient.default.createUsers(users);
      
      dispatch(slice.actions.addUsers(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUsers',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Users', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createUsers',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUsers',
        inProgress: false,
      }));
    }
  };

export const deleteUser = (user: User['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUser',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteUser(user);
      
      dispatch(slice.actions.removeUser(user));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUser',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting User', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteUser',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUser',
        inProgress: false,
      }));
    }
  };

export const deleteUsers = (users: User['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUsers',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteUsers(users);
  
      dispatch(slice.actions.removeUsers(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUsers',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Users', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteUsers',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUsers',
        inProgress: false,
      }));
    }
  };

export const getUser = (user: User['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getUser',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getUser(user);
  
      if (response?.body) {
        dispatch(slice.actions.addUser(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getUser',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting User', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getUser',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getUser',
        inProgress: false,
      }));
    }
  };

export const getUsers = ({
  conditions = [],
  filters = {},
  limit = 100,
  offset = 0
}: { 
  conditions?: Condition[],
  filters?: Record<string, string>,
  limit?: number;
  offset?: number
}): AppThunk =>  async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(slice.actions.setActionInProgress({
      type: 'getUsers',
      inProgress: true,
    }));

    const response = await httpClient.default.getUsers({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addUsers(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getUsers',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting Users', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getUsers',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getUsers',
      inProgress: false,
    }));
  }
};


export const updateUser = (user: User): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUser',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateUser(user.id, user);
  
      if (response?.body) {
        dispatch(slice.actions.updateUser({ id: user.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateUser',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating User', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateUser',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUser',
        inProgress: false,
      }));
    }
  };
  

export const updateUsers = (users: User[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUsers',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateUsers(users);
      
      dispatch(slice.actions.updateUsers(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUsers',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating Users', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateUsers',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUsers',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  