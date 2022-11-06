import { CursorProps } from '../common';
import { TextAccessibilityProps } from './accessibility';
import { TextAlignmentProps } from './alignment/props';
import { TextColorProps } from './color/props';
import { TextDecorationProps } from './decoration';
import { TextInteractionProps } from './interaction';
import { TextSizeProps } from './size/props';
import { TextStyleProps } from './style';
import { TextTransformProps } from './transform';
import { TextWeightProps } from './weight';

export type TypographyProps = CursorProps &
  TextAccessibilityProps &
  TextAlignmentProps &
  TextColorProps &
  TextDecorationProps &
  TextInteractionProps &
  TextSizeProps &
  TextStyleProps &
  TextTransformProps &
  TextWeightProps;
