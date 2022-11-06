import {
  CurrencyCode,
  LanguageCode,
  LocaleCode,
  ModelProps,
  Primitives,
} from '@srclaunch/types';

export const User: ModelProps = {
  description: 'A user that signs into the application',
  fields: {
    access: {
      label: 'Access Details',
      type: Primitives.JSON,
    },
    cognito_id: {
      label: 'Cognito ID',
      type: Primitives.String,
    },
    membership: {
      label: 'Membership',
      type: Primitives.JSON,
    },
    onboarding: {
      label: 'Onboarding',
      type: Primitives.JSON,
    },
    preferences: {
      defaultValue: {
        accessibility: {
          outlines: false,
        },
        localization: {
          currency: CurrencyCode.UnitedStatesDollar,
          language: LanguageCode.English,
          locale: LocaleCode.EnglishUnitedStates,
        },
        look_and_feel: {
          theme: 'light',
        },
      },
      label: 'Preferences',
      type: Primitives.JSON,
    },
  },
  name: 'User',
  relationships: {
    belongsTo: ['Person'],
  },
};
