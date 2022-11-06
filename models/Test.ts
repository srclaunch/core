import { ModelProps, Primitives } from '@srclaunch/types';

export const Test: ModelProps = {
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
  name: 'Test',
};
