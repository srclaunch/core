import { CountryCode } from '@srclaunch/types';
import { getAlpha2Codes, getName } from 'i18n-iso-countries';
import { memo, ReactElement } from 'react';
import { ReactCountryFlag } from 'react-country-flag';

import { Size } from '../../../../types';
import { DropdownInput, DropdownInputProps } from '../menu/dropdown-input';

export type CountryInputProps = DropdownInputProps<CountryCode>;

export const CountryInput = memo(
  ({
    defaultValue = CountryCode.UnitedStates,
    menu = Object.entries(getAlpha2Codes()).map(([alpha2]) => ({
      icon: {
        component: (
          <ReactCountryFlag
            svg
            countryCode={alpha2}
            style={{ height: Size.Smaller, width: 'auto' }}
          />
        ),
      },
      label: getName(alpha2, 'en', { select: 'official' }),
      value: alpha2 as CountryCode,
    })),
    name = 'country',
    placeholder = 'Select a country',
    ...props
  }: CountryInputProps): ReactElement => {
    return (
      <DropdownInput
        defaultValue={defaultValue}
        menu={menu}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
