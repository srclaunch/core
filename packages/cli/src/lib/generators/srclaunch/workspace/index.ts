import { Primitives } from '@srclaunch/types';

import { CodeGenWorkflow } from '../../../codegen';
import {
  getGitHubActionTemplate,
  GitHubActionRunnerOS,
  GitHubActionTrigger,
} from '../../../templates/ci-cd/github-action';
import { getEditorConfigTemplate } from '../../../templates/dx/editor-config';
import { getESLintConfigTemplate } from '../../../templates/dx/eslint-config';
import { getESLintIgnoreTemplate } from '../../../templates/dx/eslint-ignore';
import { getPrettierConfigTemplate } from '../../../templates/dx/prettier-config';
import { getPrettierIgnoreTemplate } from '../../../templates/dx/prettier-ignore';
import { getStyleLintConfigTemplate } from '../../../templates/dx/stylelint-config';
import { getTurboConfigTemplate } from '../../../templates/dx/turbo-config';
import { getTypeScriptConfigTemplate } from '../../../templates/dx/typescript-config';
import { getTypescriptTypeDefinitionTemplate } from '../../../templates/dx/typescript-type-definition';
import { getGitIgnoreTemplate } from '../../../templates/package/gitignore';
import { getPackageConfigTemplate } from '../../../templates/package/package-config';
import { getChangeLogTemplate } from '../../../templates/project/changelog';
import { getLicenseTemplate } from '../../../templates/project/license';
import { getReadmeTemplate } from '../../../templates/project/readme';
import { getSrcLaunchModelTemplate } from '../../../templates/srclaunch/model';
import { getSrcLaunchWorkspaceConfigTemplate } from '../../../templates/srclaunch/workspace-config';
import { getPnpmWorkspaceConfigTemplate } from '../../../templates/workspace/pnpm-workspace';

interface SrcLaunchWorkspaceGeneratorOptions {
  readonly description?: string;
  readonly name: string;
  readonly owner?: string;
}

export class SrcLaunchWorkspaceGenerator extends CodeGenWorkflow {
  public constructor(options: SrcLaunchWorkspaceGeneratorOptions) {
    super();

    const { description, name, owner } = options;

    this.createDirectory('.github')
      .createDirectory('.github/workflows')
      .addFile(
        './.github/workflows/ci.yml',
        getGitHubActionTemplate({
          jobs: {
            publish: {
              name: 'Publish packages',
              runsOn: GitHubActionRunnerOS.UbuntuLatest,
              steps: [
                {
                  name: 'Setup CI/CD environment',
                  uses: 'srclaunch/core/packages/ci-cd/.github/actions/setup@main',
                  with: {
                    turbo_team: '${{ secrets.TURBO_TEAM }}',
                    turbo_token: '${{ secrets.TURBO_TOKEN }}',
                  },
                },
                {
                  name: 'Deploy',
                  uses: 'srclaunch/core/packages/ci-cd/.github/actions/deploy@main',
                  with: {
                    github_token: '${{ secrets.GITHUB_TOKEN }}',
                    npm_token: '${{ secrets.NPM_ACCESS_TOKEN }}',
                    turbo_team: '${{ secrets.TURBO_TEAM }}',
                    turbo_token: '${{ secrets.TURBO_TOKEN }}',
                  },
                },
              ],
            },
          },
          name: 'Release packages',
          trigger: {
            branches: ['main'],
            on: GitHubActionTrigger.Push,
          },
        }),
      )
      .createDirectory('apps')
      .createDirectory('exceptions')
      .createDirectory('media')
      .createDirectory('models')
      .addFile(
        './models/Todo.ts',
        getSrcLaunchModelTemplate({
          fields: {
            completed: {
              label: 'Completed',
              type: Primitives.String,
            },
            name: {
              label: 'Name',
              type: Primitives.String,
            },
          },
          name: 'Todo',
        }),
      )
      .createDirectory('sdk')
      .createDirectory('services')
      .createDirectory('types')
      .addFile(
        './types/todo.ts',
        getTypescriptTypeDefinitionTemplate({
          fields: {
            completed: 'boolean',
            name: 'string',
          },
          name: 'Todo',
        }),
      )
      .addFile('.editorconfig', getEditorConfigTemplate())
      .addFile(
        '.eslintignore',
        getESLintIgnoreTemplate({
          paths: [
            'node_modules/**',
            'coverage/**',
            'dist/**',
            'docs',
            'release',
            '*.hbs',
            '.next/**',
            '.turbo/**',
            '.tsbuildinfo',
          ],
        }),
      )
      .addFile('.eslintrc.cjs', getESLintConfigTemplate())
      .addFile(
        '.gitignore',
        getGitIgnoreTemplate({
          paths: [
            '.env',
            '.DS_Store',
            '**/coverage/',
            '**/dist/',
            'node_modules/',
            '**/node_modules/',
            '.pnpm-debug.log',
            '.turbo',
          ],
        }),
      )
      .addFile(
        '.prettierignore',
        getPrettierIgnoreTemplate({
          paths: [
            '.cache/**',
            '.husky/**',
            '.next/**',
            '.turbo/**',
            'node_modules',
            'coverage/**',
            'dist/**',
            'docs/**',
            'node_modules/**',
            'pnpm-lock.yaml',
          ],
        }),
      )
      .addFile('.prettierrc.cjs', getPrettierConfigTemplate())
      .addFile(
        '.srclaunchrc.ts',
        getSrcLaunchWorkspaceConfigTemplate({ name, owner }),
      )
      .addFile('.stylelintrc.js', getStyleLintConfigTemplate())
      .addFile('CHANGELOG.md', getChangeLogTemplate())
      // .addFile('commitlint.config.cjs', '')
      .addFile('LICENSE', getLicenseTemplate())
      .addFile(
        'package.json',
        getPackageConfigTemplate({
          description,
          name,
          owner,
        }),
      )
      .addFile(
        'pnpm-workspace.yaml',
        getPnpmWorkspaceConfigTemplate({
          paths: ['apps/**', 'packages/**', 'sdk/**', 'services/**'],
        }),
      )
      .addFile('tsconfig.json', getTypeScriptConfigTemplate())
      .addFile('turbo.json', getTurboConfigTemplate())
      .addFile('README.md', getReadmeTemplate({ name, owner }));
  }
}
