import { Analytics, AnalyticsEvent } from '..';

export type MarketingEvent = AnalyticsEvent<{
  readonly name: Analytics.Marketing;
}>;
