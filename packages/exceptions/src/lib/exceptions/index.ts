import { ExceptionRemediation, LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../types/index';
import { Exception } from '../exception';

export class Warning extends Exception {
  override readonly code: ExceptionCode = ExceptionCode.Warning;
  override readonly description: string =
    'A warning exception has been thrown.';
  override readonly friendlyMessage = 'An unknown warning has occurred.';
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export class UnmanagedException extends Exception {
  override readonly code = ExceptionCode.UnmanagedException;
  override readonly description =
    'An "Error" object that isn\'t managed by AppLab';
  override readonly friendlyMessage = 'An unknown error has occurred.';
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export class CaughtException extends Exception {
  override readonly code = ExceptionCode.CaughtException;
  override readonly description = 'An exception was caught within a try block.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export class UncaughtException extends Exception {
  override readonly code = ExceptionCode.UncaughtException;
  override readonly description =
    'An uncaught exception bubbled up and was caught automatically.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export class UnhandledPromiseRejectionException extends Exception {
  override readonly code = ExceptionCode.UnhandledPromiseRejectionException;
  override readonly description =
    'An unhandled promise rejection was caught automatically.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
    },
  };
}

export * from './authentication/index';
export * from './data/index';
export * from './environments/index';
export * from './networking/index';
export * from './services/index';
export * from './user/index';
export * from './validation/index';
