import { ModelProps, Primitives } from '@srclaunch/types';

export const Application: ModelProps = {
  description: 'AppLab applications.',
  fields: {
    deployed_version: {
      label: 'Deployed Version',
      type: Primitives.String,
    },
    description: {
      label: 'Description',
      required: true,
      type: Primitives.String,
    },
    enabled: {
      defaultValue: true,
      label: 'Enabled',
      type: Primitives.Boolean,
    },
    name: {
      label: 'Name',
      required: true,
      type: Primitives.String,
    },
    type: {
      label: 'Type',
      menu: [
        {
          label: 'Web Application',
          value: 'web_application',
        },
        {
          label: 'Mobile App',
          value: 'mobile_app',
        },
        {
          label: 'Web site',
          value: 'web_site',
        },
      ],
      type: Primitives.Menu,
    },
  },
  name: 'Application',
  relationships: {
    belongsTo: ['Organization', 'Team', 'User', 'Workspace'],
  },
};
