import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { Invoice } from '@srclaunch/types-sdk';

  function getFormData(props: object) {
    try {
      const formData = new FormData();
      const keys =  Object.keys(props);
     
      for (const key of keys) {
        // @ts-ignore
        const value = props[key];
        if (Array.isArray(value) && value.length > 0) {
          for (let i = 0; i < value.length; i++) {
            const item = value[i];
            console.log('item', item);
            
            if ('size' in item) {
              if (item) formData.append(`${key}[${i}]`, item);
            } else {
              if (item) formData.append(`${key}[${i}]`, JSON.stringify(item));
            }
          }
        } else {
          if (value) formData.append(key, value);
        }
      }
    
      return formData;
    } catch (err: any) {
      console.error(err);
    }
 }

  export default {
    createInvoice: (props: Invoice): Promise<HttpResponse<Invoice> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/invoices', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createInvoices: ({
      ...props
    }: Invoice[]): Promise<HttpResponse<Invoice> | void> =>
      httpClient.post('/invoices', props),
    deleteInvoice: (id: Invoice['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/invoices/${id}`),
    deleteInvoices: (ids: Invoice['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/invoices/${ids.join(',')}`),
    getInvoice: (id: Invoice['id']): Promise<HttpResponse<Invoice> | void> =>
      httpClient.get(`/invoices/${id}`),
    getInvoices: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<Invoice> | void> => 
      httpClient.get(`/invoices?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateInvoice: (
      id: Invoice['id'],
      props: Invoice,
    ): Promise<HttpResponse<Invoice> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/invoices/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateInvoices: (
      {
        ...props
      }: Invoice[],
    ): Promise<HttpResponse<Invoice> | void> =>
      httpClient.put(`/invoices`, props),
  };  
  