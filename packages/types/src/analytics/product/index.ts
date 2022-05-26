import { Analytics, AnalyticsEvent } from '..';

export type ProductEvent = AnalyticsEvent<{
  readonly name: Analytics.Product;
}>;
