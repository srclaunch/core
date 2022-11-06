import {
  License, ProjectConfig,
} from '@srclaunch/types';

export default <ProjectConfig>{
  name: '@srclaunch/cli',
  description:
    'Command line tools used by SrcLaunch applications and services',
  type: 'library',
  release: {
    publish: {
      access: 'public',
      license: License.MIT,
      registry: 'https://registry.npmjs.org/',
    },
  }
};
