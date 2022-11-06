// import { Logger } from '@srclaunch/logger';
import { NextFunction, Request, Response } from 'express';

import { Exception } from '../../index';

export const expressExceptionMiddleware = (
  err: Exception | Error,
  // logger: Logger,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const log = logger ?? new Logger();

  if (err instanceof Exception) {
    // log.exception(err.toJSON());
  } else if (err instanceof Error) {
    const exception = new Exception(err.message, { cause: err });

    // log.exception(exception.toJSON());
  }

  next();
};
