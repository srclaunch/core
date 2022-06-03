import { Project } from '@srclaunch/types';
import { TypedFlags } from 'meow';

// import { transformObjectToYAML } from '@srclaunch/logic';
import { Command } from '../lib/command';
import { createNewProjectInteractive } from '../lib/project/create';

export type GenerateSrcLaunchProjectFlags = TypedFlags<{
  readonly name: {
    readonly type: 'string';
    readonly required: true;
  };
  readonly description: {
    readonly type: 'string';
    readonly required: true;
  };
  readonly type: {
    readonly type: 'string';
    readonly required: true;
  };
}>;

export default new Command({
  commands: [
    new Command<Project>({
      description:
        'Generate GitHub Actions workflows from the SrcLaunch config file.',
      name: 'github-actions',
      async run({ config, flags }): Promise<void> {
        const repositoryWorkflows = config?.repository?.workflows;

        if (repositoryWorkflows) {
          // for (const workflow of repositoryWorkflows) {
          //   const workflowPath = path.join(
          //     process.cwd(),
          //     'github-actions',
          //     `${workflow.name}.yml`,
          //   );
          //   await writeFile(workflowPath, transformObjectToYAML(workflow));
          // }
          // const yaml = transformObjectToYAML(repositoryWorkflows);
          // console.log('yaml', yaml);
        }
      },
    }),
    new Command<Project, GenerateSrcLaunchProjectFlags>({
      description:
        "Generates a SrcLaunch project config file if one doesn't exist already.",
      name: 'srclaunch-project-config',
      async run({ config, flags }): Promise<void> {
        const result = await createNewProjectInteractive({
          description: flags.description,
          name: flags.name,
          type: flags.type,
        });

        console.info('resulttt', result);
      },
    }),
    new Command<Project>({
      description:
        'Generates a package.yml file that can be used as a replacement for packageon',
      name: 'package-yml',
      async run({ config, flags }): Promise<void> {
        // await shellExec(
        //   'yarn plugin import https://raw.githubusercontent.com/lyleunderwood/yarn-plugin-yaml-manifest/master/bundles/%40yarnpkg/plugin-yaml-manifest',
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
  ],
  description: `Generate code, configuration, and files for various patterns and libraries.`,
  name: 'generate',
});
