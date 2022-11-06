import { css, SimpleInterpolation } from 'styled-components';

import { AlignmentProps, Overflow } from '../../types';

export function getOverflowStyles({
  overflowProp,
}: AlignmentProps & {
  readonly overflowProp?: AlignmentProps['overflow'];
}): SimpleInterpolation {
  switch (overflowProp) {
    case Overflow.ClipBoth:
      return css`
        overflow: clip;
      `;
    case Overflow.ClipHorizontal:
      return css`
        overflow-x: clip;
      `;
    case Overflow.ClipVertical:
      return css`
        overflow-y: clip;
      `;

    case Overflow.ScrollBoth:
      return css`
        overflow: scroll;
      `;
    case Overflow.ScrollHorizontal:
      return css`
        overflow: hidden;
        overflow-x: scroll;
        width: 100%;
      `;
    case Overflow.ScrollVertical:
      return css`
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
      `;
    case Overflow.Visible:
      return css`
        overflow: visible;
      `;
    case Overflow.Hidden:
      return css`
        overflow: hidden;
      `;
    default:
      return;
  }
}
