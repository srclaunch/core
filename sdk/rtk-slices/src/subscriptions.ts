import { Subscription } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<Subscription>();

export const SubscriptionSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.subscriptions,
);

type SubscriptionState = {
  action: {
    createSubscription: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createSubscriptions: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteSubscription: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteSubscriptions: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getSubscription: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getSubscriptions: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateSubscription: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateSubscriptions: {
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
    createSubscription: {
      inProgress: false,
    },
    createSubscriptions: {
      inProgress: false,
    },
    deleteSubscription: {
      inProgress: false,
    },
    deleteSubscriptions: {
      inProgress: false,
    },
    getSubscription: {
      inProgress: false,
    },
    getSubscriptions: {
      inProgress: false,
    },
    updateSubscription: {
      inProgress: false,
    },
    updateSubscriptions: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<SubscriptionState>(initialState),
  name: 'subscriptions',
  reducers: {
    addSubscription: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addSubscriptions: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeSubscription: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeSubscriptions: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateSubscription: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateSubscriptions: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createSubscription' | 'createSubscriptions' |
        'deleteSubscription' | 'deleteSubscriptions' |
        'getSubscription' | 'getSubscriptions' |
        'updateSubscription' | 'updateSubscriptions';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createSubscription' | 'createSubscriptions' |
        'deleteSubscription' | 'deleteSubscriptions' |
        'getSubscription' | 'getSubscriptions' |
        'updateSubscription' | 'updateSubscriptions';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createSubscription = (subscription: Subscription): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createSubscription',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createSubscription(subscription);
  
      dispatch(slice.actions.addSubscription(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createSubscription',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Subscription', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createSubscription',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createSubscription',
        inProgress: false,
      }));
    }
  };

export const createSubscriptions = (subscriptions: Subscription[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createSubscriptions',
        inProgress: true,
      }));

      const response = await httpClient.default.createSubscriptions(subscriptions);
      
      dispatch(slice.actions.addSubscriptions(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createSubscriptions',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Subscriptions', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createSubscriptions',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createSubscriptions',
        inProgress: false,
      }));
    }
  };

export const deleteSubscription = (subscription: Subscription['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteSubscription',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteSubscription(subscription);
      
      dispatch(slice.actions.removeSubscription(subscription));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteSubscription',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Subscription', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteSubscription',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteSubscription',
        inProgress: false,
      }));
    }
  };

export const deleteSubscriptions = (subscriptions: Subscription['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteSubscriptions',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteSubscriptions(subscriptions);
  
      dispatch(slice.actions.removeSubscriptions(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteSubscriptions',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Subscriptions', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteSubscriptions',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteSubscriptions',
        inProgress: false,
      }));
    }
  };

export const getSubscription = (subscription: Subscription['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getSubscription',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getSubscription(subscription);
  
      if (response?.body) {
        dispatch(slice.actions.addSubscription(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getSubscription',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting Subscription', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getSubscription',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getSubscription',
        inProgress: false,
      }));
    }
  };

export const getSubscriptions = ({
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
      type: 'getSubscriptions',
      inProgress: true,
    }));

    const response = await httpClient.default.getSubscriptions({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addSubscriptions(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getSubscriptions',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting Subscriptions', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getSubscriptions',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getSubscriptions',
      inProgress: false,
    }));
  }
};


export const updateSubscription = (subscription: Subscription): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateSubscription',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateSubscription(subscription.id, subscription);
  
      if (response?.body) {
        dispatch(slice.actions.updateSubscription({ id: subscription.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateSubscription',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating Subscription', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateSubscription',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateSubscription',
        inProgress: false,
      }));
    }
  };
  

export const updateSubscriptions = (subscriptions: Subscription[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateSubscriptions',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateSubscriptions(subscriptions);
      
      dispatch(slice.actions.updateSubscriptions(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateSubscriptions',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating Subscriptions', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateSubscriptions',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateSubscriptions',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  