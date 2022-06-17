import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';

import { Command } from '../lib/command.js';

type RunFlags = TypedFlags<{
  readonly workspace: {
    readonly default: false;
    readonly description: 'Run the script in all projects in the workspace';
    readonly type: 'boolean';
  };
}>;
export default new Command<ProjectConfig, RunFlags>({
  description: 'Runs a script from the project or workspace package.json file',
  name: 'run',
  run: async ({ cli, flags }) => {
    if (flags.workspace) {
    }
  },
});
