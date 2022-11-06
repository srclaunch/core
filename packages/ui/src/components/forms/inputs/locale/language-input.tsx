import { CountryCode, LanguageCode } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import { ReactCountryFlag } from 'react-country-flag';

import { Size } from '../../../../types';
import { DropdownInput, DropdownInputProps } from '../menu/dropdown-input';

export type LanguageInputProps = DropdownInputProps<LanguageCode>;

export const LanguageInput = memo(
  ({
    defaultValue = LanguageCode.English,
    name,
    placeholder = 'Select a language',
    ...props
  }: LanguageInputProps): ReactElement => {
    const languages = [
      {
        icon: {
          component: (
            <ReactCountryFlag
              svg
              countryCode={CountryCode.UnitedStates}
              style={{ height: Size.Smaller, width: 'auto' }}
            />
          ),
        },
        label: 'English (US)',
        value: LanguageCode.English,
      },
    ];

    return (
      <DropdownInput
        defaultValue={defaultValue}
        menu={languages}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
