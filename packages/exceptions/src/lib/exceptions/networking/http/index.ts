import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../../types/index.js';
import { RetryStrategy } from '../../../../types/remediation.js';
import { ExceptionRemediation } from '../../../../types/remediation';
import { Exception } from '../../../exception.js';
import { NetworkException } from '../index.js';

export class HttpException extends NetworkException {
  override code = ExceptionCode.HttpException;
  override description =
    'A generic or unknown exception occurred related to an HTTP request.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.CircuitBreaker,
    },
  };
}

export class HttpRequestException extends HttpException {
  override code = ExceptionCode.HttpRequestException;
  override description =
    'Base class for generic or unknown exceptions ' +
    'occuring during an HTTP request.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.CircuitBreaker,
    },
  };
}

export class HttpRequestResourceNotFoundException extends HttpRequestException {
  override code = ExceptionCode.HttpRequestResourceNotFoundException;
  override description = 'The requested HTTP resource could not be found.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 404,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.CircuitBreaker,
    },
  };
}

/**
 * @class Class used when a request's body is missing an object property.
 */
export class MissingRequestBodyPropertyException extends HttpRequestException {
  override code = ExceptionCode.MissingRequestBodyPropertyException;
  override description = 'HTTP request body is missing a required property.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class MissingRequestUrlParameterException extends HttpRequestException {
  override code = ExceptionCode.MissingRequestUrlParameterException;
  override description = 'HTTP request URL is missing a required parameter.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class MissingCookieException extends HttpRequestException {
  override code = ExceptionCode.MissingCookieException;
  override description = 'A required cookie is missing.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class HttpResponseException extends HttpException {
  override code = ExceptionCode.HttpRequestException;
  override description = 'Generic or unknown exceptions related to HTTP responses.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}
