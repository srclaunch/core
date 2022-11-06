import { Person } from '../../../people/person';
import { PaymentMethod } from '../payment-method';
import { Product } from '../product/index';

export enum SubscriptionStatus {
  Active = 'active',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid',
}

export enum SubscriptionPlanDuration {
  Lifetime = 'lifetime',
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  Yearly = 'yearly',
}

export type Subscription = {
  readonly active: boolean;
  readonly canceled: boolean;
  readonly endDate: Date;
  readonly id: string;
  readonly paymentMethodId: PaymentMethod['id'];
  readonly personId: Person['id'];
  readonly planDuration: SubscriptionPlanDuration;
  readonly productId: Product['id'];
  readonly renewalDate: Date;
  readonly status: SubscriptionStatus;
  readonly trialMembershipActive: boolean;
  readonly trialMembershipEndDate: Date;
};
