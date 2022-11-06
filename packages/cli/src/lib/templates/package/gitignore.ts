export const getGitIgnoreTemplate = ({
  paths,
}: {
  readonly paths: ReadonlyArray<string>;
}) => paths.join('\n');
