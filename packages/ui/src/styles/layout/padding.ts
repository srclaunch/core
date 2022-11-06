import { css, SimpleInterpolation } from 'styled-components';

import { getCSSMeasurement } from '../../lib';
import { PaddingProps } from '../../types';

export function getPaddingStyles({
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}: PaddingProps): SimpleInterpolation {
  return css`
    ${padding &&
    css`
      padding: ${getCSSMeasurement(padding)};
    `}

    ${paddingBottom &&
    css`
      padding-bottom: ${getCSSMeasurement(paddingBottom)};
    `}

    ${paddingLeft &&
    css`
      padding-left: ${getCSSMeasurement(paddingLeft)};
    `}

    ${paddingRight &&
    css`
      padding-right: ${getCSSMeasurement(paddingRight)};
    `}

    ${paddingTop &&
    css`
      padding-top: ${getCSSMeasurement(paddingTop)};
    `}
  `;
}

export const PaddingStyles = css<PaddingProps>`
  ${props => getPaddingStyles(props)}
`;
