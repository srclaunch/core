export const getPackageConfigTemplate = ({
  owner,
  name,
  description,
}: {
  readonly description?: string;
  readonly name: string;
  readonly owner?: string;
}) => `
{
  "name": "@${owner}/${name}",
  "description": "${description}",
  "version": "0.0.1",
  "engines": {
    "node": ">=16",
    "pnpm": ">=7.6.0"
  },
  "type": "module",
  "scripts": {
    "build": "turbo run build --color",
    "build:models": "srclaunch models build",
    "deploy": "turbo run deploy --color --concurrency=1",
    "dev": "srclaunch dev",
    "release": "turbo run release --color --concurrency=2",
    "test": "turbo run test --color --concurrency=2"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/${owner}/${name}.git"
  },
  "packageManager": "pnpm@7.6.0",
  "pnpm": {
    "packageExtensions": {
      "eslint-plugin-flowtype": {
        "peerDependenciesMeta": {
          "@babel/plugin-syntax-flow": {
            "optional": true
          },
          "@babel/plugin-transform-react-jsx": {
            "optional": true
          }
        }
      }
    },
    "peerDependencyRules": {
      "allowAny": [
        "eslint"
      ]
    }
  },
  "devDependencies": {
    "@commitlint/cli": "^17.0.3",
    "@commitlint/config-conventional": "^17.0.3",
    "@microsoft/eslint-plugin-sdl": "^0.2.0",
    "@srclaunch/cli": "^1.0.0",
    "@srclaunch/dx": "^1.0.0",
    "@srclaunch/types": "^1.0.0",
    "@types/node": "^18.6.2",
    "@typescript-eslint/eslint-plugin": "^5.31.0",
    "@typescript-eslint/parser": "^5.31.0",
    "babel-plugin-styled-components": "^2.0.7",
    "eslint": "^8.20.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-config-stylelint": "^15.1.0",
    "eslint-import-resolver-typescript": "^3.3.0",
    "eslint-plugin-better-styled-components": "^1.1.2",
    "eslint-plugin-eslint-comments": "^3.2.0",
    "eslint-plugin-functional": "^4.2.2",
    "eslint-plugin-github": "^4.3.7",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jest": "^26.6.0",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-only-warn": "^1.0.3",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-regexp": "^1.8.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "eslint-plugin-sort-keys-fix": "^1.1.2",
    "eslint-plugin-sort-requires": "^2.1.0",
    "eslint-plugin-testing-library": "^5.5.1",
    "eslint-plugin-tsdoc": "^0.2.16",
    "eslint-plugin-typescript-sort-keys": "^2.1.0",
    "eslint-plugin-unicorn": "^43.0.2",
    "prettier": "^2.7.1",
    "stylelint": "^14.9.1",
    "stylelint-config-idiomatic-order": "^8.1.0",
    "stylelint-config-prettier": "^9.0.3",
    "stylelint-config-recommended": "^8.0.0",
    "stylelint-config-styled-components": "^0.1.1",
    "stylelint-order": "^5.0.0",
    "turbo": "^1.3.4",
    "typescript": "^4.7.4"
  }
}`;
