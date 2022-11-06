import {
  BrowserPackage,
  Dependencies,
  NodePackage,
  Package,
  ProjectType,
  UniversalPackage,
} from '@srclaunch/types';
import latestVersion from 'latest-version';
import SemVer from 'semver';

import {
  AMAZON_COGNITO_IDENTITY_JS_DEPENDENCIES,
  ASYNC_EXIT_HOOK_DEPENDENCIES,
  AWS_SDK_DEPENDENCIES,
  AXIOS_DEPENDENCIES,
  CHANGE_CASE_DEPEENDENCIES,
  COLOR_NAMER_DEPEENDENCIES,
  COMPRESSION_DEPENDENCIES,
  CONFIG_DEPENDENCIES,
  CORS_DEPENDENCIES,
  CRYPTO_JS_DEPENDENCIES,
  CURRENCY_CODES_DEPEENDENCIES,
  EMAIL_VALIDATOR_DEPENDENCIES,
  EXPRESS_DEPENDENCIES,
  FS_EXTRA_DEPENDENCIES,
  HEX_RGB_DEPENDENCIES,
  HISTORY_DEPENDENCIES,
  JS_FILE_DOWNLOAD_DEPENDENCIES,
  JS_YAML_DEPENDENCIES,
  KEYGRIP_DEPENDENCIES,
  LUXON_DEPENDENCIES,
  MULTER_DEPENDENCIES,
  NANOID_DEPENDENCIES,
  PASSWORD_VALIDATOR_DEPENDENCIES,
  PICO_COLORS_DEPENDENCIES,
  PLAID_DEPENDENCIES,
  PLURALIZE_DEPENDENCIES,
  QUERY_STRING_DEPENDENCIES,
  REACT_COLORFUL_DEPENDENCIES,
  REACT_COUNTRY_FLAG_DEPENDENCIES,
  REACT_DATE_PICKER_DEPENDENCIES,
  REACT_DEPENDENCIES,
  REACT_DOM_DEPENDENCIES,
  REACT_DROPZONE_DEPENDENCIES,
  REACT_HOOKS_DEPENDENCIES,
  REACT_REDUX_DEPENDENCIES,
  REACT_ROUTER_DEPENDENCIES,
  REACT_SYNTAX_HIGHLIGHTER_DEPENDENCIES,
  REDUX_DEPENDENCIES,
  REDUX_TOOLKIT_DEPENDENCIES,
  RGB_HEX_DEPENDENCIES,
  SERIALIZE_ERROR_DEPENDENCIES,
  SRCLAUNCH_DATA_CLIENT_DEPENDENCIES,
  SRCLAUNCH_EXCEPTIONS_DEPENDENCIES,
  SRCLAUNCH_HTTP_CLIENT_DEPENDENCIES,
  SRCLAUNCH_HTTP_SERVER_DEPENDENCIES,
  SRCLAUNCH_I18N_DEPENDENCIES,
  SRCLAUNCH_ICONS_DEPENDENCIES,
  SRCLAUNCH_LOGGER_DEPENDENCIES,
  SRCLAUNCH_NODE_ENVIRONMENT_DEPENDENCIES,
  SRCLAUNCH_THEMES_DEPENDENCIES,
  SRCLAUNCH_TRANSFORM_DEPENDENCIES,
  SRCLAUNCH_VALIDATION_DEPENDENCIES,
  SRCLAUNCH_WEB_APPLICATION_STATE_DEPENDENCIES,
  SRCLAUNCH_WEB_ENVIRONMENT_DEPENDENCIES,
  STYLED_COMPONENTS_DEPENDENCIES,
  UUID_DEPENDENCIES,
  ZXCVBN_DEPENDENCIES,
} from '../../constants/dependencies';
import {
  ASYNC_EXIT_HOOK_DEV_DEPENDENCIES,
  AVA_TESTING_DEV_DEPENDENCIES,
  COMMON_NODE_PLATFORM_DEV_DEPENDENCIES,
  ESLINT_DEV_DEPENDENCIES,
  EXPRESS_DEV_DEPENDENCIES,
  FS_EXTRA_DEV_DEPENDENCIES,
  GITHUB_DEV_DEPENDENCIES,
  JEST_REACT_TESTING_DEV_DEPENDENCIES,
  JEST_TESTING_DEV_DEPENDENCIES,
  KEYGRIP_DEV_DEPENDENCIES,
  LUXON_DEV_DEPENDENCIES,
  MULTER_DEV_DEPENDENCIES,
  PRETTIER_DEV_DEPENDENCIES,
  QUERY_STRING_DEV_DEPENDENCIES,
  REACT_DEV_DEPENDENCIES,
  REACT_ROUTER_DEV_DEPENDENCIES,
  SEQUELIZE_DEV_DEPENDENCIES,
  SRCLAUNCH_CLI_DEV_DEPENDENCIES,
  SRCLAUNCH_DX_DEV_DEPENDENCIES,
  SRCLAUNCH_TYPES_DEV_DEPENDENCIES,
  STYLED_COMPONENTS_DEV_DEPENDENCIES,
  STYLELINT_DEV_DEPEENDENCIES,
  TEST_COVERAGE_DEV_DEPENDENCIES,
  TYPESCRIPT_DEV_DEPENDENCIES,
} from '../../constants/dev-dependencies';
import { shellExec } from '../cli';

