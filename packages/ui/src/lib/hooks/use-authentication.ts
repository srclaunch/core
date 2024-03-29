import { Route, RouteRole } from '@srclaunch/types';
import { RootState, useSelector } from '@srclaunch/web-app-state';
import { useEffect, useState } from 'react';
import {
  matchPath,
  useLocation,
  useMatch,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';

export function useAuthentication({
  enabled = true,
  redirect = true,
}: {
  readonly enabled?: boolean;
  readonly redirect?: boolean;
}) {
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
        !inProgress &&
        redirect
      ) {
        navigate(indexPagePath);
      } else if (
        loginPagePath &&
        routePath !== loginPagePath &&
        match &&
        route.loginRequired &&
        !loggedIn &&
        !inProgress &&
        redirect
      ) {
        navigate(loginPagePath);
      }
    }
  };

  useEffect(() => {
    if (enabled) checkAuth();
  }, [location.pathname]);

  useEffect(() => {
    if (enabled) checkAuth();
  }, [loggedIn]);

  useEffect(() => {
    if (enabled) checkAuth();
  }, [inProgress]);

  useEffect(() => {
    if (enabled) checkAuth();
  }, []);

  return {
    inProgress,
    loggedIn,
    loginRequired,
  };
}
