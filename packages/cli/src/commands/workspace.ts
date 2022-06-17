import { Command } from '../lib/command.js';

export default new Command({
  description: 'Shows workspace commands',
  name: 'workspace',
  run: async ({ cli }) => {
    cli.showHelp();
  },
});
