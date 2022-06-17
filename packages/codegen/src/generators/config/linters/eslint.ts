export const generateESLintConfig = ({
  extend = '@srclaunch/dx/.eslintrc.cjs',
}: {
  readonly extend?: string;
}) => {
  return `const base = require('${extend}');
  
  module.exports = {
    ...base,
  };`;
};
