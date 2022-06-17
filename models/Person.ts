import { ModelProps, Primitives } from '@srclaunch/types';

export const Person: ModelProps = {
  fields: {
    analytics: {
      label: 'Analytics',
      type: Primitives.JSON,
    },
    billing: {
      label: 'Billing Details',
      type: Primitives.JSON,
    },
  },
  name: 'Person',
};
