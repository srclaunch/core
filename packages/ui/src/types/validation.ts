import { Condition } from '@srclaunch/types';
import { ValidationProblem } from '@srclaunch/validation';

export type Validation = {
  readonly conditions?: {
    readonly [key in Condition]?: string | number | boolean;
  };
  readonly problems?: readonly ValidationProblem[];
  readonly validated?: boolean;
};
