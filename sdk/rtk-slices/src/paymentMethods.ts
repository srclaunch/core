import { PaymentMethod } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<PaymentMethod>();

export const PaymentMethodSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.paymentMethods,
);

type PaymentMethodState = {
  action: {
    createPaymentMethod: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createPaymentMethods: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deletePaymentMethod: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deletePaymentMethods: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getPaymentMethod: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getPaymentMethods: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updatePaymentMethod: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updatePaymentMethods: {
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
    createPaymentMethod: {
      inProgress: false,
    },
    createPaymentMethods: {
      inProgress: false,
    },
    deletePaymentMethod: {
      inProgress: false,
    },
    deletePaymentMethods: {
      inProgress: false,
    },
    getPaymentMethod: {
      inProgress: false,
    },
    getPaymentMethods: {
      inProgress: false,
    },
    updatePaymentMethod: {
      inProgress: false,
    },
    updatePaymentMethods: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<PaymentMethodState>(initialState),
  name: 'paymentMethods',
  reducers: {
    addPaymentMethod: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addPaymentMethods: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removePaymentMethod: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removePaymentMethods: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updatePaymentMethod: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updatePaymentMethods: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createPaymentMethod' | 'createPaymentMethods' |
        'deletePaymentMethod' | 'deletePaymentMethods' |
        'getPaymentMethod' | 'getPaymentMethods' |
        'updatePaymentMethod' | 'updatePaymentMethods';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createPaymentMethod' | 'createPaymentMethods' |
        'deletePaymentMethod' | 'deletePaymentMethods' |
        'getPaymentMethod' | 'getPaymentMethods' |
        'updatePaymentMethod' | 'updatePaymentMethods';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createPaymentMethod = (paymentMethod: PaymentMethod): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createPaymentMethod',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createPaymentMethod(paymentMethod);
  
      dispatch(slice.actions.addPaymentMethod(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createPaymentMethod',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating PaymentMethod', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createPaymentMethod',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPaymentMethod',
        inProgress: false,
      }));
    }
  };

export const createPaymentMethods = (paymentMethods: PaymentMethod[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createPaymentMethods',
        inProgress: true,
      }));

      const response = await httpClient.default.createPaymentMethods(paymentMethods);
      
      dispatch(slice.actions.addPaymentMethods(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPaymentMethods',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating PaymentMethods', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createPaymentMethods',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPaymentMethods',
        inProgress: false,
      }));
    }
  };

export const deletePaymentMethod = (paymentMethod: PaymentMethod['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePaymentMethod',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deletePaymentMethod(paymentMethod);
      
      dispatch(slice.actions.removePaymentMethod(paymentMethod));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePaymentMethod',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting PaymentMethod', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deletePaymentMethod',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deletePaymentMethod',
        inProgress: false,
      }));
    }
  };

export const deletePaymentMethods = (paymentMethods: PaymentMethod['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePaymentMethods',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deletePaymentMethods(paymentMethods);
  
      dispatch(slice.actions.removePaymentMethods(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePaymentMethods',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting PaymentMethods', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deletePaymentMethods',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deletePaymentMethods',
        inProgress: false,
      }));
    }
  };

export const getPaymentMethod = (paymentMethod: PaymentMethod['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getPaymentMethod',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getPaymentMethod(paymentMethod);
  
      if (response?.body) {
        dispatch(slice.actions.addPaymentMethod(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getPaymentMethod',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting PaymentMethod', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getPaymentMethod',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getPaymentMethod',
        inProgress: false,
      }));
    }
  };

export const getPaymentMethods = ({
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
      type: 'getPaymentMethods',
      inProgress: true,
    }));

    const response = await httpClient.default.getPaymentMethods({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addPaymentMethods(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getPaymentMethods',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting PaymentMethods', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getPaymentMethods',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getPaymentMethods',
      inProgress: false,
    }));
  }
};


export const updatePaymentMethod = (paymentMethod: PaymentMethod): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePaymentMethod',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updatePaymentMethod(paymentMethod.id, paymentMethod);
  
      if (response?.body) {
        dispatch(slice.actions.updatePaymentMethod({ id: paymentMethod.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updatePaymentMethod',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating PaymentMethod', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updatePaymentMethod',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePaymentMethod',
        inProgress: false,
      }));
    }
  };
  

export const updatePaymentMethods = (paymentMethods: PaymentMethod[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePaymentMethods',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updatePaymentMethods(paymentMethods);
      
      dispatch(slice.actions.updatePaymentMethods(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePaymentMethods',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating PaymentMethods', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updatePaymentMethods',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePaymentMethods',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  