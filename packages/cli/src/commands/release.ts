import { ChangeType, Project } from '@srclaunch/types';
import { readFile, writeFile } from '@srclaunch/logic';
import path from 'path';
import pc from 'picocolors';
import { TypedFlags } from 'meow';
import { Command, CommandType } from '../lib/command';
import { createRelease } from '../lib/release';
import { getBranchName, push } from '../lib/git';

import { InteractiveModeFlag } from '../lib/flags';


import { createChangeset } from '../lib/changesets';

type ReleaseFlags = TypedFlags<
  InteractiveModeFlag & {
    push: {
      alias: 'p';
      default: false;
      description: 'Pushes changes to remote repository';
      isRequired: false;
      type: 'boolean';
    };
  }
>;

export default new Command<Project, ReleaseFlags>({
  name: 'release',
  description: 'Create a release',
  run: async ({ config, flags }) => {
    try {
      const result = await createRelease({
        changesets: config.changesets,
        push: flags.push,
      });

      console.log(
        `${pc.green('✔')} created release ${pc.bold(result.version)} ${
          flags.push ? `and pushed to ${pc.bold(result.repo)}` : ``
        } on branch ${pc.bold(result.branch)}`,
      );
    } catch (err) {
      console.error('err', err);
    }
  },
  type: CommandType.Project,
  commands: [
    new Command<Project, ReleaseFlags>({
      name: 'help',
      description: 'Shows help for release commands',
      run: async () => {
        console.info('Available release commands are: create, help');
      },
      type: CommandType.Project,
    }),
  ],
});
