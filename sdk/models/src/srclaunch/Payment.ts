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
          
          UserId: {
            label: 'User',
            required: false,
            type: Primitives.UUID
          },
          
      amount: {
        label: "Amount",
        type: Primitives.Number,
        required: true,
      },
      currency: {
        label: "Currency",
        type: Primitives.CurrencyCode,
        required: true,
      },
      date: {
        label: "Date",
        type: Primitives.Date,
        required: true,
      },
      failure_reason: {
        label: "Failure Reason",
        type: Primitives.Menu,
        menu: [
          {
            label: 'Insufficient Funds',
            value: 'insufficient-funds',
          },
          {
            label: 'Invalid Amount',
            value: 'invalid-amount',
          },
          {
            label: 'Invalid Currency',
            value: 'invalid-currency',
          },
          {
            label: 'Invalid Card',
            value: 'invalid-card',
          },
          {
            label: 'Invalid Card Expiry',
            value: 'invalid-card-expiry',
          },
          {
            label: 'Invalid Card Number',
            value: 'invalid-card-number',
          },
          {
            label: 'Invalid Card Security Code',
            value: 'invalid-card-security-code',
          },
          {
            label: 'Invalid Card Holder',
            value: 'invalid-card-holder',
          },
          {
            label: 'Invalid Card Address',
            value: 'invalid-card-address',
          },
        ]
      },
      notes: {
        label: "Notes",
        type: Primitives.String,
        required: true,
      },
      status: {
        label: "Status",
        type: Primitives.Menu,
        required: true,
        menu: [
          {
            label: "Paid",
            value: "paid",
          },
          {
            label: "Failure",
            value: "failure",
          },
          {
            label: "Pending",
            value: "pending",
          },
        ],
      }
    },
    name: "Payment",
    relationships: {
      belongsTo: ["Organization", "User"],
    },
  };