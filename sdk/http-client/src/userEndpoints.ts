import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { User } from '@srclaunch/types-sdk';

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
    createUser: (props: User): Promise<HttpResponse<User> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createUsers: ({
      ...props
    }: User[]): Promise<HttpResponse<User> | void> =>
      httpClient.post('/users', props),
    deleteUser: (id: User['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/users/${id}`),
    deleteUsers: (ids: User['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/users/${ids.join(',')}`),
    getUser: (id: User['id']): Promise<HttpResponse<User> | void> =>
      httpClient.get(`/users/${id}`),
    getUsers: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<User> | void> => 
      httpClient.get(`/users?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateUser: (
      id: User['id'],
      props: User,
    ): Promise<HttpResponse<User> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/users/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateUsers: (
      {
        ...props
      }: User[],
    ): Promise<HttpResponse<User> | void> =>
      httpClient.put(`/users`, props),
  };  
  