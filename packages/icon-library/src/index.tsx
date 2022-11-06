import {
  ComponentLibraryDocumentationConfig,
  DocumentationConfig,
  DocumentationType,
} from '@srclaunch/types';
import {
  createStore,
  renderReduxWebApp,
  WebApplication,
} from '@srclaunch/web-app-state';

import { getRoutes } from './lib/routes';
import reducers from './state/index';

export async function renderDocumentation(config?: DocumentationConfig) {
  const store = createStore({
    reducers,
  });

  switch (config?.type) {
    case DocumentationType.ComponentLibrary:
      {
        const options = config as ComponentLibraryDocumentationConfig;

        if (options.components) {
          const routes = await getRoutes(options.components);

          // console.log('routes', routes);
          renderReduxWebApp({
            authentication: false,
            container: <WebApplication />,
            options,
            routes,
            store,
          });
        }
      }
      break;
  }
}
