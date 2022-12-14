// import fs from 'fs-extra';
// import path from 'node:path';
// import { Exception } from '@srclaunch/exceptions';
import { BuildFormat, Platform, WorkspaceConfig } from '@srclaunch/types';
import path from 'node:path';
import ora from 'ora';

import { build } from '../../build/esbuild';
// import { build as vite, ViteBuildOptions } from '../../build/vite';
import { build as buildTypes, TypesBuildOptions } from '../../build/types';
import { buildCoreAPI } from './outputs/core-api';
// import { cleanModels } from './clean';
import { buildHttpClient } from './outputs/http-client';
// // import { buildJSONModels } from './outputs/json';
import { buildRtkSlices } from './outputs/redux';
import { buildSequelizeModels } from './outputs/sequelize';
import { buildModelTypes } from './outputs/types';
import { copyStubModels } from './stubs/index';

export async function buildModels(config: WorkspaceConfig) {
  const spinner = ora();
  // console.info('Building Core Object dependencies...');

  console.info('Building Core Object SDKs...');

  spinner.start('Copying stub models');
  await copyStubModels();

  spinner.succeed('Stub models copied');

  spinner.start('Building `models` SDK');
  await build({
    clean: true,
    format: BuildFormat.ESM,
    input: {
      directory: 'sdk/models/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/models/dist',
      file: 'index.js',
    },
  });
  await buildTypes({
    input: {
      directory: 'sdk/models/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/models/dist',
    },
    types: {
      configPath: 'sdk/models/tsconfig.json',
    },
  });

  spinner.succeed('Built `models` SDK');

  // console.info('Creating model type definitions...');
  spinner.start('Building `types` SDK');
  await buildModelTypes();
  await build({
    clean: true,
    format: BuildFormat.ESM,
    input: {
      directory: 'sdk/types/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/types/dist',
      file: 'index.js',
    },
    platform: Platform.Browser,
  });
  await buildTypes({
    input: {
      directory: 'sdk/types/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/types/dist',
    },
    types: {
      configPath: 'sdk/types/tsconfig.json',
    },
  });
  spinner.succeed('Built `types` SDK');

  spinner.start('Creating `sequelize-models` SDK...');
  await buildSequelizeModels();
  await build({
    clean: true,
    format: BuildFormat.ESM,
    input: {
      directory: 'sdk/sequelize-models/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/sequelize-models/dist',
      file: 'index.js',
    },
    platform: Platform.Node,
  });
  await buildTypes({
    input: {
      directory: 'sdk/sequelize-models/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/sequelize-models/dist',
    },
    types: {
      configPath: 'sdk/sequelize-models/tsconfig.json',
    },
  });
  spinner.succeed('Created `sequelize-models` SDK');

  spinner.start('Building `http-client` SDK...');
  await buildHttpClient(config);
  await build({
    clean: true,
    format: BuildFormat.ESM,
    input: {
      directory: 'sdk/http-client/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/http-client/dist',
      file: 'index.js',
    },
    platform: Platform.Browser,
  });
  await buildTypes({
    input: {
      directory: 'sdk/http-client/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/http-client/dist',
    },
    types: {
      configPath: 'sdk/http-client/tsconfig.json',
    },
  });
  spinner.succeed('Built `http-client` SDK');

  // console.info('Building Redux state...');
  spinner.start('Generating `rtk-slices` SDK...');
  await buildRtkSlices(config);
  await build({
    clean: true,
    format: BuildFormat.ESM,
    input: {
      directory: 'sdk/rtk-slices/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/rtk-slices/dist',
      file: 'index.js',
    },
    platform: Platform.Browser,
  });
  await buildTypes({
    input: {
      directory: 'sdk/rtk-slices/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/rtk-slices/dist',
    },
    types: {
      configPath: 'sdk/rtk-slices/tsconfig.json',
    },
  });
  spinner.succeed('Generated `rtk-slices` SDK');

  spinner.start('Building `core-api` SDK');
  await buildCoreAPI({
    sequelizeModelsProject: config.sdk.sequelizeModels.name,
  });
  await build({
    bundle: {
      exclude: ['@srclaunch/core-api-server'],
    },
    clean: true,
    format: BuildFormat.ESM,
    input: {
      directory: 'sdk/core-api/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/core-api/dist',
      file: 'index.js',
    },
    platform: Platform.Node,
  });
  await buildTypes({
    input: {
      directory: 'sdk/core-api/src',
      file: 'index.ts',
    },
    output: {
      directory: 'sdk/core-api/dist',
    },
    types: {
      configPath: 'sdk/core-api/tsconfig.json',
    },
  });
  spinner.succeed('Built `core-api` SDK');
}
