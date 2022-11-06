import { ProjectConfig, WorkspaceConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';

// import { transformObjectToYAML } from '@srclaunch/logic';
import { Command } from '../lib/command';
import { WorkspaceCreator } from '../lib/creators/workspace';
import { SrcLaunchWorkspaceGenerator } from '../lib/generators/srclaunch/workspace';
// import { generateSDKs } from '../lib/generate';
// import { createNewProjectInteractive } from '../lib/project/create';

export type CreateFlags = TypedFlags<{
  readonly description: {
    readonly required: true;
    readonly type: 'string';
  };
  readonly name: {
    readonly required: true;
    readonly type: 'string';
  };
  readonly type: {
    readonly required: true;
    readonly type: 'string';
  };
}>;

export default new Command<ProjectConfig & WorkspaceConfig>({
  commands: [
    new Command<ProjectConfig>({
      description: 'Create SrcLaunch workspace',
      name: 'workspace',
      async run({ config }): Promise<void> {
        console.log('creating workspace');

        const generator = new SrcLaunchWorkspaceGenerator({
          description: 'Test workspace',
          name: 'test',
          owner: 'srclaunch',
        });

        await generator.generate();
        // const workspaceCreator = new WorkspaceCreator();
        // await workspaceCreator.create();
      },
    }),
    new Command<WorkspaceConfig, CreateFlags>({
      description: 'Create a SrcLaunch project',
      name: 'project',
      async run({ flags }): Promise<void> {
        // await createNewProjectInteractive({
        //   description: flags.description,
        //   name: flags.name,
        //   type: flags.type,
        // });
      },
    }),
  ],
  description: `Create and initialize a new SrcLaunch project or workspace.`,
  name: 'create',
});
