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
          
          ProductId: {
            label: 'Product',
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
          
    status: {
      label: "Status",
      menu: [
        {
          label: "Active",
          value: "active",
        },
        {
          label: "Expired",
          value: "expired",
        },
        {
          label: "Canceled",
          value: "canceled",
        },
      ],
      type: Primitives.Menu,
    },
    cancel_date: {
      label: "Cancel date",
      type: Primitives.DateTime,
    },
    expiration_date: {
      label: "Expiration date",
      type: Primitives.DateTime,
    },
    renewal_date: {
      label: "Renewal date",
      type: Primitives.DateTime,
    },
    start_date: {
      label: "Start date",
      type: Primitives.DateTime,
    },
  },
  name: "Subscription",
  relationships: {
    belongsTo: ["Organization", "Product", "Team", "User"],
  },
};