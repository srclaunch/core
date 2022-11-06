import {
  ComponentLibraryDocumentationConfig,
  ComponentSpec,
  Route,
  RouteRole,
} from '@srclaunch/types';
// import { LinearGauge, RadialGauge } from '../../dist';
// import { ComponentSpec } from '@srclaunch/types';
import { RouterView } from '@srclaunch/web-app-state';
import { memo, ReactElement, useEffect, useState } from 'react';

import { ComponentCategoryPage } from '../../../api-docs/src/pages/component-category';
import projectConfig from '../../../ui/.srclaunchrc';
import componentLibrary from './components.json';
import { ComponentPage } from './pages/component';
import { Introduction } from './pages/introduction';
import { PageNotFound } from './pages/page-not-found';

const config = componentLibrary as ComponentLibraryDocumentationConfig;
// export const getRoutes = (
//   components?: readonly Component[],
// ): readonly Component[] => {
//   if (!components || components.length === 0) {
//     return [];
//   }

//   let routes: Component[] = [];

//   for (const component of components) {
//     routes = [
//       ...routes,
//       {
//         ...component,
//       },
//     ];

//     if (component.components) {
//       routes = [...routes, ...getRoutes(component.components)];
//     }
//   }

//   return routes;
// };

export async function getRoutes(): Promise<ReadonlyArray<Route>> {
  let routes: Route[] = [];

  if (!config.components) {
    return routes;
  }

  // console.log('global', global);

  for (const component of config.components) {
    // console.log('import.meta', import.meta);
    if (import.meta?.resolve) {
      // console.log(import.meta.resolve(component.file.path));
    }

    const module = await import(
      `${component.file.path}/${component.file.name}`
    );

    const ReactComponent = module[component.name];

    routes = [
      ...routes,
      {
        component: ReactComponent,
        path: `${
          projectConfig.documentation?.basePath ?? ''
        }/${component.hierarchy.join('/')}/${
          component.file.name.split('.tsx')[0]
        }`,
      },
    ];
  }

  return routes;
}

export const ComponentLibraryPage = memo((): ReactElement => {
  const [routes, setRoutes] = useState<Route[]>([]);

  const getComponentRoutes = async (): Promise<void> => {
    if (config) {
      const rts = await getRoutes();

      setRoutes(
        rts.map(r => ({
          ...r,
          path: `${config.basePath ?? ''}${r.path}`,
        })) as Route[],
      );
    }
  };

  useEffect(() => {
    getComponentRoutes();
  }, []);

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
        { component: Introduction, path: '/' },
      ]}
    />
  );
});

export default [
  {
    component: ComponentLibraryPage,
    path: '*',
  },
] as readonly Route[];
