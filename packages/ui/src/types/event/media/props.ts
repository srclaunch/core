import { ReactEventHandler } from 'react';

export type MediaEventProps<E = HTMLAudioElement | HTMLVideoElement> = {
  readonly onAbort?: ReactEventHandler<E>;
  readonly onCanPlay?: ReactEventHandler<E>;
  readonly onCanPlayThrough?: ReactEventHandler<E>;
  readonly onDurationChange?: ReactEventHandler<E>;
  readonly onEmptied?: ReactEventHandler<E>;
  readonly onEncrypted?: ReactEventHandler<E>;
  readonly onEnded?: ReactEventHandler<E>;
  readonly onLoadStart?: ReactEventHandler<E>;
  readonly onLoadedData?: ReactEventHandler<E>;
  readonly onLoadedMetadata?: ReactEventHandler<E>;
  readonly onPause?: ReactEventHandler<E>;
  readonly onPlay?: ReactEventHandler<E>;
  readonly onPlaying?: ReactEventHandler<E>;
  readonly onProgress?: ReactEventHandler<E>;
  readonly onRateChange?: ReactEventHandler<E>;
  readonly onSeeked?: ReactEventHandler<E>;
  readonly onSeeking?: ReactEventHandler<E>;
  readonly onStalled?: ReactEventHandler<E>;
  readonly onSuspend?: ReactEventHandler<E>;
  readonly onTimeUpdate?: ReactEventHandler<E>;
  readonly onVolumeChange?: ReactEventHandler<E>;
  readonly onWaiting?: ReactEventHandler<E>;
};
