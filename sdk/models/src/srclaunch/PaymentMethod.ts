import { ModelProps, Primitives } from "@srclaunch/types";

export default <ModelProps>{
  fields: {
          
      created_date: {
        label: 'Created Date',
        required: false,
        type: Primitives.DateTime,
      },
      updated_date: {
        label: 'Updated Date',
        required: false,
        type: Primitives.DateTime,
      },
    
          OrganizationId: {
            label: 'Organization',
            required: false,
            type: Primitives.UUID
          },
          
          PaymentId: {
            label: 'Payment',
            required: false,
            type: Primitives.UUID
          },
          
          TeamId: {
            label: 'Team',
            required: false,
            type: Primitives.UUID
          },
          
          UserId: {
            label: 'User',
            required: false,
            type: Primitives.UUID
          },
          
    default: {
      label: "Default",
      type: Primitives.Boolean,
    },
    masked_number: {
      label: "Number",
      type: Primitives.String,
    },
    name: {
      label: "Name",
      type: Primitives.String,
    },
    type: {
      label: "Type",
      menu: [
        {
          label: "Bank Transfer",
          value: "bank-transfer",
        },
        {
          label: "Credit Card",
          value: "credit-card",
        },
        {
          label: "Crypto",
          value: "crypto",
        },
      ],
      type: Primitives.Menu,
    },
  },
  name: "PaymentMethod",
  relationships: {
    belongsTo: ["Organization", "Payment", "Team", "User"],
  },
};