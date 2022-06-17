// import {
//   // Property as PropertyModel,
//   Unit as UnitModel,
// } from '@azorakapp/azorak-applab-models';
import { BasicIcons, DualLightIcons } from '@srclaunch/icons';
import { Activities } from '@srclaunch/types';
import {
  ActivityFeed,
  AlignHorizontal,
  Amount,
  BackgroundColors,
  Button,
  ButtonType,
  Colors,
  Container,
  Depth,
  ErrorNotification,
  Heading,
  Icon,
  Image,
  Label,
  Link,
  LoadingOverlay,
  MediaPreview,
  Orientation,
  ProgressivePaymentStatus,
  Size,
  Sizes,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  TitleCard,
  UserLabel,
  Workspace,
} from '@srclaunch/ui';
import { useDispatch, useSelector } from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

// import {
//   getProperty,
//   getUnit,
//   PropertySelectors,
// } from '@azorakapp/azorak-applab-redux-state';
import { WebApp } from '../../../layouts/WebApp';

export const Listings = memo((): ReactElement => {
  const dispatch = useDispatch();
  const { propertyId, unitId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const property = useSelector(
    (state: any) => state.properties.entities[propertyId ?? ''],
  );
  const unit = useSelector((state: any) => {
    if (state.units && state.units.entities) {
      return state.units.entities[unitId ?? ''];
    }

    return;
  });

  useEffect(() => {
    if (unitId) {
      // dispatch(getProperty(propertyId));
      // dispatch(getUnit(unitId));
      // setDispatched(true);
    }
  }, [unitId]);

  // console.log('unit', unit);

  // const multiUnit =
  //   property?.type === PropertyType.Apartment ||
  //   property?.type === PropertyType.Duplex;

  if (!property) {
    return (
      <Workspace
        background={{ color: BackgroundColors.Default }}
        depth={Depth.Low}
        layout={WebApp}
        padding={{ all: Amount.Most }}
        title="Property Not Found"
      >
        Property not found
      </Workspace>
    );
  }

  // if (!unit) {
  //   return (
  //     <Workspace
  //       backgroundColor={BackgroundColors.Default}
  //       depth={Depth.Low}
  //       // layout={WebApp}
  //       padding={{ all: Amount.Most }}
  //       title="Unit not found"
  //     >
  //       Unit not found
  //     </Workspace>
  //   );
  // }

  return (
    <Workspace
      header={{
        actions: (
          <Container
            alignment={{
              horizontal: AlignHorizontal.Right,
              orientation: Orientation.Horizontal,
            }}
          >
            <Button
              // alignSelf={Align.Right}
              margin={{ right: Amount.Less }}
              // onClick={() => {
              // window.open(`http://localhost:3000/listings/${unitId}`);
              // }}
              type={ButtonType.Secondary}
            >
              View Listing
            </Button>

            <Button
              // alignSelf={Align.Right}
              events={{
                mouse: {
                  onClick: () => {
                    if (unitId) {
                      setSearchParams({
                        edit: 'Unit',
                        id: unitId,
                      });
                    }
                  },
                },
              }}
              type={ButtonType.Primary}
            >
              Edit
            </Button>
          </Container>
        ),
        title: (
          <>
            <Link
              to={'/properties'}
              // hover={{
              //   underline: true,
              // }}
              // underline={false}
            >
              <Title
                textColor={TextColors.Primary}
                textSize={TextSize.Larger}
                textWeight={TextWeight.Most}
              >
                Properties
              </Title>
            </Link>

            <Icon
              name={DualLightIcons.ChevronDoubleRight}
              margin={{ left: Amount.Less, right: Amount.Less }}
              size={{
                height: Sizes.Smaller,
                width: Sizes.Smaller,
              }}
            />

            <Link
              to={`/properties/${propertyId}`}
              states={{
                hovered: {
                  textDecoration: {
                    line: TextDecorationLine.Underline,
                  },
                },
              }}
              textDecoration={{
                line: TextDecorationLine.None,
              }}
            >
              <Title
                textColor={TextColors.Primary}
                textSize={TextSize.Larger}
                textWeight={TextWeight.Most}
              >
                {property?.street_address}
              </Title>
            </Link>

            <Icon
              name={DualLightIcons.ChevronDoubleRight}
              margin={{ left: Amount.Least, right: Amount.Least }}
              size={{
                height: Sizes.Smaller,
                width: Sizes.Smaller,
              }}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Unit {unit.name}
            </Title>
          </>
        ),
      }}
      layout={WebApp}
      padding={{ all: Amount.Most }}
      title={`${property.street_address} > ${unit.name} | Properties`}
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
          size={{ width: 320 }}
        >
          {unit?.images && (
            <MediaPreview size={{ height: 220 }} media={unit.images} />
          )}
        </Container>
      </Container>

      <Container margin={{ bottom: Amount.Most }}>
        <TitleCard
          label="Open Service Requests"
          value={1}
          icon={{
            name: DualLightIcons.Tool,
          }}
        />

        <TitleCard
          label="Total Service Requests"
          value={3}
          icon={{
            name: DualLightIcons.Tool,
          }}
        />

        <TitleCard
          label="Late Payments"
          value={Math.floor(Math.random() * (15 - 0 + 1) + 0)}
          margin={{ right: Amount.None }}
          icon={{
            name: DualLightIcons.Warning,
          }}
        />
      </Container>

      <Container margin={{ bottom: Amount.Most }}>
        <ErrorNotification label={'Lease expires in 18 days'} />
      </Container>

      <Container
        // alignContent={Align.Stretch}
        // alignItems={Align.Stretch}
        alignment={{
          orientation: Orientation.Horizontal,
        }}
      >
        <Container margin={{ right: Amount.Most }}>
          <Container
            background={{ color: BackgroundColors.Dark }}
            borderRadius={{ all: Amount.Default }}
            margin={{ bottom: Amount.Most }}
            padding={{ all: Amount.Default }}
          >
            <Heading
              alignment={{
                horizontal: AlignHorizontal.Center,
              }}
              textColor={TextColors.Lightest}
            >
              Recent Activity
            </Heading>

            {/* <ActivityFeed
              activities={[
                {
                  what: {
                    label: 'December Rent',
                    name: Activities.Payment,
                    to: '/invoices/1',
                  },
                  when: new Date(2022, 12, 29).toISOString(),
                  who: {
                    id: 0,
                    image: {
                      path: '/assets/images/placeholders/people/person1.png',
                    },
                    name: 'Kim Lau',
                    to: '/tenants/0',
                  },
                },
                {
                  what: {
                    label: 'November Rent',
                    name: Activities.Payment,
                    to: '/invoices/1',
                  },
                  when: new Date(2022, 11, 24).toISOString(),
                  who: {
                    id: 0,
                    image: {
                      path: '/assets/images/placeholders/people/person1.png',
                    },
                    name: 'Kim Lau',
                    to: '/tenants/0',
                  },
                },
                {
                  what: {
                    label: 'Service Request',
                    name: Activities.Create,
                    to: '/service-requests/1',
                  },
                  when: new Date(2022, 11, 14).toISOString(),
                  who: {
                    id: 0,
                    image: {
                      path: '/assets/images/placeholders/people/person2.png',
                    },
                    name: 'Jane Yoo',
                    to: '/tenants/1',
                  },
                },
                {
                  what: {
                    label: 'October Rent',
                    name: Activities.Payment,
                    to: '/invoices/1',
                  },
                  when: new Date(2021, 10, 24).toISOString(),
                  who: {
                    id: 0,
                    image: {
                      path: '/assets/images/placeholders/people/person1.png',
                    },
                    name: 'Kim Lau',
                    to: '/tenants/0',
                  },
                },
              ]}
            /> */}
          </Container>

          <Container
            alignment={{
              orientation: Orientation.Horizontal,
            }}
          >
            <Container
              background={{ color: BackgroundColors.Dark }}
              borderRadius={{ all: Amount.Default }}
              size={{ height: 200 }}
              margin={{ right: Amount.Most }}
              padding={{ all: Amount.Default }}
            >
              <Heading
                alignment={{
                  horizontal: AlignHorizontal.Center,
                }}
                textColor={TextColors.Lightest}
              >
                Documents
              </Heading>
            </Container>

            <Container
              background={{ color: BackgroundColors.Dark }}
              borderRadius={{ all: Amount.Default }}
              size={{ height: 200 }}
              padding={{ all: Amount.Default }}
            >
              <Heading
                alignment={{
                  horizontal: AlignHorizontal.Center,
                }}
                textColor={TextColors.Lightest}
              >
                Tenant Details
              </Heading>
            </Container>
          </Container>
        </Container>

        <Container size={{ width: 300 }}>
          <Container
            // backgroundColor={BackgroundColors.Dark}
            borderRadius={{ all: Amount.Default }}
            padding={{ all: Amount.More }}
          >
            <Heading
              alignment={{
                horizontal: AlignHorizontal.Center,
              }}
              textSize={TextSize.Smaller}
              textColor={TextColors.Lightest}
            >
              Details
            </Heading>

            <Container alignment={{ orientation: Orientation.Horizontal }}>
              <Label size={{ width: 100 }}>Status</Label>
              <Label
                icon={{
                  color: Colors.Success,
                  name: BasicIcons.Checkmark,
                  size: {
                    height: Sizes.Smaller,
                    width: Sizes.Smaller,
                  },
                }}
                textColor={TextColors.Success}
              >
                Occupied
              </Label>
            </Container>

            <Container alignment={{ orientation: Orientation.Horizontal }}>
              <Label size={{ width: 100 }}>Bedrooms</Label>
              <Label>{unit.bedrooms}</Label>
            </Container>

            <Container alignment={{ orientation: Orientation.Horizontal }}>
              <Label size={{ width: 100 }}>Bathrooms</Label>
              <Label>{unit.bathrooms}</Label>
            </Container>

            <Container alignment={{ orientation: Orientation.Horizontal }}>
              <Label size={{ width: 100 }}>Square feet</Label>
              <Label>{unit.square_feet} ft&sup2;</Label>
            </Container>
          </Container>

          <Container
            borderRadius={{ all: Amount.Default }}
            margin={{ bottom: Amount.Most }}
            padding={{ all: Amount.Default }}
          >
            <Heading
              alignment={{
                horizontal: AlignHorizontal.Center,
              }}
              textColor={TextColors.Lightest}
            >
              Progressive Pay
            </Heading>

            <ProgressivePaymentStatus amountPaid={1100} totalDue={1500} />
          </Container>

          <Container margin={{ bottom: Amount.Most }}>
            <ErrorNotification label={'Lease expires in 18 days'} />
          </Container>

          <Container
            background={{ color: BackgroundColors.Dark }}
            borderRadius={{ all: Amount.Default }}
            margin={{ bottom: Amount.Most }}
            padding={{ all: Amount.Default }}
          >
            <Heading
              alignment={{
                horizontal: AlignHorizontal.Center,
              }}
              textColor={TextColors.Lightest}
            >
              Household
            </Heading>

            <Container>
              <UserLabel
                image={{
                  path: '/assets/images/placeholders/people/person1.png',
                }}
                name="Kim Lau"
                textSize={TextSize.Large}
                to={'/tenants/0'}
                id="0"
              />
              <UserLabel
                image={{
                  path: '/assets/images/placeholders/people/person2.png',
                }}
                name="Jane Yoo"
                textSize={TextSize.Large}
                to={'/tenants/1'}
                id="1"
              />
              <UserLabel
                image={{
                  path: '/assets/images/placeholders/people/person3.png',
                }}
                name="Ben Smith"
                textSize={TextSize.Large}
                to={'/tenants/2'}
                id="2"
              />
            </Container>
          </Container>

          <Container
            background={{ color: BackgroundColors.Dark }}
            borderRadius={{ all: Amount.Default }}
            size={{ height: 200 }}
            padding={{ all: Amount.Default }}
          >
            <Heading
              alignment={{
                horizontal: AlignHorizontal.Center,
              }}
              textColor={TextColors.Lightest}
            >
              Add-ons
            </Heading>
          </Container>
        </Container>
      </Container>
    </Workspace>
  );
});
