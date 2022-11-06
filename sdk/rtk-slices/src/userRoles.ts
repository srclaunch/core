import { UserRole } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<UserRole>();

export const UserRoleSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.userRoles,
);

type UserRoleState = {
  action: {
    createUserRole: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createUserRoles: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteUserRole: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteUserRoles: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getUserRole: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getUserRoles: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateUserRole: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateUserRoles: {
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
    createUserRole: {
      inProgress: false,
    },
    createUserRoles: {
      inProgress: false,
    },
    deleteUserRole: {
      inProgress: false,
    },
    deleteUserRoles: {
      inProgress: false,
    },
    getUserRole: {
      inProgress: false,
    },
    getUserRoles: {
      inProgress: false,
    },
    updateUserRole: {
      inProgress: false,
    },
    updateUserRoles: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<UserRoleState>(initialState),
  name: 'userRoles',
  reducers: {
    addUserRole: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addUserRoles: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeUserRole: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeUserRoles: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateUserRole: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateUserRoles: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createUserRole' | 'createUserRoles' |
        'deleteUserRole' | 'deleteUserRoles' |
        'getUserRole' | 'getUserRoles' |
        'updateUserRole' | 'updateUserRoles';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createUserRole' | 'createUserRoles' |
        'deleteUserRole' | 'deleteUserRoles' |
        'getUserRole' | 'getUserRoles' |
        'updateUserRole' | 'updateUserRoles';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createUserRole = (userRole: UserRole): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createUserRole',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createUserRole(userRole);
  
      dispatch(slice.actions.addUserRole(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createUserRole',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating UserRole', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createUserRole',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUserRole',
        inProgress: false,
      }));
    }
  };

export const createUserRoles = (userRoles: UserRole[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createUserRoles',
        inProgress: true,
      }));

      const response = await httpClient.default.createUserRoles(userRoles);
      
      dispatch(slice.actions.addUserRoles(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUserRoles',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating UserRoles', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createUserRoles',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createUserRoles',
        inProgress: false,
      }));
    }
  };

export const deleteUserRole = (userRole: UserRole['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserRole',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteUserRole(userRole);
      
      dispatch(slice.actions.removeUserRole(userRole));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserRole',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting UserRole', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteUserRole',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserRole',
        inProgress: false,
      }));
    }
  };

export const deleteUserRoles = (userRoles: UserRole['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserRoles',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteUserRoles(userRoles);
  
      dispatch(slice.actions.removeUserRoles(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserRoles',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting UserRoles', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteUserRoles',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteUserRoles',
        inProgress: false,
      }));
    }
  };

export const getUserRole = (userRole: UserRole['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getUserRole',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getUserRole(userRole);
  
      if (response?.body) {
        dispatch(slice.actions.addUserRole(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getUserRole',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting UserRole', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getUserRole',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getUserRole',
        inProgress: false,
      }));
    }
  };

export const getUserRoles = ({
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
      type: 'getUserRoles',
      inProgress: true,
    }));

    const response = await httpClient.default.getUserRoles({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addUserRoles(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getUserRoles',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting UserRoles', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getUserRoles',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getUserRoles',
      inProgress: false,
    }));
  }
};


export const updateUserRole = (userRole: UserRole): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserRole',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateUserRole(userRole.id, userRole);
  
      if (response?.body) {
        dispatch(slice.actions.updateUserRole({ id: userRole.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateUserRole',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating UserRole', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateUserRole',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserRole',
        inProgress: false,
      }));
    }
  };
  

export const updateUserRoles = (userRoles: UserRole[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserRoles',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateUserRoles(userRoles);
      
      dispatch(slice.actions.updateUserRoles(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserRoles',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating UserRoles', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateUserRoles',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateUserRoles',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  