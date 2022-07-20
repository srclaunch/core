import { BasicIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import { InputType, Sizes } from '../../../../types';
import { TextInput, TextInputProps } from './text-input';

export type SearchInputProps = TextInputProps;

export const SearchInput = memo((props: SearchInputProps): ReactElement => {
  return (
    <TextInput
      icon={{
        name: BasicIcons.Search,
        size: {
          height: Sizes.Smaller,
          width: Sizes.Smaller,
        },
      }}
      type={InputType.Search}
      spellCheck={false}
      {...props}
    />
  );
});
