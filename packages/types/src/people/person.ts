import { LanguageCode } from '../i18n/language';
import { User } from '../user';
import { PersonalAnalyticsDetails } from './analytics';

export type PersonalBillingDetails = {
  readonly stripe_customer_id?: string | null;
};

export type PersonalCommunicationDetails = {
  readonly email_address?: string;
  readonly phone_number?: number;
};

export type PersonalInfo = {
  readonly avatar?: string;
  readonly location?: {
    readonly city?: string;
    readonly country?: string;
    readonly province?: string;
  };
  readonly name: {
    readonly first?: string;
    readonly language?: LanguageCode;
    readonly last?: string;
  };
};

export type Person = {
  readonly analytics?: PersonalAnalyticsDetails;
  readonly billing?: PersonalBillingDetails;
  readonly communication?: PersonalCommunicationDetails;
  readonly info?: PersonalInfo;
  readonly id?: string;
  readonly UserId?: User;
};
