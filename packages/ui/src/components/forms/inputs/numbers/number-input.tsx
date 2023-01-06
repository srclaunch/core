import { memo } from 'react';

import { InputType } from '../../../../types';
import {
  InputContainer,
  InputContainerProps as InputContainerProperties,
} from '../shared/input-container';

export type NumberInputProps = InputContainerProperties<number>;

export const NumberInput = memo(
  ({ className = '', ...props }: NumberInputProps): React.ReactElement => {
    return (
      <InputContainer
        className={`${className} number-input`}
        type={InputType.Number}
        {...props}
      />
    );
  },
);
