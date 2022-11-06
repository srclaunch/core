import { Analytics, AnalyticsEvent } from '..';

export type EngineeringEvent = AnalyticsEvent<{
  readonly name: Analytics.Engineering;
}>;

export * from './debugging';
export * from './exception';
export * from './quality-management';
