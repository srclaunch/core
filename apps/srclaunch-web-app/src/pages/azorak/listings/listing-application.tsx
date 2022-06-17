// import { RentalApplication } from '@azorakapp/azorak-applab-models';
// import {
//   createRentalApplication,
//   getProperty,
//   getUnit,
// } from '@azorakapp/azorak-applab-redux-state';
// import { RentalApplication as RentalApplicationType } from '@azorakapp/azorak-applab-types';
import { BasicIcons } from '@srclaunch/icons';
// import { ValidationProblem } from '@srclaunch/types';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  Colors,
  Container,
  Depth,
  Form,
  FormField,
  getFormFieldsFromModel,
  Icon,
  Image,
  LoadingOverlay,
  NavigationLink,
  Orientation,
  Page,
  Paragraph,
  Size,
  Sizes,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '@srclaunch/ui';
import {
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Public } from '../../../layouts/Public';

export const ListingApplication = memo((): ReactElement => {
  const dispatch = useDispatch();
  const { propertyId, unitId } = useParams();

  const property = useSelector(
    (state: RootState) => state.properties.entities[propertyId ?? ''],
  );

  const unit = useSelector((state: RootState) => {
    if (state.units && state.units.entities) {
      return state.units.entities[unitId ?? ''];
    }
  });

  const applicationCreate = useSelector(
    (state: RootState) =>
      state.rentalApplications.action.createRentalApplication,
  );

  useEffect(() => {
    if (propertyId && unitId) {
      // dispatch(getProperty(propertyId));
      // dispatch(getUnit(unitId));
      // setDispatched(true);
    }
  }, []);

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
      alignment={{
        horizontal: AlignHorizontal.Center,
      }}
      background={{ color: BackgroundColors.Default }}
      layout={Public}
      padding={{ all: Amount.Most }}
      title={`${property?.street_address} > ${unit?.name} | Properties`}
    >
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
        margin={{ bottom: Amount.All }}
      >
        <Image
          size={{ height: 52 }}
          margin={{ right: Amount.Less }}
          url={property?.images?.[0]?.url}
        />

        <NavigationLink
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          to={`/listings/${propertyId}/${unitId}`}
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
            {property?.street_address}
          </Title>

          {/* <Icon
            name={DualLightIcons.ChevronDoubleForward}
            marginLeft={Amount.Least}
            marginRight={Amount.Least}
            size={Size.Smaller}
          />

          <Title
            textColor={TextColors.Primary}
            textSize={TextSize.Larger}
            textWeight={TextWeight.Most}
          >
            {unit.name}
          </Title> */}
        </NavigationLink>
      </Container>

      <Container
        background={{ color: BackgroundColors.Light }}
        borderRadius={{ all: Amount.More }}
        padding={{ all: Amount.Most }}
        size={{ width: 480 }}
      >
        <LoadingOverlay
          states={{ state: { visible: applicationCreate.inProgress } }}
        />

        {applicationCreate.success ? (
          <Container
            alignment={{
              horizontal: AlignHorizontal.Center,
            }}
          >
            <Container
              background={{ color: BackgroundColors.Dark }}
              borderRadius={{ all: 72 }}
              margin={{ bottom: Amount.Most }}
              size={{
                height: 72,
                width: 72,
              }}
            >
              <Icon
                color={Colors.Success}
                name={BasicIcons.Checkmark2}
                size={{ height: Sizes.Smaller, width: Sizes.Smaller }}
              />
            </Container>
            <Title
              margin={{ bottom: Amount.Less }}
              textColor={TextColors.Lightest}
              textSize={TextSize.Larger}
            >
              Thank you for applying
            </Title>
            <Paragraph textColor={TextColors.Lighter} textSize={TextSize.Small}>
              We will review your application and get back to you shortly.
            </Paragraph>
          </Container>
        ) : (
          <>
            <Title
              margin={{ bottom: Amount.Most }}
              textColor={TextColors.Lightest}
              textSize={TextSize.Larger}
            >
              Submit a Rental Application
            </Title>

            <Form
              // fields={getFormFieldsFromModel({ model: RentalApplication })}
              name="rental-application"
              submitButton={{
                label: 'Submit',
              }}
              // @ts-ignore
              onSubmit={({
                fields,
                // problems,
                validated,
              }: // values,
              {
                readonly fields: { [name: string]: FormField };
                // readonly problems?: ValidationProblem[];
                readonly validated?: boolean;
                // readonly values: RentalApplicationType;
              }) => {
                console.log('fields', fields);
                // console.log('problems', problems);
                console.log('validated', validated);
                // console.log('values', values);
                // const { first_name, last_name, email, phone } = fields;

                // dispatch(createRentalApplication(values));
              }}
            />
          </>
        )}
      </Container>

      {/* <Container grow={false} marginBottom={Amount.Most}>
        <ErrorNotification label={'Unit is no longer available'} />
      </Container> */}
    </Page>
  );
});
