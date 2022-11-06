import { CompositionEventHandler } from 'react';

export type CompositionEventProps<E = Element> = {
  readonly onCompositionEnd?: CompositionEventHandler<E>;
  readonly onCompositionStart?: CompositionEventHandler<E>;
  readonly onCompositionUpdate?: CompositionEventHandler<E>;
};
