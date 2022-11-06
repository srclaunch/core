import { css, SimpleInterpolation } from 'styled-components';

import { StateProps } from '../../types';
import {
  getDisabledStateStyles,
  getFocusedStyles,
  getHiddenStateStyles,
  getVisibleStateStyles,
} from '../states';
import { getContainerStyles } from '.';

export function getContainerStateStyles({
  state,
  active,
  authenticated,
  current,
  disabled,
  dropdownVisible,
  error,
  focused,
  hovered,
  hidden,
  loaded,
  loading,
  on,
  success,
  visible,
  warning,
  ...props
}: StateProps): SimpleInterpolation {
  return css`
    ${active &&
    css`
      ${state?.active &&
      css`
        ${getContainerStyles({ ...props, ...active })}
      `}

      &:active {
        ${getContainerStyles({ ...props, ...active })}
      }
    `}

    ${state?.authenticated &&
    authenticated &&
    css`
      ${getContainerStyles({ ...props, ...authenticated })}
    `}
 

    ${state?.current &&
    current &&
    css`
      ${getContainerStyles({ ...props, ...current })}
    `}

    ${disabled &&
    css`
      ${state?.disabled &&
      css`
        ${getContainerStyles({ ...props, ...disabled })}
      `}

      &:disabled {
        ${getContainerStyles({ ...props, ...disabled })}
      }
    `}

    ${!disabled &&
    css`
      ${state?.disabled &&
      css`
        ${getDisabledStateStyles()}
      `}

      &:disabled {
        ${getDisabledStateStyles()}
      }
    `}



    ${state?.dropdownVisible &&
    dropdownVisible &&
    css`
      ${getContainerStyles({ ...props, ...dropdownVisible })}
    `}
    

    ${state?.error &&
    error &&
    css`
      ${getContainerStyles({ ...props, ...error })}
    `}




  ${focused &&
    css`
      ${state?.focused &&
      css`
        ${getContainerStyles({ ...props, ...focused })}
        ${getFocusedStyles()}
      `}

      &:focus {
        ${getContainerStyles({ ...props, ...focused })}
        ${getFocusedStyles()}
      }
    `}

    ${!focused &&
    css`
      ${state?.focused &&
      css`
        ${getFocusedStyles()}
      `}

      &:focus {
        ${getFocusedStyles()}
      }
    `}

    ${state?.hidden === true &&
    css`
      ${getHiddenStateStyles()}
      ${hidden &&
      css`
        ${getContainerStyles({ ...props, ...hidden })}
      `}
    `}

    ${hovered &&
    css`
      ${state?.hovered &&
      css`
        ${getContainerStyles({ ...props, ...hovered })}
      `}

      &:hover {
        ${getContainerStyles({ ...props, ...hovered })}
      }
    `}


    ${state?.loading === true &&
    loading &&
    css`
      ${getContainerStyles({ ...props, ...loading })}
    `}

    ${state?.loaded &&
    loaded &&
    css`
      ${getContainerStyles({ ...props, ...loaded })}
    `}

    ${state?.on &&
    on &&
    css`
      ${getContainerStyles({ ...props, ...on })}
    `}


    ${state?.success &&
    success &&
    css`
      ${getContainerStyles({ ...props, ...success })}
    `}
 
  
    ${state?.visible === false &&
    css`
      ${getHiddenStateStyles()}
      ${visible &&
      css`
        ${getContainerStyles({ ...props, ...visible })}
      `}
    `}

    ${state?.visible === true &&
    state.hidden !== true &&
    css`
      ${getVisibleStateStyles()}
      ${visible &&
      css`
        ${getContainerStyles({ ...props, ...visible })}
      `}
    `}

    ${state?.warning &&
    warning &&
    css`
      ${getContainerStyles({ ...props, ...warning })}
    `}
  `;
}

export const ContainerStateStyles = css<StateProps>`
  ${props => getContainerStateStyles(props)}
`;
