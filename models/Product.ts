import { ModelProps, Primitives } from '@srclaunch/types';

export const Product: ModelProps = {
  fields: {
    description: {
      label: 'Description',
      name: 'description',
      type: Primitives.String,
    },
    name: {
      label: 'Name',
      type: Primitives.String,
    },
  },
  name: 'Product',
  relationships: {
    belongsTo: ['Organization', 'User'],
  },
};
