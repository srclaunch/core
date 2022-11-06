import { css, SimpleInterpolation } from 'styled-components';

export function getHiddenStateStyles(): SimpleInterpolation {
  return css`
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  `;
}
