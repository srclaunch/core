import { ValidationProblem } from '@srclaunch/validation';
import { FormEventHandler } from 'react';

import { FormField } from '../../form';

export type FormEventProps<E = HTMLFormElement> = {
  readonly onCancel?: () => void;
  readonly onChange?: (v: {
    readonly data?: {
      readonly [key: string]: any;
    };
    readonly fields: {
      readonly [key: string]: FormField;
    };
    readonly validation?: {
      readonly problems?: ReadonlyArray<ValidationProblem>;
      readonly validated?: boolean;
    };
  }) => void;
  readonly onInput?: FormEventHandler<E>;
  readonly onInvalid?: FormEventHandler<E>;
  readonly onReset?: FormEventHandler<E>;
  readonly onSubmit?: (v: {
    readonly data?: {
      readonly [key: string]: any;
    };
    readonly fields: {
      readonly [key: string]: FormField;
    };
    readonly validation?: {
      readonly problems?: ReadonlyArray<ValidationProblem>;
      readonly validated?: boolean;
    };
  }) => void;
};
