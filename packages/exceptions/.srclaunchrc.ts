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
  UniversalPackage,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/exceptions',
  description: 'Exception handling utilities',
  type: ProjectType.Library,
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint],
      staticTyping: [StaticTyping.TypeScript],
    },
  },
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
  release: {
    publish: {
      access: PublishAccess.Public,
      license: License.MIT,
      registry: 'https://registry.npmjs.org/',
    },
  },
  requirements: {
    node: '>=16',
    packages: [
      UniversalPackage.Luxon,
      UniversalPackage.NanoID,
      UniversalPackage.SerializeError,
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
