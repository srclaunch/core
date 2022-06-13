// import { Property as PropertyModel } from '@azorakapp/azorak-applab-models';
// import {
//   getProperties,
//   getProperty,
//   getUnits,
//   PropertySelectors,
// } from '@azorakapp/azorak-applab-redux-state';
// import { PropertyTypes, Unit } from '@azorakapp/azorak-applab-types';
import { DualLightIcons } from '@srclaunch/icons';
import { Activities, Condition, Primitives } from '@srclaunch/types';
import {
  ActivityFeed,
  Amount,
  BackgroundColors,
  BreadcrumbNavigation,
  Button,
  ButtonType,
  Container,
  DataGrid,
  Depth,
  ErrorNotification,
  Heading,
  Icon,
  Image,
  Link,
  MediaPreview,
  NavigationLink,
  Orientation,
  ProgressivePaymentStatus,
  Size,
  Sizes,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  TitleCard,
  useEntityEditor,
  UserLabel,
  Workspace,
} from '@srclaunch/ui';
import { useDispatch, useSelector } from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { store } from '../../../index';
import { WebApp } from '../../../layouts/WebApp';

export const Property = memo((): ReactElement => {
  const dispatch = useDispatch();
  const [dispatched, setDispatched] = useState(false);
  const { propertyId, unitId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { showEntityEditor } = useEntityEditor();

  const navigate = useNavigate();
  // const property = PropertySelectors.selectById(
  //   store.getState(),
  //   propertyId ?? '',
  // );
  const property = useSelector(
    (state: any) => state.properties.entities[propertyId ?? ''],
  );
  const units = useSelector((state: any) => {
    // let allUnits: Unit[] = [];
    // if (state.units && state.units.entities) {
    //   for (const [key, value] of Object.entries(
    //     state.units.entities as Record<string, Unit>,
    //   )) {
    //     if (value.PropertyId === propertyId) {
    //       allUnits = [...allUnits, value];
    //     }
    //   }
    // }
    // return allUnits;
    return [];
  });

  console.log('units', units);
  // const inProgress = useSelector(
  //   (state: any) => state.properties.action.getProperty.inProgress,
  // );

  useEffect(() => {
    if (propertyId) {
      // dispatch(getProperty(propertyId));
      // dispatch(getUnits({ filters: { PropertyId: propertyId } }));
      // setDispatched(true);
    }
  }, [propertyId]);

  console.log('property', property);

  // console.log('units', units);
  // const propertyUnits = units.filter(
  //   (u: Unit) => u.property.toString() === property?.id.toString(),
  // );

  // console.log('propertyUnits', propertyUnits);

  // const unit = propertyUnits.find((u: Unit) => u.id.toString() === unitId);

  // console.log('unit', unit);

  // const multiUnit =
  //   property?.type === PropertyTypes.Apartment ||
  //   property?.type === PropertyTypes.Duplex;

  // if (!property && !inProgress) {
  //   return (
  //     <Workspace
  //       backgroundColor={BackgroundColors.Default}
  //       depth={Depth.Low}
  //       layout={WebApp}
  //       padding={{ all: Amount.Most }}
  //       title="Property Not Found"
  //     >
  //       Property not found
  //     </Workspace>
  //   );
  // }

  return (
    <Workspace
      header={{
        actions: (
          <Button
            // alignSelf={Align.Right}
            events={{
              mouse: {
                onClick: () => {
                  if (propertyId) {
                    setSearchParams({
                      // edit: PropertyModel.name,
                      id: propertyId,
                    });
                  }
                },
              },
            }}
            type={ButtonType.Primary}
          >
            Edit
          </Button>
        ),
        title: (
          // <>
          //   <NavigationLink
          //     to={'/properties'}
          //     // hover={{
          //     //   underline: true,
          //     // }}
          //     // underline={false}
          //   >
          //     <Title
          //       textColor={TextColors.Primary}
          //       textSize={TextSize.Larger}
          //       textWeight={TextWeight.Most}
          //     >
          //       Properties
          //     </Title>
          //   </NavigationLink>

          //   <Icon
          //     name={DualLightIcons.ChevronDoubleRight}
          //     margin={{ left: Amount.Least, right: Amount.Least }}
          //     size={{
          //       height: Sizes.Smaller,
          //       width: Sizes.Smaller,
          //     }}
          //   />

          //   <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
          //     {property?.street_address}
          //   </Title>
          // </>
          <BreadcrumbNavigation
            items={[
              {
                label: 'Properties',
                path: '/properties',
              },
              {
                label: property?.street_address,
              },
            ]}
            textSize={TextSize.Larger}
          />
        ),
      }}
      layout={WebApp}
      title={property?.street_address ?? 'Address'}
    >
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
        }}
        margin={{ bottom: Amount.Most }}
      >
        <Container
          borderRadius={{ all: Amount.Most }}
          margin={{ right: Amount.Default }}
        >
          {property?.images && <MediaPreview media={property.images} />}
        </Container>
      </Container>

      <Container
        alignment={{
          orientation: Orientation.Horizontal,
        }}
        margin={{ bottom: Amount.Most }}
      >
        <TitleCard
          label="Open Service Requests"
          margin={{ right: Amount.Less }}
          value={1}
          icon={{
            name: DualLightIcons.Tool,
          }}
        />

        <TitleCard
          label="Total Service Requests"
          margin={{ right: Amount.Less }}
          value={3}
          icon={{
            name: DualLightIcons.Tool,
          }}
        />

        <TitleCard
          label="Late Payments"
          value={Math.floor(Math.random() * (15 - 0 + 1) + 0)}
          icon={{
            name: DualLightIcons.Warning,
          }}
        />
      </Container>

      <Container>
        <DataGrid
          data={units}
          columns={[
            {
              field: 'name',
              label: 'Name',
              type: Primitives.String,
            },
            {
              field: 'bedrooms',
              label: 'Bedrooms',
              type: Primitives.Number,
            },
            {
              field: 'bathrooms',
              label: 'Baths',
              type: Primitives.Number,
            },
          ]}
          header={{
            create: {
              events: {
                mouse: {
                  onClick: () => {
                    if (propertyId) {
                      showEntityEditor({
                        new: 'Unit',
                        set: {
                          PropertyId: propertyId,
                        },
                      });
                    }
                  },
                },
              },
              label: 'Create Unit',
            },
          }}
          onItemClick={unit => {
            navigate(`/properties/${propertyId}/units/${unit.id}`);
          }}
          states={{
            state: {
              loading: false,
            },
          }}
        />
      </Container>
    </Workspace>
  );
});
