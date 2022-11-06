import { ProjectConfig, WorkspaceConfig } from '@srclaunch/types';
import { writeFile } from 'fs-extra';
import { TypedFlags } from 'meow';
import path from 'node:path';

// import { transformObjectToYAML } from '@srclaunch/logic';
import { Command } from '../lib/command';
import { generateSDKs } from '../lib/generate';
import { createNewProjectInteractive } from '../lib/project/create';

export type GenerateSrcLaunchProjectFlags = TypedFlags<{
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
      description:
        'Generate GitHub Actions workflows from the SrcLaunch config file.',
      name: 'github-actions',
      async run({ config }): Promise<void> {
        const repositoryWorkflows = config?.repository?.workflows;
        if (repositoryWorkflows) {
          for (const _workflow of Object.entries(repositoryWorkflows)) {
            const [name, workflow] = _workflow;

            // const workflowPath = path.join(
            //   process.cwd(),
            //   'github-actions',
            //   `${name}.yml`,
            // );

            // if (workflow.tasks) {
            //   for (const _task of Object.entries(workflow.tasks)) {
            //     const [taskName, task] = _task;
            //     // const taskPath = path.join(
            //     //   process.cwd(),
            //     //   'github-actions',
            //     //   `${name}.yml`,
            //     // );
            //     console.log(taskName);

            //     if (task.steps) {
            //       let stepOutput = {};

            //       for (const _step of Object.entries(task.steps)) {
            //         const [stepName, step] = _step;

            //         if (step.run) {
            //           const output = await step.run();

            //           console.log('output', output);
            //           if (output) {
            //             stepOutput = {
            //               ...stepOutput,
            //               [stepName]: output,
            //             };
            //           }
            //         }

            //         if (step.shell) {
            //           for (const output of Object.entries(step.shell)) {
            //             const [key, shell] = output;

            //             console.log('o', key);
            //           }

            //           console.log('shell', step.shell);
            //           stepOutput = {
            //             ...stepOutput,
            //             [stepName]: step.shell,
            //           };
            //         }

            //         console.log(' -- ' + stepName);
            //         console.log(' ---- ' + JSON.stringify(stepOutput, null, 2));
            //       }
            //     }
            //   }
            // }
          }
        }
      },
    }),
    new Command<WorkspaceConfig, GenerateSrcLaunchProjectFlags>({
      description:
        "Generates a SrcLaunch project config file if one doesn't exist already.",
      name: 'srclaunch-project-config',
      async run({ flags }): Promise<void> {
        await createNewProjectInteractive({
          description: flags.description,
          name: flags.name,
          type: flags.type,
        });
      },
    }),
    new Command<WorkspaceConfig>({
      description:
        'Generates a package.yml file that can be used as a replacement for packageon',
      name: 'package-yml',
      async run(): Promise<void> {
        // await shellExec(
        //   'yarn plugin import https://raw.githubusercontent.com/
        // lyleunderwood/yarn-plugin-yaml-manifest/master/bundles/
        // %40yarnpkg/plugin-yaml-manifest',
        // );
        // const yml = Yaml.dump({
        //   ...updatedPackageJsonContents,
        //   version: updatedPackageJsonContents.version,
        // });
        // await writeFile(path.resolve('./package.yml'), yml.toString());
        // const existingPackageYml = (await fileExists('./package.yml'))
        //   ? await readFile('./package.yml')
        //   : null;
        // const parsedPackageYml: { version: string } | null = existingPackageYml
        //   ? (Yaml.load(existingPackageYml.toString()) as {
        //       version: string;
        //     })
        //   : null;
        // /*
        //     Write package.yml which will be used by the `yarn-plugin-yaml-manifest`
        //     plugin to generate a packageon manifest.
        //   */
        // const packageYml = Yaml.dump(newPackageMetadata);
        // await writeFile(path.resolve('./package.yml'), packageYml.toString());
        // console.info(`${chalk.green('✔')} created package.yml`);
        // console.info('resulttt', result);
        // await createChangeset({
        //   files: ['package.yml'],
        //   type: ChangeType.Release,
        //   message: `Release ${updatedPackageJsonContents.version}`,
        // });
      },
    }),
    new Command<WorkspaceConfig>({
      description: 'Generate SDKs from SrcLaunch models',
      name: 'sdks',
      async run(): Promise<void> {
        await generateSDKs();
      },
    }),
  ],
  description: `Generate code, configuration, and files for various patterns and libraries.`,
  name: 'generate',
});
