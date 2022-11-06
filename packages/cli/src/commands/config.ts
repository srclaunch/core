import pc from 'picocolors';

import { Command } from '../lib/command';

export default new Command({
  commands: [
    new Command({
      description:
        'Checks if a SrcLaunch configuration file exists and is valid',
      name: 'check',
      run: async () => {
        // const config = await getSrcLaunchConfig();
        // if (!config) {
        //   console.error(
        //     `${chalk.red('✘')} ${chalk.bold('No SrcLaunch config file found')}`,
        //   );
        // } else if (isValidSrcLaunchConfig(config)) {
        //   console.info(`${chalk.green('✔')} SrcLaunch config file is valid`);
        // } else {
        //   console.error(
        //     `${chalk.red('✘')} ${chalk.bold(
        //       'SrcLaunch config file is invalid',
        //     )}`,
        //   );
        // }
      },
    }),
    new Command({
      description:
        'Creates a SrcLaunch configuration file in the current directory.',
      name: 'create',
      run: async () => {
        // const config = await getSrcLaunchConfig();
        // if (config) {
        //   console.info(`${chalk.green('✔')} project cleaned`);
        // }
      },
    }),
  ],
  description: `Shows help for ${pc.bold('config')} commands`,
  name: 'config',
});
