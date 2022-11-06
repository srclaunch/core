import {
  BuildFormat,
  BuildPlatform,
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
  name: '@srclaunch/core-api-server',
  description: 'SrcLaunch Core API server',
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
      exclude: ['@srclaunch/data-client', '@srclaunch/http-server', 'aws-sdk'],
    },
    
    formats: [BuildFormat.ESM, BuildFormat.CJS],
    library: true,
    platform: BuildPlatform.Node,
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
