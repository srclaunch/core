import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  StaticTyping,
  License,
  ComponentLibraryConfig,
  ProjectType,
  PublishAccess,
  TestReporter,
  TestTool,
  UniversalPackage,
  DeploymentPlatform,
  BrowserPackage,
  EnvironmentType,
  Runner,
  DocumentationType,
  DocumentationConfig,
  FileType,
  ComponentLibraryDocumentationConfig,
  ComponentSpec,
} from '@srclaunch/types';



import components from './.srclaunch/docs/component-library/components.json'
import routes from './.srclaunch/docs/component-library/routes.json';


export default <ComponentLibraryConfig>{
  name: '@srclaunch/ui',
  description: 'SrcLaunch UI React component library',
  type: ProjectType.ComponentLibrary,
  build: [
    {
      bundle: {
        exclude: [
          'react',
          'react-dom',
          'react-dom/client',
          'redux',
          'react-redux',
          'react-router',
          'react-router-dom',
          'styled-components',
        ],
      },
      formats: [BuildFormat.ESM, BuildFormat.UMD],
      input: {
        directory: 'src',
        file: 'index.ts',
      },
      library: true,
      platform: BuildPlatform.Browser,
      react: true,
      target: BuildTarget.Modules,
      tool: BuildTool.Vite,
      types: true,
    },

    {
      basePath: '/ui/',
      bundle: {
        exclude: ['@srclaunch/config', '@srclaunch/docs'],
      },
      clean: true,
      components,
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
  documentation: {
    basePath: '/ui',
    name: '@srclaunch/ui',
    components: components as ComponentSpec[],
    description: 'SrcLaunch UI React component library documentation',
    generate: {
      input: {
        directory: 'src/components',
      },
    },
    // react: true,
    routes,
    runner: Runner.Vite,
    styledComponents: true,
    type: DocumentationType.ComponentLibrary,
  },
  environments: {
    development: {
      exclude: ['@srclaunch/component-library'],
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint, CodeLinter.Stylelint],
      run: {
        input: {
          directory: 'src/__docs__',
          file: 'index.tsx',
        },
        react: true,
        styledComponents: true,
        watch: ['src/**/*.tsx', 'src/**/*.md'],
      },
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
    deployment: {
      platform: DeploymentPlatform.GitHubPages,
      input: {
        directory: 'docs',
      },
      output: {
        clean: false,
        path: 'ui',
        repo: 'https://github.com/srclaunch/srclaunch.github.io.git',
      },
    },
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
