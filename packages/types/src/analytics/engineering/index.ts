import { Analytics, AnalyticsEvent } from '..';

export type EngineeringEvent = AnalyticsEvent<{
  readonly name: Analytics.Engineering;
}>;
