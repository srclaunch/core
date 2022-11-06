import { TransformOriginProps } from './origin';
import { PerspectiveProps } from './perspective';
import { RotateProps } from './rotate';
import { ScaleProps } from './scale';
import { SkewProps } from './skew';
import { TranslateProps } from './translate';

export type TransformProps = PerspectiveProps &
  RotateProps &
  ScaleProps &
  SkewProps &
  TransformOriginProps &
  TranslateProps;
