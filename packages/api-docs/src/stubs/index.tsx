import { getConfig } from '@srclaunch/config';
import { AppLabLightTheme } from '@srclaunch/themes';
import { WebApplicationConfig } from '@srclaunch/types';
import { createStore, renderReduxWebApp } from '@srclaunch/web-app-state';

import routes from '../__docs__/routes';
import reducers from '../__docs__/state/index';

const options: WebApplicationConfig =
  (await getConfig()) as WebApplicationConfig;

const store = createStore({
  reducers,
});

console.log('routes', routes);
renderReduxWebApp({
  authentication: false,
  // container: <WebApplication />,
  options,
  routes,
  store,
});
