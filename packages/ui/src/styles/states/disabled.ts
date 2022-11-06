import { css, SimpleInterpolation } from 'styled-components';

export function getDisabledStateStyles(): SimpleInterpolation {
  return css`
    cursor: not-allowed !important;
    opacity: 0.3;
  `;
}
