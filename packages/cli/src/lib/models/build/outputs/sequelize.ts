import {
  MenuField,
  Model,
  ModelField,
  Primitives,
  Relationship,
} from '@srclaunch/types';
import fs from 'fs-extra';
import path from 'node:path';

import { constructModelExportIndexScript } from '../exports.js';
import { getTypescriptTypeFromPrimitive } from '../types.js';
import { getPrimitiveImports } from './types.js';

export function getSequelizeTypeFromPrimitive(type: Primitives) {
  switch (type) {
    case Primitives.Boolean:
      return 'DataTypes.BOOLEAN';
    case Primitives.DayOfMonth:
      return 'DataTypes.INTEGER';
    case Primitives.Weekday:
      return 'DataTypes.STRING';
    case Primitives.Float:
      return 'DataTypes.FLOAT';
    case Primitives.CurrencyCode:
      return 'DataTypes.STRING';
    case Primitives.DateTime:
      return 'DataTypes.DATE';
    case Primitives.Image:
      return 'DataTypes.JSONB';
    case Primitives.JSON:
      return 'DataTypes.JSONB';
    case Primitives.LongText:
      return 'DataTypes.STRING';
    case Primitives.Markdown:
      return 'DataTypes.TEXT';
    case Primitives.Menu:
      return 'DataTypes.ENUM';
    case Primitives.Month:
      return 'DataTypes.INTEGER';
    case Primitives.Number:
      return 'DataTypes.INTEGER';
    case Primitives.Tags:
      return 'DataTypes.ARRAY(DataTypes.STRING)';
    case Primitives.String:
      return 'DataTypes.STRING';
    case Primitives.UUID:
      return 'DataTypes.UUID';
    // case Primitives.UnofficialCurrencyCode:
    //   return 'string';
    default:
      return 'DataTypes.STRING';
  }
}

// function getSequelizePrimitives(type: Primitives) {
//   switch (type) {
//     case Primitives.Boolean:
//       return 'DataTypes.BOOLEAN';
//     case Primitives.DayOfMonth:
//       return 'DataTypes.INTEGER';
//     case Primitives.Weekday:
//       return 'DataTypes.STRING';
//     case Primitives.Float:
//       return 'DataTypes.FLOAT';
//     case Primitives.Currency:
//       return 'DataTypes.STRING';
//     case Primitives.DateTime:
//       return 'DataTypes.DATE';
//     case Primitives.JSON:
//       return 'DataTypes.JSONB';
//     case Primitives.LongText:
//       return 'DataTypes.TEXT';
//     case Primitives.Markdown:
//       return 'DataTypes.TEXT';
//     case Primitives.Menu:
//       return 'DataTypes.ENUM';
//     case Primitives.Month:
//       return 'DataTypes.INTEGER';
//     case Primitives.Number:
//       return 'DataTypes.INTEGER';
//     case Primitives.Tags:
//       return 'DataTypes.JSONB';
//     case Primitives.String:
//       return 'DataTypes.STRING';
//     case Primitives.UUID:
//       return 'DataTypes.UUIDV4';
//     // case Primitives.UnofficialCurrencyCode:
//     //   return 'DataTypes.STRING';
//     default:
//       return 'string';
//   }
// }

export function constructSequelizeModelClassStr(model: Model): string {
  const typePropertiesString = constructTypePropsFromFields(model.fields, true);
  const classPropertiesString = constructSequelizeClassPropsWithTypes(model);

  return `export type ${model.name}Attributes = {
  ${typePropertiesString}
};

export type ${model.name}CreationAttributes = Optional<${model.name}Attributes, 'id'>;
export class ${model.name} extends Model<
  ${model.name}Attributes,
  ${model.name}CreationAttributes
> implements ${model.name}Attributes {
${classPropertiesString}
}
`;
}

export function constructTypePropsFromFields(
  fields: Model['fields'],
  sequelize = false,
): string {
  let fieldsString = ` id: string;
  `;

  for (const field of [...Object.entries(fields)].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    fieldsString += `  ${field[0]}${
      field[1].required ? '' : '?'
    }: ${getTypescriptTypeFromPrimitive(field[1].type)} ${
      field[1].required ? '' : '| null'
    };\n`;
  }

  return fieldsString;
}

function constructSequelizeClassPropsWithTypes(model: Model): string {
  let fieldsString = ` declare readonly id: string;

  public static associate: (models: Record<string, ModelStatic<Model>>) => void;
`;

  for (const field of [...Object.entries(model.fields)].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    fieldsString += `  declare ${field[0]}: ${getTypescriptTypeFromPrimitive(
      field[1].type,
    )}${!field[1].required ? ' | null' : ''};\n`;
  }

  // if (model.relationships) {
  //   const { belongsTo, hasOne, hasMany } = model.relationships;

  //   let belongsToStr = '';

  //   if (Array.isArray(belongsTo) && belongsTo.length > 0) {
  //     belongsTo.forEach(m => {
  //       belongsToStr += `    public ${m}Id!: string;`;
  //     });
  //   }

  //   let hasOneStr = '';

  //   if (Array.isArray(hasOne) && hasOne.length > 0) {
  //     hasOne.forEach(m => {
  //       belongsToStr += `    public ${m}Id!: string;`;
  //     });
  //   }

  //   fieldsStr += belongsToStr + hasOneStr;
  // }

  return fieldsString;
}

