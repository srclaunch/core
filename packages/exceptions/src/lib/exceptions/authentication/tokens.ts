import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { Exception } from '../../exception.js';
import { AuthenticationException } from './index.js';

export class AuthenticationExpiredAccessTokenException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationExpiredAccessTokenException;
  override description = 'The access token associated with a session has expired.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
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
  override code = ExceptionCode.AuthenticationInvalidAccessTokenException;
  override description = 'The access token associated with a session is invalid.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationMissingAccessTokenException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationMissingAccessTokenException;
  override description = 'The access token associated with a session is missing.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationExpiredRefreshTokenException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationExpiredRefreshTokenException;
  override description = 'The refresh token associated with a session has expired.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
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
  override code = ExceptionCode.AuthenticationInvalidRefreshTokenException;
  override description = 'The refresh token associated with a session is invalid.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}

export class AuthenticationMissingRefreshTokenException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationMissingRefreshTokenException;
  override description = 'The refresh token associated with a session is missing.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}
