import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { ExceptionCode } from '../../../types/index.js';
import { ExceptionRemediation } from '../../../types/remediation';

/*************************/
/* Validation exceptions */
/*************************/

export class ValidationException extends Exception {
  override code = ExceptionCode.ValidationException;
  override description = 'Generic or otherwise unknown input validation exception.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class InvalidTypeException extends Exception {
  override code = ExceptionCode.InvalidTypeException;
  override description = 'Instance type is invalid.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class MissingArgumentException extends Exception {
  override code = ExceptionCode.MissingArgumentException;
  override description = 'A required argument is missing.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class MissingPropertyException extends Exception {
  override code = ExceptionCode.MissingPropertyException;
  override description = 'A required property is missing.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class InvalidArgumentException extends Exception {
  override code = ExceptionCode.InvalidArgumentException;
  override description = 'An argument is invalid.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}

export class InvalidPropertyException extends Exception {
  override code = ExceptionCode.InvalidPropertyException;
  override description = 'An object property is invalid.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 400,
    },
    retry: false,
  };
}
