import { Route as RouteType } from '@srclaunch/types';
import { Route, Router, Routes } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  DepthShadow,
  Fill,
  Overflow,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';

export type RouterViewProps = {
  readonly routes: readonly RouteType[];
} & Omit<ContainerProps, 'children'>;

export const RouterView = memo(
  ({
    alignment = {},
    className = '',
    routes = [],
    ...props
  }: RouterViewProps): ReactElement => {
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
