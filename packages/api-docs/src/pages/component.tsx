import {
  ComponentLibraryDocumentationConfig,
  ComponentSpec,
} from '@srclaunch/types';
import { useLocation, useMatch } from '@srclaunch/web-app-state';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  BreadcrumbNavigation,
  // CodeBlock,
  Container,
  Fill,
  Heading,
  Label,
  LineBreak,
  NavigationLink,
  ObjectPropertiesView,
  Paragraph,
  PropertyEditor,
  // Depth,
  Shadow,
  Size,
  Tab,
  Tabs,
  TextSize,
  Title,
  UnorderedList,
  Workspace,
} from '../../index';
import componentLibrary from '../components.json';
import { getRoutes } from '../routes';

export const ComponentPage = memo(({ routes }): ReactElement => {
  const location = useLocation();
  // const routes = getRoutes();
  // const matchedRoute: ComponentSpec = routes.find(
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

  return (
    <div
    // header={{
    //   title: (
    //     <Container
    //       alignment={{
    //         horizontal: AlignHorizontal.Left,
    //       }}
    //       size={{
    //         fill: Fill.Horizontal,
    //       }}
    //     >
    //       <BreadcrumbNavigation
    //         items={getBreadcrumbItems()}
    //         textSize={TextSize.Large}
    //       />
    //     </Container>
    //   ),
    // }}
    // layout={ComponentLibrary}
    // padding={{ all: Amount.Most }}
    // title={`${matchedRoute.title} - ${componentLibrary.name}`}
    >
      <div
      // alignment={{ horizontal: AlignHorizontal.Stretch }}
      // background={{ color: BackgroundColor.Lightest }}
      // borderRadius={{ all: Amount.Less }}
      // padding={{ all: Amount.All }}
      >
        {/* <Title textSize={TextSize.Largest}>&lt;{matchedRoute.name} /&gt;</Title> */}

        {/* <Paragraph>{matchedRoute.description}</Paragraph> */}

        <LineBreak
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
        />
        {/* 
        {matchedRoute?.components && (
          <Container
            margin={{
              bottom: Amount.All,
            }}
          >
            <Heading textSize={TextSize.Larger}>Components</Heading>

            <LineBreak size={{ height: Size.Smaller }} />

            <UnorderedList
              items={matchedRoute?.components.map(
                (component: ComponentSpec) => (
                  <NavigationLink to={component.path} label={component.title} />
                ),
              )}
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

            <LineBreak size={{ height: Size.Smaller }} />

            <ObjectPropertiesView properties={matchedRoute?.properties} />
          </Container>
        )} */}

        {/* {matchedRoute?.examples && (
          <Container>
            <Heading
              margin={{ bottom: Amount.Default }}
              textSize={TextSize.Larger}
            >
              Examples
            </Heading>
            {/* 
            <Container>
              {matchedRoute.examples.map(
                (
                  {
                    code,
                    description,
                    properties,
                    render: RenderComponent,
                    title,
                  },
                  key,
                ) => (
                  <Container
                    className="component-example"
                    key={key}
                    margin={{ bottom: Amount.Default }}
                  >
                    <Heading textSize={TextSize.Default}>{title}</Heading>

                    {description && <Paragraph>{description}</Paragraph>}

                    <LineBreak size={{ height: Size.Smaller }} />

                    {matchedRoute.component && (
                      <Container
                        className="component-example-preview"
                        key={key}
                      >
                        <Container
                          alignment={{
                            horizontal: AlignHorizontal.Stretch,
                            vertical: AlignVertical.Stretch,
                          }}
                          background={{ color: BackgroundColor.Lighter }}
                          borderRadius={{ all: Amount.Least }}
                          className="component-example-container"
                          margin={{ bottom: Amount.Default }}
                          padding={{ all: Amount.All }}
                          shadow={Shadow.Low}
                          size={{
                            fill: Fill.Both,
                          }}
                        >
                          {RenderComponent ? (
                            <RenderComponent />
                          ) : (
                            <matchedRoute.component {...properties} />
                          )}
                        </Container>

                        <Tabs>
                          <Tab label="Properties">
                            {!properties ? (
                              <Label
                                alignment={{
                                  horizontal: AlignHorizontal.Center,
                                }}
                                background={{
                                  color: BackgroundColor.Lightest,
                                }}
                                borderRadius={{ all: Amount.Least }}
                                padding={{ all: Amount.Less }}
                                shadow={Shadow.Low}
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
                          color: BorderColor.Lighter,
                        },
                      }}
                      margin={{
                        bottom: Amount.All,
                        top: Amount.All,
                      }}
                      size={{
                        height: Size.Default,
                      }}
                    />
                  </Container>
                ),
              )}
            </Container> 
          </Container>
                    )} */}
      </div>
    </div>
  );
});
