import { ValidationProps } from '../../validation';

type HasInputValueType<V> = V extends undefined
  ? {}
  : { readonly onValueChange?: InputValueChangeHandler<V> };

export type InputValueChangeHandler<V> = ({
  validation,
  value,
}: {
  readonly validation?: ValidationProps;
  readonly value: V | any;
}) => void;
