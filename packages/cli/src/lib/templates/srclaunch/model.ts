import { ModelField } from '@srclaunch/types';

export const getSrcLaunchModelTemplate = ({
  fields,
  name,
}: {
  readonly fields: Record<string, ModelField>;
  readonly name: string;
}) => `
import { ModelProps, Primitives } from '@srclaunch/types';

export const ${name}: ModelProps = {
  fields: {
    ${Object.keys(fields).map(fieldName => {
      const field = fields[fieldName]!;

      return `${fieldName}: {
      label: '${field.label}',
      type: Primitives.${field.type},
    },`;
    })}
  },
  name: '${name}',
};

`;
