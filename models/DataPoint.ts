import { ModelProps, Primitives } from '@srclaunch/types';

export const DataPoint: ModelProps = {
  fields: {
    date: {
      label: 'Date',
      required: true,
      type: Primitives.DateTime,
    },
    description: {
      label: 'Description',
      required: true,
      type: Primitives.String,
    },
    enabled: {
      label: 'Enabled',
      required: true,
      type: Primitives.Boolean,
    },
    name: {
      label: 'Name',
      required: true,
      type: Primitives.String,
    },
    type: {
      label: 'Metric Type',
      menu: [
        {
          label: 'Application',
          value: 'application',
        },
        {
          label: 'Engineering',
          value: 'engineering',
        },
        {
          label: 'Website',
          value: 'website',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      type: Primitives.Menu,
    },
    value: {
      label: 'Value',
      required: true,
      type: Primitives.Number,
    },
  },
  name: 'DataPoint',
  relationships: {
    belongsTo: ['Organization', 'Project', 'Workspace'],
  },
};
