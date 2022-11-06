import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { Payment } from '@srclaunch/types-sdk';

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
    createPayment: (props: Payment): Promise<HttpResponse<Payment> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/payments', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createPayments: ({
      ...props
    }: Payment[]): Promise<HttpResponse<Payment> | void> =>
      httpClient.post('/payments', props),
    deletePayment: (id: Payment['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/payments/${id}`),
    deletePayments: (ids: Payment['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/payments/${ids.join(',')}`),
    getPayment: (id: Payment['id']): Promise<HttpResponse<Payment> | void> =>
      httpClient.get(`/payments/${id}`),
    getPayments: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<Payment> | void> => 
      httpClient.get(`/payments?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updatePayment: (
      id: Payment['id'],
      props: Payment,
    ): Promise<HttpResponse<Payment> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/payments/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updatePayments: (
      {
        ...props
      }: Payment[],
    ): Promise<HttpResponse<Payment> | void> =>
      httpClient.put(`/payments`, props),
  };  
  