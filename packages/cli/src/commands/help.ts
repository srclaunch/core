import { Command } from '../lib/command.js';

export default new Command({
  description: 'Shows help for commands',
  name: 'help',
  run: async ({ cli }) => {
    cli.showHelp();
  },
});
