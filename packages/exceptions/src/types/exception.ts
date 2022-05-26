import {
  FormValidationProblem,
  HttpRequest,
  LogLevel,
  Model,
  ModelField,
  ModelValidationProblem,
  Task,
} from '@srclaunch/types';
import { Exception } from '../lib/exception';
import { ExceptionRemediation } from './remediation';

export enum ExceptionCode {
  /* Generic or other exceptions of unknown origin */
  Warning = 999,
  Exception,
  UnmanagedException,
  CaughtException,
  UncaughtException,
  UnhandledPromiseRejectionException,

  /* User Authenticationn/permissions related exceptions */
  AuthenticationException = 2000,
  AuthenticationExpiredAccessTokenException,
  AuthenticationInvalidAccessTokenException,
  AuthenticationMissingAccessTokenException,
  AuthenticationExpiredRefreshTokenException,
  AuthenticationInvalidRefreshTokenException,
  AuthenticationMissingRefreshTokenException,
  AuthenticationMissingDeviceKeyException,
  AuthenticationUnAuthorizedAccessException,
  AuthenticationCodeMismatchException,
  AuthenticationExpiredCodeException,
  AuthenticationLoginException,
  AuthenticationLoginInvalidCredentialsException,
  AuthenticationLoginTooManyFailedAttemptsException,
  AuthenticationLimitExceededException,
  AuthenticationUnauthorizedAccessException,
  AuthenticationTooManyRequestsException,
  AuthenticationUserNotFoundException,
  AuthenticationSignupException,
  AuthenticationUsernameAvailabilityCheckException,
  AuthenticationUsernameExistsException,
  AuthenticationAliasExistException,
  AuthenticationCodeDeliveryFailureException,
  AuthenticationMFAMethodNotFoundException,
  AuthenticationNotAuthorizedException,
  AuthenticationPasswordResetRequiredException,
  AuthenticationUserNotConfirmedException,

  /* Database related exceptions */
  DatabaseException = 3000,
  SequelizeNotInitializedException,

  /* Server process exceptions */
  ProcessException = 4000,
  ProcessWarningException,
  KillProcessException,
  FatalException,
  ProcessSigTermException,
  ProcessSigIntException,
  MissingEnvironmentVariable,

  /* Network related exceptions */
  NetworkException = 5000,
  HttpException,
  HttpRequestException,
  HttpRequestResourceNotFoundException,
  HttpResponseException,

  /* Exceptions originating from a third-party and/or service integration */
  ServiceProviderException = 6000,

  // AWS
  AWSException,
  AWSMissingAccessKeyException,
  AWSMissingSecretKeyException,

  // AWS Cognito
  CognitoException,
  CognitoInternalErrorException,
  CognitoInvalidEmailRoleAccessPolicyException,
  CognitoInvalidLambdaResponseException,
  CognitoUserLambdaValidationException,
  CognitoInvalidParameterException,
  CognitoInvalidSmsRoleAccessPolicyException,
  CognitoInvalidSmsRoleTrustRelationshipException,
  CognitoInvalidUserPoolConfigurationException,
  CognitoResourceNotFoundException,
  CognitoMissingUserPoolClientIdException,
  CognitoMissingUserPoolIdException,
  CognitoUnexpectedLambdaException,

  // Stripe
  StripeException,
  StripeMissingSecretKeyException,
  StripeSubscriptionCreationFailedException,
  StripePaymentMethodRequiredException,

  /* Exceptions associated with core entities and business objects */
  UserException = 7000,
  NullUserException,
  UserStateConflictException,
  NullAccountException,

  /* Validation exceptions caused by input that is invalid or unexpected */
  ValidationException = 8000,
  InvalidTypeException,
  MissingArgumentException,
  MissingPropertyException,
  InvalidArgumentException,
  InvalidPropertyException,
  MissingRequestBodyPropertyException,
  MissingRequestUrlParameterException,
  MissingCookieException,
}

/**
 *
 * Base exception and inherited classes constructor arguments
 * @constructor
 * @arg {Record<string, unknown>} context - Contextual data related to the exception that can be used for debugging
 * @arg {string} file - The file the exception originated in. Useful for debugging.
 * @arg {string} func - The function or method the exception originated in. Useful for debugging.
 * @arg {string} description - A developer friendly description of the exception.
 * @arg {Model['id']} model.id - The unique id of the model associated with the exception.
 * @arg {Model['type']} model.type - The type of model associated with the exception.
 * @arg {Record<string,string>} request.headers - The request headers.
 * @arg {string} field - The name of the field as passed in the request if a validation error occurs.
 * @arg {string} request.id - A unique ID associated with the request used for tracing the exception.
 * @arg {any} request.body - The body payload of the request.
 * @arg {Record<string,string>} request.headers - The request headers.
 * @arg {string} request.host - The HTTP host the requested resource is accessible from.
 * @arg {string} request.method - The request's HTTP method.
 * @arg {string} request.resource - The HTTP resource being requested.
 * @arg {any} response.body - The response body payload.
 * @arg {HttpResponseCode} response.code - The HTTP response status code.
 * @arg {HttpResponseCodeDetails} response.details - The headers returned from the response.
 * @arg {Record<string,string>} response.headers - The headers returned from the response.
 * @arg {string} request.method - The request's HTTP method.
 * @arg {string} request.resource - The HTTP resource being requested.
 * @arg {string} scope - Higher-level scope of the exception.
 * @arg {ExceptionRemediation} remediation - Recommended remediation details.
 * @arg {Record<string, unknown>} tags - Key/value tags associated with an exception.
 * @arg {Task['id']} task.id - The unique id of a Task associated with the exception.
 * @arg {string} user.email - The user's email address.
 * @arg {string} user.phone - The user's telephone number.
 */
export type ExceptionConstructorArgs = {
  cause?: Exception | Error;
  context?: Record<string, unknown>;
  data?: unknown;
  description?: string;
  model?: {
    name: Model['name'];
    field?: ModelField['name'];
    problem?: ModelValidationProblem;
  };
  form?: {
    field?: string;
    problem?: FormValidationProblem;
  };
  friendlyMessage?: string;
  logLevel?: LogLevel.Critical | LogLevel.Exception | LogLevel.Warning;
  origin?: {
    block?: string;
    file?: string;
    function?: string;
  };
  pii?: boolean;
  request?: HttpRequest;
  response?: {
    status?: {
      code: number;
    };
  };
  scope?: string;
  remediation?: ExceptionRemediation;
  tags?: Record<string, unknown>;
  task?: {
    id: Task['id'];
  };
  user?: {
    id?: string;
    email?: string;
    phone?: string;
  };
};

export type ExceptionObject = ExceptionConstructorArgs & {
  created: string;
  id?: string;
  name?: string;
  stack?: string;
  message?: string;
  code?: string;
};
