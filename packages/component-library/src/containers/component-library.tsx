import {
  ComponentLibraryDocumentationConfig,
  ComponentSpec,
  MenuItem,
} from '@srclaunch/types';
import {
  RootState,
  useLocation,
  useMatch,
  useSelector,
} from '@srclaunch/web-app';
import React, {
  memo,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from 'react';

import { DocumentationLayout } from '../layouts/documentation';

// import config from '../state/config';

export const ComponentLibrary = () => {
  const location = useLocation();
  const config = useSelector(
    (state: RootState) =>
      state.libraryConfig.config as ComponentLibraryDocumentationConfig,
  );
  const [matchingRoute, setMatchingRoute] = useState<ComponentSpec | null>(
    null,
  );
  const [navigationMenu, setNavigationMenu] = useState<MenuItem[]>([]);
  const [Component, setComponent] = useState<React.ElementType>();

  console.log('conffffiiig', config);
  // const routes = getRoutes();
  const getNavigationMenu = async () => {
    const topLevelCategories = [
      ...new Set(
        config.components?.map(category => category.hierarchy[0] as string) ??
          [],
      ),
    ];

    console.log('topLevelCategories', topLevelCategories);

    setNavigationMenu(
      topLevelCategories?.map(category => ({
        label: category
          .toLowerCase()
          .replace(/(^| )(\w)/g, s => s.toUpperCase()),
        to: `${config.basePath}/${category}`,
      })) ?? [],
    );
  };

  const getComponent = async () => {
    if (matchingRoute) {
      const comp = await import(
        `${matchingRoute.file.path}/${matchingRoute.file.name}`
      );
      setComponent(comp[matchingRoute.name]);
    }
  };

  useEffect(() => {
    getComponent();
  }, [matchingRoute]);

  useEffect(() => {
    setMatchingRoute(
      config.components?.find((component: ComponentSpec) => {
        const string_ = `${config.basePath ?? ''}/${component.hierarchy.join(
          '/',
        )}/${component.file.name.split('.tsx')[0]}`;

        return string_ === location.pathname;
      }) as ComponentSpec,
    );

    getNavigationMenu();
  }, [location]);

  console.log('matchingRoute', matchingRoute);

  // const getBreadcrumbItems = (): { label?: string; path?: string }[] => {
  //   let constructedPath = '';
  //   let items: { label?: string; path?: string }[] = [];
  //   const urlParts = location.pathname.split('/');

  //   if (urlParts?.length === 2) {
  //     const route = routes.find(route => route.path === `/${urlParts[1]}`);

  //     if (route) {
  //       const matchingRoute = route.path === matchedRoute.path;

  //       items = [
  //         {
  //           label: route?.name ?? route?.title,
  //           path: !matchingRoute ? route.path : undefined,
  //         },
  //       ];
  //     }
  //   } else if (urlParts && urlParts?.length > 2) {
  //     for (const part of urlParts) {
  //       const indexPart = part === '';

  //       if (!indexPart) {
  //         constructedPath += part.includes('/') ? part : `/${part}`;

  //         const route = routes.find(route => route.path === constructedPath);

  //         if (route) {
  //           const matchingRoute = route.path === matchedRoute.path;

  //           items = [
  //             ...items,
  //             {
  //               label: route.name ?? route.title,
  //               path: !matchingRoute ? route.path : undefined,
  //             },
  //           ];
  //         }
  //       }
  //     }
  //   }

  //   return items;
  // };

  console.log('navigationMenu', navigationMenu);
  return (
    <DocumentationLayout menu={[...navigationMenu]} title={config.name}>
      {Component && <Component />}
    </DocumentationLayout>
  );
};
