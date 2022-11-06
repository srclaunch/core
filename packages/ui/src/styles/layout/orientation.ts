import { css, SimpleInterpolation } from 'styled-components';

import { AlignmentProps, Orientation } from '../../types';

export function getOrientationStyles({
  orientationProp,
}: AlignmentProps & {
  readonly orientationProp?: AlignmentProps['orientation'];
}): SimpleInterpolation {
  switch (orientationProp) {
    case Orientation.Horizontal:
      return css`
        flex-direction: row;
      `;
    case Orientation.Vertical:
      return css`
        flex-direction: column;
      `;
  }

  return css`
    flex-direction: row;
  `;
}
