import { ProjectConfig } from '@srclaunch/types';

// import { render } from 'ink';
// import { AppContainer } from '../components/AppContainer.js';
import { Command, CommandType } from '../lib/command.js';

export default new Command<ProjectConfig>({
  commands: [
    new Command<ProjectConfig>({
      description: 'Shows help for install commands',
      name: 'help',
      run: async () => {
        console.info('Available install commands are:  help');
      },
      type: CommandType.Project,
    }),
  ],
  description: 'Install project dependencies from .srclaunch/config.js',
  name: 'install',
  run: async ({ cli, flags }) => {
    // const { waitUntilExit } = render(
    //   <AppContainer cliVersion={cli.pkg.version} flags={flags} />,
    // );
    // await waitUntilExit();
  },
});
