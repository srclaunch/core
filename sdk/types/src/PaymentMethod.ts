import { Menu, } from '@srclaunch/types';










export enum PaymentMethodTypes {
  BankTransfer = "bank-transfer",
  CreditCard = "credit-card",
  Crypto = "crypto",};

export type PaymentMethod = {
    id?: string;
created_date?: Date | null;
updated_date?: Date | null;
OrganizationId?: string | null;
PaymentId?: string | null;
TeamId?: string | null;
UserId?: string | null;
default?: boolean | null;
masked_number?: string | null;
name?: string | null;
type?: PaymentMethodTypes | null;
  };