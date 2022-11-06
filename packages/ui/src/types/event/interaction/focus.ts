import { FocusEventHandler } from 'react';

export type FocusEventProps<E = Element> = {
  readonly onBlur?: FocusEventHandler<E>;
  readonly onFocus?: FocusEventHandler<E>;
};
