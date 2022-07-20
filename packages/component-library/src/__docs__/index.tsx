import { createStore, renderReduxWebApp } from '@srclaunch/web-app';

// import routes from '../../../ts-docs/src/__docs__/routes';
import reducers from './state/index';

const init = async () => {
  const store = createStore({
    reducers,
  });

  renderReduxWebApp({
    authentication: false,
    options: {},
    routes: [],
    store,
  });
};

export default init();
