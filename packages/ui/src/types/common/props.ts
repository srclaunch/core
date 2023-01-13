import { ComponentType, ForwardedRef, HTMLProps, ReactElement } from 'react';

export type ParentProps<P> = CommonComponentProps<P>;

export type CommonComponentProps<E = ReactElement['type']> = Pick<
  HTMLProps<E>,
  'className' | 'id' | 'style'
> & {
  readonly as?: ComponentType<unknown> | string;
  readonly parentProps?: ParentProps<CommonComponentProps>;
  readonly ref?: ForwardedRef<unknown>;
};
