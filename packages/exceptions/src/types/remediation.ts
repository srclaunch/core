import { HttpResponseCode } from '@srclaunch/types';

export enum RetryStrategy {
  Simple = 'simple',
  ExponentialBackoff = 'exponential',
  CircuitBreaker = 'circuit_breaker',
}

export type ExceptionRemediation = {
  response?: {
    code?: HttpResponseCode;
  };
  retry?:
    | boolean
    | {
        limit?: number;
        strategy?: RetryStrategy;
      };
};
