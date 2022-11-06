// import analytics from '@srclaunch/analytics';
// import { PageRole } from '@srclaunch/types';
// import { push } from 'connected-react-router';
// import { useEffect } from 'react';
// import { connect } from 'react-redux';
// import Layout from '../../layouts/NotAuthenticated';
import { Route, RouteRole } from '@srclaunch/types';
import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColor,
  LoginForm,
  Page,
} from '@srclaunch/ui';
import { RootState, useSelector } from '@srclaunch/web-app-state';
import { memo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

// import { PageRole } from '@srclaunch/types';

export const Login = memo((): ReactElement => {
  const navigate = useNavigate();
  // const state = useSelector((state: RootState) => state);
  const indexRoute = useSelector((state: RootState) =>
    state.app.routes.list.find(
      (route: Route) => route.role === RouteRole.Index,
    ),
  );

  return (
    <Page
      alignHorizontal={AlignHorizontal.Center}
      alignVertical={AlignVertical.Center}
      backgroundColor={BackgroundColor.Darkest}
      padding={100}
      title="Login"
    >
      <LoginForm onLoginSuccess={() => navigate(indexRoute.path ?? '/')} />
    </Page>
  );
});
