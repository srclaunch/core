import { ThemeColor } from '../color';
import { Shadow } from './enum';

export type ShadowProps = {
  readonly shadow?: Shadow;
  readonly shadowBlur?: number;
  readonly shadowColor?: ThemeColor;
  readonly shadowOpacity?: number;
  readonly shadowSpread?: number;
  readonly shadowX?: number;
  readonly shadowY?: number;
};
