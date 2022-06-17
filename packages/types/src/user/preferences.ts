import { CurrencyCode } from '../i18n/currency';
import { LanguageCode } from '../i18n/language';
import { LocaleCode } from '../i18n/locale';

export type UserAccessibilityPreferences = {
  outlines: boolean;
};

export type UserLocalizationPreferences = {
  currency?: CurrencyCode;
  language?: LanguageCode;
  locale?: LocaleCode;
};

export type UserLookAndFeelPreferences = {
  theme: string;
};

export type UserPreferences = {
  accessibility: UserAccessibilityPreferences;
  localization: UserLocalizationPreferences;
  look_and_feel: UserLookAndFeelPreferences;
};
