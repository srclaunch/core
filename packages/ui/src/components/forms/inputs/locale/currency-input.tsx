import { CountryCode, CurrencyCode } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import { ReactCountryFlag } from 'react-country-flag';

import { Size } from '../../../../types';
import { DropdownInput, DropdownInputProps } from '../menu/dropdown-input';

export type CurrencyInputProps = DropdownInputProps<CurrencyCode>;

export const CurrencyInput = memo(
  ({
    defaultValue = CurrencyCode.UnitedStatesDollar,
    name = 'language',
    placeholder = 'Select a currency',
    ...props
  }: CurrencyInputProps): ReactElement => {
    const currencies = [
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
        label: 'US Dollar (USD)',
        value: CurrencyCode.UnitedStatesDollar,
      },
    ];

    return (
      <DropdownInput
        defaultValue={defaultValue}
        menu={currencies}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
