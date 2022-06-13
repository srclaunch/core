import {
  CodeFormatter,
  CodeLinter,
  ProjectConfig,
  ProjectType,
  StaticTyping,
} from '@srclaunch/types';
import fs from 'fs-extra';
import path from 'node:path';

import { PRETTIER_CONFIG_CONTENT } from '../../constants/formatters';
import {
  ESLINT_CONFIG_CONTENT,
  ESLINT_UI_CONFIG_CONTENT,
  STYLELINT_CONFIG_CONTENT,
  STYLELINT_UI_CONFIG_CONTENT,
} from '../../constants/linters';
import {
  TYPESCRIPT_CONFIG_CONTENT,
  TYPESCRIPT_UI_CONFIG_CONTENT,
} from '../../constants/static-typing';
// import { writeFile } from '@srclaunch/logic';

export async function writeToolingConfiguration({
  formatters = [],
  linters = [],
  project,
  staticTyping = [],
}: {
  readonly formatters?: readonly CodeFormatter[];
  readonly linters?: readonly CodeLinter[];
  readonly project: ProjectConfig;
  readonly staticTyping?: readonly StaticTyping[];
}) {
  if (staticTyping) {
    for (const tool of staticTyping) {
      switch (tool) {
        case StaticTyping.TypeScript:
          const uiConfig =
            project.type === ProjectType.WebApplication ||
            project.type === ProjectType.ComponentLibrary ||
            ProjectType.IconLibrary ||
            ProjectType.ThemeLibrary;

          await fs.writeFile(
            path.resolve('./tsconfig.json'),
            uiConfig ? TYPESCRIPT_UI_CONFIG_CONTENT : TYPESCRIPT_CONFIG_CONTENT,
          );
          break;
        default:
          break;
      }
    }

    if (formatters) {
      for (const formatter of formatters) {
        switch (formatter) {
          case CodeFormatter.Prettier:
            await fs.writeFile(
              path.resolve('./.prettierrc.cjs'),
              PRETTIER_CONFIG_CONTENT,
            );
            // console.info(`${chalk.green('✔')} added Prettier config`);
            break;
          default:
            break;
        }
      }
    }

    if (linters) {
      const ui =
        project.type === ProjectType.WebApplication ||
        project.type === ProjectType.ComponentLibrary ||
        ProjectType.IconLibrary ||
        ProjectType.ThemeLibrary;

      for (const linter of linters) {
        switch (linter) {
          case CodeLinter.ESLint:
            await fs.writeFile(
              path.resolve('./.eslintrc.cjs'),
              ui ? ESLINT_UI_CONFIG_CONTENT : ESLINT_CONFIG_CONTENT,
            );
            // console.info(`${chalk.green('✔')} added ESLint config`);
            break;
          case CodeLinter.Stylelint:
            await fs.writeFile(
              path.resolve('./.stylelintrc.js'),
              ui ? STYLELINT_UI_CONFIG_CONTENT : STYLELINT_CONFIG_CONTENT,
            );
            // console.info(`${chalk.green('✔')} added Stylelint config`);
            break;
          default:
            break;
        }
      }
    }
  }
}
