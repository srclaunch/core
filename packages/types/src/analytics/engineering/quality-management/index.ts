import { Analytics, AnalyticsEvent } from '../..';

export type QualityManagementEvent = AnalyticsEvent<{
  readonly name: Analytics.QualityManagement;
}>;
