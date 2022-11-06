import { ModelProps, Primitives } from '@srclaunch/types';

export const Workspace: ModelProps = {
  fields: {
    description: {
      label: 'Description',
      type: Primitives.String,
    },
    github_repository: {
      label: 'Github Repo',
      type: Primitives.String,
    },
    name: {
      label: 'Name',
      type: Primitives.String,
    },
  },
  name: 'Workspace',
  relationships: {
    belongsTo: ['Organization', 'Team', 'User'],
  },
};
