import { Platform } from '@srclaunch/types';

export const getESLintConfigTemplate = ({
  platform,
  tsconfigPath,
}: {
  readonly platform?: Platform;
  readonly tsconfigPath?: string;
}) => `
const base = require('@srclaunch/dx/.eslintrc.${
  platform ? `${platform}.` : ''
}cjs');

module.exports = {
  ...base,
  ${
    tsconfigPath
      ? `parserOptions: { ...base.parserOptions, project: '${tsconfigPath}' },`
      : ''
  };
};`;
