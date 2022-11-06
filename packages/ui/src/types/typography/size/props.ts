import { Size } from '../../common/proportion/size';
import { TextSize } from './enum';

export type TextSizeProps = {
  readonly lineHeight?: Size;
  readonly textSize?: TextSize;
};
