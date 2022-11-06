import {
  BuildFormat,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  ProjectConfig,
  ProjectType,
  StaticTyping,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

// export const SRCLAUNCH_CONFIG_FILE_NAMES = ['.srclaunchrc', 'srclaunch.config'];
// import {
//   BuildFormat,
//   BuildPlatform,
//   BuildTarget,
//   BuildTool,
//   CodeFormatter,
//   CodeLinter,
//   ProjectConfig,
//   ProjectType,
//   StaticTyping,
//   TestReporter,
//   TestTool,
// } from '@srclaunch/types';

// export const SRCLAUNCH_CONFIG_FILE_NAMES = ['.srclaunchrc', 'srclaunch.config'];

// export const DEFAULT_SRCLAUNCH_CONFIG: Omit<
//   ProjectConfig,
//   'name' | 'description'
// > = {
//   build: {
//     formats: [BuildFormat.ESM, BuildFormat.UMD],
//     input: {
//       directory: 'src',
//       file: 'index.ts',
//     },
//     target: BuildTarget.Modules,
//     tool: BuildTool.Vite,
//   },
//   environments: {
//     development: {
//       formatters: [CodeFormatter.Prettier],
//       linters: [CodeLinter.ESLint],
//       staticTyping: [StaticTyping.TypeScript],
//     },
//   },
//   requirements: {
//     node: '>=16',
//     srclaunch: {
//       cli: true,
//       dx: true,
//       types: true,
//     },
//   },
//   test: {
//     coverage: {
//       reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
//     },
//     tool: TestTool.Ava,
//     concurrency: 1,
//   },
//   type: ProjectType.Library,
// };

export const DEFAULT_SRCLAUNCH_CONFIG: Omit<
  ProjectConfig,
  'description' | 'name'
> = {
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    input: {
      directory: 'src',
      file: 'index.ts',
    },
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
  },
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint],
      staticTyping: [StaticTyping.TypeScript],
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
    concurrency: 1,
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
  },
  type: ProjectType.Library,
};
