import { HttpResponseCode } from '../../networking/http';

export enum RetryStrategy {
  Simple = 'simple',
  ExponentialBackoff = 'exponential',
  CircuitBreaker = 'circuit_breaker',
}

export type ExceptionRemediation = {
  readonly response?: {
    readonly code?: HttpResponseCode;
  };
  readonly retry?:
    | boolean
    | {
        readonly limit?: number;
        readonly strategy?: RetryStrategy;
      };
};
