import { ParserContext, TSDocParser } from '@microsoft/tsdoc';
import {
  ComponentPropertyDefinition,
  ComponentSpec,
  Route,
} from '@srclaunch/types';
import fs from 'fs-extra';
import { globby } from 'globby';
import os from 'node:os';
import path from 'node:path';
import pc from 'picocolors';
import { parse } from 'react-docgen-typescript';

export interface DocsGeneratorOptions {
  readonly concurrency?: number;
  readonly input?: {
    readonly directory?: string;
  };
  readonly output?: {
    readonly clean?: boolean;
    readonly combined?: boolean;
    readonly directory?: string;
    readonly write?: boolean;
  };
}

export interface ComponentLibraryDocsGeneratorOptions
  extends DocsGeneratorOptions {
  readonly match?: ReadonlyArray<string>;
}

export class ComponentLibraryDocsGenerator {
  private readonly concurrency: number = os.cpus().length;
  // eslint-disable-next-line functional/prefer-readonly-type
  private components: Array<ComponentSpec> = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  private componentFileMatch?: ReadonlyArray<string>;

  // eslint-disable-next-line functional/prefer-readonly-type
  private componentFiles: ReadonlyArray<string> = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  private componentGroups: Array<Array<string> | null> = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  private completedComponentGroups: Array<number> = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  private match?: ReadonlyArray<string>;
  // eslint-disable-next-line functional/prefer-readonly-type
  private markdownFiles: Array<string> = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  private routes: ReadonlyArray<Route> = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  private routeFileMatch?: ReadonlyArray<string>;
  // eslint-disable-next-line functional/prefer-readonly-type
  private routeGroups: Array<Array<string> | null> = [];
  // eslint-disable-next-line functional/prefer-readonly-type
  // eslint-disable-next-line functional/prefer-readonly-type
  private completedRouteGroups: Array<number> = [];
  public readonly output: DocsGeneratorOptions['output'];
  private readonly inputDirectory: string;

  public constructor(options?: ComponentLibraryDocsGeneratorOptions) {
    this.concurrency = options?.concurrency ?? this.concurrency;
    this.inputDirectory = options?.input?.directory ?? 'src';
    this.match = options?.match;
    this.output = options?.output;
    this.components = [];
    this.routes = [];
  }

  private async init() {
    const componentLibraryDocsDir = '.srclaunch/docs/component-library';
    const componentDocsDir = path.join(componentLibraryDocsDir, 'components');
    const componentDocsPath = path.join(
      componentLibraryDocsDir,
      `components.json`,
    );
    const routeDocsPath = path.join(componentLibraryDocsDir, 'routes.json');

    this.components = [];
    this.componentFiles = [];
    this.markdownFiles = [];
    this.routes = [];

    if (this.output?.clean) {
      await fs.emptyDir(componentLibraryDocsDir);
    }

    if (this.output?.write) {
      await fs.ensureDir(path.resolve(componentDocsDir));
      await fs.ensureFile(componentDocsPath);
      await fs.ensureFile(path.resolve(routeDocsPath));
    }

    if (this.output?.write && this.output.combined && this.output.clean) {
      await fs.writeFile(componentDocsPath, JSON.stringify({}, null, 2));
      await fs.writeFile(routeDocsPath, JSON.stringify({}, null, 2));
    }
  }

  private async getTsDoc(documentComment?: string) {
    if (!documentComment) {
      return;
    }

    const tsdocParser: TSDocParser = new TSDocParser();

    // Analyze the input doc comment
    const parserContext: ParserContext =
      tsdocParser.parseString(documentComment);

    // Check for any syntax errors
    if (parserContext.log.messages.length > 0) {
      throw new Error('Syntax error: ' + parserContext.log.messages[0]?.text);
    }

    console.log('parserContext', parserContext);
    // Since "@internal" is a standardized tag and a "modifier", it is automatically
    // added to the modifierTagSet:
    // return parserContext.docComment.modifierTagSet.isInternal();
  }

  // private async _run(concurrencyGroup = 0) {
  //   const cwd = process.cwd();

  //   const componentFiles = this.componentGroups[concurrencyGroup] ?? [];

  //   for (const file of componentFiles) {
  //     // if (!file.includes('buttons/button.tsx')) {
  //     //   continue;
  //     // }

  //     const fileName = file.split('/').pop() as string;
  //     const filePath = file.split('/').slice(0, -1).join('/');
  //     const hierarchy = path
  //       .relative(path.join(cwd, this.inputDirectory), filePath)
  //       .split('/');

  //     console.log('fileName', fileName);
  //     const docs = await parse(file, {
  //       savePropValueAsString: true,
  //       shouldExtractLiteralValuesFromEnum: true,
  //       shouldExtractValuesFromUnion: true,
  //     });

