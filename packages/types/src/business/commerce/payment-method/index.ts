export enum PaymentIntentStatus {
  Canceled = 'canceled',
  Processing = 'processing',
  RequiresAction = 'requires_action',
  RequiresCapture = 'requires_capture',
  RequiresConfirmation = 'requires_confirmation',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded',
}

export type PaymentMethod = {
  readonly brand: string;
  readonly country: string;
  readonly expirationMonth: number;
  readonly expirationYear: number;
  readonly id: string;
  readonly lastFourDigits: string;
  readonly stripeId: string;
  readonly threeDSecureUsageSupported: boolean;
};
