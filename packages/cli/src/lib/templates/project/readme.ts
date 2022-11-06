export const getReadmeTemplate = ({
  name,
  owner,
}: {
  readonly name: string;
  readonly owner: string;
}) => `# ${owner}/${name}`;
