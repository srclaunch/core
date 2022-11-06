import { ReactEventHandler } from 'react';

export type ImageEventProps<E = HTMLImageElement> = {
  readonly onError?: ReactEventHandler<E>;
  readonly onLoad?: ReactEventHandler<E>;
};
