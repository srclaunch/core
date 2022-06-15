import { Route, RouteRole } from '@srclaunch/types';
import { RouterView } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import componentLibrary from './component-library';
import { ComponentPage } from './pages/Component';
import { ComponentCategoryPage } from './pages/ComponentCategory';
import { Introduction } from './pages/Introduction';
import { PageNotFound } from './pages/PageNotFound';
// import { LinearGauge, RadialGauge } from '../../dist';
import { Component } from './types/component';

export const getRoutes = (
  components?: readonly Component[],
): readonly Component[] => {
  if (!components || components.length === 0) {
    return [];
  }

  let routes: Component[] = [];

  for (const component of components) {
    routes = [
      ...routes,
      {
        ...component,
      },
    ];

    if (component.components) {
      routes = [...routes, ...getRoutes(component.components)];
    }
  }

  return routes;
};

export const ComponentLibraryPage = memo((): ReactElement => {
  const routes = getRoutes(componentLibrary.components);

  return (
    <RouterView
      routes={[
        ...routes.map(route => ({
          component: route.component ? ComponentPage : ComponentCategoryPage,
          path: route.path,
        })),
        {
          component: PageNotFound,
          path: '*',
          role: RouteRole.PageNotFound,
        },
      ]}
    />
  );
});

export default [
  {
    component: ComponentLibraryPage,
    path: '*',
  },
  {
    component: Introduction,
    role: RouteRole.Index,
  },
] as readonly Route[];
