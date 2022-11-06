import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { Subscription } from '@srclaunch/types-sdk';

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
    createSubscription: (props: Subscription): Promise<HttpResponse<Subscription> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/subscriptions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createSubscriptions: ({
      ...props
    }: Subscription[]): Promise<HttpResponse<Subscription> | void> =>
      httpClient.post('/subscriptions', props),
    deleteSubscription: (id: Subscription['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/subscriptions/${id}`),
    deleteSubscriptions: (ids: Subscription['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/subscriptions/${ids.join(',')}`),
    getSubscription: (id: Subscription['id']): Promise<HttpResponse<Subscription> | void> =>
      httpClient.get(`/subscriptions/${id}`),
    getSubscriptions: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<Subscription> | void> => 
      httpClient.get(`/subscriptions?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateSubscription: (
      id: Subscription['id'],
      props: Subscription,
    ): Promise<HttpResponse<Subscription> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/subscriptions/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateSubscriptions: (
      {
        ...props
      }: Subscription[],
    ): Promise<HttpResponse<Subscription> | void> =>
      httpClient.put(`/subscriptions`, props),
  };  
  