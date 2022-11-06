import { UIEventHandler } from 'react';

export type ScrollEventProps<E = Element> = {
  readonly onScroll?: UIEventHandler<E>;
};
