export const getESLintIgnoreTemplate = ({
  paths,
}: {
  readonly paths: ReadonlyArray<string>;
}) => paths.join('\n');
