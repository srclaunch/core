import { css } from 'styled-components';

import { ContainerProps } from '../../components';
import { Amount } from '../../types';
import { getBorderRadiusStyles } from '../appearance/border-radius';
import { getFocusedOutlineColor } from '../states';

export function getFocusOutlineStyles({
  backgroundColor,
  borderRadius,
  focusable,
}: ContainerProps) {
  if (focusable) {
    return css`
      &:before {
        bottom: -4px;
        border-style: solid;
        border-width: 2px;
        ${getBorderRadiusStyles({
          borderRadius: borderRadius ?? Amount.Least,
        })};
        border-color: ${getFocusedOutlineColor(backgroundColor)};
        content: '';
        display: block;
        content: '';
        opacity: 0;
        left: -4px;
        position: absolute;
        pointer-events: none;
        right: -4px;
        top: -4px;
        transition: opacity 0.13s ease-in-out;
        z-index: 3;
      }
    `;
  }
}
