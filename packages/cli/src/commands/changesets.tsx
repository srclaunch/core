import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import pc from 'picocolors';

// import { render } from 'ink';
import { AppContainer } from '../containers/AppContainer';
import { createChangeset } from '../lib/changesets';
import { Command, CommandType } from '../lib/command';
import { InteractiveModeFlag, InteractiveModeFlagType } from '../lib/flags';
import { add, commit } from '../lib/git';

export default new Command({
  commands: [
    new Command<
      ProjectConfig,
      TypedFlags<
        InteractiveModeFlagType & {
          readonly files: {
            readonly alias: 'f';
            readonly description: 'A comma-separated list of files to add to the changeset';
            readonly isRequired: true;
            readonly type: 'string';
          };

          readonly message: {
            readonly alias: 'm';
            readonly description: 'A message describing the changes';
            readonly isRequired: true;
            readonly type: 'string';
          };
          readonly scope: {
            readonly alias: 's';
            readonly description: 'The scope of the changes';
            readonly isRequired: false;
            readonly type: 'string';
          };
          readonly type: {
            readonly alias: 't';
            readonly description: 'The type of changes made';
            readonly isRequired: true;
            readonly type: 'string';
          };
        }
      >
    >({
      description: 'Create a changeset',
      name: 'add',
      run: async ({ cli, flags }) => {
        const { message, scope, type } = flags;
        if (flags.interactive) {
          // const { waitUntilExit } = render(
          //   <AppContainer
          //     initialTab="Changes"
          //     cliVersion={cli.pkg.version}
          //     flags={flags}
          //   />,
          // );
          // await waitUntilExit();
        } else {
          try {
            const { commitMessage } = await createChangeset({
              files: flags.files.split(','),
              message,
              scope,
              type,
            });

            console.log(
              `${pc.green('✔')} added changeset ${pc.bold(commitMessage)}`,
            );
          } catch (error) {
            console.error('commit err', error);
          }
        }
      },
      type: CommandType.Project,
    }),
    new Command<ProjectConfig>({
      description: 'List changesets',
      name: 'list',
      run: async ({ config, flags }) => {},
      type: CommandType.Project,
    }),
    new Command<ProjectConfig>({
      description: 'Show help for changesets',
      name: 'help',
      run: async () => {
        console.info('Available changesets commands are: create, list');
      },
      type: CommandType.Project,
    }),
  ],
  description: 'Manage changesets',
  name: 'changesets',
});
