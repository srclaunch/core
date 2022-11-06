import { ReactEventHandler } from 'react';

export type DetailsEventProps<E = HTMLDetailsElement> = {
  readonly onToggle?: ReactEventHandler<E>;
};
