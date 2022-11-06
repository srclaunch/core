import { ModelProps, Primitives } from '@srclaunch/types';

export const Team: ModelProps = {
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
  name: 'Team',
  relationships: {
    belongsTo: ['Organization'],
  },
};
