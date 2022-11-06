
import { ModelProps, Primitives } from '@srclaunch/types';

export const Todo: ModelProps = {
  fields: {
    completed: {
      label: 'Completed',
      type: Primitives.String,
    },,name: {
      label: 'Name',
      type: Primitives.String,
    },
  },
  name: 'Todo',
};

