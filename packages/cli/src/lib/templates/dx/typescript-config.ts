export const getTypeScriptConfigTemplate = () => `
{
  "extends": "@srclaunch/dx/tsconfig.json",
  "include": [
    "./.eslintrc.cjs",
    "**/*.ts",
    "**/*.tsx",
  ]
}`;
