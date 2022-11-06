import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { PaymentMethod } from '@srclaunch/types-sdk';

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
    createPaymentMethod: (props: PaymentMethod): Promise<HttpResponse<PaymentMethod> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/payment-methods', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createPaymentMethods: ({
      ...props
    }: PaymentMethod[]): Promise<HttpResponse<PaymentMethod> | void> =>
      httpClient.post('/payment-methods', props),
    deletePaymentMethod: (id: PaymentMethod['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/payment-methods/${id}`),
    deletePaymentMethods: (ids: PaymentMethod['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/payment-methods/${ids.join(',')}`),
    getPaymentMethod: (id: PaymentMethod['id']): Promise<HttpResponse<PaymentMethod> | void> =>
      httpClient.get(`/payment-methods/${id}`),
    getPaymentMethods: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<PaymentMethod> | void> => 
      httpClient.get(`/payment-methods?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updatePaymentMethod: (
      id: PaymentMethod['id'],
      props: PaymentMethod,
    ): Promise<HttpResponse<PaymentMethod> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/payment-methods/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updatePaymentMethods: (
      {
        ...props
      }: PaymentMethod[],
    ): Promise<HttpResponse<PaymentMethod> | void> =>
      httpClient.put(`/payment-methods`, props),
  };  
  