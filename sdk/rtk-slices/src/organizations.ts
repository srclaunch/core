import { Organization } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<Organization>();

export const OrganizationSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.organizations,
);

type OrganizationState = {
  action: {
    createOrganization: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createOrganizations: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteOrganization: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteOrganizations: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getOrganization: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getOrganizations: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateOrganization: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateOrganizations: {
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
    createOrganization: {
      inProgress: false,
    },
    createOrganizations: {
      inProgress: false,
    },
    deleteOrganization: {
      inProgress: false,
    },
    deleteOrganizations: {
      inProgress: false,
    },
    getOrganization: {
      inProgress: false,
    },
    getOrganizations: {
      inProgress: false,
    },
    updateOrganization: {
      inProgress: false,
    },
    updateOrganizations: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<OrganizationState>(initialState),
  name: 'organizations',
  reducers: {
    addOrganization: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addOrganizations: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeOrganization: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeOrganizations: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateOrganization: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateOrganizations: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createOrganization' | 'createOrganizations' |
        'deleteOrganization' | 'deleteOrganizations' |
        'getOrganization' | 'getOrganizations' |
        'updateOrganization' | 'updateOrganizations';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createOrganization' | 'createOrganizations' |
        'deleteOrganization' | 'deleteOrganizations' |
        'getOrganization' | 'getOrganizations' |
        'updateOrganization' | 'updateOrganizations';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createOrganization = (organization: Organization): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createOrganization',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createOrganization(organization);
  
      dispatch(slice.actions.addOrganization(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createOrganization',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Organization', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createOrganization',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createOrganization',
        inProgress: false,
      }));
    }
  };

export const createOrganizations = (organizations: Organization[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createOrganizations',
        inProgress: true,
      }));

      const response = await httpClient.default.createOrganizations(organizations);
      
      dispatch(slice.actions.addOrganizations(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createOrganizations',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Organizations', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createOrganizations',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createOrganizations',
        inProgress: false,
      }));
    }
  };

export const deleteOrganization = (organization: Organization['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteOrganization',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteOrganization(organization);
      
      dispatch(slice.actions.removeOrganization(organization));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteOrganization',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Organization', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteOrganization',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteOrganization',
        inProgress: false,
      }));
    }
  };

export const deleteOrganizations = (organizations: Organization['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteOrganizations',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteOrganizations(organizations);
  
      dispatch(slice.actions.removeOrganizations(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteOrganizations',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Organizations', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteOrganizations',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteOrganizations',
        inProgress: false,
      }));
    }
  };

export const getOrganization = (organization: Organization['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getOrganization',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getOrganization(organization);
  
      if (response?.body) {
        dispatch(slice.actions.addOrganization(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getOrganization',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting Organization', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getOrganization',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getOrganization',
        inProgress: false,
      }));
    }
  };

export const getOrganizations = ({
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
      type: 'getOrganizations',
      inProgress: true,
    }));

    const response = await httpClient.default.getOrganizations({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addOrganizations(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getOrganizations',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting Organizations', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getOrganizations',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getOrganizations',
      inProgress: false,
    }));
  }
};


export const updateOrganization = (organization: Organization): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateOrganization',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateOrganization(organization.id, organization);
  
      if (response?.body) {
        dispatch(slice.actions.updateOrganization({ id: organization.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateOrganization',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating Organization', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateOrganization',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateOrganization',
        inProgress: false,
      }));
    }
  };
  

export const updateOrganizations = (organizations: Organization[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateOrganizations',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateOrganizations(organizations);
      
      dispatch(slice.actions.updateOrganizations(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateOrganizations',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating Organizations', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateOrganizations',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateOrganizations',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  