export const getTypeScriptConfigTemplate = () => `
{
  "extends": "@srclaunch/dx/tsconfig.json",
  "include": [
    "./.eslintrc.cjs",
    "src/**/*.ts",
    "src/**/*.tsx",
  ]
}`;
