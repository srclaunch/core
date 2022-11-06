import { css, SimpleInterpolation } from 'styled-components';

import { getCSSMeasurement } from '../../lib';
import {
  AppearanceProps,
  LayoutProps,
  Orientation,
  SizeProps,
} from '../../types';

export function getMaxHeightStyle({
  maxHeight,
}: SizeProps): SimpleInterpolation {
  if (!maxHeight) return;

  return css`
    max-height: ${getCSSMeasurement(maxHeight)};
  `;
}

export function getMinHeightStyle({
  minHeight,
}: SizeProps): SimpleInterpolation {
  if (!minHeight) return;

  return css`
    min-height: ${getCSSMeasurement(minHeight)};
  `;
}

export function getHeightStyle({
  parentProps,
  height,
}: SizeProps): SimpleInterpolation {
  if (!height) return;

  if (parentProps?.orientation === Orientation.Vertical) {
    return css`
      flex-basis: ${getCSSMeasurement(height)};
      height: ${getCSSMeasurement(height)};
    `;
  }
  return css`
    height: ${getCSSMeasurement(height)};
  `;
}

export function getMaxWidthStyle({ maxWidth }: SizeProps): SimpleInterpolation {
  if (!maxWidth) return;

  return css`
    max-width: ${getCSSMeasurement(maxWidth)};
  `;
}

export function getMinWidthStyle({ minWidth }: SizeProps): SimpleInterpolation {
  if (!minWidth) return;

  return css`
    min-width: ${getCSSMeasurement(minWidth)};
  `;
}

export function getWidthStyle({
  parentProps,
  width,
}: SizeProps): SimpleInterpolation {
  if (!width) return;

  if (parentProps?.orientation === Orientation.Horizontal) {
    return css`
      flex-basis: ${getCSSMeasurement(width)};
      width: ${getCSSMeasurement(width)};
    `;
  }

  return css`
    width: ${getCSSMeasurement(width)};
  `;
}

export function getSizeStyle({
  parentProps,
  size,
}: SizeProps): SimpleInterpolation {
  if (!size) return;

  return css`
    ${getHeightStyle({ height: size, parentProps })}
    ${getWidthStyle({ parentProps, width: size })}
  `;
}

export function getSizeStyles(props: SizeProps): SimpleInterpolation {
  return css`
    ${getMaxHeightStyle(props)}
    ${getMinHeightStyle(props)}
    ${getHeightStyle(props)}
    ${getMaxWidthStyle(props)}
    ${getMinWidthStyle(props)}
    ${getWidthStyle(props)}
  `;
}
export const SizeStyles = css<
  SizeProps & { readonly parentProps?: AppearanceProps & LayoutProps }
>`
  ${props => getSizeStyles(props)}
`;
