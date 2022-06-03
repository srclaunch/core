import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatterTool,
  CodeLinterTool,
  StaticTypingTool,
  License,
  Project,
  ProjectType,
  PublishAccess,
  TestReporter,
  TestTool,
  Runner,
  UniversalPackage,
  BrowserPackage,
} from '@srclaunch/types';

export default <Project>{
  name: '@srclaunch/ui',
  description: 'SrcLaunch UI React component library',
  type: ProjectType.ComponentLibrary,
  build: {
    bundle: {
      exclude: ['react', 'react-dom', 'styled-components'],
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    input: {
      directory: 'src',
      file: 'index.tsx',
    },
    platform: BuildPlatform.Browser,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  run: {
    development: {
      tool: Runner.Vite,
    },
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Jest,
  },
  environments: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint, CodeLinterTool.Stylelint],
      run: {
        bundle: {
          optimize: {
            exclude: ['@srclaunch/exceptions'],
          },
        },
        runner: Runner.Vite,
      },
      staticTyping: [StaticTypingTool.TypeScript],
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
      BrowserPackage.AmazonCognitoIdentityJS,
      BrowserPackage.History,
      BrowserPackage.React,
      BrowserPackage.ReactDOM,
      BrowserPackage.ReactColorful,
      BrowserPackage.ReactCountryFlag,
      BrowserPackage.ReactDropzone,
      BrowserPackage.ReactSyntaxHighlighter,
      BrowserPackage.SrcLaunchIcons,
      BrowserPackage.SrcLaunchReactHooks,
      BrowserPackage.SrcLaunchThemes,
      BrowserPackage.SrcLaunchWebApplicationState,
      BrowserPackage.SrcLaunchWebEnvironment,
      BrowserPackage.StyledComponents,
      UniversalPackage.ColorNamer,
      UniversalPackage.CryptoJS,
      UniversalPackage.HexRGB,
      UniversalPackage.Luxon,
      UniversalPackage.NanoID,
      UniversalPackage.QueryString,
      UniversalPackage.RGBHex,
      UniversalPackage.SrcLaunchExceptions,
      UniversalPackage.SrcLaunchHttpClient,
      UniversalPackage.SrcLaunchI18n,
      UniversalPackage.SrcLaunchLogger,
      UniversalPackage.SrcLaunchTransform,
      UniversalPackage.SrcLaunchValidation,
    ],
    peerPackages: [
      BrowserPackage.ReactRedux,
      BrowserPackage.ReactRouter,
      UniversalPackage.Redux,
      UniversalPackage.ReduxToolkit,
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
