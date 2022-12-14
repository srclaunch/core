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
  name: '@srclaunch/logger',
  description: 'Logging utilties',
  type: ProjectType.Library,
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint],
      staticTyping: [StaticTyping.TypeScript],
    },
  },
  test: {
    concurrency: 1,
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
  },
  build: {
    bundle: {
      exclude: ['nanoid'],
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    library: true,
    platform: Platform.Browser,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
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
      UniversalPackage.NanoID,
      UniversalPackage.Luxon,
      UniversalPackage.PicoColors,
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
