import {
  ExceptionRemediation,
  LogLevel,
  RetryStrategy,
} from '@srclaunch/types';

import { ExceptionCode } from '../../../types/index';
import { Exception } from '../../exception';

/*********************************/
/* Network (HTTP, WS) exceptions */
/*********************************/

export class NetworkException extends Exception {
  override readonly code: ExceptionCode = ExceptionCode.NetworkException;
  override readonly description: string =
    'A network related issue has occurred.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
}

export class HttpException extends NetworkException {
  override readonly code: ExceptionCode = ExceptionCode.HttpException;
  override readonly description: string =
    'A generic or unknown exception occurred related to an HTTP request.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
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
  override readonly code: ExceptionCode = ExceptionCode.HttpRequestException;
  override readonly description: string =
    'Base class for generic or unknown exceptions ' +
    'occuring during an HTTP request.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
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
  override readonly code = ExceptionCode.HttpRequestResourceNotFoundException;
  override readonly description =
    'The requested HTTP resource could not be found.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
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
  override readonly code = ExceptionCode.MissingRequestBodyPropertyException;
  override readonly description =
    'HTTP request body is missing a required property.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class MissingRequestUrlParameterException extends HttpRequestException {
  override readonly code = ExceptionCode.MissingRequestUrlParameterException;
  override readonly description =
    'HTTP request URL is missing a required parameter.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class MissingCookieException extends HttpRequestException {
  override readonly code = ExceptionCode.MissingCookieException;
  override readonly description = 'A required cookie is missing.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class HttpResponseException extends HttpException {
  override readonly code = ExceptionCode.HttpRequestException;
  override readonly description =
    'Generic or unknown exceptions related to HTTP responses.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}
