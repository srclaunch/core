export type Iso8601DateString = string; // YYYY-MM-DD
export type Iso8601DateTimeString = string; // YYYY-MM-DDTHH:MM:SSZ
export type Iso3166Alpha2CountryString = string; // CC
export type Iso4217CurrencyString = string; // CCC

interface TransactionLocation {
  address: string | null;
  city: string | null;
  lat: number | null;
  lon: number | null;
  region: string | null;
  store_number: string | null;
  postal_code: string | null;
  country: string | null;
}

interface TransactionPaymentMeta {
  by_order_of: string | null;
  payee: string | null;
  payer: string | null;
  payment_method: string | null;
  payment_processor: string | null;
  ppd_id: string | null;
  reason: string | null;
  reference_number: string | null;
}
interface Transaction {
  account_id: string;
  account_owner: string | null;
  amount: number | null;
  iso_currency_code: string | null;
  unofficial_currency_code: string | null;
  category: Array<string> | null;
  category_id: string | null;
  date: Iso8601DateString;
  authorized_date: Iso8601DateString | null;
  location: TransactionLocation;
  merchant_name: string | null;
  name: string | null;
  payment_channel: string;
  payment_meta: TransactionPaymentMeta;
  pending: boolean | null;
  pending_transaction_id: string | null;
  transaction_id: string;
  transaction_type: string | null;
  transaction_code: string | null;
}

export type PlaidItemId = string;

export type PlaidInstitution = {
  institution_id: string;
  name: string;
};
/**
 * @export
 * @interface PlaidAccount
 */
export type PlaidAccount = {
  account_id: string;
  balances: {
    available: number | null;
    current: number;
    limit: number | null;
    iso_currency_code: string | null;
    unofficial_currency_code: string | null;
    last_updated_datetime: string | null;
  };
  id?: string;
  mask?: string | null;
  name: string;
  official_name: string | null;
  subtype: string;
  type: string;
  verification_status:
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'manually_verified'
    | 'automatically_verified'
    | null;
};

/**
 
 * @export
 * @interface PlaidTransaction
 */
export interface PlaidTransaction extends Transaction {
  account_id: string;
  account_owner: string | null;
  amount: number | null;
  iso_currency_code: string | null;
  unofficial_currency_code: string | null;
  category: Array<string> | null;
  category_id: string | null;
  date: Iso8601DateString;
  authorized_date: Iso8601DateString | null;
  location: {
    address: string | null;
    city: string | null;
    country: string | null;
    lat: number | null;
    lon: number | null;
    postal_code: string | null;
    region: string | null;
    store_number: string | null;
  };
  merchant_name: string | null;
  name: string | null;
  payment_channel: string;
  payment_meta: {
    by_order_of: string | null;
    payee: string | null;
    payer: string | null;
    payment_method: string | null;
    payment_processor: string | null;
    ppd_id: string | null;
    reason: string | null;
    reference_number: string | null;
  };
  pending: boolean | null;
  pending_transaction_id: string | null;
  transaction_id: string;
  transaction_type: string | null;
  transaction_code: string | null;
}

export interface PlaidWebhookBody {
  item_id: string;
  consent_expiration_time: string;
  new_transactions: number;
  removed_transactions: PlaidTransaction['transaction_id'][];
  webhook_code: string;
  webhook_type: string;
}
