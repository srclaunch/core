export const getESLintConfigTemplate = () => `
const base = require('@srclaunch/dx/.eslintrc.cjs');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: './tsconfig.json',
  },
};
`;
