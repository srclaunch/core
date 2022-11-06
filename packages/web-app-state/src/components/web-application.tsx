import { HttpClient } from '@srclaunch/http-client';
import { ThemeProvider } from '@srclaunch/themes';
import { Route, RouteRole } from '@srclaunch/types';
import { memo, ReactElement, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { matchPath, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { RootState, useSelector } from '../';

type WebApplicationProperties = {
  readonly actions?: Record<
    string,
    (...arguments_: readonly unknown[]) => unknown
  >;
  readonly authentication?: boolean;
  readonly httpClient?: typeof HttpClient;
  readonly store?: RootState;
};

export const WebApplication = ({
  actions,
  authentication = false,
  httpClient,
  store,
  ...props
}: WebApplicationProperties): ReactElement => {
  const [loginRequired, setLoginRequired] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const inProgress = useSelector(
    (state: RootState) => state.user.authentication.login.inProgress,
  );
  const loggedIn = useSelector(
    (state: RootState) => state.user.authentication.state.loggedIn,
  );
  const routes: Route[] = useSelector(
    (state: RootState) => state.app.routes.list,
  );
  const indexPagePath =
    routes.find(r => r.role === RouteRole.Index)?.path ?? '/';
  const loginPagePath =
    routes.find(r => r.role === RouteRole.Login)?.path ?? 'login';

  const checkAuth = () => {
    for (const route of routes) {
      const routePath = route?.path ?? '';
      const match = matchPath(route?.path ?? '', location.pathname);

      if (match) {
        setLoginRequired(route?.loginRequired ?? false);
      }

      if (
        loginPagePath &&
        match &&
        routePath === loginPagePath &&
        loggedIn &&
        !inProgress
      ) {
        navigate(indexPagePath);
      } else if (
        loginPagePath &&
        routePath !== loginPagePath &&
        match &&
        route.loginRequired &&
        !loggedIn &&
        !inProgress
      ) {
        navigate(loginPagePath);
      }
    }
  };

  useEffect(() => {
    if (authentication) checkAuth();
  }, [location.pathname]);

  useEffect(() => {
    if (authentication) checkAuth();
  }, [loggedIn]);

  useEffect(() => {
    if (authentication) checkAuth();
  }, [inProgress]);

  useEffect(() => {
    if (authentication) checkAuth();
  }, []);

  const { current, list } = useSelector((state: RootState) => state.ui.themes);
  const loginCondition = authentication
    ? (loggedIn && (loginRequired || !loginRequired)) ||
      (!loggedIn && !loginRequired)
    : true;

  const showOutlet = !inProgress && loginCondition;

  return (
    <ThemeProvider theme={current} themes={list} {...props}>
      {showOutlet && <Outlet />}
    </ThemeProvider>
  );
};
