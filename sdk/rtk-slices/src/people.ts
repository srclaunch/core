import { Person } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<Person>();

export const PersonSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.people,
);

type PersonState = {
  action: {
    createPerson: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createPeople: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deletePerson: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deletePeople: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getPerson: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getPeople: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updatePerson: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updatePeople: {
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
    createPerson: {
      inProgress: false,
    },
    createPeople: {
      inProgress: false,
    },
    deletePerson: {
      inProgress: false,
    },
    deletePeople: {
      inProgress: false,
    },
    getPerson: {
      inProgress: false,
    },
    getPeople: {
      inProgress: false,
    },
    updatePerson: {
      inProgress: false,
    },
    updatePeople: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<PersonState>(initialState),
  name: 'people',
  reducers: {
    addPerson: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addPeople: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removePerson: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removePeople: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updatePerson: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updatePeople: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createPerson' | 'createPeople' |
        'deletePerson' | 'deletePeople' |
        'getPerson' | 'getPeople' |
        'updatePerson' | 'updatePeople';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createPerson' | 'createPeople' |
        'deletePerson' | 'deletePeople' |
        'getPerson' | 'getPeople' |
        'updatePerson' | 'updatePeople';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createPerson = (person: Person): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createPerson',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createPerson(person);
  
      dispatch(slice.actions.addPerson(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createPerson',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Person', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createPerson',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPerson',
        inProgress: false,
      }));
    }
  };

export const createPeople = (people: Person[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createPeople',
        inProgress: true,
      }));

      const response = await httpClient.default.createPeople(people);
      
      dispatch(slice.actions.addPeople(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPeople',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating People', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createPeople',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPeople',
        inProgress: false,
      }));
    }
  };

export const deletePerson = (person: Person['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePerson',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deletePerson(person);
      
      dispatch(slice.actions.removePerson(person));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePerson',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Person', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deletePerson',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deletePerson',
        inProgress: false,
      }));
    }
  };

export const deletePeople = (people: Person['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePeople',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deletePeople(people);
  
      dispatch(slice.actions.removePeople(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePeople',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting People', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deletePeople',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deletePeople',
        inProgress: false,
      }));
    }
  };

export const getPerson = (person: Person['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getPerson',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getPerson(person);
  
      if (response?.body) {
        dispatch(slice.actions.addPerson(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getPerson',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting Person', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getPerson',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getPerson',
        inProgress: false,
      }));
    }
  };

export const getPeople = ({
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
      type: 'getPeople',
      inProgress: true,
    }));

    const response = await httpClient.default.getPeople({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addPeople(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getPeople',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting People', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getPeople',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getPeople',
      inProgress: false,
    }));
  }
};


export const updatePerson = (person: Person): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePerson',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updatePerson(person.id, person);
  
      if (response?.body) {
        dispatch(slice.actions.updatePerson({ id: person.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updatePerson',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating Person', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updatePerson',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePerson',
        inProgress: false,
      }));
    }
  };
  

export const updatePeople = (people: Person[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePeople',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updatePeople(people);
      
      dispatch(slice.actions.updatePeople(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePeople',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating People', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updatePeople',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePeople',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  