import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatterTool,
  CodeLinterTool,
  Project,
  ProjectType,
  StaticTypingTool,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

export const SRCLAUNCH_CONFIG_FILE_NAMES = ['.srclaunchrc', 'srclaunch.config'];

export const DEFAULT_SRCLAUNCH_CONFIG: Omit<Project, 'name' | 'description'> = {
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    input: {
      directory: 'src',
      file: 'index.ts',
    },
    platform: BuildPlatform.Universal,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  environments: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint],
      staticTyping: [StaticTypingTool.TypeScript],
    },
  },
  requirements: {
    node: '>=16',
    srclaunch: {
      cli: true,
      dx: true,
      types: true,
    },
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
  },
  type: ProjectType.Library,
};
