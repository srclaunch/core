const base = require('./.eslintrc.cjs');

module.exports = {
  ...base,
  env: {
    ...base.env,
    node: true,
  },
  extends: [
    ...base.extends,
  ],
  plugins: [
    ...base.plugins,
  ],
  rules: {
    ...base.rules,
  }
};
