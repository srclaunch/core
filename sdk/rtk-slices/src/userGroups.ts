import { UserGroup } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<UserGroup>();

export const UserGroupSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.userGroups,
);

type UserGroupState = {
  action: {
    createUserGroup: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createUserGroups: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteUserGroup: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteUserGroups: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getUserGroup: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getUserGroups: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateUserGroup: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateUserGroups: {
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
    createUserGroup: {
      inProgress: false,
    },
    createUserGroups: {
      inProgress: false,
    },
    deleteUserGroup: {
      inProgress: false,
    },
    deleteUserGroups: {
      inProgress: false,
    },
    getUserGroup: {
      inProgress: false,
    },
    getUserGroups: {
      inProgress: false,
    },
    updateUserGroup: {
      inProgress: false,
    },
    updateUserGroups: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<UserGroupState>(initialState),
  name: 'userGroups',
  reducers: {
    addUserGroup: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addUserGroups: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeUserGroup: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeUserGroups: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateUserGroup: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateUserGroups: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createUserGroup' | 'createUserGroups' |
        'deleteUserGroup' | 'deleteUserGroups' |
        'getUserGroup' | 'getUserGroups' |
        'updateUserGroup' | 'updateUserGroups';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createUserGroup' | 'createUserGroups' |
        'deleteUserGroup' | 'deleteUserGroups' |
        'getUserGroup' | 'getUserGroups' |
        'updateUserGroup' | 'updateUserGroups';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createUserGroup = (userGroup: UserGroup): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createUserGroup',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createUserGroup(userGroup);
  
      dispatch(slice.actions.addUserGroup(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createUserGroup',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating UserGroup', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createUserGroup',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUserGroup',
        inProgress: false,
      }));
    }
  };

export const createUserGroups = (userGroups: UserGroup[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createUserGroups',
        inProgress: true,
      }));

      const response = await httpClient.default.createUserGroups(userGroups);
      
      dispatch(slice.actions.addUserGroups(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUserGroups',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating UserGroups', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createUserGroups',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUserGroups',
        inProgress: false,
      }));
    }
  };

export const deleteUserGroup = (userGroup: UserGroup['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserGroup',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteUserGroup(userGroup);
      
      dispatch(slice.actions.removeUserGroup(userGroup));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserGroup',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting UserGroup', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteUserGroup',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserGroup',
        inProgress: false,
      }));
    }
  };

export const deleteUserGroups = (userGroups: UserGroup['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserGroups',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteUserGroups(userGroups);
  
      dispatch(slice.actions.removeUserGroups(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserGroups',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting UserGroups', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteUserGroups',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserGroups',
        inProgress: false,
      }));
    }
  };

export const getUserGroup = (userGroup: UserGroup['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getUserGroup',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getUserGroup(userGroup);
  
      if (response?.body) {
        dispatch(slice.actions.addUserGroup(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getUserGroup',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting UserGroup', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getUserGroup',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getUserGroup',
        inProgress: false,
      }));
    }
  };

export const getUserGroups = ({
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
      type: 'getUserGroups',
      inProgress: true,
    }));

    const response = await httpClient.default.getUserGroups({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addUserGroups(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getUserGroups',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting UserGroups', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getUserGroups',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getUserGroups',
      inProgress: false,
    }));
  }
};


export const updateUserGroup = (userGroup: UserGroup): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserGroup',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateUserGroup(userGroup.id, userGroup);
  
      if (response?.body) {
        dispatch(slice.actions.updateUserGroup({ id: userGroup.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateUserGroup',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating UserGroup', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateUserGroup',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserGroup',
        inProgress: false,
      }));
    }
  };
  

export const updateUserGroups = (userGroups: UserGroup[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserGroups',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateUserGroups(userGroups);
      
      dispatch(slice.actions.updateUserGroups(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserGroups',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating UserGroups', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateUserGroups',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserGroups',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  