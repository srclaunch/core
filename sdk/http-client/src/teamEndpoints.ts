import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { Team } from '@srclaunch/types-sdk';

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
    createTeam: (props: Team): Promise<HttpResponse<Team> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/teams', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createTeams: ({
      ...props
    }: Team[]): Promise<HttpResponse<Team> | void> =>
      httpClient.post('/teams', props),
    deleteTeam: (id: Team['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/teams/${id}`),
    deleteTeams: (ids: Team['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/teams/${ids.join(',')}`),
    getTeam: (id: Team['id']): Promise<HttpResponse<Team> | void> =>
      httpClient.get(`/teams/${id}`),
    getTeams: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<Team> | void> => 
      httpClient.get(`/teams?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateTeam: (
      id: Team['id'],
      props: Team,
    ): Promise<HttpResponse<Team> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/teams/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateTeams: (
      {
        ...props
      }: Team[],
    ): Promise<HttpResponse<Team> | void> =>
      httpClient.put(`/teams`, props),
  };  
  