import {
  ExceptionRemediation,
  LogLevel,
  RetryStrategy,
} from '@srclaunch/types';

import { ExceptionCode } from '../../../types/index';
import { Exception } from '../../exception';

export class AuthenticationException extends Exception {
  override readonly code: ExceptionCode = ExceptionCode.AuthenticationException;
  override readonly description: string =
    'Generic or unknown exceptions associated with user authentication.';
  override readonly friendlyMessage: string = 'An unknown error occurred.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.CircuitBreaker,
    },
  };
}

export class AuthenticationUnauthorizedAccessException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationUnauthorizedAccessException;
  override readonly description =
    'User lacks permissions to access the requested resource.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}

export class AuthenticationLimitExceededException extends AuthenticationException {
  override readonly code = ExceptionCode.AuthenticationLimitExceededException;
  override readonly description =
    'This exception is thrown when a user exceeds the limit for a requested AWS resource';
  override readonly friendlyMessage =
    'You are trying to access this resource too often.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 429,
    },
    retry: false,
  };
}

export class AuthenticationNotAuthorizedException extends AuthenticationException {
  override readonly code = ExceptionCode.AuthenticationNotAuthorizedException;
  override readonly description =
    'The Auth user does not have permission to perform this action.';
  override readonly friendlyMessage =
    'You need to be logged in or have proper permissions to access this resource.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}

export class AuthenticationTooManyRequestsException extends AuthenticationException {
  override readonly code = ExceptionCode.AuthenticationTooManyRequestsException;
  override readonly description =
    'This exception is thrown when the user has made too many requests for a given operation.';
  override readonly friendlyMessage =
    'You are trying to access this resource too often.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 429,
    },
    retry: false,
  };
}

export class AuthenticationUserNotFoundException extends AuthenticationException {
  override readonly code = ExceptionCode.AuthenticationUserNotFoundException;
  override readonly description =
    'This exception is thrown when the Auth service cannot ' +
    'find a user with the provided username.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class AuthenticationMissingDeviceKeyException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationMissingDeviceKeyException;
  override readonly description =
    "The device key associated with the user's session is missing.";
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationPasswordResetRequiredException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationPasswordResetRequiredException;
  override readonly description =
    'This exception is thrown when a password reset is required.';
  override readonly friendlyMessage =
    'A password reset is required in order to login.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}

export class AuthenticationLoginException extends AuthenticationException {
  override readonly code = ExceptionCode.AuthenticationLoginException;
  override readonly description =
    'An exception occurred while logging a user in.';
  override readonly friendlyMessage = 'An unknown error occurred.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: true,
  };
}
export class AuthenticationLoginInvalidCredentialsException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationLoginInvalidCredentialsException;
  override readonly description = 'Incorrect username or password provided.';
  override readonly friendlyMessage = 'Incorrect username or password.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Info;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationLoginTooManyFailedAttemptsException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationLoginTooManyFailedAttemptsException;
  override readonly description =
    'This exception is thrown when the user has provided an incorrect username or password too many times.';
  override readonly friendlyMessage =
    "You've provided an incorrect username or password too many times.";
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 429,
    },
    retry: false,
  };
}

export class AuthenticationMFAMethodNotFoundException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationMFAMethodNotFoundException;
  override readonly description =
    'This exception is thrown when the Auth service cannot ' +
    'find a multi-factor authentication (MFA) method.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}

export class AuthenticationSignupException extends AuthenticationException {
  override readonly code = ExceptionCode.AuthenticationSignupException;
  override readonly description =
    'An exception occurred while signing up a user.';
  override readonly friendlyMessage = 'An error occurred while signing up.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: true,
  };
}

export class AuthenticationExpiredAccessTokenException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationExpiredAccessTokenException;
  override readonly description =
    'The access token associated with a session has expired.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

/**
 * This exception is thrown when the authentication server encounters an invalid access token.
 */
export class AuthenticationInvalidAccessTokenException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationInvalidAccessTokenException;
  override readonly description =
    'The access token associated with a session is invalid.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationMissingAccessTokenException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationMissingAccessTokenException;
  override readonly description =
    'The access token associated with a session is missing.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationExpiredRefreshTokenException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationExpiredRefreshTokenException;
  override readonly description =
    'The refresh token associated with a session has expired.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

/**
 * This exception is thrown when the authentication server encounters an invalid refresh token.
 */
export class AuthenticationInvalidRefreshTokenException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationInvalidRefreshTokenException;
  override readonly description =
    'The refresh token associated with a session is invalid.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationMissingRefreshTokenException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationMissingRefreshTokenException;
  override readonly description =
    'The refresh token associated with a session is missing.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationUsernameAvailabilityCheckException extends AuthenticationException {
  override readonly code: ExceptionCode =
    ExceptionCode.AuthenticationUsernameAvailabilityCheckException;
  override readonly description: string =
    'An exception occurred while checking if a username is available.';
  override readonly friendlyMessage: string =
    'An error occurred while checking if a username is available.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: true,
  };
}

export class AuthenticationUsernameExistsException extends AuthenticationUsernameAvailabilityCheckException {
  override readonly code = ExceptionCode.AuthenticationUsernameExistsException;
  override readonly description =
    'User with email or phone number already exists.';
  override readonly friendlyMessage = 'A user with that email already exists.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class AuthenticationAliasExistException extends AuthenticationUsernameAvailabilityCheckException {
  override readonly code = ExceptionCode.AuthenticationAliasExistException;
  override readonly description =
    'This exception is thrown when a user tries to confirm ' +
    'the account with an email or phone number that has already ' +
    'been supplied as an alias from a different account. This exception ' +
    'tells user that an account with this email or phone already exists';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}
export class AuthenticationCodeDeliveryFailureException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationCodeDeliveryFailureException;
  override readonly description =
    'This exception is thrown when a verification code fails to deliver successfully.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}

export class AuthenticationCodeMismatchException extends AuthenticationException {
  override readonly code = ExceptionCode.AuthenticationCodeMismatchException;
  override readonly description = 'The verification code provided is incorrect';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class AuthenticationExpiredCodeException extends AuthenticationException {
  override readonly code = ExceptionCode.AuthenticationExpiredCodeException;
  override readonly description = 'The verification code provided has expired';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}

export class AuthenticationUserNotConfirmedException extends AuthenticationException {
  override readonly code =
    ExceptionCode.AuthenticationUserNotConfirmedException;
  override readonly description =
    'This exception is thrown when a user who is not confirmed attempts to login.';
  override readonly friendlyMessage =
    "You haven't verified your email address or telephone number yet";
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}
