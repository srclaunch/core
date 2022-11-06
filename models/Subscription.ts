import { ModelProps, Primitives } from '@srclaunch/types';

export const Subscription: ModelProps = {
  fields: {
    active: {
      label: 'Status',
      menu: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Expired',
          value: 'expired',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
      ],
      type: Primitives.Menu,
    },
    cancel_date: {
      label: 'Cancel date',
      type: Primitives.DateTime,
    },
    expiration_date: {
      label: 'Expiration date',
      type: Primitives.DateTime,
    },
    renewal_date: {
      label: 'Renewal date',
      type: Primitives.DateTime,
    },
    start_date: {
      label: 'Start date',
      type: Primitives.DateTime,
    },
  },
  name: 'Subscription',
  relationships: {
    belongsTo: ['Organization', 'Product', 'Team', 'User'],
  },
};
