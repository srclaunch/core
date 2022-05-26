import { LogLevel } from '@srclaunch/types';
import { DatabaseException } from './index.js';
import { ExceptionCode } from '../../../../types/index.js';
import { Exception } from '../../../exception.js';

export class SequelizeNotInitializedException extends DatabaseException {
  override code = ExceptionCode.SequelizeNotInitializedException;
  override description = 'Generic or unknown database exceptions.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
}
