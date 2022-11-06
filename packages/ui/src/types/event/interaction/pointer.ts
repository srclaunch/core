import { PointerEventHandler } from 'react';

export type PointerEventProps<E = Element> = {
  readonly onGotPointerCapture?: PointerEventHandler<E>;
  readonly onLostPointerCapture?: PointerEventHandler<E>;
  readonly onPointerCancel?: PointerEventHandler<E>;
  readonly onPointerDown?: PointerEventHandler<E>;
  readonly onPointerEnter?: PointerEventHandler<E>;
  readonly onPointerLeave?: PointerEventHandler<E>;
  readonly onPointerMove?: PointerEventHandler<E>;
  readonly onPointerOut?: PointerEventHandler<E>;
  readonly onPointerOver?: PointerEventHandler<E>;
  readonly onPointerUp?: PointerEventHandler<E>;
};
