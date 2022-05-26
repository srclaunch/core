import { memo, ReactElement, useEffect, useState } from 'react';
import { useMatch, useLocation } from '@srclaunch/web-application-state';
import {
  AlignVertical,
  AlignHorizontal,
  Fill,
  Amount,
  BackgroundColors,
  BorderColors,
  BreadcrumbNavigation,
  Container,
  Depth,
  Heading,
  LineBreak,
  NavigationLink,
  Paragraph,
  RouterView,
  Sizes,
  Title,
  TextSize,
  UnorderedList,
  Workspace,
} from '@srclaunch/ui';
import { Documentation } from '../layouts/Documentation';
import iconLibrary from '../icon-library';
import { getRoutes } from '../routes';

import { Icon } from '../types/icon';

export const Iconset = memo((): ReactElement => {
  const location = useLocation();
  const [routes, setRoutes ] = useState<Icon[]>([]);

  useEffect(() => {
    getRouteIcons();
   }, [])
   
  const getRouteIcons = async () => {
    const r = await getRoutes(iconLibrary.icons);
    setRoutes(r);
  }

  const matchedRoute = routes.find(
    route => route.path === location.pathname,
  ) as Icon;

  const getBreadcrumbItems = (): { label?: string; path?: string }[] => {
    let constructedPath = '';
    let items: { label?: string; path?: string }[] = [];
    const urlParts = location.pathname.split('/');

    if (urlParts?.length === 2) {
      const route = routes.find(route => route.path === `/${urlParts[1]}`);

      if (route) {
        const matchingRoute = route.path === matchedRoute.path;

        items = [
          {
            label: route?.name ?? route?.title,
            path: !matchingRoute ? route.path : undefined,
          },
        ];
      }
    } else if (urlParts && urlParts?.length > 2) {
      for (const part of urlParts) {
        const indexPart = part === '';

        if (!indexPart) {
          constructedPath += part.includes('/') ? part : `/${part}`;

          const route = routes.find(route => route.path === constructedPath);

          if (route) {
            const matchingRoute = route.path === matchedRoute.path;

            items = [
              ...items,
              {
                label: route.name ?? route.title,
                path: !matchingRoute ? route.path : undefined,
              },
            ];
          }
        }
      }
    }

    return items;
  };

  return (
    <Workspace
      header={{
        title: (
          <Container
            alignment={{
              fill: Fill.Horizontal,
              horizontal: AlignHorizontal.Left,
            }}
          >
            <BreadcrumbNavigation
              items={getBreadcrumbItems()}
              textSize={TextSize.Large}
            />
          </Container>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title={`${matchedRoute?.title} - ${iconLibrary.name}`}
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Less }}
        padding={{ all: Amount.All }}
      >
        <Title textSize={TextSize.Largest}>{matchedRoute?.title}</Title>

        <Paragraph>{matchedRoute?.description}</Paragraph>

        <LineBreak
          border={{
            bottom: {
              color: BorderColors.Default,
            },
          }}
          margin={{
            bottom: Amount.All,
          }}
          size={{
            height: Sizes.Default,
          }}
        />

        {matchedRoute?.icons && (
          <>
            <Heading margin={{ bottom: Amount.Less }}>Icons</Heading>
            <UnorderedList
              items={matchedRoute?.icons.map((component: Icon) => (
                <NavigationLink to={component.path} label={component.title} />
              ))}
            />
          </>
        )}
      </Container>
    </Workspace>
  );
});
