import { css, SimpleInterpolation } from 'styled-components';

import { Depth, DepthProps } from '../../types';

export function getZIndexValue(depth?: Depth): number {
  switch (depth) {
    case Depth.Lowest:
      return -3;
    case Depth.Lower:
      return -2;
    case Depth.Low:
      return -1;
    case Depth.Surface:
      return 0;
    case Depth.High:
      return 1;
    case Depth.Higher:
      return 2;
    case Depth.Highest:
      return 3;
    default:
      return 0;
  }
}

export function getDepthStyles({ depth }: DepthProps): SimpleInterpolation {
  if (!depth) return;

  return css`
    z-index: ${getZIndexValue(depth)};
  `;
}

export const DepthStyles = css<DepthProps>`
  ${props => getDepthStyles(props)}
`;
