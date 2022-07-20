import { css, SimpleInterpolation } from 'styled-components';

import { InputProps as InputProperties } from '../../../components/forms/inputs/shared/input';
// import { TextProps } from '../../../components/typography/Text';
import { Amount, Size, TextColors } from '../../../types';
import { getSizeStyles } from '../../container/size';
import { getTextStyles } from '../../typography';

export function getInputStyles(
  properties: InputProperties<string> & { readonly inputSize?: Size },
): SimpleInterpolation {
  return css`
    ${getSizeStyles(properties.inputSize)}
    ${getTextStyles(properties)};

    background: transparent;
    border: none;
    width: 100%;
    outline: none;
    padding: 0 ${Amount.Less};
    white-space: nowrap;

    &::placeholder {
      color: rgb(${TextColors.InputPlaceholder});
    }
    &::-webkit-input-placeholder {
      color: rgb(${TextColors.InputPlaceholder});
    }
    &::-moz-placeholder {
      color: rgb(${TextColors.InputPlaceholder});
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
