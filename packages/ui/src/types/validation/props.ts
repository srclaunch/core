import { Condition } from '@srclaunch/types';
import { ValidationProblem } from '@srclaunch/validation';

export type ValidationProps = {
  readonly conditions?: {
    readonly [key in Condition]?: boolean | number | string;
  };
  readonly problems?: readonly ValidationProblem[];
  readonly validated?: boolean;
};
