import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { RetryStrategy } from '../../../types/remediation.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { Exception } from '../../../lib/exception.js';
import { AuthenticationException } from './index.js';

export class AuthenticationMFAMethodNotFoundException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationMFAMethodNotFoundException;
  override description =
    'This exception is thrown when the Auth service cannot ' +
    'find a multi-factor authentication (MFA) method.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}
