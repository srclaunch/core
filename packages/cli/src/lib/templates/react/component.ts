export function getReactComponentTemplate({
  name,
}: {
  readonly name: string;
}): string {
  return `\
const ${name} = () => {
  return <div>${name}</div>;
};
  `;
}
