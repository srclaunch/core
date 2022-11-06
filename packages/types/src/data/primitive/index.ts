import { CurrencyCode } from '../../i18n/currency';
import { ISO8601String } from '../../i18n/date';
import { LanguageCode } from '../../i18n/language';
import { CountryCode } from '../../i18n/locale/country';
import { TimezoneRegions } from '../../i18n/time/region';

export type MenuItem = {
  readonly label: string;
  readonly to?: string;
  readonly value?: boolean | number | string;
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
export type DateRange = readonly ISO8601String[];
export type DateTime = ISO8601String;
export type DayOfMonth = string;
export type DomainName = string;
export type EmailAddress = string;
export type EthereumAddress = string;
export type EAN = string;
export type EIN = string;
export type Float = number;
export type GeographicCoordinate = number;
export type GeographicCoordinates = readonly number[];
export type GitRepositoryURL = string;
export type HSLColor = string;
export type HexColor = string;
export type Hexadecimal = string;
export type IBAN = string;
export type IMEI = number;
export type IPAddress = string;
export type IPAddressRange = readonly string[];
export type ISBN = string;
export type ISIN = string;
export type ISMN = string;
export type ISSN = string;
export type ISO8601 = string;
export type ISO31661Alpha2 = string;
export type ISO31661Alpha3 = string;
export type ISO4217 = CurrencyCode;
export type Image = {
  readonly description?: string;
  readonly format?: string;
  readonly path?: string;
  readonly url?: string;
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
  readonly defaultValue?: MenuItem['value'];
  readonly items: readonly MenuItem[];
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
export type Tags = readonly MenuItem[];
export type TaxIDNumber = string;
export type Time = string;
export type TimeRange = readonly string[];
export type TimeOfDay = string;
export type Timezone = TimezoneRegions;
export type URL = string;
export type URLPath = string;
export type UUID = string;
export type VATIDNumber = string;
export type VerificationCode = string;
export type Video = {
  readonly description?: string;
  readonly format?: string;
  readonly path?: string;
  readonly url?: string;
};
export type Weekday = string;
export type Year = number;

export type Primitive =
  | AirportCode
  | BankIDCode
  | BitcoinAddress
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
  | EAN
  | EIN
  | EmailAddress
  | EthereumAddress
  | Float
  | GeographicCoordinate
  | GeographicCoordinates
  | GitRepositoryURL
  | Hexadecimal
  | HexColor
  | HSLColor
  | IBAN
  | Image
  | IMEI
  | Integer
  | IPAddress
  | IPAddressRange
  | ISBN
  | ISIN
  | ISMN
  | ISO4217
  | ISO8601
  | ISO31661Alpha2
  | ISO31661Alpha3
  | ISSN
  | JSONObject
  | LanguageCode
  | LicensePlateNumber
  | LongText
  | MACAddress
  | MagnetURI
  | Markdown
  | MD5
  | Menu
  | MimeType
  | Month
  | PassportNumber
  | Password
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
  | Tags
  | TaxIDNumber
  | Time
  | TimeOfDay
  | TimeRange
  | Timezone
  | URL
  | URLPath
  | UUID
  | VATIDNumber
  | VerificationCode
  | Video
  | Weekday
  | Year
  | boolean
  | number
  | string;

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
  AirportCode = 'AirportCode',
  AlignHorizontal = 'AlignHorizontal',
  AlignVertical = 'AlignVertical',
  Amount = 'Amount',
  BackgroundColor = 'BackgroundColor',
  BackgroundImageRepeat = 'BackgroundImageRepeat',
  BackgroundImageSize = 'BackgroundImageSize',
  BankIDCode = 'BankIDCode',
  BitcoinAddress = 'BitcoinAddress',
  Boolean = 'Boolean',
  BorderStyle = 'BorderStyle',
  ButtonType = 'ButtonType',
  CSSColor = 'CSSColor',
  CSSMeasurement = 'CSSMeasurement',
  City = 'City',
  Color = 'Color',
  CountryCode = 'CountryCode',
  CreditCard = 'CreditCard',
  CurrencyAmount = 'CurrencyAmount',
  CurrencyCode = 'CurrencyCode',
  Cursor = 'Cursor',
  DataURI = 'DataURI',
  Date = 'Date',
  DateRange = 'DateRange',
  DateTime = 'DateTime',
  DayOfMonth = 'DayOfMonth',
  Depth = 'Depth',
  DomainName = 'DomainName',
  EAN = 'EAN',
  EIN = 'EIN',
  EmailAddress = 'EmailAddress',
  EthereumAddress = 'EthereumAddress',
  Fill = 'Fill',
  Float = 'Float',
  GeographicCoordinate = 'GeographicCoordinate',
  GeographicCoordinates = 'GeographicCoordinates',
  GitRepositoryURL = 'GitRepositoryURL',
  HSLColor = 'HSLColor',
  HexColor = 'HexColor',
  Hexadecimal = 'Hexadecimal',
  IBAN = 'IBAN',
  IMEI = 'IMEI',
  IPAddress = 'IPAddress',
  IPAddressRange = 'IPAddressRange',
  Orientation = 'Orientation',
  Shadow = 'Shadow',
  ISBN = 'ISBN',
  ISIN = 'ISIN',
  ISMN = 'ISMN',
  ISO31661Alpha2 = 'ISO31661Alpha2',
  ISO31661Alpha3 = 'ISO31661Alpha3',
  ISO4217 = 'ISO4217',
  ISO8601 = 'ISO8601',
  ISSN = 'ISSN',
  Image = 'Image',
  Integer = 'Integer',
  JSON = 'JSON',
  LanguageCode = 'LanguageCode',
  LicensePlateNumber = 'LicensePlateNumber',
  LongText = 'LongText',
  MACAddress = 'MACAddress',
  MD5 = 'MD5',
  MagnetURI = 'MagnetURI',
  Markdown = 'Markdown',
  Menu = 'Menu',
  MimeType = 'MimeType',
  Month = 'Month',
  Number = 'number',
  PassportNumber = 'PassportNumber',
  Password = 'Password',
  Percent = 'Percent',
  PhoneNumber = 'PhoneNumber',
  Port = 'Port',
  PostalCode = 'PostalCode',
  Province = 'Province',
  RFC3339 = 'RFC3339',
  RGBColor = 'RGBColor',
  ReactComponentProps = 'ReactComponentProps',
  SSN = 'SSN',
  SemanticVersion = 'SemanticVersion',
  Size = 'Size',
  State = 'State',
  StreetAddress = 'StreetAddress',
  String = 'String',
  Tags = 'Tags',
  TaxIDNumber = 'TaxIDNumber',
  TextAlign = 'TextAlign',
  Time = 'Time',
  TimeOfDay = 'TimeOfDay',
  TimeRange = 'TimeRange',
  TimezoneRegion = 'TimezoneRegion',
  URL = 'URL',
  URLPath = 'URLPath',
  UUID = 'UUID',
  VATIDNumber = 'VATIDNumber',
  VerificationCode = 'VerificationCode',
  Video = 'Video',
  Weekday = 'Weekday',
  Year = 'Year',
}
