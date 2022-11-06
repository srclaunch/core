import { css, SimpleInterpolation } from 'styled-components';

import { CursorProps } from '../../types';

export function getCursorStyles({ cursor }: CursorProps): SimpleInterpolation {
  if (!cursor) return;

  return css`
    cursor: ${cursor};
  `;
}

export const CursorStyles = css<CursorProps>`
  ${props => getCursorStyles(props)}
`;
