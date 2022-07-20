import {
  BrowserPackage,
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  LibraryConfig,
  License,
  ProjectType,
  PublishAccess,
  Runner,
  StaticTyping,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/docs',
  description:
    'React components and other utilities for generating documentation',
  type: ProjectType.Library,
  build: [
    {
      bundle: {
        exclude: ['react', 'react-dom/client', 'styled-components'],
        globals: {
          react: 'React',
          'styled-components': 'styled',
        },
      },
      clean: true,
      formats: [BuildFormat.ESM, BuildFormat.UMD],
      input: {
        directory: 'src',
        file: 'index.tsx',
      },
      library: true,
      platform: BuildPlatform.Browser,
      react: true,
      styledComponents: true,
      target: BuildTarget.Modules,
      tool: BuildTool.Vite,
      types: true,
    },
    {
      bundle: {
        exclude: ['react', 'react-dom/client', 'styled-components'],
        globals: {
          // 'styled-components': 'styled',
        },
      },
      clean: true,
      input: {
        directory: 'src/__docs__',
        file: 'index.html',
      },
      output: {
        directory: 'docs',
      },
      platform: BuildPlatform.Browser,
      react: true,
      target: BuildTarget.Modules,
      tool: BuildTool.Vite,
      types: false,
    },
  ],
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint, CodeLinter.Stylelint],
      run: {
        basePath: '/docs',
        input: {
          directory: 'src/__docs__',
          file: 'index.html',
        },
        react: true,
        runner: Runner.Vite,
        styledComponents: true,
      },
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
    peerPackages: [BrowserPackage.React, BrowserPackage.StyledComponents],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Jest,
    concurrency: 1,
  },
};
