import {
  LoginEvent,
  LogoutEvent,
  SignupEvent,
} from '../analytics/user/authentication';
import { PageViewEvent, WebsiteVisitEvent } from '../analytics/web';
import { ISO8601 } from '../data/primitive';

export type PersonalAnalyticsDetails = {
  readonly authentication: {
    readonly history: readonly (LoginEvent | LogoutEvent | SignupEvent)[];
    readonly logins: {
      readonly first_login: ISO8601;
      readonly last_login: ISO8601;
      readonly count: number;
    };
    readonly signed_up?: boolean;
  };
  readonly value: {
    readonly lifetime: number;
  };
  readonly website: {
    readonly pages: {
      readonly views: {
        readonly count: number;
        readonly history: readonly PageViewEvent[];
      };
    };
    readonly visits: {
      readonly count: number;
      readonly history: readonly WebsiteVisitEvent[];
    };
  };
};
