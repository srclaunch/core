import {
  KillProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
  ProcessWarningException,
} from './exceptions/environments/index';
import {
  UncaughtException,
  UnhandledPromiseRejectionException,
} from './exceptions/index';

export function handleProcessInterupt(
  cb?: (exception: ProcessSigIntException) => unknown,
): void {
  process.on('SIGINT', () => {
    const exception = new ProcessSigIntException('SIGINT signal received.', {});

    if (cb) cb(exception);
  });
}

export function handleProcessTermination(
  cb?: (exception: ProcessSigTermException) => unknown,
): void {
  process.on('SIGTERM', () => {
    const exception = new ProcessSigTermException(
      'SIGTERM signal received',
      {},
    );

    if (cb) cb(exception);
  });
}

export function handleProcessExceptions(
  cb?: (
    err:
      | UncaughtException
      | UnhandledPromiseRejectionException
      | ProcessWarningException,
  ) => unknown,
): void {
  process.on('uncaughtException', async (err: UncaughtException) => {
    if (err.name !== KillProcessException.name && cb) cb(err);
  });

  process.on('unhandledRejection', async (err: Error) => {
    if (err.name !== KillProcessException.name) {
      const exception = new UnhandledPromiseRejectionException(
        `Unhandled Rejection: ${err.name}`,
        {
          cause: err,
        },
      );

      if (cb) cb(exception);
    }
  });

  process.on('warning', (err: ProcessWarningException) => {
    if (cb) cb(err);
  });
}
