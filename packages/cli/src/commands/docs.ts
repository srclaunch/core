/* eslint-disable sort-keys */
/* eslint-disable-next-line unicorn/prevent-abbreviations */
import {
  DocumentationConfig,
  DocumentationType,
  FileType,
  ProjectConfig,
} from '@srclaunch/types';
import fs from 'fs-extra';
import { globby } from 'globby';
import JsYaml from 'js-yaml';
import { AnyFlags, TypedFlags } from 'meow';
import path from 'node:path';
import pc from 'picocolors';

import { Command, CommandType } from '../lib/command';
import { ComponentLibraryDocsGenerator } from '../lib/docs/generate';

type DocsFlags = TypedFlags<AnyFlags>;

export default new Command<ProjectConfig, DocsFlags>({
  commands: [
    new Command<ProjectConfig, DocsFlags>({
      description: 'Generate documentation metadata',
      name: 'generate',
      run: async ({
        config,
      }: {
        readonly config: ProjectConfig;
        readonly flags: DocsFlags;
      }) => {
        const options = config.documentation as DocumentationConfig;

        if (!options) {
          throw new Error('Missing documentation configuration');
        }

        if (options.generate) {
          switch (options.type) {
            case DocumentationType.ComponentLibrary:
              {
                const inputDirectory =
                  options.generate?.input?.directory ?? 'src';
                const componentMatches = await globby('**/*.tsx', {
                  cwd: inputDirectory,
                });
                const componentFiles = componentMatches.map(file =>
                  path.resolve(inputDirectory, file),
                );
                const markdownMatches = await globby('**/*.md', {
                  cwd: options.generate?.input?.directory,
                });
                const markdownFiles = markdownMatches.map(file =>
                  path.resolve(inputDirectory, file),
                );
                const readmeFilePath = path.resolve(process.cwd(), 'README.md');

                const documentGenerator = new ComponentLibraryDocsGenerator({
                  concurrency: 1,
                  ...options.generate,
                  match: [readmeFilePath, ...componentFiles, ...markdownFiles],
                  output: {
                    clean: true,
                    combined: true,
                    write: true,
                  },
                });
                await documentGenerator.generate({});

                console.log(
                  pc.green(`✔ Wrote generated component library documentation`),
                );
                //       const output = {
                //         name: options.name,
                //         // eslint-disable-next-line sort-keys-fix/sort-keys-fix
                //         description: options.description,
                //         // eslint-disable-next-line sort-keys-fix/sort-keys-fix
                //         type: options.type,
                //         // eslint-disable-next-line sort-keys-fix/sort-keys-fix
                //         components,
                //         // eslint-disable-next-line sort-keys-fix/sort-keys-fix
                //         routes,
                //       };
                //       const outputDirectory =
                //         options.output?.directory ?? '.srclaunch/docs';
                //       const outputFileName =
                //         options.output?.file?.name ?? 'component-library';
                //       const outputFileType =
                //         options.output?.file?.type ?? FileType.JSON;

                //       const outputFilePath = path.join(
                //         outputDirectory,
                //         `${outputFileName}.${outputFileType}`,
                //       );

                //       await fs.writeFile(
                //         path.resolve(outputFilePath),
                //         outputFileType === FileType.JSON
                //           ? JSON.stringify(output, null, 2)
                //           : JsYaml.dump(output),
                //       );
              }
              break;

            case DocumentationType.IconLibrary:
              break;
          }
        }
      },

      // console.log('program', program.getSourceFiles());

      // const transpiledCode = ts.transpileModule(
      //   exportFileContents,
      //   {},
      // ).outputText;
      // console.log('transpiled', transpiledCode);
      // const exportsFile = await import(importPath);

      // await esbuild(options as ESBuildOptions);
    }),

    new Command({
      description: 'Shows help for "docs" commands',
      name: 'help',
      run: async () => {
        console.info('Available build commands are: build and help');
      },
      type: CommandType.Project,
    }),
  ],
  description: "Commands for managing a project's documentation",
  name: 'docs',
  run: async ({
    config,
    flags,
  }: {
    readonly config: ProjectConfig;
    readonly flags: DocsFlags;
  }) => {
    // Show help?
  },
});

