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
  DocumentationType,
  FileType,
} from '@srclaunch/types';

export default <IconLibraryConfig>{
  name: '@srclaunch/icons',
  description: 'React icon components',
  type: ProjectType.IconLibrary,
  react: true,
  build: {
    // bundle: {
    //   preserveModules: true,
    // },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    input: {
      directory: 'src',
      file: 'index.tsx',
      // 'iconsets/basic/index.ts'
      // 'iconsets/dual-light/index.ts'
    },
    library: true,
    platform: BuildPlatform.Browser,
    react: true,
    splitting: true,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
  },
  documentation: {
    name: '@srclaunch/icons',
    description: 'React icon components',
    autoGenerate: true,
    input: {
      directory: 'src/components',
    },
    output: {
      directory: 'src/__docs__',
      file: {
        name: 'icons',
        type: FileType.YAML,
      },
    },
    type: DocumentationType.IconLibrary,
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
