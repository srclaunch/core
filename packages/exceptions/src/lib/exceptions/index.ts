import { LogLevel } from '@srclaunch/types';
import { Exception } from '../exception.js';
import { ExceptionCode } from '../../types/index.js';
import { ExceptionRemediation } from '../../types/remediation';

export class Warning extends Exception {
  override code = ExceptionCode.Warning;
  override description = 'A warning exception has been thrown.';
  override friendlyMessage = 'An unknown warning has occurred.';
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export class UnmanagedException extends Exception {
  override code = ExceptionCode.UnmanagedException;
  override description = 'An "Error" object that isn\'t managed by AppLab';
  override friendlyMessage = 'An unknown error has occurred.';
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export class CaughtException extends Exception {
  override code = ExceptionCode.CaughtException;
  override description = 'An exception was caught within a try block.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export class UncaughtException extends Exception {
  override code = ExceptionCode.UncaughtException;
  override description =
    'An uncaught exception bubbled up and was caught automatically.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export class UnhandledPromiseRejectionException extends Exception {
  override code = ExceptionCode.UnhandledPromiseRejectionException;
  override description = 'An unhandled promise rejection was caught automatically.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}
