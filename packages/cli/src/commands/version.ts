import { Command } from '../lib/command';

export default new Command({
  description:
    'Commands for bumping the version of the project according to semantic versioning.',
  name: 'version',
  run: async ({ cli }) => {
    cli.showVersion();
  },
});
