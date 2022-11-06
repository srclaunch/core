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
          
      message: {
        label: "Message",
        type: Primitives.String,
        required: true,
      },
      recipient: {
        label: "Recipient",
        type: Primitives.String,
        required: false,
      }
    },
    name: "Message",
    relationships: {
      belongsTo: ["Organization", "User"],
    },
  };