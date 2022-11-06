import { Analytics, AnalyticsEvent } from '../..';

export type ExceptionEvent = AnalyticsEvent<{
  readonly name: Analytics.Exception;
}>;