const emoji = {
  error: '\uD83D\uDD34',
  info: '\uD83D\uDD35',
  log: '\u26AA\uFE0F',
  success: '\u2705',
  warn: '\u26A0\uFE0F',
  warning: '\uD83D\uDFE1',
};

// export function getPlatformDependencies(platform?: Platform) {
//   switch (platform) {
//     case Platform.Desktop:
//       return {};
//     case Platform.Mobile:
//       return {};
//     case Platform.NodeJS:
//       return {};
//     case Platform.TV:
//       return {};
//     case Platform.Universal:
//       return {};
//     case Platform.Watch:
//       return {};
//     case Platform.Web:
//       return {};
//   }
// }

export function getProjectTypeDependencies(type: ProjectType) {
  switch (type) {
    case ProjectType.APIService:
      return {};
    case ProjectType.CLIApplication:
      return {};
    case ProjectType.ComponentLibrary:
      return {};
    case ProjectType.CoreAPI:
      return {};
    case ProjectType.DesktopApplication:
      return {};
    case ProjectType.FiniteStateMachine:
      return {};
    case ProjectType.Function:
      return {};
    case ProjectType.GitHubApp:
      return {};
    case ProjectType.GitHubAction:
      return {};
    case ProjectType.IconLibrary:
      return {};
    case ProjectType.NodeApplication:
      return {};
    case ProjectType.TaskQueue:
      return {};
    case ProjectType.ThemeLibrary:
      return {};
    case ProjectType.UniversalApplication:
      return {};
    case ProjectType.WebApplication:
      return {};
    case ProjectType.WebHook:
      return {};
    case ProjectType.WebService:
      return {};
    case ProjectType.WebSocketService:
      return {};
    default:
      return {};
  }
}

export function getProjectTypeDevDependencies(type?: ProjectType) {
  switch (type) {
    case ProjectType.APIService:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.CLIApplication:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.ComponentLibrary:
      return {};
    case ProjectType.CoreAPI:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.DesktopApplication:
      return {};
    case ProjectType.FiniteStateMachine:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.Function:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.GitHubApp:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.GitHubAction:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.IconLibrary:
      return {};
    case ProjectType.Library:
      return {};
    case ProjectType.NodeApplication:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.TaskQueue:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.ThemeLibrary:
      return {};
    case ProjectType.UniversalApplication:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.WebApplication:
      return {};
    case ProjectType.WebHook:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.WebService:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
    case ProjectType.WebSocketService:
      return { ...COMMON_NODE_PLATFORM_DEV_DEPENDENCIES };
  }

  return {};
}

