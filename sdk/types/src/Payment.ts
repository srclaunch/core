import { Menu, } from '@srclaunch/types';








export enum PaymentFailureReasons {
  InsufficientFunds = "insufficient-funds",
  InvalidAmount = "invalid-amount",
  InvalidCurrency = "invalid-currency",
  InvalidCard = "invalid-card",
  InvalidCardExpiry = "invalid-card-expiry",
  InvalidCardNumber = "invalid-card-number",
  InvalidCardSecurityCode = "invalid-card-security-code",
  InvalidCardHolder = "invalid-card-holder",
  InvalidCardAddress = "invalid-card-address",};



export enum PaymentStatuses {
  Paid = "paid",
  Failure = "failure",
  Pending = "pending",};

export type Payment = {
    id?: string;
created_date?: Date | null;
updated_date?: Date | null;
OrganizationId?: string | null;
UserId?: string | null;
amount: number;
currency: string;
date: unknown;
failure_reason?: PaymentFailureReasons | null;
notes: string;
status: PaymentStatuses;
  };