import { SrcLaunchConfig } from '@srclaunch/types';
import meow, { AnyFlags, TypedFlags } from 'meow';
import { loadConfig } from 'unconfig';
import updateNotifier, { Package } from 'update-notifier';

// import { loadSrcLaunchConfig } from "@srclaunch/logic";
import buildCommands from './commands/build';
import changesetCommands from './commands/changesets';
import configCommands from './commands/config';
import generateCommands from './commands/generate';
import helpCommands from './commands/help';
import infrastructureCommands from './commands/infrastructure';
import installCommands from './commands/install';
import modelCommands from './commands/models';
import projectCommands from './commands/project';
import releaseCommands from './commands/release';
import runCommands from './commands/run';
import testCommands from './commands/test';
import { Command, handleCommand } from './lib/command';
import { InteractiveModeFlag } from './lib/flags';

export const helpMessage = `
Usage
  $ srclaunch <command>

Commands
  build - Build SrcLaunch project if srclaunch.configon is found in the current directory
  models
    * build - Build models into Sequelize models, Typescript definitions and JSON
  test - Run tests and collect coverage

To view information for a specific command add "help" after the command name, for example:
  $ srclaunch build help
`;

export const cli = meow(helpMessage, {
  importMeta: import.meta,
});

export const loadSrcLaunchConfig = async (): Promise<SrcLaunchConfig> => {
  const { config, sources } = await loadConfig<SrcLaunchConfig>({
    // if false, the only the first matched will be loaded
    // if true, all matched will be loaded and deep merged
    cwd: process.cwd(),
    merge: false,
    sources: [
      {
        // default extensions
        extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
        files: ['.srclaunchrc', 'srclaunch.config'],
      },

      {
        extensions: [],
        files: 'package.json',
        rewrite(cfg: { srclaunch?: SrcLaunchConfig }) {
          return cfg?.srclaunch;
        },
      },
      {
        files: 'vite.config',
        async rewrite(
          cfg:
            | { srclaunch?: SrcLaunchConfig }
            | (() => Promise<
                Record<string, unknown> & { srclaunch?: SrcLaunchConfig }
              >),
        ) {
          const viteConfig = await (typeof cfg === 'function' ? cfg() : cfg);
          return viteConfig?.srclaunch;
        },
      },
    ],
  });

  return config;
};

export async function main() {
  try {
    const command = cli.input;
    const flags = cli.flags as TypedFlags<InteractiveModeFlag>;
    const config = await loadSrcLaunchConfig();

    updateNotifier({ pkg: cli.pkg as Package }).notify();

    await handleCommand({
      cli,
      command,
      commands: [
        buildCommands,
        changesetCommands,
        configCommands,
        generateCommands,
        helpCommands,
        infrastructureCommands,
        installCommands,
        modelCommands,
        projectCommands,
        releaseCommands,
        runCommands,
        testCommands,
      ] as Command<any, TypedFlags<AnyFlags> & Record<string, unknown>>[],
      config,
      flags,
    });
  } catch (error) {
    // const { waitUntilExit } = render(
    //   // <FullScreen>
    //   <Text>{err.message}</Text>,
    //   // </FullScreen>,
    // );
    // await waitUntilExit();
    console.error(error);
  }
}

export default main();

export { type Command, CommandType } from './lib/command';
