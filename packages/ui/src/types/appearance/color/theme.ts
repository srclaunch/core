import { TextColor } from '../../typography/color';
import { BackgroundColor } from '../background';
import { BorderColor } from '../border';
import { Color } from './common';

export type ThemeColor = BackgroundColor | BorderColor | Color | TextColor;
