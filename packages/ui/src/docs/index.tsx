import { AppLabLightTheme } from '@srclaunch/themes';
import { WebApplicationConfiguration } from '@srclaunch/types';
import {
  createStore,
  renderReduxWebApp,
} from '@srclaunch/web-application-state';
import React from 'react';

import { WebApplication } from '../components/containers/WebApplication';
import routes from './routes';
import reducers from './state/index';

console.log('React', React);
const config: WebApplicationConfiguration = {
  ui: {
    themes: {
      default: AppLabLightTheme.id,
    },
  },
};

const store = createStore({
  // @ts-ignore
  reducers,
});

console.log('routes', routes);
renderReduxWebApp({
  authentication: false,
  config,
  container: <WebApplication />,
  // @ts-ignore
  routes,
  store,
});
