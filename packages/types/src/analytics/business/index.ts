import { Analytics, AnalyticsEvent } from '..';

export type BusinessEvent = AnalyticsEvent<{
  readonly name: Analytics.Business;
}>;
