import { TextColor } from '../color';
import { TextDecorationPosition } from './position';
import { TextDecorationStyle } from './style';

export type TextDecorationProps = {
  readonly textDecorationColor?: TextColor;
  readonly textDecorationPosition?: TextDecorationPosition;
  readonly textDecorationStyle?: TextDecorationStyle;
  readonly textDecorationWidth?: number | string;
};
