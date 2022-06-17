import meow, { AnyFlags, TypedFlags } from 'meow';
import updateNotifier, { Package } from 'update-notifier';

// import { loadSrcLaunchConfig } from "@srclaunch/logic";
import buildCommands from './commands/build';
import changesetCommands from './commands/changesets';
import configCommands from './commands/config';
import deployCommands from './commands/deploy';
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
import { loadSrcLaunchConfig } from './lib/config';
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
        deployCommands,
        generateCommands,
        helpCommands,
        infrastructureCommands,
        installCommands,
        modelCommands,
        projectCommands,
        releaseCommands,
        runCommands,
        testCommands,
      ] as Command<unknown, TypedFlags<AnyFlags> & Record<string, unknown>>[],
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
