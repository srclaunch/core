import { css, SimpleInterpolation } from 'styled-components';

import { getCSSColor, getCSSMeasurement } from '../../lib';
import { BorderColor, BorderProps, BorderStyle } from '../../types';

export function getBorderStyles({
  borderColor,
  borderWidth,
  borderStyle,
  borderLeftColor,
  borderRightColor,
  borderTopColor,
  borderBottomColor,
  borderBottomStyle,
  borderLeftStyle,
  borderRightStyle,
  borderTopStyle,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  borderTopWidth,
}: BorderProps): SimpleInterpolation {
  return css`
    ${(borderColor || borderWidth || borderStyle) &&
    css`
      border: ${getCSSMeasurement(borderWidth ?? 1)}
        ${borderStyle ?? BorderStyle.Solid}
        ${getCSSColor(borderColor ?? BorderColor.Default)};
    `}

    ${(borderBottomColor || borderBottomWidth || borderBottomStyle) &&
    css`
      border-bottom: ${getCSSMeasurement(borderBottomWidth ?? 1)}
        ${borderBottomStyle ?? BorderStyle.Solid}
        ${getCSSColor(borderBottomColor ?? BorderColor.Default)};
    `}


    ${(borderLeftColor || borderLeftWidth || borderLeftStyle) &&
    css`
      border-left: ${getCSSMeasurement(borderLeftWidth ?? 1)}
        ${borderLeftStyle ?? BorderStyle.Solid}
        ${getCSSColor(borderLeftColor ?? BorderColor.Default)};
    `}

    ${(borderRightColor || borderRightWidth || borderRightStyle) &&
    css`
      border-right: ${getCSSMeasurement(borderRightWidth ?? 1)}
        ${borderRightStyle ?? BorderStyle.Solid}
        ${getCSSColor(borderRightColor ?? BorderColor.Default)};
    `}

    ${(borderTopColor || borderTopWidth || borderTopStyle) &&
    css`
      border-top: ${getCSSMeasurement(borderTopWidth ?? 1)}
        ${borderTopStyle ?? BorderStyle.Solid}
        ${getCSSColor(borderTopColor ?? BorderColor.Default)};
    `}
  `;
}

export const BorderStyles = css<BorderProps>`
  ${props => getBorderStyles(props)}
`;
