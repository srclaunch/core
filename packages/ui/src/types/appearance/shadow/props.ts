import { CSSMeasurement } from '../../common';
import { ThemeColor } from '../color';
import { Shadow } from './enum';

export type ShadowProps = {
  readonly shadow?: Shadow;
  readonly shadowBlur?: CSSMeasurement;
  readonly shadowColor?: ThemeColor;
  readonly shadowOpacity?: number;
  readonly shadowSpread?: CSSMeasurement;
  readonly shadowX?: CSSMeasurement;
  readonly shadowY?: CSSMeasurement;
};
