import { Team } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<Team>();

export const TeamSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.teams,
);

type TeamState = {
  action: {
    createTeam: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createTeams: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteTeam: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteTeams: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getTeam: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getTeams: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateTeam: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateTeams: {
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
    createTeam: {
      inProgress: false,
    },
    createTeams: {
      inProgress: false,
    },
    deleteTeam: {
      inProgress: false,
    },
    deleteTeams: {
      inProgress: false,
    },
    getTeam: {
      inProgress: false,
    },
    getTeams: {
      inProgress: false,
    },
    updateTeam: {
      inProgress: false,
    },
    updateTeams: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<TeamState>(initialState),
  name: 'teams',
  reducers: {
    addTeam: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addTeams: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeTeam: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeTeams: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateTeam: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateTeams: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createTeam' | 'createTeams' |
        'deleteTeam' | 'deleteTeams' |
        'getTeam' | 'getTeams' |
        'updateTeam' | 'updateTeams';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createTeam' | 'createTeams' |
        'deleteTeam' | 'deleteTeams' |
        'getTeam' | 'getTeams' |
        'updateTeam' | 'updateTeams';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createTeam = (team: Team): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createTeam',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createTeam(team);
  
      dispatch(slice.actions.addTeam(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createTeam',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Team', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createTeam',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createTeam',
        inProgress: false,
      }));
    }
  };

export const createTeams = (teams: Team[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createTeams',
        inProgress: true,
      }));

      const response = await httpClient.default.createTeams(teams);
      
      dispatch(slice.actions.addTeams(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createTeams',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Teams', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createTeams',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createTeams',
        inProgress: false,
      }));
    }
  };

export const deleteTeam = (team: Team['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteTeam',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteTeam(team);
      
      dispatch(slice.actions.removeTeam(team));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteTeam',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Team', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteTeam',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteTeam',
        inProgress: false,
      }));
    }
  };

export const deleteTeams = (teams: Team['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteTeams',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteTeams(teams);
  
      dispatch(slice.actions.removeTeams(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteTeams',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Teams', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteTeams',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteTeams',
        inProgress: false,
      }));
    }
  };

export const getTeam = (team: Team['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getTeam',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getTeam(team);
  
      if (response?.body) {
        dispatch(slice.actions.addTeam(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getTeam',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting Team', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getTeam',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getTeam',
        inProgress: false,
      }));
    }
  };

export const getTeams = ({
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
      type: 'getTeams',
      inProgress: true,
    }));

    const response = await httpClient.default.getTeams({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addTeams(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getTeams',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting Teams', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getTeams',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getTeams',
      inProgress: false,
    }));
  }
};


export const updateTeam = (team: Team): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateTeam',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateTeam(team.id, team);
  
      if (response?.body) {
        dispatch(slice.actions.updateTeam({ id: team.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateTeam',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating Team', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateTeam',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateTeam',
        inProgress: false,
      }));
    }
  };
  

export const updateTeams = (teams: Team[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateTeams',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateTeams(teams);
      
      dispatch(slice.actions.updateTeams(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateTeams',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating Teams', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateTeams',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateTeams',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  