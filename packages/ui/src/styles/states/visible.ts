import { css, SimpleInterpolation } from 'styled-components';

export function getVisibleStateStyles(): SimpleInterpolation {
  return css`
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  `;
}
