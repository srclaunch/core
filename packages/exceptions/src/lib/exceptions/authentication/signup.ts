import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { Exception } from '../../../lib/exception.js';
import { AuthenticationException } from './index.js';

export class AuthenticationSignupException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationSignupException;
  override description = 'An exception occurred while signing up a user.';
  override friendlyMessage = 'An error occurred while signing up.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: true,
  };
}
