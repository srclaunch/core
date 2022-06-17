import { LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../types/index';
import { Exception } from '../../exception';

export class ProcessException extends Exception {
  override readonly code: ExceptionCode = ExceptionCode.ProcessException;
  override readonly description: string =
    'A exception was caught in a process.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
}

export class ProcessWarningException extends ProcessException {
  override readonly code = ExceptionCode.ProcessWarningException;
  override readonly description = 'A warning was caught in a process.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Warning;
}

export class KillProcessException extends ProcessException {
  override readonly code = ExceptionCode.KillProcessException;
  override readonly description =
    'Exception thrown to kill a Node "gracefully".';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class ProcessSigTermException extends ProcessException {
  override readonly code = ExceptionCode.ProcessSigTermException;
  override readonly description = 'Process received SIGTERM termination code.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class ProcessSigIntException extends ProcessException {
  override readonly code = ExceptionCode.ProcessSigIntException;
  override readonly description = 'Process received SIGINT termination code.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class FatalException extends ProcessException {
  override readonly code = ExceptionCode.FatalException;
  override readonly description =
    'An fatal exception occurred which has crashed the server.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class MissingEnvironmentVariable extends ProcessException {
  override readonly code = ExceptionCode.MissingEnvironmentVariable;
  override readonly description =
    'An environment variable is not set or unavailable.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}
