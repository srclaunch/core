import {
  BuildFormat,
  Platform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  RepositoryEvent,
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
  name: '@srclaunch/validation',
  description: 'Validation utilities',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    library: true,
    platform: Platform.Browser,
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
  test: {
    concurrency: 1,
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
  },
};
