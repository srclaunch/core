import { Route, RouteRole } from '@srclaunch/types';
import {
  memo,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from 'react';

import { IconPage } from './pages/Icon';
import { Iconset } from './pages/Iconset';
import { Introduction } from './pages/Introduction';
import { PageNotFound } from './pages/PageNotFound';
// import { RouterView } from '@srclaunch/ui';
import iconLibrary from './theme-library';
import { Icon } from './types/icon';

export const getRoutes = async (
  icons?: readonly Icon[],
): Promise<readonly Icon[]> => {
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
      routes = [...routes, ...(await getRoutes(icon.icons))];
    }
  }

  return routes;
};

export const IconLibraryPage = memo(
  ({ children }: PropsWithChildren<{}>): ReactElement => {
    const [routes, setRoutes] = useState<readonly Icon[]>([]);

    const getRouteIcons = async () => {
      const r = await getRoutes(iconLibrary.icons);
      setRoutes(r);
    };

    useEffect(() => {
      getRouteIcons();
    }, []);

    return (
      <></>
      // <RouterView
      //   routes={[
      //     ...routes.map(route => ({
      //       component: route.icon ? IconPage : Iconset,
      //       path: route.path,
      //     })),
      //     {
      //       component: PageNotFound,
      //       path: '*',
      //       role: PageRole.PageNotFound,
      //     },
      //   ]}
      // />
    );
  },
);

export default [
  {
    component: IconLibraryPage,
    path: '*',
  },
  {
    component: Introduction,
    role: RouteRole.Index,
  },
] as readonly Route[];
