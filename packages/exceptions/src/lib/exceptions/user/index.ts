import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { ExceptionCode } from '../../../types/index.js';

/******************************************************/
/* User related exceptions */
/******************************************************/

export class UserException extends Exception {
  override code = ExceptionCode.UserException;
  override description = 'Generic or unknown exceptions related to a user.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
}

export class NullUserException extends UserException {
  override code = ExceptionCode.NullUserException;
  override description =
    'An operation was performed on behalf a ' +
    'user that cannot be found in the database.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class UserStateConflictException extends UserException {
  override code = ExceptionCode.UserStateConflictException;
  override description =
    'Exception used for user state that exists in one system or ' +
    "another and isn't being actively managed, or synced between " +
    'all systems, or at least differences accounted for.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}
