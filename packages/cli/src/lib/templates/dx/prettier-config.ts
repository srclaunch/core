export const getPrettierConfigTemplate = () => `
const base = require('@srclaunch/dx/.prettierrc.cjs');

module.exports = {
  ...base,
};`;
