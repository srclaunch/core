import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { UserRole } from '@srclaunch/types-sdk';

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
    createUserRole: (props: UserRole): Promise<HttpResponse<UserRole> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/user-roles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createUserRoles: ({
      ...props
    }: UserRole[]): Promise<HttpResponse<UserRole> | void> =>
      httpClient.post('/user-roles', props),
    deleteUserRole: (id: UserRole['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/user-roles/${id}`),
    deleteUserRoles: (ids: UserRole['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/user-roles/${ids.join(',')}`),
    getUserRole: (id: UserRole['id']): Promise<HttpResponse<UserRole> | void> =>
      httpClient.get(`/user-roles/${id}`),
    getUserRoles: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<UserRole> | void> => 
      httpClient.get(`/user-roles?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateUserRole: (
      id: UserRole['id'],
      props: UserRole,
    ): Promise<HttpResponse<UserRole> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/user-roles/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateUserRoles: (
      {
        ...props
      }: UserRole[],
    ): Promise<HttpResponse<UserRole> | void> =>
      httpClient.put(`/user-roles`, props),
  };  
  