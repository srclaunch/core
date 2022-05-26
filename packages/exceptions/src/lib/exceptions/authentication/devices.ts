import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { Exception } from '../../exception.js';
import { AuthenticationException } from './index.js';

export class AuthenticationMissingDeviceKeyException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationMissingDeviceKeyException;
  override description = "The device key associated with the user's session is missing.";
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 401,
    },
    retry: false,
  };
}
