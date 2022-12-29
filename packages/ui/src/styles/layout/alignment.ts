import { css, SimpleInterpolation } from 'styled-components';

import {
  AlignHorizontal,
  AlignmentProps,
  AlignVertical,
  AppearanceProps,
  LayoutProps,
  Orientation,
} from '../../types';

export function getHorizontalAlignStyle({
  alignHorizontal,
  orientation,
  parentProps,
}: AlignmentProps): SimpleInterpolation {
  if (orientation === Orientation.Horizontal) {
    switch (alignHorizontal) {
      case AlignHorizontal.Center:
        return css`
          align-items: center;
        `;
      case AlignHorizontal.Right:
        return css`
          align-items: flex-end;
        `;
      case AlignHorizontal.Left:
        return css`
          align-items: flex-start;
        `;
      default:
        return css`
          align-items: stretch;
        `;
    }
  }

  switch (alignHorizontal) {
    case AlignHorizontal.Center:
      return css`
        justify-content: center;
      `;
    case AlignHorizontal.Right:
      return css`
        justify-content: flex-end;
      `;
    case AlignHorizontal.Left:
      return css`
        justify-content: flex-start;
      `;
    default:
      return css`
        justify-content: stretch;
      `;
  }
}

export function getVerticalAlignStyle({
  alignVertical,
  orientation,
  parentProps,
}: AlignmentProps): SimpleInterpolation {
  if (orientation === Orientation.Vertical) {
    switch (alignVertical) {
      case AlignVertical.Bottom:
        return css`
          justify-content: flex-end;
        `;
      case AlignVertical.Center:
        return css`
          justify-content: center;
        `;
      case AlignVertical.Top:
        return css`
          justify-content: flex-start;
        `;
    }
  }

  switch (alignVertical) {
    case AlignVertical.Bottom:
      return css`
        align-items: flex-end;
      `;
    case AlignVertical.Center:
      return css`
        align-items: center;
      `;
    case AlignVertical.Top:
      return css`
        align-items: flex-start;
      `;
  }
}

export function getAlignmentStyles(props: AlignmentProps): SimpleInterpolation {
  return css`
    ${getHorizontalAlignStyle(props)}
    ${getVerticalAlignStyle(props)}
  `;
}

export const AlignmentStyles = css<
  AlignmentProps & { readonly parentProps?: AppearanceProps & LayoutProps }
>`
  ${props => getAlignmentStyles(props)}
`;
