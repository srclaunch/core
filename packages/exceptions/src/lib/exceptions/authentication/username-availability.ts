import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { Exception } from '../../exception.js';
import { AuthenticationException } from './index.js';

export class AuthenticationUsernameAvailabilityCheckException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationUsernameAvailabilityCheckException;
  override description =
    'An exception occurred while checking if a username is available.';
  override friendlyMessage =
    'An error occurred while checking if a username is available.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: true,
  };
}

export class AuthenticationUsernameExistsException extends AuthenticationUsernameAvailabilityCheckException {
  override code = ExceptionCode.AuthenticationUsernameExistsException;
  override description = 'User with email or phone number already exists.';
  override friendlyMessage = 'A user with that email already exists.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class AuthenticationAliasExistException extends AuthenticationUsernameAvailabilityCheckException {
  override code = ExceptionCode.AuthenticationAliasExistException;
  override description =
    'This exception is thrown when a user tries to confirm ' +
    'the account with an email or phone number that has already ' +
    'been supplied as an alias from a different account. This exception ' +
    'tells user that an account with this email or phone already exists';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}
