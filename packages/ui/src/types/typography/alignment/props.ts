import { TextAlign, TextOverflow } from './enum';

export type TextAlignmentProps = {
  readonly lineWrap?: boolean;
  readonly textAlign?: TextAlign;
  readonly textOverflow?: TextOverflow;
};
