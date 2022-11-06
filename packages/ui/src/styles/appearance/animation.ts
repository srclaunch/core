import { nanoid } from 'nanoid';
import { css, SimpleInterpolation } from 'styled-components';

import {
  AnimationEasing,
  AnimationIteration,
  AnimationProps,
  AnimationState,
} from '../../types/index';
import { getContainerStyles } from '../container';

export function getAnimationKeyframes({
  animationName,
  animateTo,
  animateFrom,
}: AnimationProps): SimpleInterpolation {
  return css`
    @keyframes ${animationName} {
      from {
        ${getContainerStyles({ ...animateFrom })}
      }

      to {
        ${getContainerStyles({ ...animateTo })}
      }
    }
  `;
}

export function getAnimationStyles({
  animationDelay = 0,
  animationDuration = 3000,
  animationEasing = AnimationEasing.Linear,
  animationIterations = AnimationIteration.Infinite,
  animateFrom,
  animateTo,
  animationName,
  animationState = AnimationState.Running,
}: AnimationProps): SimpleInterpolation {
  if (!animationName || animateTo || animateFrom) {
    return;
  }

  const name = animationName ?? `animation_${nanoid()}`;

  return css`
    animation: ${name};
    animation-delay: ${animationDelay}s;
    animation-duration: ${animationDuration}s;
    animation-iteration-count: ${animationIterations};
    animation-play-state: ${animationState};
    animation-timing-function: ${animationEasing};

    ${animateFrom &&
    animateTo &&
    getAnimationKeyframes({
      animateFrom,
      animateTo,
      animationName: name,
    })}
  `;
}

export const AnimationStyles = css<AnimationProps>`
  ${props => getAnimationStyles(props)}
`;
