import { Analytics, AnalyticsEvent } from '..';

export type UserPreferencesChangedEvent = AnalyticsEvent<{
  readonly data: {
    readonly preference?: string;
  };
  readonly description: 'This event is fired when a user logs in and access an application.';
  readonly name: Analytics.UserPreferencesChanged;
}>;
