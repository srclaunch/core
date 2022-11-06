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
    
    analytics: {
      label: "Analytics",
      type: Primitives.JSON,
    },
    billing: {
      label: "Billing Details",
      type: Primitives.JSON,
    },
  },
  name: "Person",
  relationships: {
    hasMany: ["Event"],
    hasOne: ["User"],
  },
};