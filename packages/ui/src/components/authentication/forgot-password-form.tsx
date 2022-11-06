import { Condition, Primitives } from '@srclaunch/types';
import { RootState, useSelector } from '@srclaunch/web-app-state';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  Amount,
  AutoComplete,
  BackgroundColor,
  Fill,
  Shadow,
  Size,
  TextAlign,
} from '../../types';
import { Form } from '../forms/form';
import { Container, ContainerProps } from '../layout/container';
import { ErrorNotification } from '../notifications/error-notification';
import { LoadingOverlay } from '../progress/loading-overlay';
import { Paragraph } from '../typography/paragraph';
import { Title } from '../typography/title';

export const ForgotPasswordForm = memo(
  ({
    backgroundColor = BackgroundColor.Lighter,
    borderRadius = Amount.More,
    padding = Amount.Most,
    width = 420,
    title = 'Forgot your password?',
    // showSignupLink,
    // signUpLinkLabel,
    // signInButtonLabel,
    // forgotPasswordLinkLabel,
    ...props
  }: ContainerProps<{
    readonly forgotPasswordLinkLabel?: ReactElement;
    readonly showSignupLink?: boolean;
    readonly signInButtonLabel?: ReactElement;
    readonly signUpLinkLabel?: ReactElement;
    readonly title?: string;
  }>): ReactElement => {
    // const dispatch = useDispatch();

    // const [emailAddress, setEmailAddress] = useState<string>();
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState<Exception | null | undefined>();
    // const [canSubmit, setCanSubmit] = useState(false);

    const inProgress = useSelector(
      (state: RootState) => state.authentication?.in_progress,
    );
    const authError = useSelector(
      (state: RootState) => state.authentication?.error,
    );
    // const queryStrings = useSelector(state => state.router.location.search);
    // const confirmed = queryString.parse(queryStrings).c === '1';
    // const medium = queryString.parse(queryStrings).m;

    // const startPasswordReset = async (email: string) => {
    // dispatch(login({ email_address: emailAddress, password }));
    // };

    // useEffect(() => {
    //   if (emailAddress) {
    //     setCanSubmit(true);
    //   }
    // }, [emailAddress]);

    return (
      <Container
        className="forgot-password-form"
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        padding={padding}
        shadow={Shadow.Highest}
        width={width}
        {...props}
      >
        <LoadingOverlay
          borderRadius={borderRadius}
          state={{
            visible: inProgress ?? false,
          }}
        />
        {/* <Illustration>
        <img alt={'Login'} src="/illustrations/total_debt.svg" />
      </Illustration> */}

        <Title alignHorizontal={AlignHorizontal.Center}>{title}</Title>

        <Paragraph
          alignHorizontal={AlignHorizontal.Center}
          lineHeight={Size.Small}
          padding={Amount.More}
          paddingBottom={Amount.Most}
          textAlign={TextAlign.Center}
        >
          Enter the email address associated with your account and we'll send
          instructions on how to reset your password.
        </Paragraph>

        {/* {confirmed && medium && (
        <ConfirmationContainer>
          <Heading text="Thank you for confirming your email address." />
        </ConfirmationContainer>
      )} */}
        {/* {error && <ErrorContainer message={error ? 'Error occurred' : ''} />} */}
        {authError && (
          <ErrorNotification label={authError.userFriendlyMessage} />
        )}

        <Form
          onSubmitted={({
            // fields,
            validation,
          }) => {
            if ((validation && validation.validated) || !validation) {
              // startPasswordReset(fields.emailAddress?.value as string);
            }
          }}
          fields={[
            {
              autoComplete: AutoComplete.Username,
              label: 'Email address',
              name: 'emailAddress',
              type: Primitives.EmailAddress,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                  [Condition.IsEmailAddress]: true,
                },
              },
            },
          ]}
          name="forgot-password-form"
          state={{
            loading: inProgress ?? false,
          }}
          submitButton={{
            alignHorizontal: AlignHorizontal.Center,
            borderRadius: Amount.Least,
            fill: Fill.Both,
            label: 'Send instructions',
            lineHeight: Size.Large,
          }}
        />
        {/* 
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
              textDecoration={{ line: TextDecorationLine.None }}
              to="/login"
            >
              Login
            </Link>
          </Small>
        </Container> */}
      </Container>
    );
  },
);

// const Container = styled.div`
//   background: var(--bg-color-depth-3);
//   border-radius: 15px;
//   box-shadow: var(--shadow-depth-2);
//   margin: 0 auto;
//   padding: 25px 35px 30px 35px;
//   position: relative;
//   width: 100%;

//   p {
//     color: var(-fg-color-text-paragraph);
//     font-weight: 500;
//     font-size: 14px;
//     margin: 15px 0 35px 0;
//     line-height: 24px;
//     text-align: center;
//   }

//   @media (min-width: 480px) {
//     margin: margin;
//     width: 380px;
//   }
// `;

// const Illustration = styled.div`
//   height: 44px;
//   margin: 0 auto 25px auto;
//   text-align: center;
//   width: 44px;

//   img {
//     display: inline-block;
//     width: 100%;
//   }

/* @media (min-width: 480px) {} */

/* @media (min-width: 768px) {
    img {
      height: 56px;
      width: 56px;
    }
  } */

/* @media (min-width: 992px) {} */

/* @media (min-width: 1200px) {} */
// `;

// const ConfirmationContainer = styled.div`
//   color: #5b5b5b;
//   line-height: 32px;
//   margin: 0 0 25px 0;

//   h5 {
//     border-bottom: 4px solid rgb(255, 220, 0);
//     font-weight: 600;
//   }
// `;

// const Title = styled.h2`
//   color: #5b5b5b;
//   font-size: 22px;
//   margin: 0 0 25px 0;
//   text-align: center;

//   /* @media (min-width: 480px) {} */

//   @media (min-width: 768px) {
//     font-size: 28px;
//   }

//   /* @media (min-width: 992px) {} */

//   /* @media (min-width: 1200px) {} */
// `;

// const Form = styled.div``;

// const Row = styled.div`
//   margin: 0 0 25px 0;
//   width: 100%;

//   &:last-child {
//     margin: 0;
//   }
// `;

// const FormActions = styled.div``;

// const ForgotPassword = styled.div`
//   font-size: 14px;
//   padding: 25px 0 0 0;
//   text-align: center;
// `;
