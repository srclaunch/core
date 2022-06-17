# @srclaunch/dx

[![Issues](https://img.shields.io/github/issues/srclaunch/dx?label=Issues)](https://github.com/srclaunch/dx/issues) [![Build](https://github.com/srclaunch/dx/actions/workflows/publish.yml/badge.svg)](https://github.com/srclaunch/dx/actions/workflows/publish.yml) [![npms.io (final)](https://img.shields.io/npms-io/final-score/@srclaunch/dx?label=NPMS%20Score)](https://npms.io/search?q=@srclaunch/dx)

Includes the following configuration and linters:

<!-- prettier-ignore -->
| Linter | Description |
|:-------|:------------|
| `eslint` | [ESLint](https://eslint.org/) is a JavaScript code quality tool that checks your code for errors, helps you write better code, and rewards you for writing it. |
| `prettier` | [Prettier](https://prettier.io/) is a tool to format your code according to a preset style. |
| `stylelint` | [Stylelint](https://stylelint.io/) is a mighty, modern linter that helps you avoid errors and enforce conventions in your styles.|
| `commitlint` | [Commitlint](https://commitlint.js.org/) is a tool to enforce a consistent commit message format. |

<!-- prettier-ignore -->
| Configuration | Description  |
| -------| ------------------ |
| `typescript` | [TypeScript](https://www.typescriptlang.org/)  is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. |
| `jest` | [Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity. |
| `ava` | [AVA](https://github.com/avajs/ava) is a test runner for Node.js with a concise API, detailed error output, embrace of new language features and process isolation that lets you develop with confidence. |
| `standard-version` | [Standard Version](https://github.com/conventional-changelog/standard-version) is utility for versioning using semver and CHANGELOG generation powered by Conventional Commits. |

## Instructions

### Installation

Install each of the following dependencies you choose to use.

<!-- prettier-ignore -->
| Linter/Configuration | Command |
|:---------------------|:--------|
| `eslint` | `npm i -D eslint eslint-config-prettier eslint-config-stylelint eslint-import-resolver-typescript eslint-plugin-functional eslint-plugin-import eslint-plugin-node eslint-plugin-only-warn eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-sort-keys-fix eslint-plugin-sort-requires eslint-plugin-testing-library eslint-plugin-unicorn @typescript-eslint/parser @typescript-eslint/eslint-plugin` or `yarn add eslint eslint-config-prettier eslint-config-stylelint eslint-import-resolver-typescript eslint-plugin-functional eslint-plugin-import eslint-plugin-node eslint-plugin-only-warn eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-sort-keys-fix eslint-plugin-sort-requires eslint-plugin-testing-library eslint-plugin-unicorn @typescript-eslint/parser @typescript-eslint/eslint-plugin -D` |
| `prettier` | `npm i -D prettier` or `yarn add prettier -D` |
| `stylelint` | `npm i -D stylelint` or `yarn add stylelint stylelint-config-idiomatic-order stylelint-config-prettier stylelint-config-recommended stylelint-order -D` |
| `commitlint` | `npm i -D @commitlint/config-conventional @commitlint/cli` or `yarn add @commitlint/config-conventional @commitlint/cli -D` |
| `typescript` | `npm i -D typescript` or `yarn add typescript -D` |
| `jest` | `npm i -D jest` or `yarn add jest -D` |
| `ava` | `npm i -D ava` or `yarn add ava -D` |
| `standard-version` | `npm i -D standard-version` or `yarn add standard-version -D` |

prettier stylelint commitlint typescript jest ava standard-version

With [npm](https://nodejs.org/en/):

    `npm install --save-dev @srclaunch/dx`

Or with [yarn](https://yarnpkg.com/en/docs/install):

    yarn add @srclaunch/dx -D

The `eslint`, `prettier`, and `standard-version` tools loads the configuration files using CommonJS/`require`, so we need to use the `.cjs` file extension and `require` syntax to load the configuration if your package is using ESM. Use the filenames below and place in the root directory of your project.

### Examples

#### ESLint

**`.eslintrc.cjs`**

```js
const base = require("@srclaunch/dx/.eslintrc");

module.exports = {
  ...base,
  // Any custom config here...
};
```

Use `@srclaunch/dx/.eslintrc.ui` for configuration optimized for frontend development.

```js
const base = require("@srclaunch/dx/.eslintrc.ui");

module.exports = {
  ...base,
  // Any custom config here...
};
```

#### Prettier

**`.prettierrc.cjs`**

```js
const base = require("@srclaunch/dx/.prettierrc");

module.exports = {
  ...base,
  // Any custom config here...
};
```

#### Stylelint

**`.stylelintrc.js`**

```js
import base from "@srclaunch/dx/.stylelintrc";

export default {
  ...base,
  // Any custom config here...
};
```

Use `@srclaunch/dx/.stylelintrc.ui` for configuration optimized for frontend development.

```js
import base from "@srclaunch/dx/.stylelintrc.ui";

export default {
  ...base,
  // Any custom config here...
};
```

#### Commitlint - Conventional commits

**`.commitlintrc.js`**

```js
import base from "@srclaunch/dx/.commitlintrc";

export default {
  commitlint: {
    ...base,
    // Any custom config here...
  },
};
```

#### Typescript

**`tsconfig.json`**

```json
{
  "extends": "@srclaunch/dx/tsconfig.json",
  "include": ["src"]
}
```

For a Typescript configuration optimized for frontend development extend `@srclaunch/dx/tsconfig.ui.json`.

```json
{
  "extends": "@srclaunch/dx/tsconfig.ui.json",
  "include": ["src"]
}
```

#### Jest

**`jest.config.js`**

```js
import base from "@srclaunch/dx/jest.config";

export default {
  ...base,
  // Any custom config here...
};
```

#### AVA

**`ava.config.js`**

```js
import base from "@srclaunch/dx/ava.config";

export default {
  ...base,
  // Any custom config here...
};
```

#### Standard Version

**`.versionrc.cjs`**

```js
const base = require("@srclaunch/dx/.versionrc");

module.exports = {
  ...base,
  // Any custom config here...
};
```
