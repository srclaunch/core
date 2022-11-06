import { ReactEventHandler } from 'react';

export type TextEventProps<E = Element> = {
  readonly onSelect?: ReactEventHandler<E>;
};
