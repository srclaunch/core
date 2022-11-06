import { css, SimpleInterpolation } from 'styled-components';

import { getCSSMeasurement } from '../../lib';
import { MarginProps } from '../../types';

export function getMarginStyles({
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: MarginProps): SimpleInterpolation {
  return css`
    ${margin &&
    css`
      margin: ${getCSSMeasurement(margin)};
    `}

    ${marginBottom &&
    css`
      margin-bottom: ${getCSSMeasurement(marginBottom)};
    `}

    ${marginLeft &&
    css`
      margin-left: ${getCSSMeasurement(marginLeft)};
    `}

    ${marginRight &&
    css`
      margin-right: ${getCSSMeasurement(marginRight)};
    `}

    ${marginTop &&
    css`
      margin-top: ${getCSSMeasurement(marginTop)};
    `}
  `;
}

export const MarginStyles = css<MarginProps>`
  ${props => getMarginStyles(props)}
`;
