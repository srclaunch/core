import { ModelProps, Primitives } from '@srclaunch/types';

export const UserGroup: ModelProps = {
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
  name: 'UserGroup',
  relationships: {
    belongsTo: ['Organization', 'Team', 'Workspace'],
  },
};
