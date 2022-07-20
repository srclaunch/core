import { renderComponentLibrary } from '@srclaunch/component-library';

// import { getConfig } from '@srclaunch/config';
// import {
//   ComponentLibraryConfig,
//   ComponentLibraryDocumentationConfig,
// } from '@srclaunch/types';
import config from '../../.srclaunchrc';

renderComponentLibrary(config.documentation);
