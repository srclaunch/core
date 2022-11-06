import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { UserGroup } from '@srclaunch/types-sdk';

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
    createUserGroup: (props: UserGroup): Promise<HttpResponse<UserGroup> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/user-groups', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createUserGroups: ({
      ...props
    }: UserGroup[]): Promise<HttpResponse<UserGroup> | void> =>
      httpClient.post('/user-groups', props),
    deleteUserGroup: (id: UserGroup['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/user-groups/${id}`),
    deleteUserGroups: (ids: UserGroup['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/user-groups/${ids.join(',')}`),
    getUserGroup: (id: UserGroup['id']): Promise<HttpResponse<UserGroup> | void> =>
      httpClient.get(`/user-groups/${id}`),
    getUserGroups: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<UserGroup> | void> => 
      httpClient.get(`/user-groups?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateUserGroup: (
      id: UserGroup['id'],
      props: UserGroup,
    ): Promise<HttpResponse<UserGroup> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/user-groups/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateUserGroups: (
      {
        ...props
      }: UserGroup[],
    ): Promise<HttpResponse<UserGroup> | void> =>
      httpClient.put(`/user-groups`, props),
  };  
  