import { TextColor } from '../../typography/color';
import { BackgroundColor } from '../background';
import { BorderColor } from '../border';
import { Color } from './common';
import { ContrastColor } from './contrast';

export type ThemeColor =
  | BackgroundColor
  | BorderColor
  | Color
  | ContrastColor
  | TextColor;
