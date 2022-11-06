import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  ProjectType,
  Runner,
  StaticTyping,
  WebAppProjectConfig,
} from '@srclaunch/types';

export default <WebAppProjectConfig>{
  name: '@srclaunch/srclaunch-web',
  description: 'SrcLaunch Web App',
  type: ProjectType.WebApplication,
  build: {
    platform: BuildPlatform.Browser,
    react: true,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
  },
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint, CodeLinter.Stylelint],
      run: {
        exclude: ['react', 'react-dom'],
        input: {
          directory: 'src',
          file: 'index.tsx',
        },
        react: true,
        runner: Runner.Vite,
        styledComponents: true,
      },
      staticTyping: [StaticTyping.TypeScript],
    },
  },
  // deployment: {},
};
