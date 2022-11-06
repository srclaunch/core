import { Invoice } from '@srclaunch/types-sdk';
  import * as httpClient from '@srclaunch/http-client-sdk';
  
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { AppDispatch, AppThunk, RootState } from '@srclaunch/web-app-state';
import { Condition, ISO8601String, ExceptionObject } from '@srclaunch/types';

const adapter = createEntityAdapter<Invoice>();

export const InvoiceSelectors = adapter.getSelectors<RootState>(
  (state: RootState) => state.invoices,
);

type InvoiceState = {
  action: {
    createInvoice: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    createInvoices: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteInvoice: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    deleteInvoices: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getInvoice: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    getInvoices: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateInvoice: {
      error?: ExceptionObject;
      inProgress: boolean;
      lastUpdated?: ISO8601String;
    },
    updateInvoices: {
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
    createInvoice: {
      inProgress: false,
    },
    createInvoices: {
      inProgress: false,
    },
    deleteInvoice: {
      inProgress: false,
    },
    deleteInvoices: {
      inProgress: false,
    },
    getInvoice: {
      inProgress: false,
    },
    getInvoices: {
      inProgress: false,
    },
    updateInvoice: {
      inProgress: false,
    },
    updateInvoices: {
      inProgress: false,
    },
  },
  inProgress: false,
}

const slice = createSlice({
  initialState: adapter.getInitialState<InvoiceState>(initialState),
  name: 'invoices',
  reducers: {
    addInvoice: (state, action) => {
      adapter.upsertOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    addInvoices: (state, action) => {
      adapter.upsertMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    removeInvoice: (state, action) => {
      adapter.removeOne(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    removeInvoices: (state, action) => {
      adapter.removeMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },

    updateInvoice: (state, action) => {
      console.log('action.payload', action.payload);
      adapter.updateOne(state, action);

      state.lastUpdated = new Date().toISOString();
    },
    updateInvoices: (state, action) => {
      adapter.updateMany(state, action.payload);

      state.lastUpdated = new Date().toISOString();
    },
    setActionError: (state, action: PayloadAction<{
      type: |
        'createInvoice' | 'createInvoices' |
        'deleteInvoice' | 'deleteInvoices' |
        'getInvoice' | 'getInvoices' |
        'updateInvoice' | 'updateInvoices';
      error: ExceptionObject;
    }>) => {
      const { type, error } = action.payload;

      state.action[type].error = error;
      state.lastUpdated = new Date().toISOString();
    },
    setActionInProgress: (state, action: PayloadAction<{
      type: |
        'createInvoice' | 'createInvoices' |
        'deleteInvoice' | 'deleteInvoices' |
        'getInvoice' | 'getInvoices' |
        'updateInvoice' | 'updateInvoices';
      inProgress: boolean;
    }>) => {
      const { type, inProgress } = action.payload;

      state.inProgress = inProgress;
      state.action[type].inProgress = inProgress;
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const createInvoice = (invoice: Invoice): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createInvoice',
        inProgress: true,
      }));
  
      const response = await httpClient.default.createInvoice(invoice);
  
      dispatch(slice.actions.addInvoice(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'createInvoice',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Invoice', { cause: err });
      
      dispatch(slice.actions.setActionError({
        type: 'createInvoice',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createInvoice',
        inProgress: false,
      }));
    }
  };

export const createInvoices = (invoices: Invoice[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'createInvoices',
        inProgress: true,
      }));

      const response = await httpClient.default.createInvoices(invoices);
      
      dispatch(slice.actions.addInvoices(response?.body));

      dispatch(slice.actions.setActionInProgress({
        type: 'createInvoices',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error creating Invoices', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'createInvoices',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'createInvoices',
        inProgress: false,
      }));
    }
  };

export const deleteInvoice = (invoice: Invoice['id']): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteInvoice',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteInvoice(invoice);
      
      dispatch(slice.actions.removeInvoice(invoice));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteInvoice',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Invoice', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteInvoice',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteInvoice',
        inProgress: false,
      }));
    }
  };

export const deleteInvoices = (invoices: Invoice['id'][]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteInvoices',
        inProgress: true,
      }));
  
      const response = await httpClient.default.deleteInvoices(invoices);
  
      dispatch(slice.actions.removeInvoices(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'deleteInvoices',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error deleting Invoices', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'deleteInvoices',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'deleteInvoices',
        inProgress: false,
      }));
    }
  };

export const getInvoice = (invoice: Invoice['id']): AppThunk => 
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'getInvoice',
        inProgress: true,
      }));
  
      const response = await httpClient.default.getInvoice(invoice);
  
      if (response?.body) {
        dispatch(slice.actions.addInvoice(response?.body));
      }
  
      dispatch(slice.actions.setActionInProgress({
        type: 'getInvoice',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error getting Invoice', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'getInvoice',
        error: exception.toJSON(),
      }));

      dispatch(slice.actions.setActionInProgress({
        type: 'getInvoice',
        inProgress: false,
      }));
    }
  };

export const getInvoices = ({
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
      type: 'getInvoices',
      inProgress: true,
    }));

    const response = await httpClient.default.getInvoices({
      conditions,
      filters,
      limit,
      offset
    });

    dispatch(slice.actions.addInvoices(response?.body));

    dispatch(slice.actions.setActionInProgress({
      type: 'getInvoices',
      inProgress: false,
    }));
  } catch (err: any) {
    const exception = new Exception('Error getting Invoices', { cause: err });

    dispatch(slice.actions.setActionError({
      type: 'getInvoices',
      error: exception.toJSON(),
    }));

    dispatch(slice.actions.setActionInProgress({
      type: 'getInvoices',
      inProgress: false,
    }));
  }
};


export const updateInvoice = (invoice: Invoice): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateInvoice',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateInvoice(invoice.id, invoice);
  
      if (response?.body) {
        dispatch(slice.actions.updateInvoice({ id: invoice.id, changes: response.body }));
    
        dispatch(slice.actions.setActionInProgress({
          type: 'updateInvoice',
          inProgress: false,
        }));
      }
    } catch (err: any) {
      const exception = new Exception('Error updating Invoice', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateInvoice',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateInvoice',
        inProgress: false,
      }));
    }
  };
  

export const updateInvoices = (invoices: Invoice[]): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(slice.actions.setActionInProgress({
        type: 'updateInvoices',
        inProgress: true,
      }));
  
      const response = await httpClient.default.updateInvoices(invoices);
      
      dispatch(slice.actions.updateInvoices(response?.body));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateInvoices',
        inProgress: false,
      }));
    } catch (err: any) {
      const exception = new Exception('Error updating Invoices', { cause: err });

      dispatch(slice.actions.setActionError({
        type: 'updateInvoices',
        error: exception.toJSON(),
      }));
  
      dispatch(slice.actions.setActionInProgress({
        type: 'updateInvoices',
        inProgress: false,
      }));
    }
  };


export default slice.reducer;
  