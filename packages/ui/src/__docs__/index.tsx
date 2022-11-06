// import { getConfig } from '@srclaunch/config';
// import {
//   ComponentLibraryConfig,
//   ComponentLibraryDocumentationConfig,
// } from '@srclaunch/types';
import config from '../../.srclaunchrc';
import { renderComponentLibrary } from '../lib/docs';

renderComponentLibrary(config.documentation);
