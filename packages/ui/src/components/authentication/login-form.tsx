import { Condition, Primitives } from '@srclaunch/types';
import {
  login,
  RootState,
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

export const LoginForm = memo(
  ({
    backgroundColor = BackgroundColor.Lighter,
    borderRadius = Amount.More,
    onLoginSuccess,
    title = 'Login',
    width = 420,
    // showSignupLink,
    // signUpLinkLabel,
    // signInButtonLabel,
    // forgotPasswordLinkLabel,
    ...props
  }: ContainerProps<{
    readonly forgotPasswordLinkLabel?: ReactElement;
    readonly onLoginSuccess?: () => unknown;
    readonly showSignupLink?: boolean;
    readonly signInButtonLabel?: ReactElement;
    readonly signUpLinkLabel?: ReactElement;
    readonly title?: string;
  }>): ReactElement => {
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

        {/* <Illustration>
        <img alt={'Login'} src="/illustrations/total_debt.svg" />
      </Illustration> */}

        <Title alignHorizontal={AlignHorizontal.Center}>{title}</Title>

        <NotificationLabel
          alignHorizontal={AlignHorizontal.Center}
          orientation={Orientation.Horizontal}
          alignVertical={AlignVertical.Center}
          // background={{
          //   color: BackgroundColor.Darkest,
          // }}
          marginBottom={Amount.Default}
          showOrb={false}
          textAlign={TextAlign.Center}
        >
          <Paragraph lineHeight={Size.Small} textAlign={TextAlign.Center}>
            Don't have an account yet?
            <br />
            <Link
              lineHeight={Size.Small}
              to="/signup"
              hovered={{
                textDecorationPosition: TextDecorationPosition.Underline,
              }}
              textDecorationPosition={TextDecorationPosition.Underline}
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
          onSubmitted={({ fields, validation }) => {
            if ((validation && validation.validated) || !validation) {
              dispatch(
                login({
                  password: fields.password?.value as string,
                  username: fields.username?.value as string,
                }),
              );
            }
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
            borderRadius: Amount.Least,
            fill: Fill.Both,
            label: 'Login',
            lineHeight: Size.Large,
            textAlign: TextAlign.Center,
          }}
        />

        <Container
          alignHorizontal={AlignHorizontal.Center}
          alignVertical={AlignVertical.Center}
          orientation={Orientation.Horizontal}
          padding={Amount.Default}
        >
          <Small textAlign={TextAlign.Center}>
            <Link
              hovered={{
                textDecorationPosition: TextDecorationPosition.Underline,
              }}
              textDecorationPosition={TextDecorationPosition.Underline}
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
