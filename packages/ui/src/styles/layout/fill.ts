import { css, SimpleInterpolation } from 'styled-components';

import { AlignmentProps, Fill, Orientation } from '../../types';

export function getFillStyles({
  fillProp,
  parentProps,
}: AlignmentProps & { readonly fillProp?: Fill }): SimpleInterpolation {
  switch (fillProp) {
    case Fill.Both:
      return css`
        flex-grow: 1;
        height: 100%;
        width: 100%;
      `;
    case Fill.Horizontal:
      if (parentProps?.orientation === Orientation.Horizontal) {
        return css`
          flex-basis: 100%;
          flex-grow: 1;
          width: 100%;
        `;
      }

      return css`
        width: 100%;
      `;
    case Fill.Vertical:
      if (parentProps?.orientation === Orientation.Vertical) {
        return css`
          flex-basis: 100%;
          flex-grow: 1;
          height: 100%;
        `;
      }

      return css`
        height: 100%;
      `;
    case Fill.None:
      return css`
        flex-basis: 0;
      `;
  }

  return css`
    flex-grow: 1;
  `;
}
