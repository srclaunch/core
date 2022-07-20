import { Route as RouteType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import { Route, Router, Routes } from 'react-router-dom';

export type RouterViewProps = {
  readonly routes: readonly RouteType[];
};

export const RouterView = memo(
  ({ routes = [], ...props }: RouterViewProps): ReactElement => {
    return (
      <Routes>
        {routes.map((route, key) => {
          return (
            <Route
              element={<route.component />}
              path={route.path}
              key={key}
              {...route}
            />
          );
        })}
      </Routes>
    );
  },
);
