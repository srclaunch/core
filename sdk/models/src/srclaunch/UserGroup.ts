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
          
          TeamId: {
            label: 'Team',
            required: false,
            type: Primitives.UUID
          },
          
    description: {
      label: "Description",
      type: Primitives.String,
    },
    name: {
      label: "Name",
      type: Primitives.String,
    },
  },
  name: "UserGroup",
  relationships: {
    belongsTo: ["Organization", "Team"],
  },
};