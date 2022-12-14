import { Platform, Primitives, ProjectType } from '@srclaunch/types';

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

interface SrcLaunchWebApplicationGeneratorOptions {
  readonly description?: string;
  readonly name: string;
  readonly owner?: string;
  readonly type?: ProjectType;
}

export class SrcLaunchWebApplicationGenerator extends CodeGenWorkflow {
  public constructor(options: SrcLaunchWebApplicationGeneratorOptions) {
    super();

    const { description, name, owner } = options;

    this.createDirectory('.github')
      .createDirectory('.github/workflows')
      .createDirectory('.srclaunch')
      .createDirectory('assets')
      .createDirectory('src')
      .createDirectory('src/components')
      .createDirectory('src/layouts')
      .createDirectory('src/pages')
      .createDirectory('src/state')
      // .addFile('src/index.html', getSrcLaunchWebApplicationIndexHtmlTemplate())
      // .addFile('src/index.tsx', getSrcLaunchWebApplicationIndexTsTemplate())
      // .addFile('src/react-app-env.d.ts', getSrcLaunchWebApplicationReactAppEnvDtsTemplate())
      // .addFile('src/routes.ts', getSrcLaunchWebApplicationRoutesTsTemplate())

      .addFile(
        '.eslintrc.cjs',
        getESLintConfigTemplate({
          platform: Platform.Browser,
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
      .addFile('LICENSE.md', getLicenseTemplate())
      .addFile(
        'package.json',
        getPackageConfigTemplate({
          description,
          name,
          owner,
        }),
      )
      .addFile('tsconfig.json', getTypeScriptConfigTemplate())
      .addFile('README.md', getReadmeTemplate({ name, owner }));
  }
}
