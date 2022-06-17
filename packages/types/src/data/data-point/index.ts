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
  id: string;
  date: Date;
  currency_code?: CurrencyCode;
  metric: DataPointMetric;
  value: number;
  person_id: Person['id'];
};
