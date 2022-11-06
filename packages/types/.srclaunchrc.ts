import {
  LibraryConfig,
  ProjectType,
  BuildFormat,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  StaticTyping,
  BuildTarget,
} from './src';

export default <LibraryConfig>{
  name: '@srclaunch/types',
  description:
    'TypeScript definitions used by SrcLaunch projects and workspaces.',
  type: 'library',
  build: {
    library: true,
    formats: [BuildFormat.ESM, BuildFormat.IIFE],
    target: BuildTarget.ESNext,
    tool: BuildTool.ESBuild,
  },
  environment: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint],
      staticTyping: [StaticTyping.TypeScript],
    },
  },
  package: {
    exports: [
      {
        path: '.',
        import: './dist/index.esm.js',
        require: './dist/index.js',
      },
      {
        path: 'action',
        import: './dist/action',
      },
    ],
  },
  release: {
    force: true,
    publish: {
      access: 'public',
      license: 'MIT',
      registry: 'https://registry.npmjs.org/',
    },
  },
  requirements: {
    node: '>=14',
    srclaunch: {
      dx: true,
      cli: true,
      types: false,
    },
  },

  // workflows: [
  //   {
  //     action: {
  //       name: 'Run Tests',
  //       description: 'Run tests',
  //       run: async () => {
  //         console.log('hi');
  //       },
  //     },
  //     on: GitHubRepositoryEvent.Push,
  //   },
  // ],
};
