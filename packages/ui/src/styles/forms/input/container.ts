import { css } from 'styled-components';

import { InputContainerProps } from '../../../components';
import { BorderColor } from '../../../types';

export const InputContainerStyles = css<InputContainerProps<unknown>>`
  ${props => css`
    ${props?.state?.focused &&
    css`
      box-shadow: none;
    `};

    ${props?.state?.focused &&
    (props?.borderStyle || props.borderColor || props.borderWidth) &&
    css`
      border: 1px solid transparent;
    `};

    ${props?.state?.focused &&
    props?.state?.error &&
    Array.isArray(props.state.error) &&
    props?.state?.error.length > 0 &&
    css`
      &:before {
        border-color: rgb(${BorderColor.Error});
      }
    `};
  `}
`;
