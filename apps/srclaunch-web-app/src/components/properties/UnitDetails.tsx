import {
  // Property as PropertyModel,
  Unit as UnitModel,
  // Property,
} from '@azorakapp/azorak-applab-models';
import { Unit, Property } from '@azorakapp/azorak-applab-types';
import { DualLightIcons } from '@srclaunch/icons';
import {
  // useNavigate,
  useParams,
  useSearchParams,
} from '@srclaunch/web-application-state';
import { Activities } from '@srclaunch/types';
import {
  ActivityFeed,

  AlignHorizontal,
  Amount,
  BackgroundColors,
  Button,
  ButtonType,
  Container,
  Depth,
  ErrorNotification,
  Heading,
  Icon,
  Image,
  Link,
  Orientation,
  ProgressivePaymentStatus,
  Size,
  Sizes,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  TitleCard,

  UserLabel,
  Workspace,
} from '@srclaunch/ui';
import { memo, ReactElement } from 'react';
// import { Unit as UnitType, units } from '../../constants/units';
// import WebApp from '../layouts/WebApp';
import { WebApp } from '../../layouts/WebApp';

export const UnitDetails = memo(
  ({ property, unit }: { property: Property; unit: Unit }): ReactElement => {
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

    if (!unit) {
      return (
        <Workspace
          background={{ color: BackgroundColors.Default }}
          depth={Depth.Low}
          layout={WebApp}
          padding={{ all: Amount.Most }}
          title="Unit not found"
        >
          Unit not found
        </Workspace>
      );
    }

    return (
      <Workspace
      background={{ color: BackgroundColors.Default }}
        depth={Depth.Low}
        layout={WebApp}
        padding={{ all: Amount.Most }}
        title={property.street_address}
      >
        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal
          }}
          margin={{ bottom: Amount.Most }}
          
        >
          <Link to={'/properties'} >
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
              width: Sizes.Smaller
            }}
          />

          <Link to={`/properties/${property.id}`} >
            <Title
              textColor={TextColors.Primary}
              textSize={TextSize.Larger}
              textWeight={TextWeight.Most}
            >
              {property.street_address}
            </Title>
          </Link>

          <Icon
            name={DualLightIcons.ChevronDoubleRight}
            margin={{ left: Amount.Less, right: Amount.Less }}
            size={{
              height: Sizes.Smaller,
              width: Sizes.Smaller
            }}
          />

          <Title
            textColor={TextColors.Default}
            textSize={TextSize.Larger}
            textWeight={TextWeight.Most}
          >
            Unit {unit.name}
          </Title>

          <Container />

          {/* <Button
            alignSelf={Align.Right}
            onClick={() => {
              if (unit.id) {
                setSearchParams({
                  edit: UnitModel.name,
                  id: unit.id.toString(),
                });
              }
            }}
            type={ButtonType.Primary}
          >
            Edit
          </Button> */}
        </Container>

        <Container
          alignment={{
            
            orientation: Orientation.Horizontal
          }}
          margin={{ bottom: Amount.Most }}
        >
          <Container margin={{ right: Amount.Default }}>
            {/* <Image url={property.image} grow={false} /> */}
          </Container>

          <Container>
            <Container
              borderRadius={{ all: Amount.Default }}
              margin={{ bottom: Amount.Default }}
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

            <Container
              
            >
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
               
                icon={{
                  name: DualLightIcons.Warning,
                }}
              />
            </Container>
          </Container>
        </Container>

        <Container
          alignment={{

            orientation: Orientation.Horizontal
          }}

          // alignContent={Align.Stretch}
          // alignItems={Align.Stretch}

        >
          <Container margin={{ right: Amount.Default }}>
            <Container
              background={{ color: BackgroundColors.Dark }}
              borderRadius={{ all: Amount.Default }}
              margin={{ bottom: Amount.Default }}
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
              {/* 
              <ActivityFeed
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
              />
              */}
            </Container>

            <Container alignment={{
              orientation: Orientation.Horizontal
            }}>
              <Container
                background={{ color: BackgroundColors.Dark }}
                borderRadius={{ all: Amount.Default }}
           
                margin={{ all: Amount.Default }}
                padding={{ all: Amount.Default }}
                size={{
                  height: 200
                }}
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
             
                padding={{ all: Amount.Default }}
                size={{
                  height: 200
                }}
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

          <Container  size={{width: 300}}>
            <Container margin={{ bottom: Amount.Default }}>
              <ErrorNotification label={'Lease expires in 18 days'} />
            </Container>

            <Container
              background={{ color: BackgroundColors.Dark }}
              borderRadius={{ all: Amount.Default }}
          
              margin={{ bottom: Amount.Default }}
              padding={{ all: Amount.Default }
              }
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
        
              padding={{ all: Amount.Default }}
              size={{
                height: 200
              }}
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
  },
);
