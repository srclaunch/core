import { css, SimpleInterpolation } from 'styled-components';

import { getCSSColor } from '../../lib';
import {
  BackgroundImageRepeat,
  BackgroundImageSize,
  BackgroundProps
} from '../../types';

export function getBackgroundColorStyle(
  color?: string,
  opacity?: number,
): SimpleInterpolation {
  if (!color && !opacity) return;

  if (color && opacity)
    return css`
      background-color: ${getCSSColor(color, opacity)};
    `;

  if (!color && opacity)
    return css`
      background-color: ${getCSSColor('initial', opacity)}; ;
    `;

  return css`
    background-color: ${getCSSColor(color)};
  `;
}

const getBackgroundImageSizetyle = (
  size?: BackgroundImageSize | string,
): SimpleInterpolation => {
  if (!size)
    return css`
      background-size: auto;
    `;

  switch (size) {
    case BackgroundImageSize.Auto:
      return css`
        background-size: auto;
      `;
    case BackgroundImageSize.Cover:
      return css`
        background-size: cover;
      `;
    case BackgroundImageSize.Contain:
      return css`
        background-size: contain;
      `;
    case BackgroundImageSize.Fill:
      return css`
        background-size: '100% 100%';
      `;
    case BackgroundImageSize.FillHorizontal:
      return css`
        background-size: '100% 0';
      `;
    case BackgroundImageSize.FillVertical:
      return css`
        background-size: '0 100%';
      `;
    default:
      return css`
        background-size: ${size};
      `;
  }
};

export function getBackgroundImageRepeatStyle(
  repeat: BackgroundImageRepeat,
): SimpleInterpolation {
  return css`
    background-repeat: ${repeat};
  `;
}

export function getBackgroundImageStyle(
  backgroundImage: BackgroundProps['backgroundImage'],
): SimpleInterpolation {
  return css`
    background-image: url(${backgroundImage});
  `;
}

export function getBackgroundStyles({
  backgroundColor,
  backgroundColorOpacity,
  backgroundImage,
  backgroundImageRepeat,
  backgroundImageSize,
}: BackgroundProps): SimpleInterpolation {
  return css`
    ${backgroundColor &&
    getBackgroundColorStyle(backgroundColor, backgroundColorOpacity)}
    ${backgroundImage && getBackgroundImageStyle(backgroundImage)}
    ${backgroundImageSize && getBackgroundImageSizetyle(backgroundImageSize)}
    ${backgroundImageRepeat &&
    getBackgroundImageRepeatStyle(backgroundImageRepeat)}
  `;
}

export const BackgroundStyles = css<BackgroundProps>`
  ${props => getBackgroundStyles(props ?? {})}
`;
