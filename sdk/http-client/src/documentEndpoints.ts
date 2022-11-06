import { Condition, HttpResponse } from '@srclaunch/types';
  import { stringify } from 'query-string';
  import { httpClient } from './index';
  import { Document } from '@srclaunch/types-sdk';

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
    createDocument: (props: Document): Promise<HttpResponse<Document> | void> => {
      const formData = getFormData(props);
      return httpClient.post('/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    createDocuments: ({
      ...props
    }: Document[]): Promise<HttpResponse<Document> | void> =>
      httpClient.post('/documents', props),
    deleteDocument: (id: Document['id']): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/documents/${id}`),
    deleteDocuments: (ids: Document['id'][]): Promise<HttpResponse<void> | void> =>
      httpClient.delete(`/documents/${ids.join(',')}`),
    getDocument: (id: Document['id']): Promise<HttpResponse<Document> | void> =>
      httpClient.get(`/documents/${id}`),
    getDocuments: ({
      conditions,
      filters,
      limit,
      offset
    }: {
      conditions?: Condition[],
      filters?: Record<string, string>,
      limit?: number;
      offset?: number
    }): Promise<HttpResponse<Document> | void> => 
      httpClient.get(`/documents?${filters ? stringify(filters) : ''}limit=${limit}&offset=${offset}`),
    updateDocument: (
      id: Document['id'],
      props: Document,
    ): Promise<HttpResponse<Document> | void> => {
      const formData = getFormData(props);
      return httpClient.put(`/documents/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    updateDocuments: (
      {
        ...props
      }: Document[],
    ): Promise<HttpResponse<Document> | void> =>
      httpClient.put(`/documents`, props),
  };  
  