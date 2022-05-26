import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../../exception.js';
import { ExceptionCode } from '../../../../types/index.js';

/*******************************/
/* Database related exceptions */
/*******************************/

export class DatabaseException extends Exception {
  override code = ExceptionCode.DatabaseException;
  override description = 'Generic or unknown database exceptions.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
}
