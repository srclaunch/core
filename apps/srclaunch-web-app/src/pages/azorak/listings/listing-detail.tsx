// import {
//   // Property as PropertyModel,
//   Unit as UnitModel,
// } from '@azorakapp/azorak-applab-models';
// import {
//   getProperty,
//   getUnit,
//   PropertySelectors,
// } from '@azorakapp/azorak-applab-redux-state';
import { BasicIcons, DualLightIcons } from '@srclaunch/icons';
import { Activities } from '@srclaunch/types';
import {
  ActivityFeed,
  AlignHorizontal,
  AlignVertical,
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
  Page,
  Paragraph,
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
import { useDispatch, useSelector } from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

// import {
//   // PropertyType,
//   properties,
//   Property,
// } from '../../constants/properties';
// import { Unit as UnitType, units } from '../../constants/units';
// import WebApp from '../layouts/WebApp';
import { Public } from '../../../layouts/Public';

export const ListingDetail = memo((): ReactElement => {
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

  console.log('unit', unit);

  // const multiUnit =
  //   property?.type === PropertyType.Apartment ||
  //   property?.type === PropertyType.Duplex;

  // if (!property) {
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

  if (!unit) {
    return (
      <Workspace
        background={{ color: BackgroundColors.Default }}
        depth={Depth.Low}
        layout={Public}
        padding={{ all: Amount.Most }}
        title="Unit not found"
      >
        Unit not found
      </Workspace>
    );
  }

  return (
    <Page
      background={{ color: BackgroundColors.Default }}
      layout={Public}
      padding={{ all: Amount.Most }}
      title={`${property.street_address} > ${unit.name} | Properties`}
    >
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
        margin={{ bottom: Amount.All }}
      >
        <Title
          textColor={TextColors.Light}
          textSize={TextSize.Larger}
          textWeight={TextWeight.Most}
        >
          {property?.street_address}
        </Title>

        <Icon
          name={DualLightIcons.ChevronDoubleRight}
          margin={{ left: Amount.Least, right: Amount.Least }}
          size={{
            height: Sizes.Smaller,
            width: Sizes.Smaller,
          }}
        />

        <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
          {unit.name}
        </Title>

        <Container />

        <Button
          // alignSelf={Align.Right}
          events={{
            mouse: {
              onClick: () => {
                if (unitId) {
                  // setSearchParams({
                  //   edit: 'Unit',
                  //   id: unitId,
                  // });
                  navigate(`/listings/${propertyId}/${unitId}/apply`);
                }
              },
            },
          }}
          // size={Size.Large}
          type={ButtonType.Primary}
        >
          Apply now!
        </Button>
      </Container>

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
          {unit?.images && <MediaPreview media={unit.images} />}
        </Container>

        <Container
          // backgroundColor={BackgroundColors.Dark}

          borderRadius={{ all: Amount.Default }}
          padding={{ all: Amount.More }}
        >
          <Heading
            alignment={{
              horizontal: AlignHorizontal.Center,
            }}
            textColor={TextColors.Lightest}
          >
            Details
          </Heading>

          <Container margin={{ bottom: Amount.All }}>
            <Container
              alignment={{
                orientation: Orientation.Horizontal,
              }}
            >
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
                Available
              </Label>
            </Container>

            <Container
              alignment={{
                orientation: Orientation.Horizontal,
              }}
            >
              <Label size={{ width: 100 }}>Bedrooms</Label>
              <Label textColor={TextColors.Lightest}>{unit.bedrooms}</Label>
            </Container>

            <Container
              alignment={{
                orientation: Orientation.Horizontal,
              }}
            >
              <Label size={{ width: 100 }}>Bathrooms</Label>
              <Label textColor={TextColors.Lightest}>{unit.bathrooms}</Label>
            </Container>

            <Container
              alignment={{
                orientation: Orientation.Horizontal,
              }}
            >
              <Label size={{ width: 100 }}>Square feet</Label>
              <Label textColor={TextColors.Lightest}>
                {unit.square_feet} ft&sup2;
              </Label>
            </Container>
          </Container>

          <Heading
            alignment={{
              horizontal: AlignHorizontal.Center,
            }}
            textColor={TextColors.Lighter}
          >
            Description
          </Heading>

          <Paragraph>{unit.description}</Paragraph>
        </Container>
      </Container>

      {/* <Container grow={false} marginBottom={Amount.Most}>
        <ErrorNotification label={'Unit is no longer available'} />
      </Container> */}
    </Page>
  );
});
