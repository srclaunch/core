import { css } from 'styled-components';

import { ContainerProps } from '../../components/layout/container';
import { TextProps } from '../../components/typography/text';
import { BackgroundColor, BorderColor, Size, TextColor } from '../../types';
export const ButtonStyles = css<
  ContainerProps &
    TextProps & {
      readonly size?: Size;
      readonly textColor?: TextColor;
    }
>`
  background-color: ${BackgroundColor.Lightest};
  border: 1px solid ${BorderColor.Light};
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
      border: 1px solid rgb({BorderColor.Error});
    }; */
`;
