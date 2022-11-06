import { css, SimpleInterpolation } from 'styled-components';

import { getCSSMeasurement } from '../../lib';
import { Position, PositionProps } from '../../types';

export function getPositionStyles({
  position,
  positionBottom,
  positionLeft,
  positionRight,
  positionTop,
}: PositionProps): SimpleInterpolation {
  return css`
    position: ${position ?? Position.Relative};

    ${(positionBottom || positionBottom === 0) &&
    css`
      bottom: ${getCSSMeasurement(positionBottom)};
    `}

    ${(positionLeft || positionLeft === 0) &&
    css`
      left: ${getCSSMeasurement(positionLeft)};
    `}

    ${(positionRight || positionRight === 0) &&
    css`
      right: ${getCSSMeasurement(positionRight)};
    `}

    ${(positionTop || positionTop === 0) &&
    css`
      top: ${getCSSMeasurement(positionTop)};
    `}
  `;
}

export const PositionStyles = css<PositionProps>`
  ${props => getPositionStyles(props)}
`;
