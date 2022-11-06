import { ExceptionRemediation, LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../types/index';
import { Exception } from '../../exception';

/*************************/
/* Validation exceptions */
/*************************/

export class ValidationException extends Exception {
  override readonly code: ExceptionCode = ExceptionCode.ValidationException;
  override readonly description =
    'Generic or otherwise unknown input validation exception.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class InvalidTypeException extends Exception {
  override readonly code = ExceptionCode.InvalidTypeException;
  override readonly description = 'Instance type is invalid.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class MissingArgumentException extends Exception {
  override readonly code = ExceptionCode.MissingArgumentException;
  override readonly description = 'A required argument is missing.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class MissingPropertyException extends Exception {
  override readonly code = ExceptionCode.MissingPropertyException;
  override readonly description = 'A required property is missing.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class InvalidArgumentException extends Exception {
  override readonly code = ExceptionCode.InvalidArgumentException;
  override readonly description = 'An argument is invalid.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class InvalidPropertyException extends Exception {
  override readonly code = ExceptionCode.InvalidPropertyException;
  override readonly description = 'An object property is invalid.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}
