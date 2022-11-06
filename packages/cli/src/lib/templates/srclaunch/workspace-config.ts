export const getSrcLaunchWorkspaceConfigTemplate = ({
  owner,
  name,
}: {
  readonly name: string;
  readonly owner?: string;
}) => `
import { WorkspaceConfig } from '@srclaunch/types';

export default <WorkspaceConfig>{
  name: '${name}',
  owner: '${owner}',
  projects: {},
  sdk: {
    coreApi: {
      name: '@${owner}/${name}-core-api-sdk',
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
      name: '@${owner}/${name}-data-client-sdk',
      path: 'sdk/data-client',
    },
    exceptions: {
      name: '@${owner}/${name}-exceptions-sdk',
      path: 'sdk/exceptions',
    },
    httpClient: {
      name: '@${owner}/${name}-http-client-sdk',
      path: 'sdk/http-client',
    },
    models: {
      name: '@${owner}/${name}-models-sdk',
      path: 'sdk/models',
    },
    reduxStore: {
      name: '@${owner}/${name}-redux-store-sdk',
      path: 'sdk/redux-store',
    },
    rtkQueryApi: {
      name: '@${owner}/${name}-rtk-query-api-sdk',
      path: 'sdk/rtk-query-api',
    },
    rtkSlices: {
      name: '@${owner}/${name}-rtk-slices-sdk',
      path: 'sdk/rtk-slices',
    },
    sequelizeModels: {
      name: '@${owner}/${name}-sequelize-models-sdk',
      path: 'sdk/sequelize-models',
    },
    types: {
      name: '@${owner}/${name}-types-sdk',
      path: 'sdk/types',
    },
  },
};

`;
