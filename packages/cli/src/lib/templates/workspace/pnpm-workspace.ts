export const getPnpmWorkspaceConfigTemplate = ({
  paths,
}: {
  readonly paths: ReadonlyArray<string>;
}) =>
  `packages:
  ${paths.map(path => `- ${path}`).join('\n')}
`;
