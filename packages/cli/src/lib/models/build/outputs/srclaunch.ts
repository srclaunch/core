// import { emptyDirectory, readFile, writeFile } from '@srclaunch/logic';
import path from 'node:path';

import { constructModelExportIndexScript } from '../exports.js';

export async function buildSrcLaunchModels(
  modelsPath: string,
  projectPath: string,
): Promise<void> {
  try {
    const BUILD_PATH = path.join(path.resolve(), projectPath, 'src');

    //   await emptyDirectory(BUILD_PATH);

    //   // const files = await fs.readdir(modelsPath);
    //   const files: string[] = []
    //   for (const file of files) {
    //     const fileContents = await readFile(
    //       path.join(modelsPath, file),
    //     );

    //     const fieldsPropertyExists = fileContents.includes('fields: {');

    //     if (!fieldsPropertyExists) {
    //       throw new Error(`${file} is missing the fields property.`);
    //     }

    //     let entityFields = `
    //   created_date: {
    //     label: 'Created Date',
    //     required: false,
    //     type: Primitives.DateTime,
    //   },
    //   updated_date: {
    //     label: 'Updated Date',
    //     required: false,
    //     type: Primitives.DateTime,
    //   },
    // `;

    //     const relationshipsStart = fileContents.indexOf('relationships:') + 15;
    //     const relationshipsEnd =
    //       fileContents.indexOf('}', relationshipsStart) + 1;
    //     const relationships = fileContents.slice(
    //       relationshipsStart,
    //       relationshipsEnd,
    //     );

    //     if (relationships) {
    //       const belongsToStart = relationships.indexOf('belongsTo:') + 10;
    //       const belongsToEnd = relationships.indexOf(']', belongsToStart) + 1;
    //       const belongsTo = relationships.slice(belongsToStart, belongsToEnd);

    //       if (belongsTo) {
    //         const transformed = belongsTo
    //           .replace(/'/g, '"')
    //           .replace(/ {2}|\r\n|\n|\r/g, '')
    //           .replace(/\s/g, '')
    //           .replace(',]', ']');

    //         const belongsToFields = JSON.parse(transformed);

    //         for (const relationship of belongsToFields) {
    //           entityFields += `
    //       ${relationship}Id: {
    //         label: '${relationship}',
    //         required: false,
    //         type: Primitives.UUID
    //       },
    //       `;
    //         }
    //       }
    //     }

    //     const updatedFileContents = fileContents.replace(
    //       'fields: {',
    //       `fields: {
    //       ${entityFields}`,
    //     );

    //     // logger.info(`Writing ${file} model`);

    //     await writeFile(
    //       path.join(BUILD_PATH, file),
    //       updatedFileContents,
    //     );
    //   }

    // logger.info(`Writing ${BUILD_PATH}/index.ts`);

    // const buildModels = await fs.readdir(BUILD_PATH);
    const buildModels: string[] = [];
    const models = buildModels.filter(file => {
      return file.slice(-3) === '.ts' && file.split('.ts')[0] !== 'index';
    });

    const indexFileContent = constructModelExportIndexScript(
      models,
      'srclaunch',
    );

    // if (indexFileContent) {
    //   await writeFile(
    //     path.join(BUILD_PATH, 'index.ts'),
    //     indexFileContent,
    //   );
    // }
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
