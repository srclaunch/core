import { FormEventHandler } from 'react';

import { ValidationProps } from '../validation';
import { FormField } from './field';

export type FormSubmitHandler = ({
  event,
  fields,
  validation,
}: {
  readonly event?: FormEventHandler<HTMLFormElement>;
  readonly fields: {
    readonly [name: string]: FormField;
  };
  readonly validation?: ValidationProps;
}) => void;
