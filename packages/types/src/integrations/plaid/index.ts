export type Iso8601DateString = string; // YYYY-MM-DD
export type Iso8601DateTimeString = string; // YYYY-MM-DDTHH:MM:SSZ
export type Iso3166Alpha2CountryString = string; // CC
export type Iso4217CurrencyString = string; // CCC

interface TransactionLocation {
  readonly address: string | null;
  readonly city: string | null;
  readonly country: string | null;
  readonly lat: number | null;
  readonly lon: number | null;
  readonly postal_code: string | null;
  readonly region: string | null;
  readonly store_number: string | null;
}

interface TransactionPaymentMeta {
  readonly by_order_of: string | null;
  readonly payee: string | null;
  readonly payer: string | null;
  readonly payment_method: string | null;
  readonly payment_processor: string | null;
  readonly ppd_id: string | null;
  readonly reason: string | null;
  readonly reference_number: string | null;
}
interface Transaction {
  readonly account_id: string;
  readonly account_owner: string | null;
  readonly amount: number | null;
  readonly authorized_date: Iso8601DateString | null;
  readonly category: ReadonlyArray<string> | null;
  readonly category_id: string | null;
  readonly date: Iso8601DateString;
  readonly iso_currency_code: string | null;
  readonly location: TransactionLocation;
  readonly merchant_name: string | null;
  readonly name: string | null;
  readonly payment_channel: string;
  readonly payment_meta: TransactionPaymentMeta;
  readonly pending: boolean | null;
  readonly pending_transaction_id: string | null;
  readonly transaction_code: string | null;
  readonly transaction_id: string;
  readonly transaction_type: string | null;
  readonly unofficial_currency_code: string | null;
}

export type PlaidItemId = string;

export type PlaidInstitution = {
  readonly institution_id: string;
  readonly name: string;
};
/**
 * @export
 * @interface PlaidAccount
 */
export type PlaidAccount = {
  readonly account_id: string;
  readonly balances: {
    readonly available: number | null;
    readonly current: number;
    readonly iso_currency_code: string | null;
    readonly last_updated_datetime: string | null;
    readonly limit: number | null;
    readonly unofficial_currency_code: string | null;
  };
  readonly id?: string;
  readonly mask?: string | null;
  readonly name: string;
  readonly official_name: string | null;
  readonly subtype: string;
  readonly type: string;
  readonly verification_status:
    | 'automatically_verified'
    | 'manually_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | null;
};

/**
 
 * @export
 * @interface PlaidTransaction
 */
export interface PlaidTransaction extends Transaction {
  readonly account_id: string;
  readonly account_owner: string | null;
  readonly amount: number | null;
  readonly authorized_date: Iso8601DateString | null;
  readonly category: ReadonlyArray<string> | null;
  readonly category_id: string | null;
  readonly date: Iso8601DateString;
  readonly iso_currency_code: string | null;
  readonly location: {
    readonly address: string | null;
    readonly city: string | null;
    readonly country: string | null;
    readonly lat: number | null;
    readonly lon: number | null;
    readonly postal_code: string | null;
    readonly region: string | null;
    readonly store_number: string | null;
  };
  readonly merchant_name: string | null;
  readonly name: string | null;
  readonly payment_channel: string;
  readonly payment_meta: {
    readonly by_order_of: string | null;
    readonly payee: string | null;
    readonly payer: string | null;
    readonly payment_method: string | null;
    readonly payment_processor: string | null;
    readonly ppd_id: string | null;
    readonly reason: string | null;
    readonly reference_number: string | null;
  };
  readonly pending: boolean | null;
  readonly pending_transaction_id: string | null;
  readonly transaction_code: string | null;
  readonly transaction_id: string;
  readonly transaction_type: string | null;
  readonly unofficial_currency_code: string | null;
}

export interface PlaidWebhookBody {
  readonly consent_expiration_time: string;
  readonly item_id: string;
  readonly new_transactions: number;
  readonly removed_transactions: readonly PlaidTransaction['transaction_id'][];
  readonly webhook_code: string;
  readonly webhook_type: string;
}
