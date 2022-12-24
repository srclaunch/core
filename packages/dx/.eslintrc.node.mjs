/* eslint-disable @typescript-eslint/naming-convention */
import base from './.eslintrc.mjs';

export default {
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
