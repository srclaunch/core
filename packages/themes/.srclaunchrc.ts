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
  name: "@srclaunch/themes",
  description:
    "CSS variables and styled-component based themes used by SrcLaunch applications",
  type: ProjectType.Library,
  build: {
    bundle: {
      exclude: ["react", "styled-components"],
      globals: {
        react: "React",
        "styled-components": "styled",
      },
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    platform: BuildPlatform.Node,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  environments: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint, CodeLinterTool.Stylelint],
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
    peerPackages: [BrowserPackage.React, BrowserPackage.StyledComponents],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
