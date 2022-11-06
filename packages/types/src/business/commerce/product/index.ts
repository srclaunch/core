import { SubscriptionPlanDuration } from '../subscription';

export type Product = {
  readonly description: string;
  readonly features: readonly string[];
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly stripePlanId: string;
  readonly stripePriceId: string;
  readonly subscriptionDuration:
    | SubscriptionPlanDuration.Monthly
    | SubscriptionPlanDuration.Monthly
    | SubscriptionPlanDuration.Quarterly
    | SubscriptionPlanDuration.Yearly;
  readonly title: string;
};
