import { ParentProps } from '../common';
import { StateProps } from '../state';
import { AlignmentProps } from './alignment/props';
import { DepthProps } from './depth/props';
import { MarginProps } from './margin/props';
import { PaddingProps } from './padding';
import { PositionProps } from './position/props';

type LayoutPropsType<P = Record<string, unknown>> = AlignmentProps &
  DepthProps &
  MarginProps &
  P &
  PaddingProps &
  PositionProps;

export type LayoutProps<P = Record<string, unknown>> = LayoutPropsType<
  ParentProps<LayoutPropsType> & StateProps<LayoutPropsType>
>;
