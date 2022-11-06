import { UserAccessDevice } from '../../../user/access';
import { Analytics, AnalyticsEvent } from '../..';

export type SignupEvent = AnalyticsEvent<{
  readonly data: {
    readonly device: UserAccessDevice;
    readonly ipAddress: string;
  };
  readonly description: 'Occurs when a person signs up for access to the application.';
  readonly id: string;
  readonly name: Analytics.UserSignup;
}>;

export type LoginEvent = AnalyticsEvent<{
  readonly data: {
    readonly device: UserAccessDevice;
    readonly ipAddress: string;
  };
  readonly description: 'Occurs when a person logs in to the application.';
  readonly id: string;
  readonly name: Analytics.UserLogin;
}>;

export type LogoutEvent = AnalyticsEvent<{
  readonly data: {
    readonly device: UserAccessDevice;
    readonly ipAddress: string;
  };
  readonly description: 'Occurs when a person logs out of the application.';
  readonly id: string;
  readonly name: Analytics.UserLogout;
}>;
