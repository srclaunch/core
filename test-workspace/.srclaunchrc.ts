
import { WorkspaceConfig } from '@srclaunch/types';

export default <WorkspaceConfig>{
  name: 'test',
  owner: 'srclaunch',
  projects: {},
  sdk: {
    coreApi: {
      name: '@srclaunch/test-core-api-sdk',
      path: 'sdk/core-api',
      environments: {
        development: {
          host: 'localhost',
          port: 3000,
          protocol: 'http',
        }
      }
    },
    dataClient: {
      name: '@srclaunch/test-data-client-sdk',
      path: 'sdk/data-client',
    },
    exceptions: {
      name: '@srclaunch/test-exceptions-sdk',
      path: 'sdk/exceptions',
    },
    httpClient: {
      name: '@srclaunch/test-http-client-sdk',
      path: 'sdk/http-client',
    },
    models: {
      name: '@srclaunch/test-models-sdk',
      path: 'sdk/models',
    },
    reduxStore: {
      name: '@srclaunch/test-redux-store-sdk',
      path: 'sdk/redux-store',
    },
    rtkQueryApi: {
      name: '@srclaunch/test-rtk-query-api-sdk',
      path: 'sdk/rtk-query-api',
    },
    rtkSlices: {
      name: '@srclaunch/test-rtk-slices-sdk',
      path: 'sdk/rtk-slices',
    },
    sequelizeModels: {
      name: '@srclaunch/test-sequelize-models-sdk',
      path: 'sdk/sequelize-models',
    },
    types: {
      name: '@srclaunch/test-types-sdk',
      path: 'sdk/types',
    },
  },
};

