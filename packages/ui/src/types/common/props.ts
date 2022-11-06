import { ComponentType, ForwardedRef, ReactElement } from 'react';

export type ParentProps<P> = CommonComponentProps<P>;

export type CommonComponentProps<E = ReactElement['type']> = Omit<
  Partial<E>,
  | 'children'
  | 'form'
  | 'height'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'size'
  | 'width'
> & {
  readonly as?: ComponentType<unknown> | string;
  readonly parentProps?: ParentProps<CommonComponentProps>;
  readonly ref?: ForwardedRef<unknown>;
};
