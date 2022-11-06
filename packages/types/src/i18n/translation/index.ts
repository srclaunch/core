import { LocaleCode } from '../locale/index';

export type TranslatedString = Record<string, string>;

export type Translation = {
  [localeCode in LocaleCode]?: {
    [key: string]: TranslatedString;
  };
};
