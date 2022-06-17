import { SubscriptionPlanDuration } from '../subscription';

export type Product = {
  description: string;
  features: string[];
  id: string;
  name: string;
  price: number;
  stripe_plan_id: string;
  stripe_price_id: string;
  subscription_duration:
    | SubscriptionPlanDuration.Monthly
    | SubscriptionPlanDuration.Quarterly
    | SubscriptionPlanDuration.Yearly
    | SubscriptionPlanDuration.Monthly;
  title: string;
};
