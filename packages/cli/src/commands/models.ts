import { WorkspaceConfig } from '@srclaunch/types';
import path from 'node:path';

import { Command, CommandType } from '../lib/command.js';
import { cleanModels } from '../lib/models/build/clean.js';
import { buildModels } from '../lib/models/build/index.js';
import { listModels } from '../lib/models/list.js';

export default new Command({
  commands: [
    new Command<WorkspaceConfig>({
      description: '',
      name: 'clean',
      run: async ({ config, flags }) => {
        await cleanModels();
      },
      type: CommandType.Workspace,
    }),
    new Command<WorkspaceConfig>({
      description: '',
      name: 'create',
      run: async ({ config, flags }) => {},
      type: CommandType.Workspace,
    }),
    new Command<WorkspaceConfig>({
      description: '',
      name: 'build',
      run: async ({ config, flags }) => {
        await buildModels(config);
      },
      type: CommandType.Workspace,
    }),
    new Command<WorkspaceConfig>({
      description: '',
      name: 'list',
      run: async ({ config, flags }) => {
        await listModels();
      },
      type: CommandType.Workspace,
    }),
    new Command<WorkspaceConfig>({
      description: 'Shows help for model commands',
      name: 'help',
      run: async () => {
        console.info(
          'Available model commands are: clean, build, list, and help.',
        );
      },
      type: CommandType.Workspace,
    }),
  ],
  description: 'Commands for managing models',
  name: 'models',
});
