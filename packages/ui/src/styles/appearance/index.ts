import { css } from 'styled-components';

// import { ContainerProps as ContainerProperties } from '../../components/layout/container';
import { AppearanceProps } from '../../types';
import { getAnimationStyles } from '../appearance/animation';
import { getBackgroundStyles } from './background';
import { getBorderStyles } from './border';
import { getBorderRadiusStyles } from './border-radius';
import { getCursorStyles } from './cursor';
import { getDepthStyles } from './depth';
import { getShadowStyles } from './shadow';
import { getSizeStyles } from './size';
import { getTransformStyles } from './transform';
import { getVisibilityStyles } from './visibility';

export function getAppearanceStyles(props: AppearanceProps) {
  return css`
    ${getAnimationStyles(props)}
    ${getBackgroundStyles(props)}
    ${getBorderRadiusStyles(props)}
    ${getBorderStyles(props)}
    ${getCursorStyles(props)}
    ${getDepthStyles(props)}
    ${getShadowStyles(props)}
    ${getSizeStyles(props)}
    ${getTransformStyles(props)}
    ${getVisibilityStyles(props)}
    
    transition: background 0.13s ease-in-out, background-color 0.13s ease-in-out,
      border-radius 0.13s ease-in-out,
      border-bottom-left-radius 0.13s ease-in-out,
      border-bottom-right-radius 0.13s ease-in-out,
      border-top-left-radius 0.13s ease-in-out,
      border-top-right-radius 0.13s ease-in-out, border 0.13s ease-in-out,
      border-bottom 0.13s ease-in-out, border-left 0.13s ease-in-out,
      border-right 0.13s ease-in-out, border-top 0.13s ease-in-out,
      border-color 0.13s ease-in-out, box-shadow 0.13s ease-in-out,
      color 0.13s ease-in, opacity 0.13s ease-in-out,
      transform 0.13s ease-in-out;
  `;
}
