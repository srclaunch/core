import { Analytics, AnalyticsEvent } from '../..';

export type LogMessageEvent = AnalyticsEvent<{
  readonly name: Analytics.LogMessage;
}>;
