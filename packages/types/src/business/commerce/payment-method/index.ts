export enum PaymentIntentStatus {
  RequiresPaymentMethod = 'requires_payment_method',
  RequiresConfirmation = 'requires_confirmation',
  RequiresAction = 'requires_action',
  Processing = 'processing',
  RequiresCapture = 'requires_capture',
  Canceled = 'canceled',
  Succeeded = 'succeeded',
}

export type PaymentMethod = {
  id: string;
  stripe_id: string;
  brand: string;
  country: string;
  last_four_digits: string;
  exp_month: number;
  exp_year: number;
  three_d_secure_usage_supported: boolean;
};
