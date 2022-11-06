import { css, SimpleInterpolation } from 'styled-components';

import { getCSSColor } from '../../lib';
import { BackgroundColor, BorderColor, Color } from '../../types';

export function getFocusedOutlineColor(
  backgroundColor?: BackgroundColor,
): string | undefined {
  if (backgroundColor) {
    switch (backgroundColor) {
      case BackgroundColor.DropdownMenu:
        return getCSSColor(BorderColor.Transparent);
      case BackgroundColor.InputControl:
      case BackgroundColor.Transparent:
      case BackgroundColor.Lightest:
      case BackgroundColor.Lighter:
      case BackgroundColor.Light:
      case BackgroundColor.Default:
      case BackgroundColor.Dark:
      case BackgroundColor.Darker:
      case BackgroundColor.Darkest:
        return getCSSColor(Color.Primary);
    }
  }

  return getCSSColor(Color.Primary);
}

export function getFocusedStyles(): SimpleInterpolation {
  return css`
    /* border-color: transparent; */
    outline: none;

    &:before {
      opacity: 1;
      transition: opacity 0.13s ease-in-out;
      z-index: 2;
    }
  `;
}