export function getPackageDependencies(package_: Package) {
  switch (package_) {
    case BrowserPackage.AmazonCognitoIdentityJS:
      return AMAZON_COGNITO_IDENTITY_JS_DEPENDENCIES;
    case BrowserPackage.History:
      return HISTORY_DEPENDENCIES;
    case BrowserPackage.JSFileDownload:
      return JS_FILE_DOWNLOAD_DEPENDENCIES;
    case BrowserPackage.React:
      return REACT_DEPENDENCIES;
    case BrowserPackage.ReactColorful:
      return REACT_COLORFUL_DEPENDENCIES;
    case BrowserPackage.ReactCountryFlag:
      return REACT_COUNTRY_FLAG_DEPENDENCIES;
    case BrowserPackage.ReactDOM:
      return REACT_DOM_DEPENDENCIES;
    case BrowserPackage.ReactDatePicker:
      return REACT_DATE_PICKER_DEPENDENCIES;
    case BrowserPackage.ReactDropzone:
      return REACT_DROPZONE_DEPENDENCIES;
    case BrowserPackage.ReactSyntaxHighlighter:
      return REACT_SYNTAX_HIGHLIGHTER_DEPENDENCIES;
    case BrowserPackage.ReactRedux:
      return REACT_REDUX_DEPENDENCIES;
    case BrowserPackage.ReactRouter:
      return REACT_ROUTER_DEPENDENCIES;
    case BrowserPackage.SrcLaunchIcons:
      return SRCLAUNCH_ICONS_DEPENDENCIES;
    case BrowserPackage.SrcLaunchWebEnvironment:
      return SRCLAUNCH_WEB_ENVIRONMENT_DEPENDENCIES;
    case BrowserPackage.SrcLaunchReactHooks:
      return REACT_HOOKS_DEPENDENCIES;
    case BrowserPackage.SrcLaunchThemes:
      return SRCLAUNCH_THEMES_DEPENDENCIES;
    case BrowserPackage.SrcLaunchWebApplicationState:
      return SRCLAUNCH_WEB_APPLICATION_STATE_DEPENDENCIES;
    case BrowserPackage.StyledComponents:
      return STYLED_COMPONENTS_DEPENDENCIES;

    case NodePackage.AsyncExitHook:
      return ASYNC_EXIT_HOOK_DEPENDENCIES;
    case NodePackage.AwsSDK:
      return AWS_SDK_DEPENDENCIES;
    case NodePackage.Compression:
      return COMPRESSION_DEPENDENCIES;
    case NodePackage.CORS:
      return CORS_DEPENDENCIES;
    case NodePackage.Config:
      return CONFIG_DEPENDENCIES;
    case NodePackage.Express:
      return EXPRESS_DEPENDENCIES;
    case NodePackage.FSExtra:
      return FS_EXTRA_DEPENDENCIES;
    case NodePackage.SrcLaunchHttpServer:
      return SRCLAUNCH_HTTP_SERVER_DEPENDENCIES;
    case NodePackage.SrcLaunchDataClient:
      return SRCLAUNCH_DATA_CLIENT_DEPENDENCIES;
    case NodePackage.SrcLaunchNodeEnvironment:
      return SRCLAUNCH_NODE_ENVIRONMENT_DEPENDENCIES;
    case NodePackage.Keygrip:
      return KEYGRIP_DEPENDENCIES;
    case NodePackage.Multer:
      return MULTER_DEPENDENCIES;
    case NodePackage.Plaid:
      return PLAID_DEPENDENCIES;

    case UniversalPackage.Axios:
      return AXIOS_DEPENDENCIES;
    case UniversalPackage.ChangeCase:
      return CHANGE_CASE_DEPEENDENCIES;
    case UniversalPackage.ColorNamer:
      return COLOR_NAMER_DEPEENDENCIES;
    case UniversalPackage.CryptoJS:
      return CRYPTO_JS_DEPENDENCIES;
    case UniversalPackage.CurrencyCodes:
      return CURRENCY_CODES_DEPEENDENCIES;
    case UniversalPackage.EmailValidator:
      return EMAIL_VALIDATOR_DEPENDENCIES;
    case UniversalPackage.HexRGB:
      return HEX_RGB_DEPENDENCIES;
    case UniversalPackage.JSYaml:
      return JS_YAML_DEPENDENCIES;
    case UniversalPackage.Luxon:
      return LUXON_DEPENDENCIES;
    case UniversalPackage.NanoID:
      return NANOID_DEPENDENCIES;
    case UniversalPackage.PasswordValidator:
      return PASSWORD_VALIDATOR_DEPENDENCIES;
    case UniversalPackage.PicoColors:
      return PICO_COLORS_DEPENDENCIES;
    case UniversalPackage.Pluralize:
      return PLURALIZE_DEPENDENCIES;
    case UniversalPackage.QueryString:
      return QUERY_STRING_DEPENDENCIES;
    case UniversalPackage.RGBHex:
      return RGB_HEX_DEPENDENCIES;
    case UniversalPackage.Redux:
      return REDUX_DEPENDENCIES;
    case UniversalPackage.ReduxToolkit:
      return REDUX_TOOLKIT_DEPENDENCIES;
    case UniversalPackage.SerializeError:
      return SERIALIZE_ERROR_DEPENDENCIES;
    case UniversalPackage.SrcLaunchExceptions:
      return SRCLAUNCH_EXCEPTIONS_DEPENDENCIES;
    case UniversalPackage.SrcLaunchHttpClient:
      return SRCLAUNCH_HTTP_CLIENT_DEPENDENCIES;
    case UniversalPackage.SrcLaunchI18n:
      return SRCLAUNCH_I18N_DEPENDENCIES;
    case UniversalPackage.SrcLaunchLogger:
      return SRCLAUNCH_LOGGER_DEPENDENCIES;
    case UniversalPackage.SrcLaunchTransform:
      return SRCLAUNCH_TRANSFORM_DEPENDENCIES;
    case UniversalPackage.SrcLaunchValidation:
      return SRCLAUNCH_VALIDATION_DEPENDENCIES;
    case UniversalPackage.Uuid:
      return UUID_DEPENDENCIES;
    case UniversalPackage.Zxcvbn:
      return ZXCVBN_DEPENDENCIES;
    default:
      return {};
  }
}

