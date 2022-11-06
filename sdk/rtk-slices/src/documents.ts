import { Document } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<Document>();

export const DocumentSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.documents,
);

type DocumentState = {
  action: {
    createDocument: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createDocuments: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteDocument: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteDocuments: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getDocument: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getDocuments: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateDocument: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateDocuments: {
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
    createDocument: {
      inProgress: false,
    },
    createDocuments: {
      inProgress: false,
    },
    deleteDocument: {
      inProgress: false,
    },
    deleteDocuments: {
      inProgress: false,
    },
    getDocument: {
      inProgress: false,
    },
    getDocuments: {
      inProgress: false,
    },
    updateDocument: {
      inProgress: false,
    },
    updateDocuments: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<DocumentState>(initialState),
  name: 'documents',
  reducers: {
    addDocument: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addDocuments: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeDocument: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeDocuments: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateDocument: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateDocuments: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createDocument' | 'createDocuments' |
        'deleteDocument' | 'deleteDocuments' |
        'getDocument' | 'getDocuments' |
        'updateDocument' | 'updateDocuments';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createDocument' | 'createDocuments' |
        'deleteDocument' | 'deleteDocuments' |
        'getDocument' | 'getDocuments' |
        'updateDocument' | 'updateDocuments';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createDocument = (document: Document): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createDocument',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createDocument(document);
  
      dispatch(slice.actions.addDocument(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createDocument',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Document', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createDocument',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createDocument',
        inProgress: false,
      }));
    }
  };

export const createDocuments = (documents: Document[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createDocuments',
        inProgress: true,
      }));

      const response = await httpClient.default.createDocuments(documents);
      
      dispatch(slice.actions.addDocuments(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createDocuments',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Documents', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createDocuments',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createDocuments',
        inProgress: false,
      }));
    }
  };

export const deleteDocument = (document: Document['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteDocument',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteDocument(document);
      
      dispatch(slice.actions.removeDocument(document));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteDocument',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Document', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteDocument',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteDocument',
        inProgress: false,
      }));
    }
  };

export const deleteDocuments = (documents: Document['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteDocuments',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteDocuments(documents);
  
      dispatch(slice.actions.removeDocuments(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteDocuments',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Documents', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteDocuments',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteDocuments',
        inProgress: false,
      }));
    }
  };

export const getDocument = (document: Document['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getDocument',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getDocument(document);
  
      if (response?.body) {
        dispatch(slice.actions.addDocument(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getDocument',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting Document', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getDocument',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getDocument',
        inProgress: false,
      }));
    }
  };

export const getDocuments = ({
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
      type: 'getDocuments',
      inProgress: true,
    }));

    const response = await httpClient.default.getDocuments({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addDocuments(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getDocuments',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting Documents', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getDocuments',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getDocuments',
      inProgress: false,
    }));
  }
};


export const updateDocument = (document: Document): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateDocument',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateDocument(document.id, document);
  
      if (response?.body) {
        dispatch(slice.actions.updateDocument({ id: document.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateDocument',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating Document', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateDocument',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateDocument',
        inProgress: false,
      }));
    }
  };
  

export const updateDocuments = (documents: Document[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateDocuments',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateDocuments(documents);
      
      dispatch(slice.actions.updateDocuments(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateDocuments',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating Documents', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateDocuments',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateDocuments',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  