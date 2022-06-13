import { UncaughtException } from '@srclaunch/exceptions';
import { Logger } from '@srclaunch/logger';
import { Middleware } from 'redux';

import { RootState } from '../types';

const logger = new Logger();

const exceptionLogger: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = store => next => action => {
  try {
    return next(action);
  } catch (error: any) {
    const exception = new UncaughtException(error.name, { cause: error });

    logger.exception(exception.toJSON());

    // Raven.captureException(err, {
    //   extra: {
    //     action,
    //     state: store.getState()
    //   }
    // });
    throw error;
  }
};

export default exceptionLogger;
