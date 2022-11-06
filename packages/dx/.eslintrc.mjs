/* eslint-disable @typescript-eslint/naming-convention */
export default {
  env: {
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@microsoft/sdl/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    project: '../../tsconfig.json',
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    '@microsoft/sdl',
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
    'functional',
    'unicorn',
    'only-warn',
    'simple-import-sort',
    'sort-keys-fix',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/member-ordering': ['off'],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'default',
      },
      {
        format: ['camelCase'],
        selector: 'classProperty',
      },
      {
        filter: {
          match: true,
          regex: '^(__proto__)$',
        },
        format: ['camelCase'],
        leadingUnderscore: 'allowDouble',
        selector: 'classProperty',
        trailingUnderscore: 'allowDouble',
      },
      { format: ['PascalCase'], selector: 'enumMember' },
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'objectLiteralProperty',
      },
      { format: ['PascalCase'], selector: 'typeLike' },
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'variable',
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/sort-type-union-intersection-members': [
      'warn',
      { order: 'alphabetically' },
    ],
    'functional/prefer-readonly-type': [
      'error',
      {
        allowLocalMutation: true,
        ignorePattern: '^mutable',
      },
    ],
    'lines-between-class-members': 0,
    'max-len': ['error', { code: 120 }],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-console': ['warn'],
    'no-multiple-empty-lines': 2,
    'object-shorthand': 2,
    'simple-import-sort/exports': ['warn'],
    'simple-import-sort/imports': ['warn'],
    'sort-imports': ['off'],
    'sort-keys': 2,
    'sort-keys-fix/sort-keys-fix': ['warn'],
    'tsdoc/syntax': ['warn'],
    'typescript-sort-keys/interface': ['warn'],
    'typescript-sort-keys/string-enum': ['warn'],
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          args: false,
          doc: false,
          docs: false,
          e: false,
          el: false,
          props: false,
          ref: false,
          src: false,
        },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // Always try to resolve types under `<root>@types` directory
        // even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      },
    },
  },
};