  //     for (const document of docs) {
  //       // console.log('doc.tags?.example', doc.tags?.example);
  //       // const tsDoc = await this.getTsDoc(doc.tags?.example);
  //       // console.log('tsDoc', tsDoc);

  //       const markdownFileName = fileName.replace('.tsx', '.md');
  //       const markdownFilePath = path.join(
  //         path.join(cwd, this.inputDirectory),
  //         markdownFileName,
  //       );
  //       const hasMarkdownFile = await fs.pathExists(markdownFilePath);
  //       const markdownFile = hasMarkdownFile
  //         ? await fs.readFile(markdownFilePath)
  //         : undefined;
  //       const markdownFileContent = markdownFile?.toString();

  //       this.components = [
  //         ...this.components,
  //         {
  //           description: document.description,
  //           file: {
  //             name: fileName,
  //             path: filePath,
  //           },
  //           hierarchy,
  //           markdown: markdownFileContent,
  //           name: document.displayName,
  //           props: document.props,
  //           tags: document.tags,
  //         },
  //       ];

  //       console.info(
  //         `${pc.blue('ℹ')} ${pc.dim('Generated')} ${pc.bold(
  //           hierarchy.join(pc.dim(' / ')),
  //         )} ${pc.bold(pc.dim('/'))} ${pc.bold(document.displayName)}`,
  //       );
  //     }
  //   }

  //   this.completedComponentGroups = [
  //     ...this.completedComponentGroups,
  //     concurrencyGroup,
  //   ];
  // }

  // public async getComponentFileGroups() {
  //   const componentFiles = await globby('**/*.tsx', {
  //     cwd: this.inputDirectory,
  //   });
  //   const filePaths = componentFiles.map(file =>
  //     path.resolve(this.inputDirectory, file),
  //   );
  //   const groupCount = Math.ceil(filePaths.length / this.concurrency);

  //   for (let index = 0; index < this.concurrency; index++) {
  //     this.componentGroups = [
  //       ...this.componentGroups,
  //       filePaths.slice(index * groupCount, (index + 1) * groupCount),
  //     ];
  //   }
  // }

  // private async parallel() {
  //   if (this.concurrency > 1) {
  //     if (cluster.isPrimary) {
  //       for (let index = 0; index < this.concurrency - 1; index++) {
  //         cluster.fork({
  //           // eslint-disable-next-line @typescript-eslint/naming-convention
  //           WORKER_FILE_GROUP_ID: index,
  //         });
  //       }

  //       cluster.on('exit', worker => {
  //         const fileGroupId = process.env.WORKER_FILE_GROUP_ID;

  //         if (fileGroupId) {
  //           // this.completedFileGroups = [
  //           //   ...this.completedFileGroups,
  //           //   Number.parseInt(fileGroupId),
  //           // ];
  //         }
  //       });
  //     } else {
  //       const fileGroupId = process.env.WORKER_FILE_GROUP_ID;

  //       await this._run(Number.parseInt(fileGroupId ?? '0'));
  //     }
  //   } else {
  //     await this._run(0);
  //   }
  // }

  private async addRoute(route: Route) {
    this.routes = [...this.routes, route];

    if (this.output?.write) {
      await this.writeRoutesFile();
    }
  }

  private async addComponent(component: ComponentSpec) {
    this.components = [...this.components, component];

    if (this.output?.write) {
      await this.writeComponentSpec(component);
    }
  }

  private async writeRoutesFile() {
    const routesFilePath = path.join(
      process.cwd(),
      '.srclaunch/docs/component-library',
      'routes.json',
    );

    await fs.writeFile(routesFilePath, JSON.stringify(this.routes, null, 2));
  }

  private async writeComponentSpec(component: ComponentSpec) {
    const componentFilePath = path.join(
      process.cwd(),
      '.srclaunch/docs/component-library/components',
      component.hierarchy.join('/'),
    );

    const componentFileNamePath = path.join(
      componentFilePath,
      component.file.name.split('.tsx')[0] + '.json',
    );

    await fs.ensureDir(componentFilePath);
    await fs.writeFile(
      componentFileNamePath,
      JSON.stringify(component, null, 2),
    );
  }

