import { WorkspaceConfig } from './packages/types';

export default <WorkspaceConfig>{
  exceptionsDir: 'exceptions',
  mediaDir: 'media',
  modelsDir: 'models',
  name: 'SrcLaunch',
  projects: {
    'srclaunch-web-app': {
      path: 'apps/srclaunch-web-app',
      repository: '',
    },
  },
  typesDir: 'types',
};
