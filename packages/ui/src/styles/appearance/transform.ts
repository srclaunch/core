import { css, SimpleInterpolation } from 'styled-components';

import {
  PerspectiveOrigin,
  TransformOrigin,
  TransformProps,
} from '../../types';

export function getTransformStyles({
  perspective,
  perspectiveOrigin,
  rotate,
  rotateX,
  rotateY,
  skewX,
  skewY,
  translateX,
  translateY,
  scale,
  scaleX,
  scaleY,
  scaleZ,
  transformOriginX,
  transformOriginY,
}: TransformProps): SimpleInterpolation {
  return css`
    ${(rotate ||
      rotateX ||
      rotateY ||
      skewX ||
      skewY ||
      translateX ||
      translateY ||
      scale ||
      scaleX ||
      scaleY ||
      scaleZ) &&
    css`
      transform: ${rotate && css` rotate(${rotate}deg) `}
        ${rotateX && css` rotateX(${rotateX}deg) `}
        ${rotateY && css` rotateY(${rotateY}deg) `}
        ${skewX && css` skewX(${skewX}) `} ${skewY && css` skewY(${skewY}) `}
        ${translateX && css` translateX(${translateX}) `}
        ${translateY && css` translateY(${translateY}) `}
        ${perspective && css` perspective(${perspective}) `}
        ${scale && css` scale(${scale}) `} ${scaleX && css` scaleX(${scaleX}) `}
        ${scaleY && css` scaleY(${scaleY}) `}
        ${scaleZ && css` scaleZ(${scaleZ}) `};

      ${perspectiveOrigin &&
      css`
        perspective-origin: ${perspectiveOrigin ?? PerspectiveOrigin.Center};
      `}

      ${(transformOriginX || transformOriginY) &&
      css`
        transform-origin: ${transformOriginX ?? TransformOrigin.Center}
          ${transformOriginY ?? TransformOrigin.Center};
      `}
    `}
  `;
}
export const TransformStyles = css<TransformProps>`
  ${props => getTransformStyles(props)}
`;