/*
import { ComponentSpec } from '@srclaunch/types';
import async from 'async';
import { globby } from 'globby';
import cluster from 'node:cluster';
import os from 'node:os';
import path from 'node:path';
import pc from 'picocolors';
import { parse } from 'react-docgen-typescript';

export interface DocsGeneratorOptions {
  readonly concurrency?: number;
  readonly input?: {
    readonly directory?: string;
  };
}

export class ComponentLibraryDocsGenerator {
  private readonly concurrency: number = os.cpus().length;
  // eslint-disable-next-line functional/prefer-readonly-type
  private components: Array<ComponentSpec> = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  private fileGroups: Array<Array<string> | null> = [];
  private readonly files: readonly string[] = [];
  public readonly output: readonly ComponentSpec[] = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  private tasks: ReadonlyArray<
    (callback: (err?: Error) => void) => Promise<void>
  >;
  private readonly inputDirectory: string = 'src';

  public constructor(options?: DocsGeneratorOptions) {
    this.concurrency = options?.concurrency ?? this.concurrency;
    this.inputDirectory = options?.input?.directory ?? this.inputDirectory;
    this.components = [];
    this.tasks = [];
  }

  private async _run(concurrencyGroup = 0) {
    const cwd = process.cwd();

    const files = this.fileGroups[concurrencyGroup] ?? [];

    for (const file of files) {
      const fileName = file.split('/').pop() as string;
      const filePath = file.split('/').slice(0, -1).join('/');
      const hierarchy = path
        .relative(path.join(cwd, this.inputDirectory), filePath)
        .split('/');
      // ${pc.green('✔')}

      const docs = await parse(file, {
        savePropValueAsString: true,
        shouldExtractLiteralValuesFromEnum: true,
        shouldExtractValuesFromUnion: true,
      });

      for (const doc of docs) {
        this.components.push({
          description: doc.description,
          file: {
            name: fileName,
            path: filePath,
          },
          hierarchy,
          name: doc.displayName,
          props: doc.props,
          tags: doc.tags,
        });

        console.info(
          `${pc.blue('ℹ')} ${pc.dim('Generated')} ${pc.bold(
            hierarchy.join(pc.dim(' / ')),
          )} ${pc.bold(pc.dim('/'))} ${pc.bold(doc.displayName)}`,
        );
      }
    }
  }

  public async getComponentFileGroups() {
    console.info(
      `${pc.blue('ℹ')} Finding React components in ${pc.bold(
        this.inputDirectory,
      )} and generating documentation`,
    );

    const componentFiles = await globby('* * /*.tsx', {
      cwd: this.inputDirectory,
    });

    this.fileGroups = componentFiles
      .map(file => path.resolve(this.inputDirectory, file))
      .sort()
      .map((file, index) => {
        return index % this.concurrency === 0
          ? this.files.slice(index, index + this.concurrency)
          : null;
      })
      .filter(Boolean);
  }

  public async generate() {
    await this.getComponentFileGroups();

    if (this.concurrency > 1) {
      if (cluster.isPrimary) {
        for (let i = 0; i < this.concurrency; i++) {
          cluster.fork({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            WORKER_FILE_GROUP_ID: i,
          });
        }

        cluster.on('exit', function (worker) {
          const fileGroupId = process.env.WORKER_FILE_GROUP_ID;

          console.log(`FileGroupWorker "${fileGroupId}" has exited.`);
        });
      } else {
        const fileGroupId = process.env.WORKER_FILE_GROUP_ID;

        this._run(Number.parseInt(fileGroupId ?? '0'));
      }
    } else {
      this._run(0);
    }

    console.log(
      `${pc.green('✔')} Documentation generated for ${pc.bold(
        this.components.length,
      )} components`,
    );

    return this.components;
  }
}
*/
