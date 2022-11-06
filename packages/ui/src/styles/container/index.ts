import { css, SimpleInterpolation } from 'styled-components';

import { ContainerProps } from '../../components';
import { getAccessibilityStyles } from '../accessibility';
import { getAppearanceStyles } from '../appearance';
import { getLayoutStyles } from '../layout';

export const getContainerStyles = (
  props: ContainerProps,
): SimpleInterpolation => {
  return css`
    ${getLayoutStyles(props)}
    ${getAppearanceStyles(props)}
    ${getAccessibilityStyles(props)}
    
    
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
};

export const ContainerStyles = css<ContainerProps>`
  ${props => getContainerStyles(props)}
`;

export * from './state';
