import { BasicIcons } from '@srclaunch/icons';
import { UserVerificationStatus } from '@srclaunch/types';
import { ValidationProblem } from '@srclaunch/validation';
import {
  getVerificationDetails,
  resendVerificationCode,
  RootState,
  useDispatch,
  useSelector,
  verifyCode,
} from '@srclaunch/web-app-state';
import { memo, ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AlignHorizontal,
  Amount,
  AutoComplete,
  BackgroundColor,
  Shadow,
  Size,
  TextColor,
  TextSize,
  TextWeight,
} from '../../types';
import { Button, ButtonType } from '../forms/buttons/button';
import { VerificationCodeInput } from '../forms/inputs/authentication/verification-code-input';
import { InputRow } from '../forms/layout/input-row';
import { Container, ContainerProps } from '../layout/container';
import { LoadingOverlay } from '../progress/loading-overlay';
import { Label } from '../typography/label';
import { Paragraph } from '../typography/paragraph';
import { Title } from '../typography/title';

export const CodeVerificationForm = memo(
  ({
    backgroundColor = BackgroundColor.Lighter,
    borderRadius = Amount.More,
    onVerificationSuccess,
    userId,
  }: ContainerProps<{
    readonly onVerificationSuccess?: () => unknown;
    readonly userId: string;
  }>): ReactElement => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const verificationState = useSelector(
      (state: RootState) => state.user.authentication?.verification.code,
    );
    const [code, setCode] = useState<string | undefined>();
    const [problems, setProblems] = useState<readonly ValidationProblem[]>();

    useEffect(() => {
      if (userId) {
        dispatch(getVerificationDetails({ userId }));
      }
    }, []);

    useEffect(() => {
      if (onVerificationSuccess && verificationState.verify.success) {
        onVerificationSuccess();
      }
    }, [verificationState.verify.success]);

    return (
      <Container
        className="code-verification-form"
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        padding={Amount.Most}
        paddingBottom={Amount.None}
        shadow={Shadow.Highest}
        width={450}
      >
        {/* <Illustration>
        <img alt="Login" src="/illustrations/total_debt.svg" />
      </Illustration> */}

        {/* {error && <ErrorContainer message={error.userFriendlyMessage} />} */}

        <LoadingOverlay
          borderRadius={borderRadius}
          state={{
            visible:
              verificationState.status.inProgress ||
              verificationState.resend.inProgress ||
              verificationState.verify.inProgress,
          }}
        />

        {verificationState.verify.success ||
        verificationState.status.state === UserVerificationStatus.Confirmed ? (
          <Container padding={Amount.Default}>
            <Title alignHorizontal={AlignHorizontal.Center}>
              You&apos;re verified!
            </Title>

            <Paragraph
              alignHorizontal={AlignHorizontal.Center}
              padding={Amount.More}
            >
              Thank you for verifying your email address.
            </Paragraph>

            <Button onClick={() => navigate('/')} type={ButtonType.Primary}>
              Login
            </Button>
          </Container>
        ) : (
          <>
            <Title alignHorizontal={AlignHorizontal.Center}>Verification</Title>

            <Paragraph
              alignHorizontal={AlignHorizontal.Center}
              padding={Amount.More}
            >
              Enter the confirmation code sent to{' '}
              <b>{verificationState.delivery?.destination}</b>.
            </Paragraph>

            <Container>
              <InputRow>
                <VerificationCodeInput
                  autoComplete={AutoComplete.OneTimeCode}
                  onValueChange={({ validation, value }) => {
                    setProblems(validation?.problems);

                    if ((validation && validation.validated) || !validation) {
                      setCode(value);
                    }
                  }}
                  length={6}
                  name="verification_code"
                  value={code}
                  // size={Size.Large}
                />
              </InputRow>

              <Button
                borderRadius={Amount.Least}
                onClick={() => {
                  if (userId && code) {
                    dispatch(verifyCode({ code, userId }));
                  }
                }}
                lineHeight={Size.Large}
                state={{
                  disabled:
                    (problems && problems.length > 0) ||
                    !code ||
                    code.length !== 6 ||
                    verificationState.verify.inProgress ||
                    verificationState.resend.inProgress,
                }}
                type={ButtonType.Primary}
              >
                Verify
              </Button>
            </Container>

            <Container
              alignHorizontal={AlignHorizontal.Center}
              padding={Amount.Default}
            >
              {!verificationState.resend.success ? (
                <Button
                  onClick={() => {
                    if (userId) {
                      dispatch(resendVerificationCode({ userId }));
                    }
                  }}
                  type={ButtonType.Link}
                >
                  Resend verification code
                </Button>
              ) : (
                <Label
                  icon={{
                    name: BasicIcons.Checkmark2,
                    size: Size.Smaller,
                  }}
                  lineHeight={Size.Smaller}
                  textSize={TextSize.Default}
                  textColor={TextColor.Success}
                  textWeight={TextWeight.More}
                >
                  A new code has been sent
                </Label>
              )}
            </Container>
          </>
        )}

        {/* 
          <Form>
            {error && <ErrorContainer message={errorMessage} />}

            <Row>
              <TextInput
                onChange={val => {
                  setConfirmationCode(val?.toString());
                }}
                type="text"
                placeholderText="Confirmation code"
              />
            </Row>
            <FormActions>
              <Button
                disabled={(canSubmit && !confirmationCode) || loading}
                onClick={handleConfirmSignup}
                grow={true}
              >
                Complete sign up
              </Button>

              <CodeSend>
                {resendConfirmationCodeResult === 'NOT_SENT' ? (
                  <button onClick={() => resendCode()}>Resend code</button>
                ) : (
                  <span>Code sent!</span>
                )}
              </CodeSend>
            </FormActions>
          </Form> */}
      </Container>
    );
  },
);
