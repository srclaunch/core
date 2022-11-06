import { Menu, } from '@srclaunch/types';







export enum SubscriptionStatuses {
  Active = "active",
  Expired = "expired",
  Canceled = "canceled",};





export type Subscription = {
    id?: string;
created_date?: Date | null;
updated_date?: Date | null;
OrganizationId?: string | null;
ProductId?: string | null;
TeamId?: string | null;
UserId?: string | null;
status?: SubscriptionStatuses | null;
cancel_date?: Date | null;
expiration_date?: Date | null;
renewal_date?: Date | null;
start_date?: Date | null;
  };