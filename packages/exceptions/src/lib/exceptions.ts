import { ExceptionCode } from '../types/exception';
import { Exception } from './exception';
import { AuthenticationPasswordResetRequiredException } from './exceptions/authentication/challenges';
import {
  AuthenticationException,
  AuthenticationLimitExceededException,
  AuthenticationNotAuthorizedException,
  AuthenticationTooManyRequestsException,
  AuthenticationUnauthorizedAccessException,
  AuthenticationUserNotFoundException,
} from './exceptions/authentication/index';
import {
  AuthenticationLoginException,
  AuthenticationLoginInvalidCredentialsException,
  AuthenticationLoginTooManyFailedAttemptsException,
} from './exceptions/authentication/login';
import { AuthenticationMFAMethodNotFoundException } from './exceptions/authentication/mfa';
import { AuthenticationSignupException } from './exceptions/authentication/signup';
import {
  AuthenticationExpiredRefreshTokenException,
  AuthenticationInvalidRefreshTokenException,
  AuthenticationMissingRefreshTokenException,
} from './exceptions/authentication/tokens';
import {
  AuthenticationAliasExistException,
  AuthenticationUsernameAvailabilityCheckException,
  AuthenticationUsernameExistsException,
} from './exceptions/authentication/username-availability';
import {
  AuthenticationCodeDeliveryFailureException,
  AuthenticationCodeMismatchException,
  AuthenticationExpiredCodeException,
  AuthenticationUserNotConfirmedException,
} from './exceptions/authentication/verification';
import { DatabaseException } from './exceptions/data/db/index';
import { SequelizeNotInitializedException } from './exceptions/data/db/sequelize';
import {
  FatalException,
  KillProcessException,
  MissingEnvironmentVariable,
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
  ProcessWarningException,
} from './exceptions/environments/server/process';
import {
  CaughtException,
  UncaughtException,
  UnhandledPromiseRejectionException,
  UnmanagedException,
} from './exceptions/index';
import {
  HttpException,
  HttpRequestException,
  HttpRequestResourceNotFoundException,
  HttpResponseException,
  MissingCookieException,
  MissingRequestBodyPropertyException,
  MissingRequestUrlParameterException,
} from './exceptions/networking/http/index';
import { NetworkException } from './exceptions/networking/index';
import {
  CognitoException,
  CognitoInternalErrorException,
  CognitoInvalidEmailRoleAccessPolicyException,
  CognitoInvalidLambdaResponseException,
  CognitoInvalidParameterException,
  CognitoInvalidSmsRoleAccessPolicyException,
  CognitoInvalidSmsRoleTrustRelationshipException,
  CognitoInvalidUserPoolConfigurationException,
  CognitoMissingUserPoolClientIdException,
  CognitoMissingUserPoolIdException,
  CognitoResourceNotFoundException,
  CognitoUnexpectedLambdaException,
  CognitoUserLambdaValidationException,
} from './exceptions/services/aws/cognito/index';
import {
  AWSException,
  AWSMissingAccessKeyException,
} from './exceptions/services/aws/index';
import { ServiceProviderException } from './exceptions/services/index';
import {
  StripeException,
  StripeMissingSecretKeyException,
  StripePaymentMethodRequiredException,
  StripeSubscriptionCreationFailedException,
} from './exceptions/services/stripe/index';
import {
  NullUserException,
  UserException,
  UserStateConflictException,
} from './exceptions/user/index';
import {
  InvalidArgumentException,
  InvalidPropertyException,
  InvalidTypeException,
  MissingArgumentException,
  MissingPropertyException,
  ValidationException,
} from './exceptions/validation/index';

