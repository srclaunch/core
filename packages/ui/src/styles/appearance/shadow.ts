import { css, SimpleInterpolation } from 'styled-components';

import { Amount, BackgroundColor, ShadowProps } from '../../types';

export function getShadowStyles({
  shadow,
  shadowBlur,
  shadowColor,
  shadowOpacity,
  shadowSpread,
  shadowX,
  shadowY,
}: ShadowProps): SimpleInterpolation {
  if (
    !shadow &&
    !shadowBlur &&
    !shadowColor &&
    !shadowOpacity &&
    !shadowSpread &&
    !shadowX &&
    !shadowY
  )
    return;

  if (shadow) {
    return css`
      box-shadow: ${shadow};
    `;
  }

  const propertyValue = `${shadowBlur ?? Amount.Default} ${
    shadowX ?? Amount.None
  }
    ${shadowY ?? Amount.Default} ${shadowSpread ?? Amount.None}
    ${shadowColor ?? BackgroundColor.Darker}
    ${shadowOpacity ?? Amount.Default};`;

  return css`
    box-shadow: ${propertyValue ?? shadow};
  `;
}

export const ShadowStyles = css<ShadowProps>`
  ${props => getShadowStyles(props)}
`;
