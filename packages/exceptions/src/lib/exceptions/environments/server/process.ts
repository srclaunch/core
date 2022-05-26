import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../../exception.js';
import { ExceptionCode } from '../../../../types/index.js';

export class ProcessException extends Exception {
  override code = ExceptionCode.ProcessException;
  override description = 'A exception was caught in a process.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
}

export class ProcessWarningException extends ProcessException {
  override code = ExceptionCode.ProcessWarningException;
  override description = 'A warning was caught in a process.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
}

export class KillProcessException extends ProcessException {
  override code = ExceptionCode.KillProcessException;
  override description = 'Exception thrown to kill a Node.js "gracefully".';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class ProcessSigTermException extends ProcessException {
  override code = ExceptionCode.ProcessSigTermException;
  override description = 'Process received SIGTERM termination code.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class ProcessSigIntException extends ProcessException {
  override code = ExceptionCode.ProcessSigIntException;
  override description = 'Process received SIGINT termination code.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class FatalException extends ProcessException {
  override code = ExceptionCode.FatalException;
  override description = 'An fatal exception occurred which has crashed the server.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class MissingEnvironmentVariable extends ProcessException {
  override code = ExceptionCode.MissingEnvironmentVariable;
  override description = 'An environment variable is not set or unavailable.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}
