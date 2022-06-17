export const generateESLintConfig = ({
  extend = '@srclaunch/dx/stylelintrc.mjs',
}: {
  readonly extend?: string;
}) => {
  return `import base from '${extend}';

  export default {
    ...base,
  };
  `;
};
