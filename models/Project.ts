import { ModelProps, Primitives } from '@srclaunch/types';

export const Project: ModelProps = {
  fields: {
    active: {
      label: 'Active',
      type: Primitives.Boolean,
    },
    description: {
      label: 'Description',
      type: Primitives.String,
    },
    name: {
      label: 'Name',
      type: Primitives.String,
    },
    type: {
      label: 'Type',
      menu: [
        {
          label: 'App',
          value: 'app',
        },
        {
          label: 'Service',
          value: 'service',
        },
      ],
      type: Primitives.Menu,
    },
  },
  name: 'Project',
  relationships: {
    belongsTo: [
      'Application',
      'Organization',
      'Service',
      'Team',
      'User',
      'Workspace',
    ],
  },
};
