export default {
  name: '@srclaunch/dx',
  description:
    'Quality of life configuration and tooling for development environments.',
  type: 'library',
  package: {
    main: null,
    module: null,
    types: null,
    exports: [
      {
        path: './.commitlintrc',
        import: './.commitlintrc.mjs',
        require: './.commitlintrc.umd.cjs',
      },
      {
        path: './.eslintrc',
        import: './.eslintrc.mjs',
        require: './.eslintrc.umd.cjs',
      },
      {
        path: './.eslintrc.browser',
        import: './.eslintrc.browser.mjs',
        require: './.eslintrc.browser.umd.cjs',
      },
      {
        path: './.prettierrc',
        import: './.prettierrc.mjs',
        require: './.prettierrc.umd.cjs',
      },
      {
        path: './.stylelintrc',
        import: './.stylelintrc.mjs',
        require: './.stylelintrc.umd.cjs',
      },
      {
        path: './.stylelintrc',
        import: './.stylelintrc.mjs',
        require: './.stylelintrc.umd.cjs',
      },
      {
        path: './.versionrc',
        import: './.versionrc.mjs',
        require: './.versionrc.umd.cjs',
      },
      {
        path: './ava.config',
        import: './ava.config.mjs',
        require: './ava.config.umd.cjs',
      },
      {
        path: './jest.config',
        import: './jest.config.mjs',
        require: './jest.config.umd.cjs',
      },
      {
        path: './tsconfig.json',
        import: './tsconfig.json',
        require: './tsconfig.json',
      },
      {
        path: './tsconfig.ui.json',
        import: './tsconfig.ui.json',
        require: './tsconfig.ui.json',
      },
    ],
    files: [
      '.commitlintrc.mjs',
      '.commitlintrc.umd.cjs',
      '.eslintrc.mjs',
      '.eslintrc.umd.cjs',
      '.eslintrc.browser.mjs',
      '.eslintrc.browser.umd.cjs',
      '.prettierrc.mjs',
      '.prettierrc.umd.cjs',
      '.stylelintrc.mjs',
      '.stylelintrc.umd.cjs',
      '.stylelintrc.mjs',
      '.stylelintrc.umd.cjs',
      '.versionrc.mjs',
      '.versionrc.umd.cjs',
      'ava.config.mjs',
      'ava.config.umd.cjs',
      'jest.config.mjs',
      'jest.config.umd.cjs',
      'tsconfig.json',
      'tsconfig.ui.json',
    ],
  },
  release: {
    publish: {
      access: 'public',
      license: 'mit',
      registry: 'https://registry.npmjs.org/',
    },
  },
  requirements: {
    node: '>=14',
    srclaunch: {
      dx: false,
      cli: true,
      types: true,
    },
  },
};
