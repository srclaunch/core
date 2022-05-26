import { Analytics, AnalyticsEvent } from '..';

export type UserPreferencesChangedEvent = AnalyticsEvent<{
  data: {
    preference?: string;
  };
  description: 'This event is fired when a user logs in and access an application.';
  name: Analytics.UserPreferencesChanged;
}>;
