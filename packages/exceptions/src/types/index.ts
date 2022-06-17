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
