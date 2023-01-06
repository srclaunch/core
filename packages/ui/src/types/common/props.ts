import { ComponentType, ForwardedRef, HTMLProps, ReactElement } from 'react';

export type ParentProps<P> = CommonComponentProps<P>;

export type CommonComponentProps<E = ReactElement['type']> = Omit<
  HTMLProps<E>,
  'size'
> & {
  readonly as?: ComponentType<unknown> | string;
  readonly parentProps?: ParentProps<CommonComponentProps>;
  readonly ref?: ForwardedRef<unknown>;
};
