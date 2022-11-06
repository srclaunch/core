import { ProjectConfig } from '@srclaunch/types';

import {
  PROJECT_PACKAGE_JSON_BUILD_SCRIPTS,
  PROJECT_PACKAGE_JSON_COMMON_SCRIPTS,
  PROJECT_PACKAGE_JSON_DEV_SCRIPTS,
  PROJECT_PACKAGE_JSON_PREVIEW_SCRIPTS,
  PROJECT_PACKAGE_JSON_PRODUCTION_SCRIPTS,
  PROJECT_PACKAGE_JSON_QA_SCRIPTS,
  PROJECT_PACKAGE_JSON_RELEASE_SCRIPTS,
  PROJECT_PACKAGE_JSON_TEST_SCRIPTS,
} from '../../constants/project';

export function getPackageScripts({
  build = true,
  development = true,
  release = true,
  run,
  test = true,
}: {
  readonly build?: boolean;
  readonly development?: boolean;
  readonly release?: boolean;
  readonly run?: ProjectConfig['environments'];
  readonly test?: boolean;
}): Record<string, string> {
  let scripts = {
    ...PROJECT_PACKAGE_JSON_COMMON_SCRIPTS,
  };

  if (build) {
    scripts = { ...scripts, ...PROJECT_PACKAGE_JSON_BUILD_SCRIPTS };
  }

  if (development) {
    scripts = {
      ...scripts,
      ...PROJECT_PACKAGE_JSON_DEV_SCRIPTS,
    };
  }

  if (test) {
    scripts = {
      ...scripts,
      ...PROJECT_PACKAGE_JSON_TEST_SCRIPTS,
    };
  }

  if (release) {
    scripts = {
      ...scripts,
      ...PROJECT_PACKAGE_JSON_RELEASE_SCRIPTS,
    };
  }

  if (run && run.qa) {
    scripts = {
      ...scripts,
      ...PROJECT_PACKAGE_JSON_QA_SCRIPTS,
    };
  }

  if (run && run.preview) {
    scripts = {
      ...scripts,
      ...PROJECT_PACKAGE_JSON_PREVIEW_SCRIPTS,
    };
  }

  if (run && run.production) {
    scripts = {
      ...scripts,
      ...PROJECT_PACKAGE_JSON_PRODUCTION_SCRIPTS,
    };
  }

  return scripts;
}
