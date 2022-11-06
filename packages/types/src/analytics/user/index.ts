import { UserAccessDevice } from '../../user/access';
import { Analytics, AnalyticsEvent } from '..';

export type UserAccessEvent = AnalyticsEvent<{
  readonly data: {
    readonly device?: UserAccessDevice;
    readonly ipAddress: string;
  };
  readonly description: 'This event is fired when a user logs in and access an application.';
  readonly name: Analytics.UserAccess;
}>;

export * from './authentication';
export * from './preferences';
