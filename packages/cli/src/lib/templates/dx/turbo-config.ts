export const getTurboConfigTemplate = () => `
{
  "$schema": "https://turborepo.org/schema.json",
  "baseBranch": "origin/main",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": [],
      "inputs": ["src/**/*.tsx", "src/**/*.ts"]
    },
    "release": {
      "dependsOn": ["build", "test"],
      "outputs": []
    },
    "release:local": {
      "dependsOn": ["build", "test"],
      "outputs": []
    },
    "deploy": {
      "dependsOn": ["release"],
      "outputs": []
    },
    "deploy:local": {
      "cache": false,
      "dependsOn": ["release:local"],
      "outputs": []
    }
  }
}`;
