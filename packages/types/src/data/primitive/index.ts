import { CurrencyCode } from '../../i18n/currency';
import { CountryCode } from '../../i18n/locale/country';
import { ISO8601String } from '../../i18n/date';
import { LanguageCode } from '../../i18n/language';
import { TimezoneRegions } from '../../i18n/time/region';

export type MenuItem = {
  label: string;
  value: string | number | boolean;
};

export type AirportCode = string;
export type BankIDCode = string;
export type BitcoinAddress = string;
export type Boolean = boolean;
export type City = string;
export type Color = string;
export type CreditCard = string;
export type CurrencyAmount = number;
export type DataURI = string;
export type Date = ISO8601String;
export type DateRange = ISO8601String[];
export type DateTime = ISO8601String;
export type DayOfMonth = string;
export type DomainName = string;
export type EmailAddress = string;
export type EthereumAddress = string;
export type EAN = string;
export type EIN = string;
export type Float = number;
export type GeographicCoordinate = number;
export type GeographicCoordinates = number[];
export type GitRepositoryURL = string;
export type HSLColor = string;
export type HexColor = string;
export type Hexadecimal = string;
export type IBAN = string;
export type IMEI = number;
export type IPAddress = string;
export type IPAddressRange = string[];
export type ISBN = string;
export type ISIN = string;
export type ISMN = string;
export type ISSN = string;
export type ISO8601 = string;
export type ISO31661Alpha2 = string;
export type ISO31661Alpha3 = string;
export type ISO4217 = CurrencyCode;
export type Image = {
  description?: string;
  format?: string;
  path?: string;
  url?: string;
};
export type Integer = number;
export type JSONObject = Record<string, unknown>;
export type LicensePlateNumber = string;
export type LongText = string;
export type MD5 = string;
export type MACAddress = string;
export type MagnetURI = string;
export type Markdown = string;
export type Menu = {
  defaultValue?: MenuItem['value'];
  items: MenuItem[];
};
export type MimeType = string;
export type Month = string;
export type Number = number;
export type Password = string;
export type PassportNumber = string;
export type Percent = number;
export type PhoneNumber = string;
export type Port = number;
export type PostalCode = string;
export type Province = string;
export type RFC3339 = string;
export type RGBColor = string;
export type SemanticVersion = string;
export type SSN = number;
export type State = string;
export type StreetAddress = string;
export type String = string;
export type Tags = MenuItem[];
export type TaxIDNumber = string;
export type Time = string;
export type TimeRange = string[];
export type TimeOfDay = string;
export type Timezone = TimezoneRegions;
export type URL = string;
export type URLPath = string;
export type UUID = string;
export type VATIDNumber = string;
export type VerificationCode = string;
export type Video = {
  description?: string;
  format?: string;
  url?: string;
  path?: string;
};
export type Weekday = string;
export type Year = number;

export type Primitive =
  | AirportCode
  | BankIDCode
  | BitcoinAddress
  | boolean
  | City
  | Color
  | CountryCode
  | CreditCard
  | CurrencyAmount
  | CurrencyCode
  | DataURI
  | Date
  | DateRange
  | DateTime
  | DayOfMonth
  | DomainName
  | EmailAddress
  | EthereumAddress
  | EAN
  | EIN
  | Float
  | GeographicCoordinate
  | GeographicCoordinates
  | GitRepositoryURL
  | HSLColor
  | HexColor
  | Hexadecimal
  | IBAN
  | IMEI
  | IPAddress
  | IPAddressRange
  | ISBN
  | ISIN
  | ISMN
  | ISSN
  | ISO8601
  | ISO31661Alpha2
  | ISO31661Alpha3
  | ISO4217
  | Image
  | Integer
  | JSONObject
  | LanguageCode
  | LicensePlateNumber
  | LongText
  | MD5
  | Markdown
  | Menu
  | number
  | MACAddress
  | MagnetURI
  | MimeType
  | Month
  | Password
  | PassportNumber
  | Percent
  | PhoneNumber
  | Port
  | PostalCode
  | Province
  | RFC3339
  | RGBColor
  | SemanticVersion
  | SSN
  | State
  | StreetAddress
  | string
  | Tags
  | TaxIDNumber
  | Time
  | TimeRange
  | TimeOfDay
  | Timezone
  | URL
  | URLPath
  | UUID
  | VATIDNumber
  | Video
  | VerificationCode
  | Weekday
  | Year;

