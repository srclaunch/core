import { UserAccessDevice } from '../../../user/access';
import { Analytics, AnalyticsEvent } from '../..';

export type SignupEvent = AnalyticsEvent<{
  data: {
    device: UserAccessDevice;
    ip_address: string;
  };
  description: 'Occurs when a person signs up for access to the application.';
  id: string;
  name: Analytics.UserSignup;
}>;

export type LoginEvent = AnalyticsEvent<{
  data: {
    device: UserAccessDevice;
    ip_address: string;
  };
  description: 'Occurs when a person logs in to the application.';
  id: string;
  name: Analytics.UserLogin;
}>;

export type LogoutEvent = AnalyticsEvent<{
  data: {
    device: UserAccessDevice;
    ip_address: string;
  };
  description: 'Occurs when a person logs out of the application.';
  id: string;
  name: Analytics.UserLogout;
}>;
