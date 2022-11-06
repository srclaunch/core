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
      due_date: {
        label: "Due Date",
        type: Primitives.Date,
        required: true,
      },
      notes: {
        label: "Notes",
        type: Primitives.String,
      },
      status: {
        label: "Status",
        type: Primitives.String,
        required: true,
      },
    },
    name: "Invoice",
    relationships: {
      belongsTo: ["Organization", "Payment", "User"],
    },
  };