import { LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../types/index';
import { Exception } from '../../exception';

/*******************************/
/* Database related exceptions */
/*******************************/

export class DatabaseException extends Exception {
  override readonly code: ExceptionCode = ExceptionCode.DatabaseException;
  override readonly description: string =
    'Generic or unknown database exceptions.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
}

export class SequelizeNotInitializedException extends DatabaseException {
  override readonly code = ExceptionCode.SequelizeNotInitializedException;
  override readonly description = 'Generic or unknown database exceptions.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
}
