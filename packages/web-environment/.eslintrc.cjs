const base = require('./packages/dx/.eslintrc.browser');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: './tsconfig.json',
  },
};
