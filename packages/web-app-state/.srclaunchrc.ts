import {
  BrowserPackage,
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
  name: '@srclaunch/web-app-state',
  description: 'Redux state and utilities used by AppLab web applications',
  type: ProjectType.Library,
  build: {
    bundle: {
      exclude: [
        'react',
        'redux',
        'react-redux',
        'react-router',
        'react-router-dom',
      ],
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    input: {
      directory: 'src',
      file: 'index.tsx',
    },
    library: true,
    platform: Platform.Browser,
    react: true,
    styledComponents: true,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
    types: true
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
    packages: [
      BrowserPackage.AmazonCognitoIdentityJS,
      BrowserPackage.History,
      BrowserPackage.SrcLaunchThemes,
      BrowserPackage.SrcLaunchWebEnvironment,
      BrowserPackage.ReactRedux,
      BrowserPackage.ReactRouter,
      UniversalPackage.Redux,
      UniversalPackage.ReduxToolkit,
      UniversalPackage.CryptoJS,
      UniversalPackage.Luxon,
      UniversalPackage.NanoID,
      UniversalPackage.SrcLaunchExceptions,
      UniversalPackage.SrcLaunchHttpClient,
      UniversalPackage.SrcLaunchI18n,
      UniversalPackage.SrcLaunchLogger,
      UniversalPackage.SrcLaunchValidation,
    ],
    peerPackages: [
      BrowserPackage.React,
      BrowserPackage.ReactDOM,
      BrowserPackage.StyledComponents,
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
