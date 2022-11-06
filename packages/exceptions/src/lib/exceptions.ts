import { ExceptionCode } from '../types/index';
import { Exception } from './exception';
import {
  AuthenticationAliasExistException,
  AuthenticationCodeDeliveryFailureException,
  AuthenticationCodeMismatchException,
  AuthenticationException,
  AuthenticationExpiredCodeException,
  AuthenticationExpiredRefreshTokenException,
  AuthenticationInvalidRefreshTokenException,
  AuthenticationLimitExceededException,
  AuthenticationLoginException,
  AuthenticationLoginInvalidCredentialsException,
  AuthenticationLoginTooManyFailedAttemptsException,
  AuthenticationMFAMethodNotFoundException,
  AuthenticationMissingRefreshTokenException,
  AuthenticationNotAuthorizedException,
  AuthenticationPasswordResetRequiredException,
  AuthenticationSignupException,
  AuthenticationTooManyRequestsException,
  AuthenticationUnauthorizedAccessException,
  AuthenticationUsernameAvailabilityCheckException,
  AuthenticationUsernameExistsException,
  AuthenticationUserNotConfirmedException,
  AuthenticationUserNotFoundException,
} from './exceptions/authentication/index';
import {
  DatabaseException,
  SequelizeNotInitializedException,
} from './exceptions/data/index';
import {
  FatalException,
  KillProcessException,
  MissingEnvironmentVariable,
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
  ProcessWarningException,
} from './exceptions/environments/index';
import {
  CaughtException,
  UncaughtException,
  UnhandledPromiseRejectionException,
  UnmanagedException,
  Warning,
} from './exceptions/index';
import {
  HttpException,
  HttpRequestException,
  HttpRequestResourceNotFoundException,
  HttpResponseException,
  MissingCookieException,
  MissingRequestBodyPropertyException,
  MissingRequestUrlParameterException,
  NetworkException,
} from './exceptions/networking/index';
import {
  AWSException,
  AWSMissingAccessKeyException,
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
  ServiceProviderException,
  StripeException,
  StripeMissingSecretKeyException,
  StripePaymentMethodRequiredException,
  StripeSubscriptionCreationFailedException,
} from './exceptions/services/index';
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
  [ExceptionCode.Warning]: Warning,
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

export {
  AuthenticationAliasExistException,
  AuthenticationCodeDeliveryFailureException,
  AuthenticationCodeMismatchException,
  AuthenticationException,
  AuthenticationExpiredCodeException,
  AuthenticationExpiredRefreshTokenException,
  AuthenticationInvalidRefreshTokenException,
  AuthenticationLimitExceededException,
  AuthenticationLoginException,
  AuthenticationLoginInvalidCredentialsException,
  AuthenticationLoginTooManyFailedAttemptsException,
  AuthenticationMFAMethodNotFoundException,
  AuthenticationMissingRefreshTokenException,
  AuthenticationNotAuthorizedException,
  AuthenticationPasswordResetRequiredException,
  AuthenticationSignupException,
  AuthenticationTooManyRequestsException,
  AuthenticationUnauthorizedAccessException,
  AuthenticationUsernameAvailabilityCheckException,
  AuthenticationUsernameExistsException,
  AuthenticationUserNotConfirmedException,
  AuthenticationUserNotFoundException,
} from './exceptions/authentication/index';
export {
  DatabaseException,
  SequelizeNotInitializedException,
} from './exceptions/data/index';
export {
  FatalException,
  KillProcessException,
  MissingEnvironmentVariable,
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
  ProcessWarningException,
} from './exceptions/environments/index';
export {
  CaughtException,
  UncaughtException,
  UnhandledPromiseRejectionException,
  UnmanagedException,
} from './exceptions/index';
export {
  HttpException,
  HttpRequestException,
  HttpRequestResourceNotFoundException,
  HttpResponseException,
  MissingCookieException,
  MissingRequestBodyPropertyException,
  MissingRequestUrlParameterException,
} from './exceptions/networking/index';
export { NetworkException } from './exceptions/networking/index';
export {
  AWSException,
  AWSMissingAccessKeyException,
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
  ServiceProviderException,
  StripeException,
  StripeMissingSecretKeyException,
  StripePaymentMethodRequiredException,
  StripeSubscriptionCreationFailedException,
} from './exceptions/services/index';
export {
  NullUserException,
  UserException,
  UserStateConflictException,
} from './exceptions/user/index';
export {
  InvalidArgumentException,
  InvalidPropertyException,
  InvalidTypeException,
  MissingArgumentException,
  MissingPropertyException,
  ValidationException,
} from './exceptions/validation/index';
