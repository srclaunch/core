import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { ExceptionCode } from '../../../types/index.js';

/*********************************/
/* Network (HTTP, WS) exceptions */
/*********************************/

export class NetworkException extends Exception {
  override code = ExceptionCode.NetworkException;
  override description = 'A network related issue has occurred.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
}
