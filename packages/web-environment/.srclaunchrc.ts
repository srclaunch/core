import {
  BuildFormat,
  Platform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  StaticTyping,
  LibraryConfig,
  ProjectType,
  PublishAccess,
  TestReporter,
  License,
  TestTool,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/web-environment',
  description: 'Web environment specific utilities for SrcLaunch applications',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    library: true,
    platform: Platform.Browser,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
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
    yarn: '>=3.2.0',
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
