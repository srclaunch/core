import { ModelProps, Primitives } from '@srclaunch/types';

export const PaymentMethod: ModelProps = {
  fields: {
    default: {
      label: 'Default',
      type: Primitives.Boolean,
    },
    masked_number: {
      label: 'Number',
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
          label: 'American Express',
          value: 'american_express',
        },
        {
          label: 'Discover',
          value: 'discover',
        },
        {
          label: 'Mastercard',
          value: 'mastercard',
        },
        {
          label: 'Visa',
          value: 'visa',
        },
      ],
      type: Primitives.Menu,
    },
  },
  name: 'PaymentMethod',
  relationships: {
    belongsTo: ['Organization', 'Team', 'User'],
  },
};
