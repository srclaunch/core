import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../../types/index.js';
import { RetryStrategy } from '../../../../types/remediation.js';
import { ExceptionRemediation } from '../../../../types/remediation';
import { Exception } from '../../../exception.js';
import { ServiceProviderException } from '../index.js';

/*********************/
/* Stripe exceptions */
/*********************/

export class StripeException extends ServiceProviderException {
  override code = ExceptionCode.StripeException;
  override description = 'An exception occurred relating to Stripe.';
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

export class StripeMissingSecretKeyException extends StripeException {
  override code = ExceptionCode.StripeMissingSecretKeyException;
  override description = 'The Stripe secret key token is missing.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class StripeSubscriptionCreationFailedException extends StripeException {
  override code = ExceptionCode.StripeSubscriptionCreationFailedException;
  override description = 'Stripe subscription creation failed.';
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

export class StripePaymentMethodRequiredException extends StripeException {
  override code = ExceptionCode.StripePaymentMethodRequiredException;
  override description = 'An updated payment method is required.';
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