  private async run(matchFiles?: ReadonlyArray<string>) {
    await this.init();

    const cwd = process.cwd();

    if (matchFiles) {
      for (const match of matchFiles) {
        if (match.includes('.tsx')) {
          this.componentFiles = [...this.componentFiles, match];
        } else if (match.includes('.md')) {
          this.markdownFiles = [...this.markdownFiles, match];
        }

        if (match.includes('README.md')) {
          const readmeFilePath = path.resolve(cwd, 'README.md');
          const readmeFileContents = await fs.readFile(readmeFilePath);

          this.addRoute({
            markdown: {
              content: readmeFileContents.toString(),
              file: {
                name: '.README.md',
                path: readmeFilePath.split('/').slice(0, -1).join('/'),
              },
            },
            path: '/',
          });
        }
      }
    } else {
      const componentMatches = await globby('**/*.tsx', {
        cwd: this.inputDirectory,
      });
      this.componentFiles = componentMatches.map(file =>
        path.resolve(this.inputDirectory, file),
      );
      const markdownMatches = await globby('**/*.md', {
        cwd: this.inputDirectory,
      });
      this.markdownFiles = markdownMatches.map(file =>
        path.resolve(this.inputDirectory, file),
      );

      const readmeFilePath = path.resolve(cwd, 'README.md');
      const readmeFileContents = await fs.readFile(readmeFilePath);

      this.addRoute({
        markdown: {
          content: readmeFileContents.toString(),
          file: {
            name: '.README.md',
            path: readmeFilePath.split('/').slice(0, -1).join('/'),
          },
        },
        path: '/',
      });
    }

    for (const file of this.componentFiles) {
      const fileName = file.split('/').pop() as string;
      const filePath = file.split('/').slice(0, -1).join('/');
      const hierarchy = path
        .relative(path.join(cwd, this.inputDirectory), filePath)
        .split('/');

      const docs = await parse(file, {
        propFilter: {
          skipPropsWithName: ['parentProps'],
          // skipPropsWithoutDoc: true,
        },
        savePropValueAsString: true,
        shouldExtractLiteralValuesFromEnum: true,
        shouldExtractValuesFromUnion: true,
        skipChildrenPropWithoutDoc: false,
      });

      for (const document of docs) {
        const markdownFileName = fileName.replace('.tsx', '.md');
        const markdownFilePath = path.join(
          path.join(cwd, this.inputDirectory),
          markdownFileName,
        );
        const hasMarkdownFile = await fs.pathExists(markdownFilePath);
        const markdownContent = hasMarkdownFile
          ? await fs.readFile(markdownFilePath)
          : undefined;

        const componentDocument = {
          description: document.description,
          file: {
            name: fileName,
            path: filePath,
          },
          hierarchy,
          markdown: hasMarkdownFile
            ? {
                content: markdownContent?.toString(),
                file: {
                  name: markdownFileName,
                  path: markdownFilePath,
                },
              }
            : undefined,
          name: document.displayName,
          props: document.props as {
            [key: string]: ComponentPropertyDefinition;
          },
          tags: document.tags,
        };

        this.addComponent(componentDocument);

        console.info(
          `${pc.blue('ℹ')} ${pc.dim('Generated')} ${pc.bold(
            hierarchy.join(pc.dim(' / ')),
          )} ${pc.bold(pc.dim('/'))} ${pc.bold(document.displayName)}`,
        );
      }
    }

    const nonComponentRoutes = this.markdownFiles.filter(file => {
      return !this.componentFiles.includes(file.split('.md')[0] + '.tsx');
    });

    for (const filePath of nonComponentRoutes) {
      const fileName = filePath.split('/').pop() as string;
      const hierarchy = path
        .relative(path.join(cwd, this.inputDirectory), filePath)
        .split('/')
        .slice(0, -1);

      const markdownContent = await fs.readFile(filePath);

      this.addRoute({
        hierarchy,
        markdown: {
          content: markdownContent.toString(),
          file: {
            name: fileName,
            path: filePath.split('/').slice(0, -1).join('/'),
          },
        },
        path: hierarchy.join('/'),
      });
    }
  }

  public async generate({
    match,
  }: {
    readonly match?: ReadonlyArray<string>;
  }): Promise<{
    readonly components: readonly ComponentSpec[];
    readonly routes: readonly Route[];
  }> {
    console.info(
      `${pc.blue('ℹ')} Finding React components in ${pc.bold(
        this.inputDirectory,
      )} and generating documentation...`,
    );

    // await this.getComponentFileGroups();

    // console.log('oroutes', this.routes);
    // // await this.parallel();
    // await this._run();
    await this.run(match ?? this.match);

    console.log(
      `${pc.green('✔')} Documentation generated for ${pc.bold(
        this.components.length,
      )} components`,
    );

    if (this.output?.combined) {
      await fs.writeFile(
        '.srclaunch/docs/component-library/components.json',
        JSON.stringify(
          this.components.map(c => {
            return {
              docPath: path.resolve(
                path.join(
                  '.srclaunch/docs/component-library/components',
                  c.hierarchy.join('/'),
                  c.file.name.split('.tsx')[0] + '.json',
                ),
              ),
              file: c.file,
              hierarchy: c.hierarchy,
              name: c.name,
              path: `${c.hierarchy.join('/')}/${c.file.name.split('.tsx')[0]}`,
            };
          }),
          undefined,
          2,
        ),
      );
    }

    // if (this.completedComponentGroups.length === this.componentGroups.length) {
    return {
      components: this.components,
      routes: this.routes,
    };
    // }

    // return undefined;
  }
}
