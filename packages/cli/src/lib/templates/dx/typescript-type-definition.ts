export const getTypescriptTypeDefinitionTemplate = ({
  fields,
  name,
}: {
  readonly fields: Record<string, unknown>;
  readonly name: string;
}) => `
export interface ${name} {
  ${Object.keys(fields).map(fieldName => {
    return `${fieldName}: ${fields[fieldName]};`;
  })}
}
`;
