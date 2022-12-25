// import { getConfig } from '@srclaunch/config';
// import {
//   ComponentLibraryConfig,
//   ComponentLibraryDocumentationConfig,
// } from '@srclaunch/types';
import { renderDocumentation } from '@srclaunch/docs';

import config from '../../.srclaunchrc';

renderDocumentation(config.documentation);
