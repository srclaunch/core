import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { Person } from '@srclaunch/types-sdk';

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
    createPerson: (props: Person): Promise<HttpResponse<Person> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/people', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createPeople: ({
      ...props
    }: Person[]): Promise<HttpResponse<Person> | void> =>
      httpClient.post('/people', props),
    deletePerson: (id: Person['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/people/${id}`),
    deletePeople: (ids: Person['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/people/${ids.join(',')}`),
    getPerson: (id: Person['id']): Promise<HttpResponse<Person> | void> =>
      httpClient.get(`/people/${id}`),
    getPeople: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<Person> | void> => 
      httpClient.get(`/people?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updatePerson: (
      id: Person['id'],
      props: Person,
    ): Promise<HttpResponse<Person> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/people/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updatePeople: (
      {
        ...props
      }: Person[],
    ): Promise<HttpResponse<Person> | void> =>
      httpClient.put(`/people`, props),
  };  
  