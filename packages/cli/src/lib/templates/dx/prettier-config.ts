export const getPrettierConfigTemplate = () => `
const base = require('./packages/dx/.prettierrc.cjs');

module.exports = {
  ...base,
};`;
