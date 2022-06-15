import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  RepositoryEvent,
  LibraryConfig,
  License,
  ProjectType,
  PublishAccess,
  StaticTyping,
  TestReporter,
  TestTool,
  UniversalPackage,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/transform',
  description: 'Transform values into other types',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.UMD, BuildFormat.ESM],
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
      UniversalPackage.JSYaml,
      UniversalPackage.EmailValidator,
      UniversalPackage.PasswordValidator,
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
  repository: {},
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
    concurrency: 1,
  },
};
