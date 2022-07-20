import { css } from 'styled-components';

import { ContainerProps } from '../../components/layout/container';
import { TextProps } from '../../components/typography/text';
import { BackgroundColors, BorderColors, Size, TextColor } from '../../types';
export const ButtonStyles = css<
  {
    readonly size?: Size;
    readonly textColor?: TextColor;
  } & ContainerProps &
    TextProps
>`
  background-color: ${BackgroundColors.Lightest};
  border: 1px solid ${BorderColors.Light};
  /* border-radius: props.borderRadius}; */
  /* box-shadow:  Shadows.Low : 'none'}; */
  padding: 0 calc(${props => props.size} / 3);

  /* props 
    props.focused &&
    css
      border 1px solid transparent !important;
    };

  props =>
    props.error &&
    css
      border: 1px solid rgb({BorderColors.Error});
    }; */
`;
