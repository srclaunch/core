import { Message } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<Message>();

export const MessageSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.messages,
);

type MessageState = {
  action: {
    createMessage: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createMessages: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteMessage: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteMessages: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getMessage: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getMessages: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateMessage: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateMessages: {
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
    createMessage: {
      inProgress: false,
    },
    createMessages: {
      inProgress: false,
    },
    deleteMessage: {
      inProgress: false,
    },
    deleteMessages: {
      inProgress: false,
    },
    getMessage: {
      inProgress: false,
    },
    getMessages: {
      inProgress: false,
    },
    updateMessage: {
      inProgress: false,
    },
    updateMessages: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<MessageState>(initialState),
  name: 'messages',
  reducers: {
    addMessage: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addMessages: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeMessage: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeMessages: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateMessage: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateMessages: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createMessage' | 'createMessages' |
        'deleteMessage' | 'deleteMessages' |
        'getMessage' | 'getMessages' |
        'updateMessage' | 'updateMessages';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createMessage' | 'createMessages' |
        'deleteMessage' | 'deleteMessages' |
        'getMessage' | 'getMessages' |
        'updateMessage' | 'updateMessages';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createMessage = (message: Message): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createMessage',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createMessage(message);
  
      dispatch(slice.actions.addMessage(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createMessage',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Message', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createMessage',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createMessage',
        inProgress: false,
      }));
    }
  };

export const createMessages = (messages: Message[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createMessages',
        inProgress: true,
      }));

      const response = await httpClient.default.createMessages(messages);
      
      dispatch(slice.actions.addMessages(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createMessages',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Messages', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createMessages',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createMessages',
        inProgress: false,
      }));
    }
  };

export const deleteMessage = (message: Message['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteMessage',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteMessage(message);
      
      dispatch(slice.actions.removeMessage(message));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteMessage',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Message', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteMessage',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteMessage',
        inProgress: false,
      }));
    }
  };

export const deleteMessages = (messages: Message['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteMessages',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteMessages(messages);
  
      dispatch(slice.actions.removeMessages(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteMessages',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Messages', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteMessages',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteMessages',
        inProgress: false,
      }));
    }
  };

export const getMessage = (message: Message['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getMessage',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getMessage(message);
  
      if (response?.body) {
        dispatch(slice.actions.addMessage(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getMessage',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting Message', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getMessage',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getMessage',
        inProgress: false,
      }));
    }
  };

export const getMessages = ({
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
      type: 'getMessages',
      inProgress: true,
    }));

    const response = await httpClient.default.getMessages({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addMessages(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getMessages',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting Messages', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getMessages',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getMessages',
      inProgress: false,
    }));
  }
};


export const updateMessage = (message: Message): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateMessage',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateMessage(message.id, message);
  
      if (response?.body) {
        dispatch(slice.actions.updateMessage({ id: message.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateMessage',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating Message', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateMessage',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateMessage',
        inProgress: false,
      }));
    }
  };
  

export const updateMessages = (messages: Message[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateMessages',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateMessages(messages);
      
      dispatch(slice.actions.updateMessages(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateMessages',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating Messages', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateMessages',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateMessages',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  