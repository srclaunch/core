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
  UniversalPackage,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/http-client',
  description: 'Wrapper around Axios HTTP client',
  type: ProjectType.Library,
  build: {
    bundle: {
      exclude: ['axios', 'nanoid'],
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    library: true,
    platform: BuildPlatform.Browser,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
  },
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
    packages: [
      UniversalPackage.Axios,
      UniversalPackage.NanoID,
      UniversalPackage.SrcLaunchExceptions,
      UniversalPackage.SrcLaunchLogger,
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
