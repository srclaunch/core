import { css, SimpleInterpolation } from 'styled-components';

import { InputProps } from '../../../components/forms/inputs/shared/input';
// import { TextProps } from '../../../components/typography/Text';
import { Amount, Size, TextColor } from '../../../types';
import { getSizeStyles } from '../../appearance/size';
import { getTextStyles } from '../../typography';

export function getInputStyles(
  properties: InputProps & { readonly inputSize?: Size },
): SimpleInterpolation {
  return css`
    ${getSizeStyles({ size: properties.inputSize })}
    ${getTextStyles(properties)};

    background: transparent;
    border: none;
    width: 100%;
    outline: none;
    padding: 0 ${Amount.Less};
    white-space: nowrap;

    &::placeholder {
      color: rgb(${TextColor.Light});
    }
    &::-webkit-input-placeholder {
      color: rgb(${TextColor.Light});
    }
    &::-moz-placeholder {
      color: rgb(${TextColor.Light});
    }

    /* clears the ‘X’ from Internet Explorer */
    &::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
    /* clears the ‘X’ from Chrome */
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  `;
}

export const InputStyles = css``;

export * from './container';
