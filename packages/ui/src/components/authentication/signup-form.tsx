import { Condition, Primitives } from '@srclaunch/types';
import {
  RootState,
  signUp,
  useDispatch,
  useSelector,
} from '@srclaunch/web-app-state';
import { memo, ReactElement, useEffect } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  AutoComplete,
  BackgroundColor,
  Fill,
  Orientation,
  Shadow,
  Size,
  TextAlign,
  TextDecorationPosition,
} from '../../types';
import { Form } from '../forms/form';
import { Container, ContainerProps } from '../layout/container';
import { ErrorNotification } from '../notifications/error-notification';
import { NotificationLabel } from '../notifications/notification-label';
import { LoadingOverlay } from '../progress/loading-overlay';
import { Link } from '../typography/link';
import { Paragraph } from '../typography/paragraph';
import { Small } from '../typography/small';
import { Title } from '../typography/title';

export const SignupForm = memo(
  ({
    backgroundColor = BackgroundColor.Lighter,
    borderRadius = Amount.More,
    onSignupSuccess,
    width = 420,
    title = 'Sign up',
    ...props
  }: ContainerProps<{
    readonly onSignupSuccess?: ({
      userId,
    }: {
      readonly userId: string;
    }) => unknown;
    readonly title?: string;
  }>): ReactElement => {
    const dispatch = useDispatch();
    const signUpState = useSelector(
      (state: RootState) => state.user.authentication?.signup,
    );
    const { error, inProgress, success } = signUpState;

    useEffect(() => {
      if (onSignupSuccess && success) {
        const { userId } = signUpState;

        onSignupSuccess({ userId });
      }
    }, [success]);

    return (
      <Container
        className="signup-form"
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        padding={Amount.Most}
        paddingBottom={Amount.None}
        shadow={Shadow.Highest}
        width={width}
        {...props}
      >
        <LoadingOverlay
          borderRadius={borderRadius}
          state={{
            visible: inProgress,
          }}
        />

        {/* 
      <Illustration>
        <img alt="Sign in" src="/illustrations/net_worth.svg" />
      </Illustration> */}

        <Title
          alignHorizontal={AlignHorizontal.Center}
          textAlign={TextAlign.Center}
        >
          {title}
        </Title>

        <NotificationLabel
          alignmentHorizontal={AlignHorizontal.Center}
          orientation={Orientation.Horizontal}
          alignVertical={AlignVertical.Center}
          margin={Amount.Most}
          marginBottom={Amount.All}
          showOrb={false}
          textAlign={TextAlign.Center}
        >
          <Paragraph lineHeight={Size.Small} textAlign={TextAlign.Center}>
            Already have an account?
            <br />
            <Link
              lineHeight={Size.Small}
              hovered={{
                TextDecorationPosition: TextDecorationPosition.Underline,
              }}
              textDecorationPosition={TextDecorationPosition.Underline}
              to="/login"
            >
              Sign in
            </Link>
          </Paragraph>
        </NotificationLabel>

        {error && (
          <ErrorNotification
            label={error?.friendlyMessage ?? 'An error occurred unfortunately.'}
          />
        )}

        <Form
          onSubmitted={({ fields, validation }) => {
            if ((validation && validation.validated) || !validation)
              dispatch(
                signUp({
                  firstName: fields.firstName?.value as string,
                  lastName: fields.lastName?.value as string,
                  password: fields.password?.value as string,
                  username: fields.username?.value as string,
                }),
              );
          }}
          fields={[
            {
              autoComplete: AutoComplete.GivenName,
              label: 'First name',
              name: 'firstName',
              type: Primitives.String,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                },
              },
            },
            {
              autoComplete: AutoComplete.FamilyName,
              label: 'Last name',
              name: 'lastName',
              type: Primitives.String,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                },
              },
            },
            {
              autoComplete: AutoComplete.Username,
              label: 'Email address',
              name: 'username',
              type: Primitives.EmailAddress,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                  [Condition.IsEmailAddress]: true,
                  // [Condition.IsUsernameAvailable]: true,
                },
              },
            },
            {
              autoComplete: AutoComplete.NewPassword,
              // confirmPasswordLabel: 'Confirm password',
              label: 'Password',
              name: 'password',
              // showConfirmPassword: true,
              // showPasswordStrength: false,
              type: Primitives.Password,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                  [Condition.HasLetterCount]: 2,
                  [Condition.HasNumberCount]: 1,
                  [Condition.HasSymbolCount]: 1,
                  [Condition.HasUppercaseCount]: 1,
                  [Condition.HasLowercaseCount]: 1,
                  [Condition.IsLengthGreaterThanOrEqual]: 8,
                  [Condition.IsLengthLessThanOrEqual]: 99,
                },
              },
            },
          ]}
          inProgress={inProgress}
          name="signup-form"
          submitButton={{
            alignHorizontal: AlignHorizontal.Center,
            borderRadius: Amount.Least,
            fill: Fill.Both,
            label: 'Sign up',
            lineHeight: Size.Large,
          }}
        />

        <Container padding={Amount.Most}>
          <Small textAlign={TextAlign.Center}>
            By clicking the "Sign up" button you agree to the{' '}
            {/* 
              <Link to="https://budgetbloom.com/terms-of-use">Terms of use</Link> and{' '} 
              */}
            <Link
              // name="Privacy Policy Link [ Sign Up Form ]"

              states={{
                hovered: {
                  textDecorationPosition: TextDecorationPosition.Underline,
                },
              }}
              textDecorationPosition={TextDecorationPosition.Underline}
              to="/privacy"
            >
              Privacy Policy
            </Link>
            .
            {/* You also agree to receive information and offers relevant to our
            services via email. You can opt-out of these emails in your Account
            Settings page anytime. */}
          </Small>
        </Container>
      </Container>
    );
  },
);
