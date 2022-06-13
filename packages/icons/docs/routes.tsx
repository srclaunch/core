import { PageRole, PageRoute } from '@srclaunch/types';
import { memo, ReactElement, useEffect, useState } from 'react';

import { Introduction } from './pages/Introduction';
import { PageNotFound } from './pages/PageNotFound';
import { Icon } from './types/icon';
import { Iconset } from './pages/Iconset';
import { IconPage } from './pages/Icon';
import { RouterView } from '@srclaunch/ui';
import iconLibrary from './icon-library';

export const getRoutes = async (icons?: Icon[]): Promise<Icon[]> => {
  if (!icons || icons.length === 0) {
    return [];
  }

  let routes: Icon[] = [];

  for (const icon of icons) {
    routes = [
      ...routes,
      {
        ...icon,
      },
    ];

    if (icon.icons) {
      routes = [...routes, ...await getRoutes(icon.icons)];
    }
  }

  return routes;
};

export const IconLibraryPage = memo( ({ children }): ReactElement => {
  const [routes, setRoutes] = useState<Icon[]>([])

  const getRouteIcons = async () => {
    const r = await getRoutes(iconLibrary.icons);
    setRoutes(r);
  }

  useEffect(() => {
    getRouteIcons()
  }, [])

  return (
    <RouterView
      routes={[
        ...routes.map(route => ({
          path: route.path,
          component: route.icon ? IconPage : Iconset,
        })),
        {
          component: PageNotFound,
          path: '*',
          role: PageRole.PageNotFound,
        },
      ]}
    />
  );
});

export default [
  {
    component: IconLibraryPage,
    path: '*',
  },
  {
    component: Introduction,
    role: PageRole.Index,
  },
] as PageRoute[];
