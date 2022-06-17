// import { Tenant as TenantModel } from '@azorakapp/azorak-applab-models';
// import { Tenant as TenantType } from '@azorakapp/azorak-applab-types';
import { DualLightIcons } from '@srclaunch/icons';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
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
import { useParams, useSearchParams } from 'react-router-dom';

// import WebApp from '../layouts/WebApp';
import { WebApp } from '../../../layouts/WebApp';

export const Tenant = memo((): ReactElement => {
  const { id: tenantId } = useParams<string>();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log('searchParams', searchParams);

  // if (!tenant) {
  //   return (
  //     <Workspace
  //       backgroundColor={BackgroundColors.Default}
  //       depth={Depth.Low}
  //       layout={WebApp}
  //       padding={{ all: Amount.Most }}
  //       title="Tenant Not Found"
  //     >
  //       Tenant not found
  //     </Workspace>
  //   );
  // }

  return (
    <Workspace
      background={{ color: BackgroundColors.Default }}
      depth={Depth.Low}
      layout={WebApp}
      padding={{ all: Amount.Most }}
      // title={tenant?.name ?? ''}
    >
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
        margin={{ bottom: Amount.Most }}
      >
        <Link to={'/tenants'}>
          <Title
            textColor={TextColors.Primary}
            textSize={TextSize.Larger}
            textWeight={TextWeight.Most}
          >
            Tenants
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

        <Title
          textColor={TextColors.Default}
          textSize={TextSize.Larger}
          textWeight={TextWeight.Most}
        >
          {/* {tenant.name} */}
        </Title>

        <Container />

        <Button
          // alignSelf={Align.Right}
          events={{
            mouse: {
              onClick: () => {
                if (tenantId) {
                  setSearchParams({
                    // edit: TenantModel.name,
                    id: tenantId,
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

      <Container
        alignment={{
          orientation: Orientation.Horizontal,
        }}
        margin={{ bottom: Amount.Default }}
      >
        {/* <Container grow={false} marginRight={Amount.Default}>
          <Image url={tenant.image} />
        </Container> */}

        <Container>
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
              Progressive Pay
            </Heading>

            <ProgressivePaymentStatus amountPaid={1100} totalDue={1500} />
          </Container>

          <Container
            alignment={{
              vertical: AlignVertical.Top,
            }}
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
          orientation: Orientation.Horizontal,
        }}
        padding={{ top: Amount.Most }}
      >
        <Container margin={{ right: Amount.Default }}>
          <Container
            background={{ color: BackgroundColors.Darker }}
            borderRadius={{ all: Amount.Default }}
            size={{ height: 300 }}
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
          </Container>

          <Container
            alignment={{
              horizontal: AlignHorizontal.Center,
            }}
          >
            <Container
              background={{ color: BackgroundColors.Darker }}
              borderRadius={{ all: Amount.Default }}
              size={{ height: 200 }}
              margin={{ right: Amount.Default }}
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
            </Container>

            <Container
              background={{ color: BackgroundColors.Darker }}
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
                Recent Activity
              </Heading>
            </Container>
          </Container>
        </Container>

        <Container size={{ width: 300 }}>
          <Container margin={{ bottom: Amount.Default }}>
            <ErrorNotification label={'Lease expires in 18 days'} />
          </Container>

          <Container
            background={{ color: BackgroundColors.Darker }}
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
              Household
            </Heading>

            <Container>
              <UserLabel
                image={{
                  path: '/assets/images/placeholders/people/person1.png',
                }}
                name="Kim Lau"
                to={'/tenants/0'}
                id="0"
              />
              <UserLabel
                image={{
                  path: '/assets/images/placeholders/people/person2.png',
                }}
                name="Jane Yoo"
                to={'/tenants/1'}
                id="1"
              />
              <UserLabel
                image={{
                  path: '/assets/images/placeholders/people/person3.png',
                }}
                name="Ben Smith"
                to={'/tenants/2'}
                id="2"
              />
            </Container>
          </Container>

          <Container
            background={{ color: BackgroundColors.Darker }}
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
