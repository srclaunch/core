import { TouchEventHandler } from 'react';

export type TouchEventProps<E = Element> = {
  readonly onTouchCancel?: TouchEventHandler<E>;
  readonly onTouchEnd?: TouchEventHandler<E>;
  readonly onTouchMove?: TouchEventHandler<E>;
  readonly onTouchStart?: TouchEventHandler<E>;
};
