import { WorkspaceConfig } from '@srclaunch/types';

import { Command, CommandType } from '../lib/command.js';

export default new Command({
  commands: [
    new Command<WorkspaceConfig>({
      description: 'Deploy infrastructure',
      name: 'deploy',
      run: async ({ config, flags }) => {},
      type: CommandType.Workspace,
    }),
    new Command<WorkspaceConfig>({
      description: 'Shows help for infrastructure commands',
      name: 'help',
      run: async () => {
        console.info('Available infrastructure commands are: deploy, help');
      },
      type: CommandType.Workspace,
    }),
  ],
  description: 'Manage infrastructure',
  name: 'infrastructure',
});
