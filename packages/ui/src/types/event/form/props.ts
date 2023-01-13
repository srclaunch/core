import { FormEventHandler } from 'react';

import { FormSubmitHandler } from '../../form';

export type FormEventProps<E = HTMLFormElement> = {
  readonly onCancel?: FormEventHandler<E>;
  readonly onChange?: FormEventHandler<E>;
  readonly onInput?: FormEventHandler<E>;
  readonly onInvalid?: FormEventHandler<E>;
  readonly onReset?: FormEventHandler<E>;
  readonly onSubmit?: FormEventHandler<E>;
  readonly onSubmitted?: FormSubmitHandler;
};
