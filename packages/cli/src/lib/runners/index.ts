import {
  ComponentLibraryDocumentationConfig,
  DevelopmentEnvironmentOptions,
  EnvironmentType,
  ProjectConfig,
  ProjectType,
  Runner,
  WebApplicationOptions,
} from '@srclaunch/types';
import chokidar from 'chokidar';
import { globby } from 'globby';
import path from 'node:path';

import { ComponentLibraryDocsGenerator } from '../docs/generate';
import { WebApplicationRunner } from './web-application/runner';

export async function runProject({
  config,
}: {
  readonly config: ProjectConfig;
}) {
  switch (config.type) {
    case ProjectType.ComponentLibrary:
      {
        const docOptions =
          config.documentation as ComponentLibraryDocumentationConfig;

        const inputDirectory = docOptions.generate?.input?.directory ?? 'src';

        const componentMatches = await globby('**/*.tsx', {
          cwd: inputDirectory,
        });
        const componentFiles = componentMatches.map(file =>
          path.resolve(inputDirectory, file),
        );
        const markdownMatches = await globby('**/*.md', {
          cwd: docOptions.generate?.input?.directory,
        });
        const markdownFiles = markdownMatches.map(file =>
          path.resolve(inputDirectory, file),
        );
        const readmeFilePath = path.resolve(process.cwd(), 'README.md');

        try {
          const watcher = chokidar.watch(
            [readmeFilePath, ...componentFiles, ...markdownFiles],
            {
              ignored: /(^|[/\\])\../, // ignore dotfiles
              persistent: true,
            },
          );

          const runOptions = config.environments?.development
            ?.run as DevelopmentEnvironmentOptions<WebApplicationOptions>;

          const runner = new WebApplicationRunner({
            environment: EnvironmentType.Development,
            ...runOptions,
          });

          const documentGenerator = new ComponentLibraryDocsGenerator({
            concurrency: 1,
            ...docOptions.generate,
            input: {
              ...docOptions.generate?.input,
            },
            output: {
              clean: false,
              combined: false,
              write: true,
            },
          });

          // await documentGenerator.generate({});

          await runner.run();

          watcher
            .on('add', async filePath => {
              console.log(`File ${filePath} has been added`);
            })
            .on('change', async filePath => {
              console.log(`File ${filePath} has been changed`);
              await documentGenerator.generate({
                match: [filePath],
              });
            })
            .on('unlink', filePath =>
              console.log(`File ${filePath} has been removed`),
            );
        } catch (error) {
          console.error(error);
          // if (error.name === 'AbortError') return;
          throw error;
        }

        // const app = await runWebApplication({
        //   environment: EnvironmentType.Development,
        //   ...options,
        // });
        // } else {
        //   await runWebApplication({
        //     environment: EnvironmentType.Development,
        //     ...devOptions.run,
        //   });
        // }
      }
      break;
    case ProjectType.WebApplication:
      {
        const runOptions = config.environments?.development
          ?.run as DevelopmentEnvironmentOptions<WebApplicationOptions>;

        const runner = new WebApplicationRunner({
          environment: EnvironmentType.Development,
          ...runOptions,
        });

        await runner.run();
      }
      break;
    default: {
      const options = config.environments?.development?.run;

      switch (options?.runner) {
        case Runner.Vite:
          {
            // await runWebApplication({
            //   environment: EnvironmentType.Development,
            //   ...options,
            // });
            // const pagesDir = options.pagesDir ?? 'src/pages';
            // const pagesPathExists = fs.existsSync(pagesDir);
            // if (options.pagesDir) {
            //   if (fs.existsSync(pagesDir)) {
            //     if (pagesPathExists) {
            //       const files = await fs.promises.readdir(pagesDir);
            //       console.log(files);
            //       console.log(`Found ${files.length} pages`);
            //     }
            //   } else {
            //     const dir = prompt('Enter pages directory path');
            //     if (dir) {
            //       const files = await fs.promises.readdir(dir);
            //       console.log(dir);
            //       console.log(`Found ${dir.length} pages`);
            //     }
            //   }
            // }
          }
          break;
        default:
          break;
      }
    }
  }
}
