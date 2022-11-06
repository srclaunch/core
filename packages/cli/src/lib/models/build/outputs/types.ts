import { Model, ModelField, Primitives } from '@srclaunch/types';
import fs from 'fs-extra';
import path from 'node:path';
import pluralize from 'pluralize';

import { getTypescriptTypeFromPrimitive } from '../types';

const snakeToPascal = (string_: string) => {
  return string_
    .split('/')
    .map(snake =>
      snake
        .split('_')
        .map(substr => substr.charAt(0).toUpperCase() + substr.slice(1))
        .join(''),
    )
    .join('/');
};

export function getPrimitiveImports(
  fields: Record<string, ModelField>,
): string {
  let imports = 'import { ';

  for (const f of Object.values(fields)) {
    switch (f.type) {
      case Primitives.Image:
        if (!imports.includes(' Image,')) {
          imports += 'Image, ';
        }

        break;
      case Primitives.Menu:
        if (!imports.includes(' Menu,')) {
          imports += 'Menu, ';
        }

        break;
      default:
        break;
    }
  }

  imports += "} from '@srclaunch/types';";

  return imports;
}

export function constructModelTypeFromModel(model: Model): string {
  const fieldStrs = Object.entries(model.fields)
    .map(([fieldName, field]) => {
      return `\n${fieldName}${field.required ? '' : '?'}: ${
        field.type === Primitives.Menu
          ? model.name + pluralize(snakeToPascal(fieldName))
          : getTypescriptTypeFromPrimitive(field.type)
      }${field.required ? ';' : ' | null;'}`;
    })
    .join('');

  // if (model.relationships) {
  //   const belongsTo = model.relationships.belongsTo;

  //   if (belongsTo) {
  //     for (const belong of belongsTo) {
  //       fieldStrs += `\n${belong}Id: string;`;
  //     }
  //   }
  // }

  let string_ = `${getPrimitiveImports(model.fields)}\n`;

  for (const [fieldName, field] of Object.entries(model.fields)) {
    let enumString = '';

    if (field.type === Primitives.Menu && field.menu) {
      enumString += `export enum ${
        model.name + pluralize(snakeToPascal(fieldName))
      } {`;
      const regex = /[^\dA-Za-z]/g;

      for (const item of field.menu) {
        if (item.label) {
          enumString += `\n  ${snakeToPascal(item.label)
            .replace(/ /g, '')
            .replace(/0/g, 'Zero')
            .replace(/1/g, 'One')
            .replace(/2/g, 'Two')
            .replace(/3/g, 'Three')
            .replace(/4/g, 'Four')
            .replace(/5/g, 'Five')
            .replace(/6/g, 'Six')
            .replace(/7/g, 'Seven')
            .replace(/8/g, 'Eight')
            .replace(/9/g, 'Nine')
            .replace(regex, '')} = "${item.value}",`;
        }
      }

      enumString += '};\n\n';
    }

    string_ += `\n${enumString}`;
  }

  string_ += `export type ${model.name} = {
    id?: string;${fieldStrs}
  };`;

  return string_;
}

export function getModelExports(model: Model): string {
  let string_ = `export { ${model.name} } from './${model.name}';\n`;

  let enumString = '';

  for (const [fieldName, field] of Object.entries(model.fields)) {
    if (field.type === Primitives.Menu && field.menu) {
      enumString += `${model.name + pluralize(snakeToPascal(fieldName))},`;
    }
  }

  if (enumString.length > 0) {
    string_ += `export {${enumString}} from './${model.name}';\n`;
  }

  return string_;
}

export async function buildModelTypes() {
  try {
    const MODELS_BUILD_PATH = path.join(
      path.resolve(),
      'sdk/models/dist/index.esm.js',
    );
    const BUILD_PATH = path.join(path.resolve(), 'sdk/types', 'src');
    const DIST_PATH = path.join(path.resolve(), 'sdk/types', 'dist');
    const TYPES_DIR_PATH = path.join(path.resolve(), 'types');

    await fs.emptyDir(BUILD_PATH);
    await fs.emptyDir(DIST_PATH);

    const files = await fs.readdir(TYPES_DIR_PATH);

    for (const file of files) {
      const fileContents = await fs.readFile(
        path.join(TYPES_DIR_PATH, file),
        'utf8',
      );

      await fs.writeFile(path.join(BUILD_PATH, file), fileContents, 'utf8');
    }

    const Models = await import(MODELS_BUILD_PATH);

    let exportString = '';

    for (const model of Object.entries(Models as Record<string, Model>)) {
      const modelName =
        typeof model[1] === 'object' ? model[1].name : undefined;

      if (!modelName) {
        continue;
      }

      const types = constructModelTypeFromModel(model[1]);
      const fileName = `${modelName}.ts`;
      const filePath = path.join(BUILD_PATH, fileName);

      // logger.info(`Writing model types to ${modelName}.ts`);

      await fs.writeFile(filePath, types, 'utf8');

      exportString += getModelExports(model[1]);
    }

    // logger.info(`Writing ${BUILD_PATH}/index.ts`);

    await fs.writeFile(path.join(BUILD_PATH, 'index.ts'), exportString, 'utf8');
  } catch (error: any) {
    console.error('err', error);
    throw error;
  }
}
