import { AppLabLightTheme } from '@srclaunch/themes';
import { WebAppConfig, WebAppOptions } from '@srclaunch/types';
import {
  createStore,
  renderReduxWebApp,
} from '@srclaunch/web-application-state';

import { WebApplication } from '../../src/components/containers/WebApplication';
import routes from './routes';
import reducers from './state/index';

const options: WebAppOptions = {
  basePath: '/ui',
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
  container: <WebApplication />,
  options,
  // @ts-ignore
  routes,
  store,
});
