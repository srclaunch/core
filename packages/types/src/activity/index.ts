import { Image } from '../';

export type Activity = {
  readonly how?: string;
  readonly what?: {
    readonly image?: Image;
    readonly label?: string;
    readonly name?: Activities;
    readonly to?: string;
  };
  readonly when?: string;
  readonly where?: string;
  readonly who?: {
    readonly image?: Image;
    readonly name?: string;
    readonly to?: string;
  };
  readonly why?: string;
};

export enum Activities {
  Comment = 'comment',
  Create = 'create',
  Delete = 'delete',
  Edit = 'edit',
  Invoice = 'invoice',
  Message = 'message',
  PageView = 'pageView',
  Paid = 'paid',
  Payment = 'payment',
  Purchase = 'purchase',
  Referral = 'referral',
  Renewal = 'renewal',
  Signup = 'signup',
  Subscription = 'subscription',
  Upgrade = 'upgrade',
}
