import { css, SimpleInterpolation } from 'styled-components';

import { getCSSMeasurement } from '../../lib';
import { BorderRadiusProps } from '../../types';

export function getBorderRadiusStyles({
  borderRadius,
  borderRadiusBottomLeft,
  borderRadiusBottomRight,
  borderRadiusTopLeft,
  borderRadiusTopRight,
}: BorderRadiusProps): SimpleInterpolation {
  if (!borderRadius) return;

  return css`
    ${borderRadius &&
    css`
      border-radius: ${getCSSMeasurement(borderRadius)};
    `}

    ${borderRadiusBottomLeft &&
    css`
      border-bottom-left-radius: ${getCSSMeasurement(borderRadiusBottomLeft)};
    `}

    ${borderRadiusBottomRight &&
    css`
      border-bottom-right-radius: ${getCSSMeasurement(borderRadiusBottomRight)};
    `}

    ${borderRadiusTopLeft &&
    css`
      border-top-left-radius: ${getCSSMeasurement(borderRadiusTopLeft)};
    `}

    ${borderRadiusTopRight &&
    css`
      border-top-right-radius: ${getCSSMeasurement(borderRadiusTopRight)};
    `}
  `;
}

export const BorderRadiusStyles = css<BorderRadiusProps>`
  ${props => getBorderRadiusStyles(props)}
`;

// ${props =>
//   props.active &&
//   css`
//     &:active,
//     &.active {
//       border-radius: ${getBorderRadius(props.active?.borderRadius)};
//     }
//   `}

// ${props =>
//   props.focus &&
//   css`
//     &:focus {
//       border-radius: ${getBorderRadius(props.focus?.borderRadius)};
//     }
//   `}

// ${props =>
//   props.hover &&
//   css`
//     &:hover {
//       border-radius: ${getBorderRadius(props.hover?.borderRadius)};
//     }
//   `}
