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
  RepositoryEvent,
  Task,
  Workflow,
  GitHubWorkflow,
  PackageManager,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/ci-cd',
  description: 'CI/CD workflows and tools',
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
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    library: true,
    platform: BuildPlatform.Browser,
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
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
