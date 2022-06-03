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
} from '@srclaunch/types';

export default <Project>{
  name: '@srclaunch/node-environment',
  description: 'Node.js environment specific utilities for SrcLaunch services',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.IIFE],
    platform: BuildPlatform.Node,
    target: BuildTarget.ESNext,
    tool: BuildTool.ESBuild,
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
  },
  environments: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint],
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
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
