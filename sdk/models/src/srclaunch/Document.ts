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
          
          InvoiceId: {
            label: 'Invoice',
            required: false,
            type: Primitives.UUID
          },
          
          UserId: {
            label: 'User',
            required: false,
            type: Primitives.UUID
          },
          
      name: {
        label: "Name",
        type: Primitives.String,
        required: true,
      },
      description: {
        label: "Description",
        type: Primitives.String,
        required: true,
      }
    },
    name: "Document",
    relationships: {
      belongsTo: ["Organization", "Invoice", "User"],
    },
  };
  