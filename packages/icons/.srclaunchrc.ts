import {
  BrowserPackage,
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  License,
  IconLibraryConfig,
  ProjectType,
  PublishAccess,
  StaticTyping,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

export default <IconLibraryConfig>{
  name: '@srclaunch/icons',
  description: 'React icon components',
  type: ProjectType.IconLibrary,
  react: true,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    library: true,
    platform: BuildPlatform.Browser,
    react: true,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
  },
  docs: {
    assetsDir: 'assets',
    entryFile: 'docs/index.html',
    react: true,
    rootDir: 'docs',
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
    tool: TestTool.Jest,
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
    peerPackages: [BrowserPackage.React],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
