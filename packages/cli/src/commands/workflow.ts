import { Project } from '@srclaunch/types';
import { TypedFlags } from 'meow';

import { Command } from '../lib/command';

export type WorkflowFlags = TypedFlags<{}>;

export default new Command({
  commands: [
    new Command<Project, WorkflowFlags>({
      description: 'Runs a SrcLaunch Workflow definition.',
      name: 'run',
      async run({ config, flags }): Promise<void> {},
    }),
  ],
  description: `Commands for interacting with SrcLaunch Workflows.`,
  name: 'workflow',
});
