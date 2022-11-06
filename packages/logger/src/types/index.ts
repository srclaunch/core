import { Environment, LogLevel } from '@srclaunch/types';

import { CloudWatchConfig } from './cloudwatch';

export type LoggerConfig = {
  readonly cloudwatchConfig?: CloudWatchConfig;
  readonly environment?: Environment;
  readonly level?: LogLevel;
};

export type { CloudWatchConfig } from './cloudwatch';
export { LogLevels } from './levels';
export type { MiddlewareConfig } from './middleware';
