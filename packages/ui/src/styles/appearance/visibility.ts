import { css, SimpleInterpolation } from 'styled-components';

import { VisibilityProps } from '../../types';

export function getVisibilityStyles({
  opacity,
  visible,
  hidden,
}: VisibilityProps): SimpleInterpolation {
  if (visible === undefined && hidden === undefined && opacity === undefined)
    return;

  return css`
    opacity: ${hidden || visible === false
      ? 0
      : `${Number.isInteger(opacity) ? opacity : 100}%`};
    pointer-events: ${hidden || visible === false ? 'none' : 'all'};

    ${(hidden || visible === false) &&
    css`
      display: none;
      visibility: hidden;
    `}
  `;
}

export const VisibilityStyles = css<VisibilityProps>`
  ${props => getVisibilityStyles(props)}
`;
