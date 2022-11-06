// import { httpClient } from '@azorakapp/azorak-applab-http-client';
// import * as reduxState from '@azorakapp/azorak-applab-redux-state';
// import { HttpClient } from '@srclaunch/http-client';
// import { AppLabDarkTheme } from '@srclaunch/themes';
// import { WebAppConfig } from '@srclaunch/types';
import { createStore, renderReduxWebApp } from '@srclaunch/web-app-state';

// import { AppLabDarkTheme } from '@srclaunch/themes';
// import * as Models from '@azorakapp/azorak-applab-models';
// import coreState from '@azorakapp/azorak-applab-redux-state';
import routes from './routes';
import reducers from './state/index';

// const config: WebAppConfig = {
//   aws: {
//     cognito: {
//       identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID?.toString(),
//       userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID?.toString(),
//       userPoolId: import.meta.env.VITE_USER_POOL_ID?.toString(),
//     },
//     region: import.meta.env.VITE_AWS_REGION?.toString(),
//   },
//   ui: {
//     themes: {
//       default: AppLabDarkTheme.id,
//     },
//   },
// };

export const store = createStore({
  // models: Models,
  reducers: {
    ...reducers,
    // ...coreState
  },
});

// const { default: defaultExport, ...actions } = reduxState;
const init = async () => {
  await renderReduxWebApp({
    authentication: false,
    // container: (
    //   // <Compo />
    //   <WebApplication
    //     authentication={false}
    //     // @ts-ignore
    //     // actions={actions}
    //     // @ts-ignore
    //     // httpClient={httpClient}
    //   />
    // ),
    // httpClient: httpClient as unknown as typeof HttpClient,
    // config,
    routes,
    store,
  });
};

export default init();
