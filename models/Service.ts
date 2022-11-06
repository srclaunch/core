import { ModelProps, Primitives } from '@srclaunch/types';

export const Service: ModelProps = {
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
  name: 'Service',
  relationships: {
    belongsTo: ['Organization', 'Team', 'User', 'Workspace'],
  },
};
