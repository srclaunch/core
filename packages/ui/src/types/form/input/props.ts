import { InputType } from 'node:zlib';

import { Shadow } from '../../appearance';
import { Size } from '../../common';
import { FormInputEventProps } from '../../event';
import { ValidationProps } from '../../validation';
import { AutoComplete } from './auto-complete';

export type FormInputProps<
  V = unknown,
  E = HTMLInputElement,
> = FormInputEventProps<V, E> & {
  readonly autoComplete?: AutoComplete;
  readonly defaultValue?: V;
  readonly inputSize?: Size;
  readonly label?: string;
  readonly max?: number;
  readonly maxLength?: number;
  readonly min?: number;
  readonly name?: string;
  readonly placeholder?: string;
  // readonly ref?: ForwardedRef<E>;
  readonly prefix?: string;
  readonly shadow?: Shadow;
  readonly spellCheck?: boolean;
  readonly submitOnEnter?: boolean;
  readonly suffix?: string;
  readonly type?: InputType | string;
  readonly validation?: ValidationProps;
  readonly value?: V;
};
