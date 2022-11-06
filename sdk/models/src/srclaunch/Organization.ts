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
    
    description: {
      label: "Description",
      type: Primitives.String,
    },
    name: {
      label: "Name",
      type: Primitives.String,
    },
  },
  name: "Organization",
  relationships: {},
};