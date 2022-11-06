import { BackgroundColor } from './color';
import { BackgroundImageRepeat, BackgroundImageSize } from './image';

export type BackgroundProps = {
  readonly backgroundColor?: BackgroundColor;
  readonly backgroundColorOpacity?: number;
  readonly backgroundImage?: string;
  readonly backgroundImageRepeat?: BackgroundImageRepeat;
  readonly backgroundImageSize?: BackgroundImageSize;
};
