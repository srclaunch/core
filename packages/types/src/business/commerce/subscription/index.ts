import { Person } from '../../../people/person';
import { PaymentMethod } from '../payment-method';
import { Product } from '../product/index';

export enum SubscriptionStatus {
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  Trialing = 'trialing',
  Active = 'active',
  PastDue = 'past_due',
  Canceled = 'canceled',
  Unpaid = 'unpaid',
}

export enum SubscriptionPlanDuration {
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  Yearly = 'yearly',
  Lifetime = 'lifetime',
}

export type Subscription = {
  active: boolean;
  end_date: Date;
  canceled: boolean;
  renewal_date: Date;
  id: string;
  product_id: Product['id'];
  plan_duration: SubscriptionPlanDuration;
  trial_membership_active: boolean;
  trial_membership_end_date: Date;
  status: SubscriptionStatus;
  payment_method_id: PaymentMethod['id'];
  person_id: Person['id'];
};
