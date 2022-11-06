export const getPrettierIgnoreTemplate = ({
  paths,
}: {
  readonly paths: ReadonlyArray<string>;
}) => paths.join('\n');
