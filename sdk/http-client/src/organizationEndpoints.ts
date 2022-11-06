import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { Organization } from '@srclaunch/types-sdk';

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
    createOrganization: (props: Organization): Promise<HttpResponse<Organization> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/organizations', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createOrganizations: ({
      ...props
    }: Organization[]): Promise<HttpResponse<Organization> | void> =>
      httpClient.post('/organizations', props),
    deleteOrganization: (id: Organization['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/organizations/${id}`),
    deleteOrganizations: (ids: Organization['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/organizations/${ids.join(',')}`),
    getOrganization: (id: Organization['id']): Promise<HttpResponse<Organization> | void> =>
      httpClient.get(`/organizations/${id}`),
    getOrganizations: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<Organization> | void> => 
      httpClient.get(`/organizations?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateOrganization: (
      id: Organization['id'],
      props: Organization,
    ): Promise<HttpResponse<Organization> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/organizations/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateOrganizations: (
      {
        ...props
      }: Organization[],
    ): Promise<HttpResponse<Organization> | void> =>
      httpClient.put(`/organizations`, props),
  };  
  