import { ModelProps, Primitives } from '@srclaunch/types';

export const UserRole: ModelProps = {
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
  name: 'UserRole',
  relationships: {
    belongsTo: ['Organization', 'Team', 'Workspace'],
  },
};
