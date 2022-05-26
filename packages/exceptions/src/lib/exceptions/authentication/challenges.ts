import { LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../types/exception.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { Exception } from '../../exception.js';
import { AuthenticationException } from './index.js';

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
