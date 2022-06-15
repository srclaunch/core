import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatter,
  CodeLinter,
  License,
  LibraryConfig,
  ProjectType,
  PublishAccess,
  StaticTyping,
  TestReporter,
  TestTool,
  RepositoryEvent,
  Task,
  Workflow,
  GitHubWorkflow,
  PackageManager,
} from '@srclaunch/types';
import {
  BuildProject,
  BuildProjectDocs,
  Checkout,
  GetPackageMetadata,
  UploadArtifact,
  GetBranch,
  SetupNode,
  SetupPNPM,
  RunTests,
  UploadCoverageToCoveralls,
  DownloadArtifact,
  PNPMPublish,
  WriteNPMConfig,
} from '@srclaunch/actions';

export default <LibraryConfig>{
  name: '@srclaunch/workflows',
  description: 'Define and run workflows',
  type: ProjectType.Library,
  environments: {
    development: {
      formatters: [CodeFormatter.Prettier],
      linters: [CodeLinter.ESLint],
      staticTyping: [StaticTyping.TypeScript],
    },
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
    concurrency: 1,
  },
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    library: true,
    platform: BuildPlatform.Browser,
    target: BuildTarget.Modules,
    tool: BuildTool.Vite,
  },
  release: {
    publish: {
      access: PublishAccess.Public,
      license: License.MIT,
      registry: 'https://registry.npmjs.org/',
    },
  },
  repository: {
    workflows: {
      [RepositoryEvent.Push]: new GitHubWorkflow({
        name: 'publish',
        branch: 'main',
        input: {
          packageManager: PackageManager.PNPM,
        },
        tasks: {
          vars: new Task({
            steps: {
              branch: new GetBranch(),
              metadata: new GetPackageMetadata(),
            },
          }),
          build: new Task({
            id: 'build',
            name: 'Build',
            needs: ['vars'],
            steps: {
              checkout: new Checkout(),
              setupNode: new SetupNode({ version: 16 }),
              setupPNPM: new SetupPNPM({ installDependencies: true }),
              buildProject: new BuildProject(),
              buildProjectDocs: new BuildProjectDocs(),
              uploadArtifact: new UploadArtifact({
                name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.vars.outputs.branch }}-${{ needs.vars.outputs.version }}-build',
                paths: [
                  'dist',
                  'package.json',
                  'README.md',
                  'LICENSE.md',
                  'pnpm-lock.yaml',
                ],
              }),
            },
          }),
          test: new Task({
            id: 'test',
            name: 'Test',
            needs: ['vars', 'build'],
            steps: {
              checkout: new Checkout(),
              setupNode: new SetupNode({ version: 16 }),
              setupPNPM: new SetupPNPM({ installDependencies: true }),
              runTests: new RunTests(),
              uploadArtifact: new UploadArtifact({
                name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.vars.outputs.branch }}-${{ needs.env-vars.outputs.version }}-code-coverage.json',
                paths: ['coverage/coverage-summary.json'],
              }),
              uploadCoverageToCoveralls: new UploadCoverageToCoveralls({
                token: '${{ secrets.GITHUB_TOKEN }}',
              }),
            },
          }),
          publish: new Task({
            name: 'Publish package',
            needs: ['vars', 'build', 'test'],
            steps: {
              downloadArtifact: new DownloadArtifact({
                name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.env-vars.outputs.branch }}-${{ needs.env-vars.outputs.version }}-build',
              }),
              setupNode: new SetupNode({ version: 16 }),
              setupPNPM: new SetupPNPM(),
              pnpmPublish: new PNPMPublish({
                token: '${{ secrets.NPM_TOKEN }}',
              }),
            },
          }),
        },
      }),
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
