import {
  configureStore,
  Middleware,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { HttpClient } from '@srclaunch/http-client';
import {
  EnvironmentType,
  Model,
  ModelProps,
  Route as RouteType,
  RouteRole,
  WebApplicationOptions,
} from '@srclaunch/types';
import { getEnvironment } from '@srclaunch/web-environment';
import { createBrowserHistory } from 'history';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { WebApplication } from './components/web-application';
import { createMiddleware } from './middleware/index';
import { createRootReducer } from './state';
import { setConfig } from './state/app/config';
import { setRoutes } from './state/app/routes';
import { addThemes, setTheme } from './state/ui/themes';
import { refreshSession } from './state/user/authentication/login';
import { RootState } from './types';

const environment = getEnvironment();

export const history = createBrowserHistory();

export const createStore = ({
  models,
  reducers,
  middleware = [],
}: {
  readonly middleware?: readonly Middleware[];
  readonly models?: Record<string, ModelProps<Model>>;
  readonly reducers?: ReducersMapObject;
}) =>
  configureStore({
    devTools:
      environment.type === EnvironmentType.Development ||
      environment.type === EnvironmentType.CI,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      ...createMiddleware(history, middleware),
    ],
    reducer: createRootReducer({ models, reducers }),
  });

export const renderReduxWebApp = async ({
  actions,
  authentication = false,
  options,
  httpClient,
  routes,
  store,
}: {
  readonly actions?: Record<
    string,
    (...arguments_: readonly unknown[]) => unknown
  >;
  readonly authentication?: boolean;
  readonly httpClient?: typeof HttpClient;
  readonly options?: WebApplicationOptions;
  readonly routes: readonly RouteType[];
  readonly store: RootState;
}): Promise<void> => {
  await store.dispatch(setConfig(options));

  if (options?.ui?.themes) {
    await store.dispatch(addThemes(options.ui.themes));
    await store.dispatch(setTheme(options.ui.themes[0]));
  }

  await store.dispatch(
    setRoutes(routes.map(({ component, ...route }) => ({ ...route }))),
  );

  if (authentication) {
    await store.dispatch(refreshSession());
  }

  ReactDOMClient.createRoot(document.querySelector('#root')!).render(
    <StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" element={<WebApplication />}>
              {routes.map((route, k: number) => {
                if (!route.component) return;

                const Component = route.component;

                if (route.role === RouteRole.Index) {
                  return (
                    <Route
                      index
                      element={
                        <Component actions={actions} httpClient={httpClient} />
                      }
                      key={k}
                    />
                  );
                }

                if (route.path) {
                  return (
                    <Route
                      element={
                        <Component actions={actions} httpClient={httpClient} />
                      }
                      key={k}
                      path={route.path}
                    />
                  );
                }

                return (
                  <Route
                    element={
                      <route.component
                        actions={actions}
                        httpClient={httpClient}
                      />
                    }
                    key={k}
                  />
                );
              })}
            </Route>
          </Routes>
        </Router>
      </Provider>
    </StrictMode>,
  );
};

export { RouterView } from './components/router-view';
export { WebApplication } from './components/web-application';
export { useAppDispatch as useDispatch } from './hooks/use-dispatch';
export { useAppSelector as useSelector } from './hooks/use-selector';
export { hideModelPanel, showModelPanel } from './state/models/index';
export { closeModal, showModal } from './state/ui/modals';
export { addToastNotification } from './state/ui/notifications';
export { addThemes, setTheme } from './state/ui/themes';
export {
  login,
  logout,
  refreshSession,
} from './state/user/authentication/login';
export { signUp } from './state/user/authentication/signup';
export { checkUsernameAvailability } from './state/user/authentication/username-availability';
export { resendVerificationCode } from './state/user/authentication/verification/code/resend';
export { getVerificationDetails } from './state/user/authentication/verification/code/status';
export { verifyCode } from './state/user/authentication/verification/code/verify';
export {
  deletePaymentMethod,
  getPaymentMethods,
} from './state/user/payment-methods';
export { getSubscriptions } from './state/user/subscriptions';
export { createStore as store };
export * from './types';
export { createSlice } from '@reduxjs/toolkit';
export { Provider } from 'react-redux';
export { matchPath, matchRoutes } from 'react-router';
export {
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Router,
  Routes,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useResolvedPath,
  useSearchParams,
} from 'react-router-dom';
