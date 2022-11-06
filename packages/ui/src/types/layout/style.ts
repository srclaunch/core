import { LayoutProps } from './props';

export type LayoutStyleProps = LayoutProps & {
  readonly fillProp?: LayoutProps['fill'];
  readonly orientationProp?: LayoutProps['orientation'];
  readonly overflowProp?: LayoutProps['overflow'];
};
