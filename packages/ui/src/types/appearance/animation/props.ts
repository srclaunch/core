import { SelfProps } from '../../type';
import { AnimationEasing } from './easing';
import { Animation } from './enum';
import { AnimationState } from './state';

export type AnimationProps<P = SelfProps> = {
  readonly animateFrom?: P;
  readonly animateTo?: P;
  readonly animationDelay?: number;
  readonly animationDuration?: number;
  readonly animationEasing?: AnimationEasing;
  readonly animationIterations?: number | string;
  readonly animationName?: Animation | string;
  readonly animationState?: AnimationState;
};
