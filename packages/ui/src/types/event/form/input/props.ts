import { ChangeEventHandler } from 'react';

import { InputValueChangeHandler } from '../../../form';
import {
  ClipboardEventProps,
  FocusEventProps,
  KeyboardEventProps,
  MouseEventProps,
} from '../../interaction';

export type FormInputEventProps<
  V = unknown,
  E = HTMLInputElement,
> = ClipboardEventProps<E> &
  FocusEventProps<E> &
  KeyboardEventProps<E> &
  MouseEventProps<E> & {
    readonly onChange?: ChangeEventHandler<E>;
    readonly onValueChange?: InputValueChangeHandler<V>;
  };
