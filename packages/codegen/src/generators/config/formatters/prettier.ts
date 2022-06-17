export const generatePrettierConfig = ({
  extend = '@srclaunch/dx/.prettierrc.cjs',
}: {
  readonly extend?: string;
}) => {
  return `const base = require('${extend}');
  
  module.exports = {
    ...base,
  };`;
};
