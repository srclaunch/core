import {
  BrowserPackage,
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatterTool,
  CodeLinterTool,
  License,
  Project,
  ProjectType,
  PublishAccess,
  StaticTypingTool,
  TestReporter,
  TestTool,
} from "@srclaunch/types";

export default <Project>{
  name: "@srclaunch/icons",
  description: "React icon components",
  type: ProjectType.Library,
  build: {
    bundle: {
      exclude: ["react", "./src/docs"],
      globals: {
        react: "React",
      },
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    input: {
      directory: "src",
      file: "index.tsx",
    },
    platform: BuildPlatform.Browser,
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
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Jest,
  },
  release: {
    publish: {
      access: PublishAccess.Public,
      license: License.MIT,
      registry: "https://registry.npmjs.org/",
    },
  },
  requirements: {
    node: ">=16",
    yarn: ">=3.2.0",
    peerPackages: [BrowserPackage.React],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
