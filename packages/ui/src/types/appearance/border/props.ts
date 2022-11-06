import { BorderColorProps } from './color';
import { BorderStyleProps } from './style';
import { BorderWidthProps } from './width';

export type BorderProps = BorderColorProps &
  BorderStyleProps &
  BorderWidthProps;
