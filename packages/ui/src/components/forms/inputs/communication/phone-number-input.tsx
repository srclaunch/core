import { Condition } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { AutoComplete } from '../../../../types';
import { TextInput, TextInputProps } from '../text/text-input';

type PhoneNumberInputProps = TextInputProps & {
  readonly autoComplete?: AutoComplete.PhoneNumber;
};

export const PhoneNumberInput = memo(
  ({ ...props }: PhoneNumberInputProps): ReactElement => {
    return (
      <TextInput
        validation={{ conditions: { [Condition.IsPhoneNumber]: true } }}
        {...props}
      />
    );
  },
);
