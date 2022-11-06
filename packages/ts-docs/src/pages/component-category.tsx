// import { ComponentSpec } from '@srclaunch/types';
// import {
//   AlignHorizontal,
//   Amount,
//   BackgroundColor,
//   BorderColor,
//   BreadcrumbNavigation,
//   Container,
//   Fill,
//   Heading,
//   LineBreak,
//   NavigationLink,
//   Paragraph,
//   Size,
//   TextSize,
//   Title,
//   UnorderedList,
//   Workspace,
// } from '@srclaunch/ui';
// import {
//   RouterView,
//   useLocation,
//   useMatch,
// } from '@srclaunch/web-app-state';
import { memo, ReactElement } from 'react';

// import { getRoutes } from '../__docs__/routes';
// import componentLibrary from '../component-library';
import { Documentation } from '../layouts/documentation';

export const ComponentCategoryPage = memo((): ReactElement => {
  // const location = useLocation();
  // const routes = getRoutes(componentLibrary.components);
  // const matchedRoute = routes.find(
  //   route => route.path === location.pathname,
  // ) as ComponentSpec;

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

  return <>d</>;
  // return (
  // <Workspace
  //   header={{
  //     title: (
  //       <Container
  //         alignment={{
  //           horizontal: AlignHorizontal.Left,
  //         }}
  //         size={{
  //           fill: Fill.Horizontal,
  //         }}
  //       >
  //         {/* <BreadcrumbNavigation
  //           items={getBreadcrumbItems()}
  //           textSize={TextSize.Large}
  //         /> */}
  //       </Container>
  //     ),
  //   }}
  //   layout={Documentation}
  //   padding={{ all: Amount.Most }}
  //   // title={`${matchedRoute.title} - ${componentLibrary.name}`}
  // >
  // <Container
  //   background={{ color: BackgroundColor.Lightest }}
  //   borderRadius={{ all: Amount.Less }}
  //   padding={{ all: Amount.All }}
  // >
  {
    /* <Title textSize={TextSize.Largest}>{matchedRoute.title}</Title> */
  }

  {
    /* <Paragraph>{matchedRoute.description}</Paragraph> */
  }

  {
    /* <LineBreak
          border={{
            bottom: {
              color: BorderColor.Default,
            },
          }}
          margin={{
            bottom: Amount.All,
          }}
          size={{
            height: Size.Default,
          }}
        /> */
  }

  {
    /* {matchedRoute?.components && (
          <>
            <Heading margin={{ bottom: Amount.Less }}>Components</Heading>
            <UnorderedList
              items={matchedRoute?.components.map(
                (component: ComponentSpec) => (
                  <NavigationLink to={component.path} label={component.title} />
                ),
              )}
            />
                </>*/
  }

  // </Container>
  // </Workspace>
  // );
});
