import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { ExceptionCode } from '../../../types/index.js';
import { RetryStrategy } from '../../../types/remediation.js';
import { ExceptionRemediation } from '../../../types/remediation';

export class AuthenticationException extends Exception {
  override code = ExceptionCode.AuthenticationException;
  override description =
    'Generic or unknown exceptions associated with user authentication.';
  override friendlyMessage = 'An unknown error occurred.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
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
  override code = ExceptionCode.AuthenticationUnauthorizedAccessException;
  override description = 'User lacks permissions to access the requested resource.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}

export class AuthenticationLimitExceededException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationLimitExceededException;
  override description =
    'This exception is thrown when a user exceeds the limit for a requested AWS resource';
  override friendlyMessage = 'You are trying to access this resource too often.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 429,
    },
    retry: false,
  };
}

export class AuthenticationNotAuthorizedException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationNotAuthorizedException;
  override description =
    'The Auth user does not have permission to perform this action.';
  override friendlyMessage =
    'You need to be logged in or have proper permissions to access this resource.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}

export class AuthenticationTooManyRequestsException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationTooManyRequestsException;
  override description =
    'This exception is thrown when the user has made too many requests for a given operation.';
  override friendlyMessage = 'You are trying to access this resource too often.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 429,
    },
    retry: false,
  };
}

export class AuthenticationUserNotFoundException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationUserNotFoundException;
  override description =
    'This exception is thrown when the Auth service cannot ' +
    'find a user with the provided username.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}
