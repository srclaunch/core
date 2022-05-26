import { memo, ReactElement, useEffect, useState } from 'react';
import { useMatch, useLocation } from '@srclaunch/web-application-state';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BreadcrumbNavigation,
  CodeBlock,
  Container,
  Depth,
  DepthShadow,
  Fill,
  Heading,
  NavigationLink,
  PropertyEditor,
  ObjectPropertiesView,
  Label,
  LineBreak,
  Paragraph,
  Sizes,
  Tab,
  Tabs,
  TextSize,
  Title,
  UnorderedList,
  Workspace,
} from '@srclaunch/ui';
import { Documentation } from '../layouts/Documentation';
import iconLibrary from '../icon-library';
import { getRoutes } from '../routes';

import { Icon } from '../types/icon';

export const IconPage = memo((): ReactElement => {
  const location = useLocation();
  const [routes, setRoutes ] = useState<Icon[]>([]);
 
  useEffect(() => {
    getRouteIcons();
   }, []);
   
  const getRouteIcons = async () => {
    const r = await getRoutes(iconLibrary.icons);
    setRoutes(r);
  };


  const matchedRoute = routes?.find(
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
        alignment={{ horizontal: AlignHorizontal.Stretch }}
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Less }}
        padding={{ all: Amount.All }}
      >
        <Title textSize={TextSize.Largest}>
          &lt;{matchedRoute?.title} /&gt;
        </Title>

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
          <Container
            margin={{
              bottom: Amount.All,
            }}
          >
            <Heading textSize={TextSize.Larger}>Icons</Heading>

            <LineBreak size={{ height: Sizes.Smaller }} />

            <UnorderedList
              items={matchedRoute?.icons.map((component: Icon) => (
                <NavigationLink to={component.path} label={component.title} />
              ))}
            />
          </Container>
        )}

        {matchedRoute?.properties && (
          <Container
            margin={{
              bottom: Amount.All,
            }}
          >
            <Heading textSize={TextSize.Larger}>Properties</Heading>

            <LineBreak size={{ height: Sizes.Smaller }} />

            <ObjectPropertiesView properties={matchedRoute?.properties} />
          </Container>
        )}

        {matchedRoute?.examples && (
          <Container>
            <Heading
              margin={{ bottom: Amount.Default }}
              textSize={TextSize.Larger}
            >
              Examples
            </Heading>

            <Container>
              {matchedRoute?.examples.map(
                ({ code, description, properties, title }, key) => (
                  <Container
                    className="component-example"
                    key={key}
                    margin={{ bottom: Amount.Default }}
                  >
                    <Heading textSize={TextSize.Default}>{title}</Heading>

                    {description && <Paragraph>{description}</Paragraph>}

                    <LineBreak size={{ height: Sizes.Smaller }} />

         
                    {matchedRoute.icon && (
                      <Container
                        className="icon-example-preview"
                        key={key}
                        size={{
                          minHeight: 260,
                        }}
                      >
                        <Container
                          alignment={{
                            fill: Fill.Horizontal,
                            horizontal: AlignHorizontal.Center,
                            vertical: AlignVertical.Center,
                          }}
                          background={{ color: BackgroundColors.Lighter }}
                          borderRadius={{ all: Amount.Least }}
                          className="icon-example-container"
                          depth={Depth.Higher}
                          margin={{ bottom: Amount.Default }}
                          padding={{ all: Amount.All }}
                          shadow={DepthShadow.Low}
                        >
                          <Container  
                          alignment={{
                            fill: Fill.Horizontal,
                            horizontal: AlignHorizontal.Center,
                            vertical: AlignVertical.Center,
                          }} 
                          size={{ height: Sizes.Default, width: Sizes.Default }}>
                            <matchedRoute.icon {...properties} />
                          </Container>
                        </Container>

                        <Tabs>
                          <Tab label="Properties">
                            {!properties ? (
                              <Label
                                alignment={{
                                  horizontal: AlignHorizontal.Center,
                                }}
                                background={{
                                  color: BackgroundColors.Lightest,
                                }}
                                borderRadius={{ all: Amount.Least }}
                                padding={{ all: Amount.Less }}
                                shadow={DepthShadow.Low}
                              >
                                No arguments
                              </Label>
                            ) : (
                              <PropertyEditor defaultValue={properties} />
                            )}
                          </Tab>

                          <Tab label="Code" visible={Boolean(code)}>
                            {code && <CodeBlock value={code} />}
                          </Tab>
                        </Tabs>
                      </Container>
                    )}

                    <LineBreak
                      border={{
                        bottom: {
                          color: BorderColors.Lighter,
                        },
                      }}
                      margin={{
                        bottom: Amount.All,
                        top: Amount.All,
                      }}
                      size={{
                        height: Sizes.Default,
                      }}
                    />
                  </Container>
                ),
              )}
            </Container>
          </Container>
        )}
      </Container>
    </Workspace>
  );
});