export function getPackageDevDependencies(package_: Package) {
  switch (package_) {
    case BrowserPackage.React:
      return REACT_DEV_DEPENDENCIES;
    case BrowserPackage.ReactRouter:
      return REACT_ROUTER_DEV_DEPENDENCIES;
    case BrowserPackage.StyledComponents:
      return STYLED_COMPONENTS_DEV_DEPENDENCIES;

    case NodePackage.AsyncExitHook:
      return ASYNC_EXIT_HOOK_DEV_DEPENDENCIES;
    case NodePackage.Express:
      return EXPRESS_DEV_DEPENDENCIES;
    case NodePackage.FSExtra:
      return FS_EXTRA_DEV_DEPENDENCIES;
    case NodePackage.Keygrip:
      return KEYGRIP_DEV_DEPENDENCIES;
    case NodePackage.Multer:
      return MULTER_DEV_DEPENDENCIES;
    case NodePackage.Sequelize:
      return SEQUELIZE_DEV_DEPENDENCIES;

    case UniversalPackage.Luxon:
      return LUXON_DEV_DEPENDENCIES;
    case UniversalPackage.QueryString:
      return QUERY_STRING_DEV_DEPENDENCIES;

    default:
      return {};
  }
}

export function sortDependencies(dependencies: Dependencies): Dependencies {
  if (
    dependencies === undefined ||
    !dependencies ||
    Object.keys(dependencies).length === 0
  ) {
    return dependencies;
  }

  let sortedDependencies: Dependencies = {};
  for (const dependency of Object.keys(dependencies).sort()) {
    sortedDependencies = {
      ...sortedDependencies,
      [dependency]: dependencies[dependency] as string,
    };
  }

  return sortedDependencies;
}

export async function getDependencyLatestVersion(
  dependency: string,
  version?: string,
) {
  const versions = await shellExec(
    `yarn npm info ${dependency} --fields versions --json`,
  );
  const parsedVersions = await JSON.parse(versions);

  if (parsedVersions && parsedVersions.length > 0 && version) {
    const maxVersion = await SemVer.maxSatisfying(parsedVersions, version);

    if (maxVersion) {
      return typeof maxVersion === 'object'
        ? `^${maxVersion?.version}`
        : `^${maxVersion}`;
    }
  }

  return `^${await latestVersion(dependency)}`;
}

