import { ChangeType, ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
// import { readFile, writeFile } from '@srclaunch/logic';
import path from 'node:path';
import pc from 'picocolors';

import { createChangeset } from '../lib/changesets';
import { Command, CommandType } from '../lib/command';
import { InteractiveModeFlag } from '../lib/flags';
import { getBranchName, push } from '../lib/git';
import { createSemanticRelease } from '../lib/release';
import { createRelease } from '../lib/release/standard-version';

type ReleaseFlags = TypedFlags<
  InteractiveModeFlag & {
    readonly push: {
      readonly alias: 'p';
      readonly default: false;
      readonly description: 'Pushes changes to remote repository';
      readonly isRequired: false;
      readonly type: 'boolean';
    };
  }
>;

export default new Command<ProjectConfig, ReleaseFlags>({
  commands: [
    new Command<ProjectConfig, ReleaseFlags>({
      description: 'Shows help for release commands',
      name: 'help',
      run: async () => {
        console.info('Available release commands are: create, help');
      },
      type: CommandType.Project,
    }),
  ],
  description: 'Create a release',
  name: 'release',
  run: async ({ config, flags }) => {
    try {
      // const result = await createRelease({
      //   changesets: config.changesets,
      //   push: flags.push,
      // });

      console.log('creating release');
      const result = await createSemanticRelease();
      console.log('result', result);
      // console.log(
      //   `${pc.green('✔')} created release ${pc.bold(result.version)} ${
      //     flags.push ? `and pushed to ${pc.bold(result.repo)}` : ``
      //   } on branch ${pc.bold(result.branch)}`,
      // );
    } catch (error) {
      console.error('err', error);
    }
  },
  type: CommandType.Project,
});
