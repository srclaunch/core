#!/bin/zsh

rm -fr .yarn yarn.lock .pnp.cjs .pnp.loader.mjs 
echo "" > ./.yarnrc.yml
yarn set version stable
yarn install
yarn plugin import typescript
yarn plugin import interactive-tools
yarn dlx @yarnpkg/sdks vscode

# rm -fr node_modules coverage dist .yarn yarn.lock
# echo "nodeLinker: node-modules" > ./.yarnrc.yml

# git add .
# git commit -m "Clean cache"
# git push

# echo "$GITIGNORE" > ./.gitignore

# git add .
# git commit -m "Update gitignore"

# yarn set version stable
# yarn plugin import interactive-tools
# yarn plugin import workspace-tools

# echo "$PUBLISH_YML" > ./.github/workflows/publish.yml

# yarn install
# yarn yui

# yarn build
# yarn test

# yarn qr