function constructSequelizeFieldString(
  fieldName: string,
  field: ModelField,
): string {
  const fieldType = getSequelizeTypeFromPrimitive(field.type);

  if (fieldName) {
    return `\n  ${fieldName}: {
        allowNull: ${field?.required ? 'false' : 'true'},
        type: ${
          fieldType === 'DataTypes.ENUM' && field.menu
            ? `DataTypes.ENUM(${field.menu
                .map((index: MenuField) => `'${index.value}'`)
                .join(',')})`
            : fieldType
        }
      },`;
  }

  return '';
}

function getSequelizeFieldsString(fields: Model['fields']): string {
  let fieldsString = ` id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },`;

  for (const field of [...Object.entries(fields)].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    fieldsString += constructSequelizeFieldString(field[0], field[1]);
  }

  return fieldsString;
}

export function constructSequelizeModelRelationships(
  modelName: string,
  relationships?: Relationship,
): string {
  if (relationships) {
    const { belongsTo, hasOne, hasMany } = relationships;

    let belongsToString = '';

    if (Array.isArray(belongsTo) && belongsTo.length > 0) {
      for (const model of belongsTo) {
        belongsToString += `
          if (${model}) ${modelName}.belongsTo(${model});`;
      }
    }

    let hasOneString = '';

    if (Array.isArray(hasOne) && hasOne.length > 0) {
      for (const model of hasOne) {
        hasOneString += `     
        if (${model}) ${modelName}.hasOne(${model});`;
      }
    }

    let hasManyString = '';

    if (Array.isArray(hasMany) && hasMany.length > 0) {
      for (const model of hasMany) {
        hasManyString += `
        if (${model}) ${modelName}.hasMany(${model});`;
      }
    }

    return belongsToString + hasOneString + hasManyString;
  }

  return '';
}

export function constructSequelizeModelDependencies(
  modelName: string,
  relationships?: Relationship,
): readonly string[] {
  if (!relationships) {
    return [];
  }

  const { belongsTo, hasOne, hasMany } = relationships;

  return [
    ...new Set([
      ...(belongsTo && belongsTo.length > 0 ? belongsTo : []),
      ...(hasOne && hasOne.length > 0 ? hasOne : []),
      ...(hasMany && hasMany.length > 0 ? hasMany : []),
    ]),
  ];

  // console.log('modelName', modelName);
  // console.log('relationships', relationships);
  // console.log('allRelationshipModels', allRelationshipModels);

  // return allRelationshipModels;
  // return (

  // ).slice(0, -1);
}

export function constructSequelizeModelFromModel(model: Model): string {
  const classString = constructSequelizeModelClassStr(model);
  const fieldsString = getSequelizeFieldsString(model.fields);
  const dependentModels = constructSequelizeModelDependencies(
    model.name,
    model.relationships,
  );

  let modelImports = '';

  for (const m of dependentModels) {
    modelImports += `import { ${m} as ${m}Type } from './${m}';\n`;
  }

  const dependentModelsString =
    Array.isArray(dependentModels) && dependentModels.length > 0
      ? `${dependentModels.filter(m => m !== model.name).join(', ')},`
      : '';
  // const dependentModelsTypesStr =
  //   Array.isArray(dependentModels) && dependentModels.length > 0
  //     ? `{ ${dependentModels
  //         .map((m: string) => {
  //           return `${m}: ModelStatic<${m}Type> `;
  //         })
  //         .join(',')
  //         .slice(0, -1)} }`
  //     : `{}`;

  // console.log('dependentModelsTypesStr', dependentModelsTypesStr);
  return `import { DataTypes, Sequelize, Model, ModelStatic, Optional } from 'sequelize';


  ${getPrimitiveImports(model.fields)}
  
${classString}

export default (sequelize: Sequelize) => {
    ${model.name}.init(
      {${fieldsString}},
      {
        createdAt: 'created_date',
        indexes: [{ fields: ['id'], unique: true }],
        modelName: '${model.name}',
        sequelize,
        updatedAt: 'updated_date',
      },
    );
  
  ${
    dependentModels.length === 0
      ? ''
      : `  ${
          model.name
        }.associate =  ({ ${dependentModelsString} }: Record<string, ModelStatic<Model>>) => {${constructSequelizeModelRelationships(
          model.name,
          model.relationships,
        )}
    };`
  }
  
    return ${model.name};
  };`;
}

export async function buildSequelizeModels() {
  try {
    const MODELS_BUILD_PATH = path.join(
      path.resolve(),
      'sdk/models/dist/index.esm.js',
    );
    const BUILD_PATH = path.join(path.resolve(), 'sdk/sequelize-models/src');
    const DIST_PATH = path.join(path.resolve(), 'sdk/sequelize-models/dist');

    await fs.emptyDir(BUILD_PATH);
    await fs.emptyDir(DIST_PATH);

    // console.log('MODELS_BUILD_PATH', MODELS_BUILD_PATH);
    const Models = await import(MODELS_BUILD_PATH);

    // console.log('Models', Models);
    for (const model of Object.entries(Models as Record<string, Model>)) {
      const modelName =
        typeof model[1] === 'object' ? model[1].name : undefined;

      if (!modelName) {
        continue;
      }

      const sequelizeModel = constructSequelizeModelFromModel(model[1]);
      const fileName = `${modelName}.ts`;
      const filePath = path.join(BUILD_PATH, fileName);

      // logger.info(`Writing ${modelName}.ts Sequelize model`);

      await fs.writeFile(filePath, sequelizeModel, 'utf8');
    }

    const indexFileContent = constructModelExportIndexScript(
      Object.keys(Models).filter(model => typeof model[1] === 'object'),
      'sequelize',
    );

    // logger.info(`Writing ${BUILD_PATH}/index.ts`);

    await fs.writeFile(
      path.join(BUILD_PATH, 'index.ts'),
      indexFileContent,
      'utf8',
    );
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
