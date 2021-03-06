export function getPublishYml({
  build,
  test,
}: {
  build: boolean;
  test: boolean;
}): string {
  const environmentVariablesJob = `
    env-vars:
      name: Initialize environment variables
      runs-on: ubuntu-latest
      outputs:
        branch: \${{ steps.get-branch.outputs.name }}
        version: \${{ steps.get-version.outputs.tag }}
      steps:
        - name: Checkout
          uses: actions/checkout@v3

        - name: Get branch name
          id: get-branch
          run: |
            echo "::set-output name=name::\${GITHUB_REF#refs/heads/}"

        - name: Get package.json version
          id: get-version
          run: |
            echo "::set-output name=tag::$(jq -r .version package.json)"
`;

  const buildJob = `
    build:
      name: Build package
      needs: [env-vars]
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@v3

        - name: Use Node.js 16.x
          uses: actions/setup-node@v3
          with:
            node-version: '16.x'
            cache: 'yarn'

        - name: Enable corepack
          run: corepack enable
  
        - name: Enable Yarn Berry
          run: yarn set version stable
  
        - uses: actions/cache@v3
          id: yarn-cache # use this to check for 'cache-hit' (steps.yarn-cache.outputs.cache-hit != 'true')
          with:
            path: |
              .yarn/cache
              .yarn/patches
              .yarn/plugins
              .yarn/releases
              .yarn/sdks
              .yarn/versions
            key: \${{ runner.os }}-yarn-\${{ hashFiles('**/yarn.lock') }}
            restore-keys: |
              \${{ runner.os }}-yarn-

        - name: Install dependencies
          run: yarn install
          env:
            NODE_ENV: production

        - name: Build package
          run: yarn build

        - name: Upload release artifact
          uses: actions/upload-artifact@v3
          with:
            name: '\${{ github.event.repository.owner.login }}-\${{ github.event.repository.name }}-\${{ needs.env-vars.outputs.branch }}-\${{ needs.env-vars.outputs.version }}-build'
            path: |
              dist
              package.json
              README.md
              LICENSE.md
              yarn.lock
`;
  const testJob = `
    test:
      name: Run tests
      runs-on: ubuntu-latest
      needs: [env-vars${build ? ', build' : ''}]
      steps:
        - name: Checkout
          uses: actions/checkout@v3

        - name: Use Node.js 16.x
          uses: actions/setup-node@v3
          with:
            node-version: '16.x'
            cache: 'yarn'

        - name: Enable corepack
          run: corepack enable
  
        - name: Enable Yarn Berry
          run: yarn set version stable
  
        - uses: actions/cache@v3
          id: yarn-cache
          with:
            path: |
              .yarn/cache
              .yarn/patches
              .yarn/plugins
              .yarn/releases
              .yarn/sdks
              .yarn/versions
            key: \${{ runner.os }}-yarn-\${{ hashFiles('**/yarn.lock') }}
            restore-keys: |
              \${{ runner.os }}-yarn-

        - name: Install dependencies
          run: yarn install
          env:
            NODE_ENV: test

        - name: Run tests and collect testing coverage
          run: yarn test:coverage

        - name: Archive code coverage results
          uses: actions/upload-artifact@v3
          with:
            name: '\${{ github.event.repository.owner.login }}-\${{ github.event.repository.name }}-\${{ needs.env-vars.outputs.branch }}-code-coverage.json'
            path: coverage/coverage-summary.json

        - name: Upload test coverage to Coveralls
          uses: coverallsapp/github-action@master
          with:
            github-token: \${{ secrets.GITHUB_TOKEN }}
`;
  const publishBuildJob = `
    publish:
      name: Publish package
      needs: [env-vars, build${test ? ', test' : ''}]
      runs-on: ubuntu-latest
      steps:
        - name: Download a single artifact
          uses: actions/download-artifact@v3
          with:
            name: '\${{ github.event.repository.owner.login }}-\${{ github.event.repository.name }}-\${{ needs.env-vars.outputs.branch }}-\${{ needs.env-vars.outputs.version }}-build'

        - name: Use Node.js 16.x
          uses: actions/setup-node@v3
          with:
            cache: 'yarn'
            node-version: '16.x'

        - name: Enable corepack
          run: corepack enable
  
        - name: Enable Yarn Berry
          run: yarn set version stable
              
        - uses: actions/cache@v3
          id: yarn-cache
          with:
            path: |
              .yarn/cache
              .yarn/patches
              .yarn/plugins
              .yarn/releases
              .yarn/sdks
              .yarn/versions
            key: \${{ runner.os }}-yarn-\${{ hashFiles('**/yarn.lock') }}
            restore-keys: |
              \${{ runner.os }}-yarn-

        - name: Allow private package registry access
          id: allow-private-package-registry-access
          run: |
            echo "nodeLinker: node-modules" > ./.yarnrc.yml
            echo "npmScopes:" >> ./.yarnrc.yml
            echo "  \${{ github.event.repository.owner.login }}:" >> ./.yarnrc.yml
            echo "    npmRegistryServer: https://registry.npmjs.org" >> ./.yarnrc.yml
            echo "    npmAlwaysAuth: true" >> ./.yarnrc.yml
            echo "    npmAuthToken: \${{ secrets.NPM_ACCESS_TOKEN }}" >> ./.yarnrc.yml

        - name: Publish to NPM
          run: yarn npm publish
`;
  const publishWithoutBuildJob = `
    publish:
      name: Publish package
      needs: [env-vars${test ? ', test' : ''}]
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@v3

        - name: Use Node.js 16.x
          uses: actions/setup-node@v3
          with:
            cache: 'yarn'
            node-version: '16.x'

        - name: Enable corepack
          run: corepack enable
  
        - name: Enable Yarn Berry
          run: yarn set version stable
        
        - uses: actions/cache@v3
          id: yarn-cache
          with:
            path: |
              .yarn/cache
              .yarn/patches
              .yarn/plugins
              .yarn/releases
              .yarn/sdks
              .yarn/versions
            key: \${{ runner.os }}-yarn-\${{ hashFiles('**/yarn.lock') }}
            restore-keys: |
              \${{ runner.os }}-yarn-


        - name: Install dependencies
          run: yarn install
          env:
            NODE_ENV: production

        - name: Allow private package registry access
          id: allow-private-package-registry-access
          run: |
            echo "nodeLinker: node-modules" > ./.yarnrc.yml
            echo "npmScopes:" >> ./.yarnrc.yml
            echo "  \${{ github.event.repository.owner.login }}:" >> ./.yarnrc.yml
            echo "    npmRegistryServer: https://registry.npmjs.org" >> ./.yarnrc.yml
            echo "    npmAlwaysAuth: true" >> ./.yarnrc.yml
            echo "    npmAuthToken: \${{ secrets.NPM_ACCESS_TOKEN }}" >> ./.yarnrc.yml

        - name: Publish to NPM
          run: yarn npm publish
`;

  return `
  name: Publish to NPM
  on:
    push:
      branches:
        - main
  jobs:
${environmentVariablesJob}
${build ? buildJob : ''}
${test ? testJob : ''}
${build ? publishBuildJob : publishWithoutBuildJob}
  `;
}
