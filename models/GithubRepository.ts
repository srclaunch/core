import { ModelProps, Primitives } from '@srclaunch/types';

export const GithubRepository: ModelProps = {
  fields: {
    connected: {
      label: 'Connected',
      type: Primitives.Boolean,
    },
    name: {
      label: 'Name',
      type: Primitives.String,
    },
    owner: {
      label: 'Owner',
      type: Primitives.String,
    },
  },
  name: 'GithubRepository',
  relationships: {
    belongsTo: [
      'Application',
      'Organization',
      'Project',
      'Service',
      'Workspace',
    ],
  },
};
