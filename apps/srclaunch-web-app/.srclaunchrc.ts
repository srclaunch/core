import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  ProjectType,
  WebAppConfig,
} from '@srclaunch/types';

export default <WebAppConfig>{
  assetsDir: 'assets',
  name: '@applab-io/applab-web-app',
  description: 'Applab Web App',
  type: ProjectType.WebApplication,
  entryFile: 'src/index.html',
  react: true,
  rootDir: 'src',
  build: {
    platform: BuildPlatform.Browser,
    react: true,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
  },
};
