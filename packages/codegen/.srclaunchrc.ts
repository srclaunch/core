import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  RepositoryEvent,
  LibraryConfig,
  License,
  ProjectType,
  PublishAccess,
  StaticTyping,
  TestReporter,
  TestTool,
  UniversalPackage,
} from '@srclaunch/types';

export default <LibraryConfig>{
  name: '@srclaunch/codegen',
  description:
    'Actions, parsers, generators, transformers and other programming abstractions',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.UMD, BuildFormat.ESM],
    library: {
      name: '@srclaunch/codgen',
    },
    platform: BuildPlatform.Browser,
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
  release: {
    publish: {
      access: PublishAccess.Public,
      license: License.MIT,
      registry: 'https://registry.npmjs.org/',
    },
  },
  requirements: {
    node: '>=16',
    packages: [
      UniversalPackage.JSYaml,
      UniversalPackage.EmailValidator,
      UniversalPackage.PasswordValidator,
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
  repository: {
    // workflows: [
    //   {
    //     name: 'Publish package to NPM',
    //     on: {
    //       [RepositoryEvent.Push]: {
    //         branches: ['main'],
    //       },
    //     },
    //     jobs: [
    //       {
    //         setup: setup(),
    //         build: build({
    //           branch: '${{ needs.setup.outputs.branch }}',
    //           repository: {
    //             name: '${{ github.event.repository.name }}',
    //             owner: '${{ github.event.repository.owner.login }}',
    //           },
    //           version: '${{ needs.env-vars.outputs.version }}',
    //         }),
    //         test: test({ coverallsToken: '${{ secrets.GITHUB_TOKEN }}' }),
    //         publish: publish({
    //           authToken: '${{ secrets.NPM_ACCESS_TOKEN }}',
    //           scope: '${{ github.event.repository.owner.login }}',
    //         }),
    //       },
    //     ],
    //   },
    // ],
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
  },
};
