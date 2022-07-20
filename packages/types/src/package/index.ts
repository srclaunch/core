export type Dependency = {
  readonly [name: string]: string | undefined;
};

export type Dependencies = Record<string, string>;

export enum BrowserPackage {
  AmazonCognitoIdentityJS = 'amazon-cognito-identity-js',
  History = 'history',
  JSFileDownload = 'js-file-download',
  React = 'react',
  ReactColorful = 'react-colorful',
  ReactCountryFlag = 'react-country-flag',
  ReactDOM = 'react-dom',
  ReactDatePicker = 'react-date-picker',
  ReactDropzone = 'react-dropzone',
  ReactRedux = 'react-redux',
  ReactRouter = 'react-router',
  ReactSyntaxHighlighter = 'react-syntax-highlighter',
  SourceLaunchIcons = '@srclaunch/icons',
  SourceLaunchReactHooks = '@srclaunch/react-hooks',
  SourceLaunchThemes = '@srclaunch/themes',
  SourceLaunchWebApplicationState = '@srclaunch/web-app',
  SourceLaunchWebEnvironment = '@srclaunch/web-environment',
  StyledComponents = 'styled-components',
}

export enum NodePackage {
  AsyncExitHook = 'async-exit-hook',
  AwsSDK = 'aws-sdk',
  CORS = 'cors',
  Compression = 'compression',
  Config = 'config',
  Express = 'express',
  FSExtra = 'fs-extra',
  Keygrip = 'keygrip',
  Multer = 'multer',
  Plaid = 'plaid',
  Sequelize = 'sequelize',
  SourceLaunchDataClient = '@srclaunch/data-client',
  SourceLaunchHttpServer = '@srclaunch/http-server',
  SourceLaunchNodeEnvironment = '@srclaunch/node-environment',
}

export enum UniversalPackage {
  Axios = 'axios',
  ChangeCase = 'change-case',
  ColorNamer = 'color-namer',
  CryptoJS = 'crypto-js',
  CurrencyCodes = 'currency-codes',
  EmailValidator = 'email-validator',
  HexRGB = 'hex-rgb',
  JSYaml = 'js-yaml',
  Luxon = 'luxon',
  NanoID = 'nanoid',
  PasswordValidator = 'password-validator',
  PicoColors = 'pico-colors',
  Pluralize = 'pluralize',
  QueryString = 'query-string',
  RGBHex = 'rgb-hex',
  Redux = 'redux',
  ReduxToolkit = '@reduxjs/toolkit',
  SerializeError = 'serialize-error',
  SourceLaunchA11y = '@srclaunch/a11y',
  SourceLaunchActions = '@srclaunch/actions',
  SourceLaunchAuthentication = '@srclaunch/authentication',
  SourceLaunchExceptions = '@srclaunch/exceptions',
  SourceLaunchHttpClient = '@srclaunch/http-client',
  SourceLaunchI18n = '@srclaunch/i18n',
  SourceLaunchLogger = '@srclaunch/logger',
  SourceLaunchTransform = '@srclaunch/transform',
  SourceLaunchValidation = '@srclaunch/validation',
  Uuid = 'uuid',
  Zxcvbn = 'zxcvbn',
}

export enum TypesPackage {
  React = '@types/react',
}

export type Package =
  | BrowserPackage
  | NodePackage
  | TypesPackage
  | UniversalPackage;

export enum PackageType {
  CommonJS = 'commonjs',
  Module = 'module',
}

export type PackageConfig = {
  readonly exports?: readonly {
    readonly import?: string;
    readonly path: string;
    readonly require?: string;
  }[];
  readonly files?: readonly string[];
  readonly main?: string;
  readonly module?: string;
  readonly scripts?: Record<string, string>;
  readonly type?: PackageType;
  readonly types?: string;
};

export enum PackageManager {
  NPM = 'npm',
  PNPM = 'pnpm',
  Yarn = 'yarn',
}
