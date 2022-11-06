import { CurrencyCode } from '../../i18n/currency';
import { Person } from '../../people/person';

export enum DataPointMetric {
  AccountBalance = 'AccountBalance',
  UserAssets = 'UserAssets',
  UserCreditCardDebt = 'UserCreditCardDebt',
  UserCreditLimit = 'UserCreditLimit',
  UserCreditUtilization = 'UserCreditUtilization',
  UserDebt = 'UserDebt',
  UserInvestments = 'UserInvestments',
  UserRetirement = 'UserRetirement',
  UserSavings = 'UserSavings',
}

export type DataPoint = {
  readonly currencyCode?: CurrencyCode;
  readonly date: Date;
  readonly id: string;
  readonly metric: DataPointMetric;
  readonly personId: Person['id'];
  readonly value: number;
};
