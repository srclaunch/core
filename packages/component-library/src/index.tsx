import { ComponentLibraryDocumentationConfig } from '@srclaunch/types';
import { createStore, renderReduxWebApp } from '@srclaunch/web-app';

import { ComponentLibrary } from './containers/component-library';
import reducers from './state/index';
import { setConfig } from './state/library-config';

export async function renderComponentLibrary(
  config?: ComponentLibraryDocumentationConfig,
) {
  const store = createStore({
    reducers,
  });

  if (config) {
    await store.dispatch(setConfig(config));
  }

  await renderReduxWebApp({
    authentication: false,
    options: config,
    routes: [
      {
        component: ComponentLibrary,
        path: '*',
      },
    ],
    store,
  });
}
