import { memo, ReactElement } from 'react';

import { Container } from '../../../layout/container';
import { InputProps } from '../shared/input';

type EmojiInputProps = InputProps<string>;

export const EmojiInput = memo(
  ({ defaultValue }: EmojiInputProps): ReactElement => {
    return <Container>{defaultValue}</Container>;
  },
);
