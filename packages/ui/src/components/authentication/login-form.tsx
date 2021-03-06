import { Condition, Primitives } from '@srclaunch/types';
import { login, RootState, useDispatch, useSelector } from '@srclaunch/web-app';
import { memo, ReactElement, useEffect } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
  Fill,
  Orientation,
  Sizes,
  TextAlign,
  TextDecorationLine,
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

type LoginFormProps = {
  readonly onLoginSuccess?: () => unknown;
  readonly title?: string;
  readonly showSignupLink?: boolean;
  readonly signUpLinkLabel?: ReactElement;
  readonly signInButtonLabel?: ReactElement;
  readonly forgotPasswordLinkLabel?: ReactElement;
} & ContainerProps;

export const LoginForm = memo(
  ({
    background = {},
    borderRadius = {},
    onLoginSuccess,
    size = {},
    title = 'Login',
    // showSignupLink,
    // signUpLinkLabel,
    // signInButtonLabel,
    // forgotPasswordLinkLabel,
    ...props
  }: LoginFormProps): ReactElement => {
    const dispatch = useDispatch();
    const loginState = useSelector(
      (s: RootState) => s.user.authentication?.login,
    );
    const { error, inProgress, success } = loginState;

    useEffect(() => {
      if (onLoginSuccess && success) {
        onLoginSuccess();
      }
    }, [success]);

    return (
      <Container
        className="login-form"
        background={{ color: BackgroundColors.Lighter, ...background }}
        borderRadius={{ all: Amount.More, ...borderRadius }}
        padding={{ all: Amount.Most, bottom: Amount.None }}
        shadow={DepthShadow.Highest}
        size={{
          width: 420,
          ...size,
        }}
        {...props}
      >
        <LoadingOverlay
          borderRadius={borderRadius}
          states={{
            state: {
              visible: inProgress,
            },
          }}
        />

        {/* <Illustration>
        <img alt={'Login'} src="/illustrations/total_debt.svg" />
      </Illustration> */}

        <Title alignment={{ horizontal: AlignHorizontal.Center }}>
          {title}
        </Title>

        <NotificationLabel
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          // background={{
          //   color: BackgroundColors.Darkest,
          // }}
          margin={{
            bottom: Amount.Default,
          }}
          showOrb={false}
          textAlign={TextAlign.Center}
        >
          <Paragraph lineHeight={Sizes.Small} textAlign={TextAlign.Center}>
            Don't have an account yet?
            <br />
            <Link
              lineHeight={Sizes.Small}
              to="/signup"
              states={{
                hovered: {
                  textDecoration: { line: TextDecorationLine.Underline },
                },
              }}
              textDecoration={{ line: TextDecorationLine.Underline }}
            >
              Sign up for free!
            </Link>
          </Paragraph>
        </NotificationLabel>

        {/* {confirmed && medium && (
        <ConfirmationContainer>
          <Heading text="Thank you for confirming your email address." />
        </ConfirmationContainer>
      )} */}

        {error && (
          <ErrorNotification
            label={error?.friendlyMessage ?? 'An error occurred unfortunately.'}
          />
        )}

        <Form
          events={{
            form: {
              onSubmitted: ({ fields, validation }) => {
                if ((validation && validation.validated) || !validation) {
                  dispatch(
                    login({
                      password: fields.password?.value as string,
                      username: fields.username?.value as string,
                    }),
                  );
                }
              },
            },
          }}
          fields={[
            {
              autoComplete: AutoComplete.Username,
              label: 'Email address',
              name: 'username',
              type: Primitives.EmailAddress,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                },
              },
            },
            {
              autoComplete: AutoComplete.CurrentPassword,
              label: 'Password',
              name: 'password',
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
          name="login-form"
          submitButton={{
            alignment: {
              horizontal: AlignHorizontal.Center,
            },
            borderRadius: { all: Amount.Least },
            label: 'Login',
            lineHeight: Sizes.Large,
            size: {
              fill: Fill.Both,
            },
            textAlign: TextAlign.Center,
          }}
        />

        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          padding={{ all: Amount.Default }}
        >
          <Small textAlign={TextAlign.Center}>
            <Link
              states={{
                hovered: {
                  textDecoration: { line: TextDecorationLine.Underline },
                },
              }}
              textDecoration={{ line: TextDecorationLine.Underline }}
              to="/forgot-password"
            >
              Forgot your password?
            </Link>
          </Small>
        </Container>
      </Container>
    );
  },
);
