import { ModelProps, Primitives } from '@srclaunch/types';

export const Organization: ModelProps = {
  fields: {
    description: {
      label: 'Description',
      type: Primitives.String,
    },
    name: {
      label: 'Name',
      type: Primitives.String,
    },
  },
  name: 'Organization',
  relationships: {
    belongsTo: ['User'],
  },
};
