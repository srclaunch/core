import {
  BrowserPackage,
  BuildFormat,
  Platform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  License,
  ProjectType,
  PublishAccess,
  StaticTyping,
  TestReporter,
  TestTool,
  ThemeLibraryConfig,
} from '@srclaunch/types';

export default <ThemeLibraryConfig>{
  name: '@srclaunch/themes',
  description:
    'CSS variables and styled-component based themes used by SrcLaunch applications',
  type: ProjectType.ThemeLibrary,
  build: {
    bundle: {
      exclude: ['react', 'react-dom/client', 'styled-components'],
      globals: {
        react: 'React',
        'react-dom/client': 'ReactDOMClient',
        'styled-components': 'styled',
      },
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    library: true,
    platform: Platform.Browser,
    react: true,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
  },
  react: true,
  docs: {
    assetsDir: 'assets',
    entryFile: 'docs/index.html',
    react: true,
    rootDir: 'docs',
  },
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint, CodeLinter.Stylelint],
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
