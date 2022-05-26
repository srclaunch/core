import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { RetryStrategy } from '../../../types/remediation.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { Exception } from '../../../lib/exception.js';
import { AuthenticationException } from './index.js';

export class AuthenticationCodeDeliveryFailureException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationCodeDeliveryFailureException;
  override description =
    'This exception is thrown when a verification code fails to deliver successfully.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
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
  override code = ExceptionCode.AuthenticationCodeMismatchException;
  override description = 'The verification code provided is incorrect';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class AuthenticationExpiredCodeException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationExpiredCodeException;
  override description = 'The verification code provided has expired';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}

export class AuthenticationUserNotConfirmedException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationUserNotConfirmedException;
  override description =
    'This exception is thrown when a user who is not confirmed attempts to login.';
  override friendlyMessage =
    "You haven't verified your email address or telephone number yet";
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}
