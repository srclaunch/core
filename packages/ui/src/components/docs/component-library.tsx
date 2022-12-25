import {
  ComponentLibraryDocumentationConfig,
  ComponentSpec,
  MenuItem,
  Route,
} from '@srclaunch/types';
import { RootState, useLocation, useSelector } from '@srclaunch/web-app-state';
import React, { useEffect, useState } from 'react';

import { DocumentationLayout } from '../../layouts/documentation';
import { Amount, Orientation, TextSize } from '../../types';
import { Container } from '../layout';
import { Menu } from '../menus';
import { Tab, Tabs } from '../navigation';
import { SubTitle, Title } from '../typography';
import { MarkdownView } from '../views';
import { ComponentSandbox } from './component-sandbox';

// import config from '../state/config';

export const ComponentLibrary = () => {
  const location = useLocation();
  const config = useSelector(
    (state: RootState) =>
      state.libraryConfig.config as ComponentLibraryDocumentationConfig,
  );
  const [componentDoc, setComponentDoc] = useState<ComponentSpec | null>();
  const [componentMatch, setComponentMatch] = useState<ComponentSpec>();
  const [markdownMatch, setMarkdownMatch] = useState<Route>();
  const [navigationMenu, setNavigationMenu] = useState<MenuItem[]>([]);
  const [Component, setComponent] = useState<React.ElementType | null>();
  const [components, setComponents] = useState<Partial<ComponentSpec>[]>();
  const [subPaths, setSubPaths] = useState<Array<string>>();

  const getNavigationMenu = async () => {
    const topLevelCategories = [
      ...new Set(
        config.components?.map(category => category.hierarchy?.[0] as string) ??
          [],
      ),
    ].sort();

    setNavigationMenu([
      {
        label: 'Home',
        to: `${config.basePath}`,
      },
      ...(topLevelCategories?.map(category => ({
        label: category
          .toLowerCase()
          .replace(/(^| )(\w)/g, s => s.toUpperCase()),
        to: `${config.basePath}/${category}`,
      })) ?? []),
    ]);
  };

  const getComponent = async () => {
    if (componentMatch) {
      const comp = await import(
        `${componentMatch.file.path}/${componentMatch.file.name}`
      );
      setComponent(comp[componentMatch.name]);

      const document = componentMatch.docPath
        ? await import(componentMatch.docPath)
        : componentMatch;

      setComponentDoc(document);
    }
  };

  useEffect(() => {
    getComponent();
  }, [componentMatch]);

  useEffect(() => {
    setComponent(null);
    setComponentDoc(null);

    setComponentMatch(
      config.components?.find((component: Partial<ComponentSpec>) => {
        const routePath = `${config.basePath ?? ''}/${component.hierarchy?.join(
          '/',
        )}/${component.file?.name.split('.tsx')[0]}`;

        return routePath === location.pathname;
      }) as ComponentSpec,
    );

    setMarkdownMatch(
      config.routes?.find((route: Route) => {
        const routePath = `${config.basePath ?? ''}${
          route.hierarchy ? `/${route.hierarchy.join('/')}` : ''
        }`;

        return routePath === location.pathname;
      }),
    );

    setComponents(
      config.components?.filter((component: Partial<ComponentSpec>) => {
        const hierarchyPath = `${
          config.basePath ?? ''
        }/${component.hierarchy?.join('/')}`;

        return (
          hierarchyPath.includes(location.pathname) &&
          location.pathname.split('/').length ===
            hierarchyPath.split('/').length
        );
      }),
    );

    setSubPaths([
      ...new Set(
        config.components
          ?.filter(component => {
            const hierarchyPath = `${
              config.basePath ?? ''
            }/${component.hierarchy?.join('/')}`;

            if (hierarchyPath.includes(location.pathname)) {
              return true;
            }

            return false;
          })
          .map(component => {
            const hierarchyPath = `${
              config.basePath ?? ''
            }/${component.hierarchy?.join('/')}`;

            const remainingPath = hierarchyPath
              .replace(location.pathname, '')
              .slice(1);
            const pathParts = remainingPath.split('/');

            return pathParts[0] ?? '';
          })
          .filter(Boolean) ?? [],
      ),
    ]);

    getNavigationMenu();
  }, [location]);

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

  return (
    <DocumentationLayout menu={[...navigationMenu]} title={config.name}>
      {location.pathname === config.basePath ? (
        <>
          {markdownMatch && markdownMatch.markdown?.content && (
            <MarkdownView content={markdownMatch.markdown?.content} />
          )}
        </>
      ) : (
        <>
          {markdownMatch && markdownMatch.markdown?.content && (
            <MarkdownView content={markdownMatch.markdown?.content} />
          )}

          {subPaths && subPaths.length > 0 && (
            <>
              <h3>Categories</h3>

              <Menu
                orientation={Orientation.Horizontal}
                items={subPaths.map(path => ({
                  label: path,
                  to: `${location.pathname}/${path}`,
                }))}
              />
            </>
          )}

          {components && components.length > 0 && (
            <>
              <h3>Components</h3>
              <ul>
                {components.map(component => (
                  <li key={component.file?.name}>
                    <a
                      href={`${config.basePath}/${component.hierarchy?.join(
                        '/',
                      )}/${component.file?.name.split('.tsx')[0]}`}
                    >
                      {component.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {Component && (
            <>
              <Container paddingBottom={Amount.More}>
                <Title textSize={TextSize.Largest}>{componentDoc?.name}</Title>
                <SubTitle textSize={TextSize.Large}>
                  {componentDoc?.description}
                </SubTitle>
              </Container>

              <Tabs>
                <Tab label="Properties"></Tab>
                <Tab label="Examples"></Tab>
                <Tab label="Sandbox" selected>
                  <ComponentSandbox
                    component={Component}
                    componentProps={componentDoc?.props}
                  />
                </Tab>
              </Tabs>
            </>
          )}
        </>
      )}
    </DocumentationLayout>
  );
};
