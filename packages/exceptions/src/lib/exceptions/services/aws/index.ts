import { LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../../types/index';
import {
  ExceptionRemediation,
  RetryStrategy,
} from '../../../../types/remediation';
import { Exception } from '../../../exception';
import { ServiceProviderException } from '../index';

export class AWSException extends ServiceProviderException {
  override code = ExceptionCode.AWSException;
  override description =
    'An exception originating from the AWS integration occurred.';
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

export class AWSMissingAccessKeyException extends AWSException {
  override code = ExceptionCode.StripeMissingSecretKeyException;
  override description = 'Missing AWS access key token.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class AWSMissingSecretKeyException extends AWSException {
  override code = ExceptionCode.StripeMissingSecretKeyException;
  override description = 'Missing AWS secret key token.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}
