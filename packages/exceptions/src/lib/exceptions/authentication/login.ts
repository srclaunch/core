import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { Exception } from '../../exception.js';
import { AuthenticationException } from './index.js';

export class AuthenticationLoginException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationLoginException;
  override description = 'An exception occurred while logging a user in.';
  override friendlyMessage = 'An unknown error occurred.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: true,
  };
}
export class AuthenticationLoginInvalidCredentialsException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationLoginInvalidCredentialsException;
  override description = 'Incorrect username or password provided.';
  override friendlyMessage = 'Incorrect username or password.';
  override logLevel: Exception['logLevel'] = LogLevel.Info;
  override remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationLoginTooManyFailedAttemptsException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationLoginTooManyFailedAttemptsException;
  override description =
    'This exception is thrown when the user has provided an incorrect username or password too many times.';
  override friendlyMessage =
    "You've provided an incorrect username or password too many times.";
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 429,
    },
    retry: false,
  };
}
