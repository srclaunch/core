import { css, SimpleInterpolation } from 'styled-components';

import { LayoutProps } from '../../types';
import { LayoutStyleProps } from '../../types/layout/style';
import { getAlignmentStyles } from './alignment';
import { getFillStyles } from './fill';
import { getMarginStyles } from './margin';
import { getOrientationStyles } from './orientation';
import { getOverflowStyles } from './overflow';
import { getPaddingStyles } from './padding';
import { getPositionStyles } from './position';

export function getLayoutStyles(props: LayoutStyleProps): SimpleInterpolation {
  return css`
    display: flex;

    ${getAlignmentStyles(props)}
    ${getFillStyles(props)}
    ${getMarginStyles(props)}
    ${getPaddingStyles(props)}
    ${getPositionStyles(props)}
    ${getOrientationStyles(props)}
    ${getOverflowStyles(props)}
  `;
}
