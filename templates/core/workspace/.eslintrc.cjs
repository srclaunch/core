const base = require('./packages/dx/.eslintrc.cjs');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: './tsconfig.json',
  },
};