// export enum Primitives {
//   AirportCode = AirportCode,
//   BankIDCode = BankIDCode,
//   BitcoinAddress = BitcoinAddress,
//   Boolean = Boolean,
//   City = City,
//   Color = Color,
//   CountryCode = CountryCode,
//   CreditCard = CreditCard,
//   CurrencyAmount = CurrencyAmount,
//   CurrencyCode =CurrencyCode,
//   DataURI = 'data-uri',
//   Date = 'date',
//   DateRange = 'date-range',
//   DateTime = 'date-time',
//   DayOfMonth = 'day-of-month',
//   DomainName = 'domain-name',
//   EmailAddress = 'email-address',
//   EthereumAddress = 'ethereum-address',
//   EAN = 'european-article-number',
//   EIN = 'employer-identification-number',
//   Float = 'float',
//   GeographicCoordinate = 'geographic-coordinate',
//   GeographicCoordinates = 'geographic-coordinates',
//   GitRepositoryURL = 'git-repository-url',
//   HSLColor = 'hsl-color',
//   HexColor = 'hex-color',
//   Hexadecimal = 'hexadecimal',
//   IBAN = 'international-bank-account-number',
//   IMEI = 'international-mobile-equipment-identifier',
//   IPAddress = 'ip-address',
//   IPAddressRange = 'ip-address-range',
//   ISBN = 'international-standard-book-number',
//   ISIN = 'international-stock-number',
//   ISMN = 'international-standard-music-number',
//   ISSN = 'international-standard-serial-number',
//   ISO8601 = 'iso-8601',
//   ISO31661Alpha2 = 'iso-31661-alpha-2',
//   ISO31661Alpha3 = 'iso-31661-alpha-3',
//   ISO4217 = 'iso-4217',
//   Image = 'image',
//   Integer = 'integer',
//   JSON = 'json',
//   LanguageCode = 'language-code',
//   LicensePlateNumber = 'license-plate-number',
//   LongText = 'long-text',
//   MD5 = 'md5',
//   Markdown = 'markdown',
//   Menu = 'menu',
//   Number = 'number',
//   MACAddress = 'mac-address',
//   MagnetURI = 'magnet-uri',
//   MimeType = 'mime-type',
//   Month = 'month',
//   Password = 'password',
//   PassportNumber = 'passport-number',
//   Percent = 'percent',
//   PhoneNumber = 'phone-number',
//   Port = 'port',
//   PostalCode = 'postal-code',
//   Province = 'province',
//   RFC3339 = 'rfc-3339',
//   RGBColor = 'rgb-color',
//   SemanticVersion = 'semantic-version',
//   SSN = 'social-security-number',
//   State = 'state',
//   StreetAddress = 'street-address',
//   String = 'string',
//   Tags = 'tags',
//   TaxIDNumber = 'tax-id-number',
//   Time = 'time',
//   TimeOfDay = 'time-of-day',
//   TimeRange = 'time-range',
//   TimezoneRegion = 'timezone-region',
//   URL = 'url',
//   URLPath = 'url-path',
//   UUID = 'uuid',
//   VATIDNumber = 'value-added-tax-id-number',
//   VerificationCode = 'verification-code',
//   Video = 'video',
//   Weekday = 'weekday',
//   Year = 'year',
// }

export enum Primitives {
  AirportCode = 'airport-code',
  BankIDCode = 'bank-id-code',
  BitcoinAddress = 'bitcoin-address',
  Boolean = 'boolean',
  City = 'city',
  Color = 'color',
  CountryCode = 'country-code',
  CreditCard = 'credit-card',
  CurrencyAmount = 'currency-amount',
  CurrencyCode = 'currency-code',
  DataURI = 'data-uri',
  Date = 'date',
  DateRange = 'date-range',
  DateTime = 'date-time',
  DayOfMonth = 'day-of-month',
  DomainName = 'domain-name',
  EmailAddress = 'email-address',
  EthereumAddress = 'ethereum-address',
  EAN = 'european-article-number',
  EIN = 'employer-identification-number',
  Float = 'float',
  GeographicCoordinate = 'geographic-coordinate',
  GeographicCoordinates = 'geographic-coordinates',
  GitRepositoryURL = 'git-repository-url',
  HSLColor = 'hsl-color',
  HexColor = 'hex-color',
  Hexadecimal = 'hexadecimal',
  IBAN = 'international-bank-account-number',
  IMEI = 'international-mobile-equipment-identifier',
  IPAddress = 'ip-address',
  IPAddressRange = 'ip-address-range',
  ISBN = 'international-standard-book-number',
  ISIN = 'international-stock-number',
  ISMN = 'international-standard-music-number',
  ISSN = 'international-standard-serial-number',
  ISO8601 = 'iso-8601',
  ISO31661Alpha2 = 'iso-31661-alpha-2',
  ISO31661Alpha3 = 'iso-31661-alpha-3',
  ISO4217 = 'iso-4217',
  Image = 'image',
  Integer = 'integer',
  JSON = 'json',
  LanguageCode = 'language-code',
  LicensePlateNumber = 'license-plate-number',
  LongText = 'long-text',
  MD5 = 'md5',
  Markdown = 'markdown',
  Menu = 'menu',
  Number = 'number',
  MACAddress = 'mac-address',
  MagnetURI = 'magnet-uri',
  MimeType = 'mime-type',
  Month = 'month',
  Password = 'password',
  PassportNumber = 'passport-number',
  Percent = 'percent',
  PhoneNumber = 'phone-number',
  Port = 'port',
  PostalCode = 'postal-code',
  Province = 'province',
  RFC3339 = 'rfc-3339',
  RGBColor = 'rgb-color',
  SemanticVersion = 'semantic-version',
  SSN = 'social-security-number',
  State = 'state',
  StreetAddress = 'street-address',
  String = 'string',
  Tags = 'tags',
  TaxIDNumber = 'tax-id-number',
  Time = 'time',
  TimeOfDay = 'time-of-day',
  TimeRange = 'time-range',
  TimezoneRegion = 'timezone-region',
  URL = 'url',
  URLPath = 'url-path',
  UUID = 'uuid',
  VATIDNumber = 'value-added-tax-id-number',
  VerificationCode = 'verification-code',
  Video = 'video',
  Weekday = 'weekday',
  Year = 'year',
}
