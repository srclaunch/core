import { PropsWithChildren, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../types';

type ProtectedRouteProperties = PropsWithChildren<{}>;

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProperties): ReactElement => {
  const loggedIn = useSelector(
    (state: RootState) => state.authentication.loggedIn,
  );

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
