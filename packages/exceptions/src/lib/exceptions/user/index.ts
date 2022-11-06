import { LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../types/index';
import { Exception } from '../../exception';

/******************************************************/
/* User related exceptions */
/******************************************************/

export class UserException extends Exception {
  override readonly code: ExceptionCode = ExceptionCode.UserException;
  override readonly description: string =
    'Generic or unknown exceptions related to a user.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Error;
}

export class NullUserException extends UserException {
  override readonly code = ExceptionCode.NullUserException;
  override readonly description =
    'An operation was performed on behalf a ' +
    'user that cannot be found in the database.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class UserStateConflictException extends UserException {
  override readonly code = ExceptionCode.UserStateConflictException;
  override readonly description =
    'Exception used for user state that exists in one system or ' +
    "another and isn't being actively managed, or synced between " +
    'all systems, or at least differences accounted for.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}