export const ExceptionMap: { readonly [code: number]: typeof Exception } = {
  [ExceptionCode.Exception]: Exception,
  [ExceptionCode.UnmanagedException]: UnmanagedException,
  [ExceptionCode.CaughtException]: CaughtException,
  [ExceptionCode.UncaughtException]: UncaughtException,
  [ExceptionCode.UnhandledPromiseRejectionException]:
    UnhandledPromiseRejectionException,

  [ExceptionCode.AuthenticationException]: AuthenticationException,
  [ExceptionCode.AuthenticationExpiredRefreshTokenException]:
    AuthenticationExpiredRefreshTokenException,
  [ExceptionCode.AuthenticationInvalidRefreshTokenException]:
    AuthenticationInvalidRefreshTokenException,
  [ExceptionCode.AuthenticationLoginException]: AuthenticationLoginException,
  [ExceptionCode.AuthenticationLoginInvalidCredentialsException]:
    AuthenticationLoginInvalidCredentialsException,
  [ExceptionCode.AuthenticationLoginTooManyFailedAttemptsException]:
    AuthenticationLoginTooManyFailedAttemptsException,
  [ExceptionCode.AuthenticationMissingDeviceKeyException]:
    AuthenticationMissingRefreshTokenException,
  [ExceptionCode.AuthenticationMissingRefreshTokenException]:
    AuthenticationMissingRefreshTokenException,
  [ExceptionCode.AuthenticationUnauthorizedAccessException]:
    AuthenticationUnauthorizedAccessException,
  [ExceptionCode.AuthenticationCodeMismatchException]:
    AuthenticationCodeMismatchException,
  [ExceptionCode.AuthenticationExpiredCodeException]:
    AuthenticationExpiredCodeException,
  [ExceptionCode.AuthenticationLimitExceededException]:
    AuthenticationLimitExceededException,
  [ExceptionCode.AuthenticationNotAuthorizedException]:
    AuthenticationNotAuthorizedException,

  [ExceptionCode.AuthenticationTooManyRequestsException]:
    AuthenticationTooManyRequestsException,
  [ExceptionCode.AuthenticationUserNotFoundException]:
    AuthenticationUserNotFoundException,
  [ExceptionCode.AuthenticationSignupException]: AuthenticationSignupException,
  [ExceptionCode.AuthenticationUsernameAvailabilityCheckException]:
    AuthenticationUsernameAvailabilityCheckException,
  [ExceptionCode.AuthenticationAliasExistException]:
    AuthenticationAliasExistException,
  [ExceptionCode.AuthenticationUsernameExistsException]:
    AuthenticationUsernameExistsException,
  [ExceptionCode.AuthenticationCodeDeliveryFailureException]:
    AuthenticationCodeDeliveryFailureException,
  [ExceptionCode.AuthenticationMFAMethodNotFoundException]:
    AuthenticationMFAMethodNotFoundException,
  [ExceptionCode.AuthenticationPasswordResetRequiredException]:
    AuthenticationPasswordResetRequiredException,
  [ExceptionCode.AuthenticationUserNotConfirmedException]:
    AuthenticationUserNotConfirmedException,

  [ExceptionCode.DatabaseException]: DatabaseException,
  [ExceptionCode.SequelizeNotInitializedException]:
    SequelizeNotInitializedException,

  [ExceptionCode.ServiceProviderException]: ServiceProviderException,
  [ExceptionCode.AWSException]: AWSException,
  [ExceptionCode.AWSMissingAccessKeyException]: AWSMissingAccessKeyException,
  [ExceptionCode.AWSMissingSecretKeyException]: AWSMissingAccessKeyException,
  [ExceptionCode.CognitoException]: CognitoException,
  [ExceptionCode.CognitoInternalErrorException]: CognitoInternalErrorException,
  [ExceptionCode.CognitoInvalidEmailRoleAccessPolicyException]:
    CognitoInvalidEmailRoleAccessPolicyException,
  [ExceptionCode.CognitoInvalidSmsRoleAccessPolicyException]:
    CognitoInvalidSmsRoleAccessPolicyException,
  [ExceptionCode.CognitoInvalidSmsRoleTrustRelationshipException]:
    CognitoInvalidSmsRoleTrustRelationshipException,
  [ExceptionCode.CognitoUnexpectedLambdaException]:
    CognitoUnexpectedLambdaException,
  [ExceptionCode.CognitoInvalidUserPoolConfigurationException]:
    CognitoInvalidUserPoolConfigurationException,
  [ExceptionCode.CognitoInvalidLambdaResponseException]:
    CognitoInvalidLambdaResponseException,
  [ExceptionCode.CognitoInvalidParameterException]:
    CognitoInvalidParameterException,
  [ExceptionCode.CognitoMissingUserPoolIdException]:
    CognitoMissingUserPoolIdException,
  [ExceptionCode.CognitoMissingUserPoolClientIdException]:
    CognitoMissingUserPoolClientIdException,
  [ExceptionCode.CognitoResourceNotFoundException]:
    CognitoResourceNotFoundException,
  [ExceptionCode.CognitoUserLambdaValidationException]:
    CognitoUserLambdaValidationException,
  [ExceptionCode.StripeException]: StripeException,
  [ExceptionCode.StripeSubscriptionCreationFailedException]:
    StripeSubscriptionCreationFailedException,
  [ExceptionCode.StripeMissingSecretKeyException]:
    StripeMissingSecretKeyException,
  [ExceptionCode.StripePaymentMethodRequiredException]:
    StripePaymentMethodRequiredException,
  [ExceptionCode.NetworkException]: NetworkException,
  [ExceptionCode.HttpException]: HttpException,
  [ExceptionCode.HttpRequestException]: HttpRequestException,
  [ExceptionCode.HttpRequestResourceNotFoundException]:
    HttpRequestResourceNotFoundException,
  [ExceptionCode.HttpResponseException]: HttpResponseException,
  [ExceptionCode.MissingRequestBodyPropertyException]:
    MissingRequestBodyPropertyException,
  [ExceptionCode.MissingRequestUrlParameterException]:
    MissingRequestUrlParameterException,
  [ExceptionCode.MissingCookieException]: MissingCookieException,

  [ExceptionCode.ValidationException]: ValidationException,
  [ExceptionCode.InvalidArgumentException]: InvalidArgumentException,
  [ExceptionCode.InvalidPropertyException]: InvalidPropertyException,
  [ExceptionCode.InvalidTypeException]: InvalidTypeException,
  [ExceptionCode.MissingArgumentException]: MissingArgumentException,
  [ExceptionCode.MissingPropertyException]: MissingPropertyException,

  [ExceptionCode.ProcessException]: ProcessException,
  [ExceptionCode.ProcessWarningException]: ProcessWarningException,
  [ExceptionCode.ProcessSigTermException]: ProcessSigTermException,
  [ExceptionCode.ProcessSigIntException]: ProcessSigIntException,
  [ExceptionCode.FatalException]: FatalException,
  [ExceptionCode.MissingEnvironmentVariable]: MissingEnvironmentVariable,
  [ExceptionCode.KillProcessException]: KillProcessException,

  [ExceptionCode.UserException]: UserException,
  [ExceptionCode.NullUserException]: NullUserException,
  [ExceptionCode.UserStateConflictException]: UserStateConflictException,
};

export function getExceptionInstance(code: ExceptionCode) {
  return ExceptionMap[code];
}
