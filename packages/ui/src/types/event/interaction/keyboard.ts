import { KeyboardEventHandler } from 'react';

export type KeyboardEventProps<E = Element> = {
  readonly onKeyDown?: KeyboardEventHandler<E>;
  readonly onKeyPress?: KeyboardEventHandler<E>;
  readonly onKeyUp?: KeyboardEventHandler<E>;
};
