import { CursorProps } from '../common/cursor/props';
import { DepthProps } from '../layout';
import { StateProps } from '../state';
import { AnimationProps } from './animation/props';
import { BackgroundProps } from './background/props';
import { BorderRadiusProps } from './border';
import { BorderProps } from './border/props';
import { ShadowProps } from './shadow/props';
import { SizeProps } from './size/props';
import { TransformProps } from './transform/props';
import { VisibilityProps } from './visibility/props';

type AppearancePropsType<P = Record<string, unknown>> = AnimationProps<P> &
  BackgroundProps &
  BorderProps &
  BorderRadiusProps &
  CursorProps &
  DepthProps &
  ShadowProps &
  SizeProps &
  TransformProps &
  VisibilityProps;

export type AppearanceProps<P = Record<string, unknown>> =
  AppearancePropsType<P> & StateProps<P>;
