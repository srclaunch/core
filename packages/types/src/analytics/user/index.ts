import { UserAccessDevice } from '../../user/access';
import { Analytics, AnalyticsEvent } from '..';

export type UserAccessEvent = AnalyticsEvent<{
  data: {
    device?: UserAccessDevice;
    ip_address: string;
  };
  description: 'This event is fired when a user logs in and access an application.';
  name: Analytics.UserAccess;
}>;
