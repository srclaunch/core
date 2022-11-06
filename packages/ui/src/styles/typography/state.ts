import { css, SimpleInterpolation } from 'styled-components';

import { LabelProps } from '../../components';
import { StateProps } from '../../types';
import { TypographyProps } from '../../types/typography/props';
// import { getTextStyles } from '.';
import {
  getDisabledStateStyles,
  getHiddenStateStyles,
  getVisibleStateStyles,
} from '../states';
import { getTextStyles } from '.';

export function getTextStatesStyles({
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
  unauthenticated,
  ...props
}: StateProps<TypographyProps>): SimpleInterpolation {
  return css`
    ${active &&
    css`
      ${state?.active &&
      css`
        ${getTextStyles({ ...props, ...active })}
      `}

      &:active {
        ${getTextStyles({ ...props, ...active })}
      }
    `}

    ${state?.authenticated &&
    authenticated &&
    css`
      ${getTextStyles({ ...props, ...authenticated })}
    `}
 

    ${state?.current &&
    current &&
    css`
      ${getTextStyles({ ...props, ...current })}
    `}

    ${disabled &&
    css`
      ${state?.disabled &&
      css`
        ${getTextStyles({ ...props, ...disabled })}
      `}

      &:disabled {
        ${getTextStyles({ ...props, ...disabled })}
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
      ${getTextStyles({ ...props, ...dropdownVisible })}
    `}
    

    ${state?.error &&
    error &&
    css`
      ${getTextStyles({ ...props, ...error })}
    `}




  ${focused &&
    css`
      ${state?.focused &&
      css`
        ${getTextStyles({ ...props, ...focused })}
      `}

      &:focus {
        ${getTextStyles({ ...props, ...focused })}
      }
    `}


    ${state?.hidden === true &&
    css`
      ${getHiddenStateStyles()}
      ${hidden &&
      css`
        ${getTextStyles({ ...props, ...hidden })}
      `}
    `}

    ${hovered &&
    css`
      ${state?.hovered &&
      css`
        ${getTextStyles({ ...props, ...hovered })}
      `}

      &:hover {
        ${getTextStyles({ ...props, ...hovered })}
      }
    `}


    ${state?.loading === true &&
    loading &&
    css`
      ${getTextStyles({ ...props, ...loading })}
    `}

    ${state?.loaded &&
    loaded &&
    css`
      ${getTextStyles({ ...props, ...loaded })}
    `}

    ${state?.on &&
    on &&
    css`
      ${getTextStyles({ ...props, ...on })}
    `}


    ${state?.success &&
    success &&
    css`
      ${getTextStyles({ ...props, ...success })}
    `}
 
    ${state?.unauthenticated &&
    unauthenticated &&
    css`
      ${getTextStyles({ ...props, ...unauthenticated })}
    `}
 
    ${state?.visible === false &&
    css`
      ${getHiddenStateStyles()}
      ${visible &&
      css`
        ${getTextStyles({ ...props, ...visible })}
      `}
    `}

    ${state?.visible === true &&
    state.hidden !== true &&
    css`
      ${getVisibleStateStyles()}
      ${visible &&
      css`
        ${getTextStyles({ ...props, ...visible })}
      `}
    `}

    ${state?.warning &&
    warning &&
    css`
      ${getTextStyles({ ...props, ...warning })}
    `}
  `;
}

export const TextStateStyles = css<LabelProps>`
  ${props => getTextStatesStyles(props)}
`;

// export function getTextStatesStyles({
//   state,
// }: // ...props
// TextProps): SimpleInterpolation {
//   if (!state) {
//     return;
//   }

//   // const {
//   //   active,
//   //   current,
//   //   disabled,
//   //   error,
//   //   focused,
//   //   hovered,
//   //   loading,
//   //   state,
//   //   success,
//   //   visible,
//   //   warning,
//   // } = states;
//   // return css`
//   //   ${current &&
//   //   state?.current &&
//   //   !state?.active &&
//   //   css`
//   //     ${getTextStyles({ ...otherProps, ...current })};
//   //   `};

//   //   ${disabled &&
//   //   css`
//   //     ${state?.disabled
//   //       ? css`
//   //           ${getTextStyles({ ...otherProps, ...disabled })};
//   //           ${getDisabledStateStyles()};
//   //         `
//   //       : css`
//   //           &:disabled {
//   //             ${getTextStyles({ ...otherProps, ...disabled })};
//   //             ${getDisabledStateStyles()};
//   //           }
//   //         `};
//   //   `};

//   //   ${error &&
//   //   state?.error &&
//   //   css`
//   //     ${getTextStyles({ ...otherProps, ...error })};
//   //   `};

//   //   ${focused &&
//   //   css`
//   //     ${state?.focused
//   //       ? css`
//   //           ${getTextStyles({ ...otherProps, ...focused })};
//   //         `
//   //       : css`
//   //           &:focus {
//   //             ${getTextStyles({ ...otherProps, ...focused })};
//   //           }
//   //         `};
//   //   `};

//   //   ${hovered &&
//   //   !state?.active &&
//   //   css`
//   //     ${state?.hovered
//   //       ? css`
//   //           ${getTextStyles({ ...otherProps, ...hovered })};
//   //         `
//   //       : css`
//   //           &:hover {
//   //             ${getTextStyles({ ...otherProps, ...hovered })};
//   //           }
//   //         `};
//   //   `};

//   //   ${active &&
//   //   css`
//   //     ${state?.active
//   //       ? css`
//   //           ${getTextStyles({ ...otherProps, ...active })};
//   //         `
//   //       : css`
//   //           &::active {
//   //             ${getTextStyles({ ...otherProps, ...active })};
//   //           }
//   //         `};
//   //   `};

//   //   ${loading &&
//   //   state?.loading &&
//   //   css`
//   //     ${getTextStyles({ ...otherProps, ...loading })};
//   //   `};

//   //   ${success &&
//   //   state?.success &&
//   //   css`
//   //     ${getTextStyles({ ...otherProps, ...success })};
//   //   `};

//   //   ${visible &&
//   //   state?.visible &&
//   //   css`
//   //     ${getTextStyles({ ...otherProps, ...visible })};
//   //   `};

//   //   ${warning &&
//   //   state?.warning &&
//   //   css`
//   //     ${getTextStyles({ ...otherProps, ...warning })};
//   //   `};
//   // `;
// }

// export const TextStateStyles = css<TextProps>`
//   ${props => getTextStatesStyles(props)};
// `;
