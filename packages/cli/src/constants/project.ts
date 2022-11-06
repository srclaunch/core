import { License, PackageType, PublishAccess } from '@srclaunch/types';

export const PROJECT_PACKAGE_JSON_AUTHOR =
  'Steven Bennett <steven@srclaunch.com>';
export const PROJECT_PACKAGE_JSON_LICENSE = License.MIT;
export const PROJECT_PACKAGE_JSON_PUBLISH_CONFIG = {
  access: PublishAccess,
  registry: 'https://registry.npmjs.org/',
};

export const PROJECT_PACKAGE_JSON_TYPE = PackageType.Module;
export const PROJECT_PACKAGE_JSON_MAIN = './dist/index.esm.js';
export const PROJECT_PACKAGE_JSON_TYPES = './dist/index.d.ts';
export const PROJECT_PACKAGE_JSON_FILES = ['package.json', 'dist'];
export const PROJECT_PACKAGE_JSON_MODULE = './dist/index.esm.js';
export const PROJECT_PACKAGE_JSON_COMMON_SCRIPTS = {
  yui: 'yarn upgrade-interactive',
  qr: 'yarn srclaunch changesets add --files "." --message "Quick release" --type "chore" && yarn srclaunch release --push',
};
export const PROJECT_PACKAGE_JSON_BUILD_SCRIPTS = {
  build: 'yarn srclaunch build',
};
export const PROJECT_PACKAGE_JSON_RELEASE_SCRIPTS = {
  release: 'yarn srclaunch release',
};
export const PROJECT_PACKAGE_JSON_DEV_SCRIPTS = {
  dev: 'yarn srclaunch run dev',
};
export const PROJECT_PACKAGE_JSON_PREVIEW_SCRIPTS = {
  preview: 'yarn srclaunch run preview',
};
export const PROJECT_PACKAGE_JSON_QA_SCRIPTS = {
  qa: 'yarn srclaunch run qa',
};
export const PROJECT_PACKAGE_JSON_PRODUCTION_SCRIPTS = {
  start: 'yarn srclaunch run production',
};
export const PROJECT_PACKAGE_JSON_TEST_SCRIPTS = {
  test: 'yarn srclaunch test',
  'test:watch': 'yarn srclaunch test --watch',
  'test:coverage': 'yarn srclaunch test --coverage',
};
