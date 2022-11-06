import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { Message } from '@srclaunch/types-sdk';

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
    createMessage: (props: Message): Promise<HttpResponse<Message> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/messages', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createMessages: ({
      ...props
    }: Message[]): Promise<HttpResponse<Message> | void> =>
      httpClient.post('/messages', props),
    deleteMessage: (id: Message['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/messages/${id}`),
    deleteMessages: (ids: Message['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/messages/${ids.join(',')}`),
    getMessage: (id: Message['id']): Promise<HttpResponse<Message> | void> =>
      httpClient.get(`/messages/${id}`),
    getMessages: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<Message> | void> => 
      httpClient.get(`/messages?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateMessage: (
      id: Message['id'],
      props: Message,
    ): Promise<HttpResponse<Message> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/messages/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateMessages: (
      {
        ...props
      }: Message[],
    ): Promise<HttpResponse<Message> | void> =>
      httpClient.put(`/messages`, props),
  };  
  