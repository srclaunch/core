// import { emptyDirectory, readFile, writeFile } from '@srclaunch/logic';
import fs from 'fs-extra';
import path from 'node:path';
import { create, register, Transpiler } from 'ts-node';
import ts from 'typescript';

import { constructModelExportIndexScript } from '../exports.js';

export async function buildSrcLaunchModels(
  modelsPath: string,
  projectPath: string,
): Promise<void> {
  try {
    const BUILD_PATH = path.join(path.resolve(), projectPath, 'src');
    const MODELS_PATH = path.join(BUILD_PATH, modelsPath);
    // await emptyDirectory(BUILD_PATH);

    const files = await fs.readdir(MODELS_PATH);
    // const files: string[] = [];
    for (const file of files) {
      if (file === 'index.ts') {
        continue;
      }
      const fileContentsBuffer = await fs.readFile(
        path.join(MODELS_PATH, file),
      );
      const fileContents = fileContentsBuffer.toString();

      // register();
      // const defaultExport = await import(path.join(MODELS_PATH, file));

      // console.log('defaultExport', defaultExport);
      // const sourceFile = ts.createSourceFile(
      //   file,
      //   fileContents,
      //   ts.ScriptTarget.ES2022,
      //   true,
      // );
      // const program = ts.createProgram([sourceFile.], {});

      // const result = program.emit(sourceFile);
      // const transpile = ts.transpileModule(fileContents, {
      //   compilerOptions: {
      //     module: ts.ModuleKind.ES2022,
      //   },
      //   fileName: file,
      // });

      // console.log(transpile);
      // const program: ts.Program = ts.createProgram(
      //   [path.join(MODELS_PATH, file)],
      //   {
      //     noEmit: true,
      //   },
      // );
      // const emitResult = program.emit();
      // console.log('emitResult', emitResult);
      // const allDiagnostics = ts
      //   .getPreEmitDiagnostics(program)
      //   .concat(emitResult.diagnostics);

      // const namePropertyExists = fileContents.includes('name:');

      // if (namePropertyExists) {
      //   const namePropertyIndex = fileContents.indexOf('name:');
      //   const namePropertyEndIndex = fileContents.indexOf(
      //     ',',
      //     namePropertyIndex,
      //   );

      //   const nameProperty = fileContents.slice(
      //     namePropertyIndex,
      //     namePropertyEndIndex,
      //   );

      //   // const namePropertyKey = nameProperty.split(':')[0];
      //   // const namePropertyValue = nameProperty.split(':')[1];

      //   console.log('nameProperty', nameProperty);
      // }

      const fieldsPropertyExists = fileContents.includes('fields: {');

      if (!fieldsPropertyExists) {
        throw new Error(`${file} is missing the fields property.`);
      }

      let entityFields = `
      created_date: {
        label: 'Created Date',
        required: false,
        type: Primitives.DateTime,
      },
      updated_date: {
        label: 'Updated Date',
        required: false,
        type: Primitives.DateTime,
      },
    `;

      const relationshipsStart = fileContents.indexOf('relationships:') + 15;
      const relationshipsEnd =
        fileContents.indexOf('}', relationshipsStart) + 1;
      const relationships = fileContents.slice(
        relationshipsStart,
        relationshipsEnd,
      );

      if (relationships) {
        const belongsToStart = relationships.indexOf('belongsTo:');

        if (belongsToStart > -1) {
          const belongsToEnd =
            relationships.indexOf(']', belongsToStart + 10) + 1;
          const belongsTo = relationships.slice(
            belongsToStart + 10,
            belongsToEnd,
          );

          if (belongsTo) {
            const transformed = belongsTo
              .replace(/'/g, '"')
              .replace(/ {2}|\r\n|\n|\r/g, '')
              .replace(/\s/g, '')
              .replace(',]', ']');

            const belongsToFields = JSON.parse(transformed);

            for (const relationship of belongsToFields) {
              entityFields += `
          ${relationship}Id: {
            label: '${relationship}',
            required: false,
            type: Primitives.UUID
          },
          `;
            }
          }
        }
      }

      const updatedFileContents = fileContents.replace(
        'fields: {',
        `fields: {
          ${entityFields}`,
      );

      // logger.info(`Writing ${file} model`);

      await fs.writeFile(path.join(MODELS_PATH, file), updatedFileContents);
    }

    // logger.info(`Writing ${BUILD_PATH}/index.ts`);

    const buildModels = await fs.readdir(MODELS_PATH);
    // const buildModels: string[] = [];
    const models = buildModels.filter(file => {
      return file.slice(-3) === '.ts' && file.split('.ts')[0] !== 'index';
    });

    const indexFileContent = constructModelExportIndexScript(
      models,
      'srclaunch',
    );

    if (indexFileContent) {
      await fs.writeFile(path.join(MODELS_PATH, 'index.ts'), indexFileContent);
    }
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
