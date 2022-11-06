import { css, SimpleInterpolation } from 'styled-components';

import { ContainerProps } from '../../components';
import { getFocusOutlineStyles } from './outline';

export * from './outline';

export function getAccessibilityStyles(
  props: ContainerProps,
): SimpleInterpolation {
  return css`
    ${getFocusOutlineStyles(props)}
  `;
}
