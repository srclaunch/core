import { RepositoryEvent, Project, GitHubRunnerOS } from './src';

export default <Project>{
  name: '@srclaunch/types',
  description:
    'TypeScript definitions used by SrcLaunch projects and workspaces.',
  type: 'library',
  build: [
    {
      library: {
        name: '@srclaunch/types',
      },
      formats: ['umd'],
      output: {
        clean: true,
        directory: 'dist',
        file: 'index.umd',
      },
      tool: 'vite',
    },
    {
      bundle: {
        preserveModules: true,
      },
      library: {
        name: '@srclaunch/types',
      },
      formats: ['esm'],
      output: {
        clean: false,
        directory: 'dist',
      },
      tool: 'vite',
    },
  ],
  environment: {
    development: {
      formatters: ['prettier'],
      linters: ['eslint'],
      staticTypes: ['typescript'],
    },
  },
  package: {
    exports: [
      {
        path: '.',
        import: './dist/index.mjs',
        require: './dist/index.js',
      },
      {
        path: 'action',
        import: './dist/action',
      },
    ],
  },
  release: {
    publish: {
      access: 'public',
      license: 'MIT',
      registry: 'https://registry.npmjs.org/',
    },
  },
  requirements: {
    node: '>=14',
    srclaunch: {
      dx: true,
      cli: true,
      types: false,
    },
  },
  repository: {
    workflows: [
      {
        name: 'Deploy package',
        on: {
          [RepositoryEvent.Push]: {
            branches: ['main'],
          },
        },
        jobs: [
          {
            metadata: {
              name: 'Get package metadata',
              outputs: {
                branch: '${{ steps.get-branch.outputs.name }}',
                version: '${{ steps.get-version.outputs.tag }}',
              },
              runsOn: GitHubRunnerOS.UbuntuLatest,
              steps: [
                {
                  name: 'Checkout',
                  uses: 'actions/checkout@v3',
                },
                {
                  name: 'Get branch name',
                  id: 'get-branch',
                  run: [
                    'echo "::set-output name=name::${GITHUB_REF#refs/heads/}"',
                  ],
                },
                {
                  name: 'Get version from package.json',
                  id: 'get-version',
                  run: [
                    'echo "::set-output name=tag::$(jq -r .version package.json)"',
                  ],
                },
              ],
            },
            build: {
              name: 'Build package',
              needs: ['metadata'],
              runsOn: GitHubRunnerOS.UbuntuLatest,
              steps: [
                {
                  name: 'Checkout',
                  uses: 'actions/checkout@v3',
                },
                {
                  name: 'Use Node.js 16.x',
                  uses: 'actions/setup-node@v3',
                  with: {
                    cache: 'yarn',
                    nodeVersion: '16.x',
                  },
                },
                {
                  name: 'Enable corepack',
                  run: 'corepack enable',
                },
                {
                  name: 'Set yarn version to stable',
                  run: 'yarn set version stable',
                },
                {
                  name: 'Enable caching',
                  uses: 'actions/cache@v3',
                  with: {
                    path: [
                      '.yarn/cache',
                      '.yarn/patches',
                      '.yarn/plugins',
                      '.yarn/releases',
                      '.yarn/sdks',
                      '.yarn/versions',
                    ],
                    key: '${{ runner.os }}-yarn-${{ hashFiles("**/yarn.lock") }}',
                    restoreKeys: ['${{ runner.os }}-yarn-'],
                  },
                },
                {
                  name: 'Install dependencies',
                  run: 'yarn install',
                  env: {
                    NODE_ENV: 'production',
                  },
                },
                {
                  name: 'Build package',
                  run: 'yarn build',
                },
                {
                  name: 'Upload release artifact',
                  uses: 'actions/upload-artifact@v3',
                  with: {
                    name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.env-vars.outputs.branch }}-${{ needs.env-vars.outputs.version }}-build',
                    path: [
                      'dist',
                      'package.json',
                      'README.md',
                      'LICENSE.md',
                      'yarn.lock',
                    ],
                  },
                },
              ],
            },
            // test: {
            //   name: 'Test package',
            //   needs: ['metadata', 'build'],
            //   runsOn: GitHubRunnerOS.UbuntuLatest,
            //   steps: [
            //     {
            //       name: 'Checkout',
            //       uses: 'actions/checkout@v3',
            //     },
            //     {
            //       name: 'Use Node.js 16.x',
            //       uses: 'actions/setup-node@v3',
            //       with: {
            //         cache: 'yarn',
            //         nodeVersion: '16.x',
            //       },
            //     },
            //     {
            //       name: 'Enable corepack',
            //       run: 'corepack enable',
            //     },
            //     {
            //       name: 'Set yarn version to stable',
            //       run: 'yarn set version stable',
            //     },
            //     {
            //       name: 'Enable caching',
            //       uses: 'actions/cache@v3',
            //       with: {
            //         path: [
            //           '.yarn/cache',
            //           '.yarn/patches',
            //           '.yarn/plugins',
            //           '.yarn/releases',
            //           '.yarn/sdks',
            //           '.yarn/versions',
            //         ],
            //         key: '${{ runner.os }}-yarn-${{ hashFiles("**/yarn.lock") }}',
            //         restoreKeys: ['${{ runner.os }}-yarn-'],
            //       },
            //     },
            //     {
            //       name: 'Install dependencies',
            //       run: 'yarn install',
            //       env: {
            //         NODE_ENV: 'production',
            //       },
            //     },
            //     {
            //       name: 'Run tests and collect test coverage',
            //       run: 'yarn test:coverage',
            //     },
            //     {
            //       name: 'Archive test coverage results',
            //       uses: 'action/upload-artifact/v3',
            //       with: {
            //         name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.env-vars.outputs.branch }}-${{ needs.env-vars.outputs.version }}-test-coverage.json',
            //         path: ['coverage-summary.json'],
            //       },
            //     },
            //     {
            //       name: 'Upload test coverage results',
            //       uses: 'coverallsapp/github-action@master',
            //       with: {
            //         'github-token': '${{ secrets.GITHUB_TOKEN }}',
            //       },
            //     },
            //   ],
            // },
            publish: {
              name: 'Publish package',
              needs: ['metadata', 'build', 'test'],
              runsOn: GitHubRunnerOS.UbuntuLatest,
              steps: [
                {
                  name: 'Download production build artifact',
                  uses: 'actions/download-artifact@v3',
                  with: {
                    name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.env-vars.outputs.branch }}-${{ needs.env-vars.outputs.version }}-build',
                  },
                },
                {
                  name: 'Use Node.js 16.x',
                  uses: 'actions/setup-node@v3',
                  with: {
                    cache: 'yarn',
                    'node-version': '16.x',
                  },
                },
                {
                  name: 'Enable corepack',
                  run: 'corepack enable',
                },
                {
                  name: 'Set yarn version to stable',
                  run: 'yarn set version stable',
                },
                {
                  name: 'Enable caching',
                  uses: 'actions/cache@v3',
                  with: {
                    path: [
                      '.yarn/cache',
                      '.yarn/patches',
                      '.yarn/plugins',
                      '.yarn/releases',
                      '.yarn/sdks',
                      '.yarn/versions',
                    ],
                    key: '${{ runner.os }}-yarn-${{ hashFiles("**/yarn.lock") }}',
                    'restore-keys': ['${{ runner.os }}-yarn-'],
                  },
                },
                {
                  name: 'Allow private package registry access',
                  run: [
                    'echo "nodeLinker: node-modules" > ./.yarnrc.yml',
                    'echo "npmScopes:" >> ./.yarnrc.yml',
                    'echo "  ${{ github.event.repository.owner.login }}:" >> ./.yarnrc.yml',
                    'echo "    npmRegistryServer: https://registry.npmjs.org" >> ./.yarnrc.yml',
                    'echo "    npmAlwaysAuth: true" >> ./.yarnrc.yml',
                    'echo "    npmAuthToken: ${{ secrets.NPM_ACCESS_TOKEN }}" >> ./.yarnrc.yml',
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
  // workflows: [
  //   {
  //     action: {
  //       name: 'Run Tests',
  //       description: 'Run tests',
  //       run: async () => {
  //         console.log('hi');
  //       },
  //     },
  //     on: GitHubRepositoryEvent.Push,
  //   },
  // ],
};
