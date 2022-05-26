import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { RetryStrategy } from '../../../types/remediation.js';
import { ExceptionRemediation } from '../../../types/remediation';
import { ExceptionCode } from '../../../types/index.js';

/*******************************/
/* Service provider exceptions */
/*******************************/

export class ServiceProviderException extends Exception {
  override code = ExceptionCode.ServiceProviderException;
  override description =
    'An error originating from a third-party or service provider occurred.';
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
