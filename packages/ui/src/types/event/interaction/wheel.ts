import { WheelEventHandler } from 'react';

export type WheelEventProps<E = Element> = {
  readonly onWheel?: WheelEventHandler<E>;
};