export async function getDependenciesLatestVersions(
  dependencies: Dependencies,
): Promise<Dependencies> {
  try {
    const depsArray = [...Object.entries(dependencies)].map(([k, v]) => ({
      name: k as string,
      version: v as string,
    }));

    const getDeps = async (deps: { name: string; version: string }[]) => {
      return Promise.all(
        deps.map(async dep => ({
          [dep.name]:
            (await getDependencyLatestVersion(dep.name)) ?? dep.version,
        })),
      );
    };

    let depsDict: Dependencies = {};
    for (const dep of await getDeps(depsArray)) {
      depsDict = { ...depsDict, ...dep };
    }

    return depsDict;
  } catch (error) {
    console.error(error);
    return dependencies;
  }
}

export async function getDependencies({
  dev: development = false,
  packages = [],
}: {
  readonly dev?: boolean;
  readonly packages?: readonly Package[];
}): Promise<Dependencies> {
  if (!packages) {
    return {};
  }

  let dependencies: Dependencies = {};

  for (const package_ of packages) {
    const deps: Dependencies = development
      ? getPackageDevDependencies(package_)
      : getPackageDependencies(package_);

    dependencies = {
      ...dependencies,
      ...deps,
    };
  }

  const dependenciesLatestVersions = await getDependenciesLatestVersions(
    dependencies,
  );

  return sortDependencies(dependenciesLatestVersions);
}

export async function getDevDependencies({
  ava,
  eslint,
  github,
  jest,
  jestReact,
  prettier,
  react,
  reactRouter,
  srclaunch,
  styledComponents,
  stylelint,
  testCoverage,
  typescript,
}: {
  readonly ava?: boolean;
  readonly eslint?: boolean;
  readonly github?: boolean;
  readonly jest?: boolean;
  readonly jestReact?: boolean;
  readonly packages?: readonly Package[];
  readonly prettier?: boolean;
  readonly react?: boolean;
  readonly reactRouter?: boolean;
  readonly srclaunch?: {
    readonly cli?: boolean;
    readonly dx?: boolean;
    readonly types?: boolean;
  };
  readonly styledComponents?: boolean;
  readonly stylelint?: boolean;
  readonly testCoverage?: boolean;
  readonly typescript?: boolean;
}): Promise<Dependencies> {
  return await getDependenciesLatestVersions({
    ...(ava ? AVA_TESTING_DEV_DEPENDENCIES : {}),
    ...(eslint ? ESLINT_DEV_DEPENDENCIES : {}),
    ...(github ? GITHUB_DEV_DEPENDENCIES : {}),
    ...(jest ? JEST_TESTING_DEV_DEPENDENCIES : {}),
    ...(jestReact ? JEST_REACT_TESTING_DEV_DEPENDENCIES : {}),
    ...(prettier ? PRETTIER_DEV_DEPENDENCIES : {}),
    ...(react ? REACT_DEV_DEPENDENCIES : {}),
    ...(reactRouter ? REACT_ROUTER_DEV_DEPENDENCIES : {}),
    ...(srclaunch?.cli ? SRCLAUNCH_CLI_DEV_DEPENDENCIES : {}),
    ...(srclaunch?.dx ? SRCLAUNCH_DX_DEV_DEPENDENCIES : {}),
    ...(srclaunch?.types ? SRCLAUNCH_TYPES_DEV_DEPENDENCIES : {}),
    ...(styledComponents ? STYLED_COMPONENTS_DEV_DEPENDENCIES : {}),
    ...(stylelint ? STYLELINT_DEV_DEPEENDENCIES : {}),
    ...(testCoverage ? TEST_COVERAGE_DEV_DEPENDENCIES : {}),
    ...(typescript ? TYPESCRIPT_DEV_DEPENDENCIES : {}),
  });
}
