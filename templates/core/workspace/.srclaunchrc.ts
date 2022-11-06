import { WorkspaceConfig } from './packages/types';



export default <WorkspaceConfig>{
  exceptionsDir: 'exceptions',
  mediaDir: 'media',
  modelsDir: 'models',
  name: 'SrcLaunch',
  projects: {
    'srclaunch-web-app': {
      name: '@srclaunch/srclaunch-erroriq-web-app',
      path: 'apps/srclaunch-web-app',
      repository: '',
    },
  },
  sdk: {
    coreApi: {
      name: '@srclaunch/core-api-sdk',
      path: 'sdk/core-api',
    },
    dataClient: {
      name: '@srclaunch/data-client-sdk',
      path: 'sdk/data-client',
    },
    exceptions: {
      name: '@srclaunch/exceptions-sdk',
      path: 'sdk/exceptions',
    },
    httpClient: {
      name: '@srclaunch/http-client-sdk',
      path: 'sdk/http-client',
    },
    models: {
      name: '@srclaunch/models-sdk',
      path: 'sdk/models',
    },
    reduxStore: {
      name: '@srclaunch/redux-store-sdk',
      path: 'sdk/redux-store',
    },
    rtkQueryApi: {
      name: '@srclaunch/rtk-query-api-sdk',
      path: 'sdk/rtk-query-api',
    },
    rtkSlices: {
      name: '@srclaunch/rtk-slices-sdk',
      path: 'sdk/rtk-slices',
    },
    sequelizeModels: {
      name: '@srclaunch/sequelize-models-sdk',
      path: 'sdk/sequelize-models',
    },
    types: {
      name: '@srclaunch/types-sdk',
      path: 'sdk/types',
    },
  },
  coreApi: {
    name: 'core-api',
    path: 'sdk/core-api',
    environments: {
      development: {
        host: 'localhost',
        port: 3000,
        protocol: 'http',
      },
    }
  },
  typesDir: 'types',
};
