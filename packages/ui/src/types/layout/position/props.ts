import { CSSMeasurement } from '../../common';
import { Position } from './enum';

export type PositionProps = {
  readonly position?: Position;
  readonly positionBottom?: CSSMeasurement;
  readonly positionLeft?: CSSMeasurement;
  readonly positionRight?: CSSMeasurement;
  readonly positionTop?: CSSMeasurement;
};
