import { ReactElement } from 'react';
import { Form } from '@srclaunch/ui';
import {
  CountryCode,
  CurrencyCode,
  LanguageCode,
  Primitives,
} from '@srclaunch/types';

export const LocalizationSettings = (): ReactElement => {
  return (
    <Form
      fields={[
        {
          defaultValue: CountryCode.UnitedStates,
          label: 'Country',
          name: 'country',
          type: Primitives.CountryCode,
        },
        {
          defaultValue: CurrencyCode.UnitedStatesDollar,
          label: 'Currency',
          name: 'currency',
          type: Primitives.CurrencyCode,
        },
        {
          defaultValue: LanguageCode.English,
          label: 'Language',
          name: 'language',
          type: Primitives.LanguageCode,
        },
      ]}
      name="localization-settings"
      // onSubmit={() => {
      //   console.log('adsf');
      // }}
      submitButton={null}
    />
  );
};
