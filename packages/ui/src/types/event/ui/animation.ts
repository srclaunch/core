import { AnimationEventHandler } from 'react';

export type AnimationEventProps<E = Element> = {
  readonly onAnimationEnd?: AnimationEventHandler<E>;
  readonly onAnimationIteration?: AnimationEventHandler<E>;
  readonly onAnimationStart?: AnimationEventHandler<E>;
  readonly onTransitionEnd?: AnimationEventHandler<E>;
};
