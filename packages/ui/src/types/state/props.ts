import { Exception, Warning } from '@srclaunch/exceptions';
import { ValidationProblem } from '@srclaunch/validation';

export type StateProps<P = Record<string, unknown>> = {
  readonly active?: Partial<P>;
  readonly authenticated?: Partial<P>;
  readonly current?: Partial<P>;
  readonly disabled?: Partial<P>;
  readonly dropdownVisible?: Partial<P>;
  readonly error?: Partial<P>;
  readonly focused?: Partial<P>;
  readonly hidden?: Partial<P>;
  readonly hovered?: Partial<P>;
  readonly loaded?: Partial<P>;
  readonly loading?: Partial<P>;
  readonly on?: Partial<P>;
  readonly state?: Record<string, unknown> & {
    readonly active?: boolean;
    readonly authenticated?: boolean;
    readonly current?: boolean;
    readonly disabled?: boolean;
    readonly dropdownVisible?: boolean;
    readonly error?:
      | Exception
      | ValidationProblem
      | boolean
      | string
      | readonly Exception[]
      | readonly ValidationProblem[];
    readonly focused?: boolean;
    readonly hidden?: boolean;
    readonly hovered?: boolean;
    readonly loaded?: boolean;
    readonly loading?: boolean;
    readonly on?: boolean;
    readonly success?: boolean;
    readonly unauthenticated?: boolean;
    readonly visible?: boolean;
    readonly warning?:
      | ValidationProblem
      | Warning
      | boolean
      | string
      | readonly ValidationProblem[]
      | readonly Warning[];
  };
  readonly success?: P;
  readonly unauthenticated?: P;
  readonly visible?: P;
  readonly warning?: P;
};
