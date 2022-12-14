import {
  BuildFormat,
  Platform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  StaticTyping,
  License,
  LibraryConfig,
  ProjectType,
  PublishAccess,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/node-environment',
  description: 'Node.js environment specific utilities for SrcLaunch services',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.IIFE],
    library: true,
    platform: Platform.Node,
    target: BuildTarget.ESNext,
    tool: BuildTool.ESBuild,
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
    concurrency: 1,
  },
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint],
      staticTyping: [StaticTyping.TypeScript],
    },
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
