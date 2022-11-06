import { Payment } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<Payment>();

export const PaymentSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.payments,
);

type PaymentState = {
  action: {
    createPayment: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createPayments: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deletePayment: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deletePayments: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getPayment: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getPayments: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updatePayment: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updatePayments: {
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
    createPayment: {
      inProgress: false,
    },
    createPayments: {
      inProgress: false,
    },
    deletePayment: {
      inProgress: false,
    },
    deletePayments: {
      inProgress: false,
    },
    getPayment: {
      inProgress: false,
    },
    getPayments: {
      inProgress: false,
    },
    updatePayment: {
      inProgress: false,
    },
    updatePayments: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<PaymentState>(initialState),
  name: 'payments',
  reducers: {
    addPayment: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addPayments: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removePayment: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removePayments: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updatePayment: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updatePayments: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createPayment' | 'createPayments' |
        'deletePayment' | 'deletePayments' |
        'getPayment' | 'getPayments' |
        'updatePayment' | 'updatePayments';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createPayment' | 'createPayments' |
        'deletePayment' | 'deletePayments' |
        'getPayment' | 'getPayments' |
        'updatePayment' | 'updatePayments';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createPayment = (payment: Payment): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createPayment',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createPayment(payment);
  
      dispatch(slice.actions.addPayment(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createPayment',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Payment', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createPayment',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPayment',
        inProgress: false,
      }));
    }
  };

export const createPayments = (payments: Payment[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createPayments',
        inProgress: true,
      }));

      const response = await httpClient.default.createPayments(payments);
      
      dispatch(slice.actions.addPayments(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPayments',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Payments', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createPayments',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createPayments',
        inProgress: false,
      }));
    }
  };

export const deletePayment = (payment: Payment['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePayment',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deletePayment(payment);
      
      dispatch(slice.actions.removePayment(payment));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePayment',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Payment', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deletePayment',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deletePayment',
        inProgress: false,
      }));
    }
  };

export const deletePayments = (payments: Payment['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePayments',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deletePayments(payments);
  
      dispatch(slice.actions.removePayments(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deletePayments',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Payments', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deletePayments',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deletePayments',
        inProgress: false,
      }));
    }
  };

export const getPayment = (payment: Payment['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getPayment',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getPayment(payment);
  
      if (response?.body) {
        dispatch(slice.actions.addPayment(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getPayment',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting Payment', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getPayment',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getPayment',
        inProgress: false,
      }));
    }
  };

export const getPayments = ({
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
      type: 'getPayments',
      inProgress: true,
    }));

    const response = await httpClient.default.getPayments({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addPayments(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getPayments',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting Payments', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getPayments',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getPayments',
      inProgress: false,
    }));
  }
};


export const updatePayment = (payment: Payment): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePayment',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updatePayment(payment.id, payment);
  
      if (response?.body) {
        dispatch(slice.actions.updatePayment({ id: payment.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updatePayment',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating Payment', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updatePayment',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePayment',
        inProgress: false,
      }));
    }
  };
  

export const updatePayments = (payments: Payment[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePayments',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updatePayments(payments);
      
      dispatch(slice.actions.updatePayments(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePayments',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating Payments', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updatePayments',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updatePayments',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  