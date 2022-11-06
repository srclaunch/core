import { memo, ReactElement } from 'react';

import {
  TextInput,
  TextInputProps as TextInputProperties,
} from '../text/text-input';

type StreetAddressInputProperties = TextInputProperties;

export const StreetAddressInput = memo(
  ({ ...properties }: StreetAddressInputProperties): ReactElement => {
    return <TextInput {...properties} />;
  },
);
