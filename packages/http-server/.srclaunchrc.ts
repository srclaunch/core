import {
  BuildFormat,
  Platform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  License,
  LibraryConfig,
  ProjectType,
  PublishAccess,
  StaticTyping,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/http-server',
  description: 'Simple API wrapper around Express server',
  type: ProjectType.Library,
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint],
      staticTyping: [StaticTyping.TypeScript],
    },
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
    concurrency: 1,
  },
  build: {
    bundle: {
      exclude: ['compression', 'express', 'multer'],
    },
    formats: [BuildFormat.ESM, BuildFormat.CJS],
    library: true,
    platform: Platform.Node,
    target: BuildTarget.ESNext,
    tool: BuildTool.ESBuild,
  },
  release: {
    publish: {
      access: PublishAccess.Public,
      license: License.MIT,
      registry: 'https://registry.npmjs.org/',
    },
  },
  requirements: {
    node: '>=16',
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
