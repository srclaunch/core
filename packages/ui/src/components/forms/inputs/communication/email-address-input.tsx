// import { AuthenticationService } from '@srclaunch/http-services';
import { Condition } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { AutoComplete } from '../../../../types';
import { TextInput, TextInputProps } from '../text/text-input';

export type EmailAddressInputProps = TextInputProps & {
  readonly autoComplete?: AutoComplete.EmailAddress | AutoComplete.Username;
};

export const EmailAddressInput = memo(
  ({
    autoComplete = AutoComplete.EmailAddress,
    className = '',
    spellCheck = false,
    validation = {},
    ...props
  }: EmailAddressInputProps): ReactElement => {
    return (
      <TextInput
        autoComplete={autoComplete}
        className={`email-address-input ${className}`}
        spellCheck={spellCheck}
        validation={{
          conditions: {
            [Condition.IsEmailAddress]: true,
            ...validation.conditions,
          },
          ...validation,
        }}
        {...props}
      />
    );
  },
);
