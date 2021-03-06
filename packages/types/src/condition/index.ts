export enum Condition {
  Contains = 'contains',
  HasCharacterCount = 'has-character-count',
  HasNumberCount = 'has-number-count',
  HasLetterCount = 'has-letter-count',
  HasLowercaseCount = 'has-lowercase-count',
  HasSpacesCount = 'has-spaces-count',
  HasSymbolCount = 'has-symbol-count',
  HasUppercaseCount = 'has-uppercase-count',
  IsAfter = 'is-after',
  IsAfterOrEqual = 'is-after-or-equal',
  IsAirport = 'is-airport',
  IsAlpha = 'is-alpha',
  IsAlphanumeric = 'is-alphanumeric',
  IsAlgorithmHash = 'is-algorithm-hash',
  IsAscii = 'is-ascii',
  IsBase64 = 'is-base-64',
  IsBefore = 'is-before',
  IsBeforeOrAfter = 'is-before-or-after',
  IsBeforeOrEqual = 'is-before-or-equal',
  IsBetween = 'is-between',
  IsBIC = 'is-bic',
  IsBitcoinAddress = 'is-bitcoin-address',
  IsBoolean = 'is-boolean',
  IsColor = 'is-color',
  IsComplexEnough = 'is-complex-enough',
  IsCountry = 'is-country',
  IsCreditCard = 'is-credit-card',
  IsCurrency = 'is-currency',
  IsDataURI = 'is-data-uri',
  IsDate = 'is-date',
  IsDateRange = 'is-date-range',
  IsDateTime = 'is-date-time',
  IsDayOfMonth = 'is-day-of-month',
  IsDecimal = 'is-decimal',
  IsDivisibleBy = 'is-divisible-by',
  IsDomainName = 'is-domain-name',
  IsEmailAddress = 'is-email-address',
  IsEthereumAddress = 'is-ethereum-address',
  IsEAN = 'is-ean',
  IsEIN = 'is-ein',
  IsEqual = 'is-equal',
  IsEvenNumber = 'is-even-number',
  IsFloat = 'is-float',
  IsIBAN = 'is-iban',
  IsGreaterThan = 'greater-than',
  IsGreaterThanOrEqual = 'greater-than-or-equal',
  IsHSLColor = 'is-hsl-color',
  IsHexColor = 'is-hex-color',
  IsHexadecimal = 'is-hexadecimal',
  IsIdentityCardCode = 'is-identity-card-code',
  IsIMEI = 'is-imei',
  IsInIPAddressRange = 'is-in-ip-address-range',
  IsInList = 'is-in-list',
  IsInTheLast = 'is-in-the-last',
  IsInteger = 'is-integer',
  IsIPAddress = 'is-ip-address',
  IsIPAddressRange = 'is-ip-address-range',
  IsISBN = 'is-isbn',
  IsISIN = 'is-isin',
  IsISMN = 'is-ismn',
  IsISRC = 'is-isrc',
  IsISSN = 'is-issn',
  IsISO4217 = 'is-iso-4217',
  IsISO8601 = 'is-iso-8601',
  IsISO31661Alpha2 = 'is-iso-31661-alpha-2',
  IsISO31661Alpha3 = 'is-iso-31661-alpha-3',
  IsJSON = 'is-json',
  IsLanguage = 'is-language',
  IsLatitude = 'is-latitude',
  IsLongitude = 'is-longitude',
  IsLengthEqual = 'is-length-equal',
  IsLengthGreaterThan = 'is-length-greater-than',
  IsLengthGreaterThanOrEqual = 'is-length-great-than-or-equal',
  IsLengthLessThan = 'is-length-less-than',
  IsLengthLessThanOrEqual = 'is-length-less-than-or-equal',
  IsLessThan = 'less-than',
  IsLessThanOrEqual = 'less-than-or-equal',
  IsLicensePlateNumber = 'is-license-plate-number',
  IsLowercase = 'is-lowercase',
  IsOctal = 'is-octal',
  IsMACAddress = 'is-mac-address',
  IsMD5 = 'is-md5',
  IsMagnetURI = 'is-magnet-uri',
  IsMarkdown = 'is-markdown',
  IsMimeType = 'is-mime-type',
  IsMonth = 'is-month',
  IsNegativeNumber = 'is-negative-number',
  IsNotDate = 'is-not-date',
  IsNotEqual = 'is-not-equal',
  IsNotInIPAddressRange = 'is-not-in-ip-address-range',
  IsNotInList = 'is-not-in-list',
  IsNotNull = 'is-not-null',
  IsNotRegexMatch = 'is-not-regex-match',
  IsNotToday = 'is-not-today',
  IsNumber = 'is-number',
  IsNumeric = 'is-numeric',
  IsOddNumber = 'is-odd-number',
  IsPassportNumber = 'is-passport-number',
  IsPhoneNumber = 'is-phone-number',
  IsPort = 'is-port',
  IsPositiveNumber = 'is-positive-number',
  IsPostalCode = 'is-postal-code',
  IsProvince = 'is-province',
  IsRGBColor = 'is-rgb-color',
  IsRegexMatch = 'is-regex-match',
  IsRequired = 'is-required',
  IsSemanticVersion = 'is-semantic-version',
  IsSlug = 'is-slug',
  IsSSN = 'is-ssn',
  IsState = 'is-state',
  IsStreetAddress = 'is-street-address',
  IsString = 'is-string',
  IsStrongPassword = 'is-strong-password',
  IsTags = 'is-tags',
  IsTaxIDNumber = 'is-tax-id-number',
  IsThisMonth = 'is-this-month',
  IsThisQuarter = 'is-this-quarter',
  IsThisWeek = 'is-this-week',
  IsThisWeekend = 'is-this-weekend',
  IsThisYear = 'is-this-year',
  IsTime = 'is-time',
  IsTimeOfDay = 'is-time-of-day',
  IsTimeRange = 'is-time-range',
  IsToday = 'is-today',
  IsURL = 'is-url',
  IsUUID = 'is-uuid',
  IsUppercase = 'is-uppercase',
  IsUsernameAvailable = 'is-username-available',
  IsValidStreetAddress = 'is-valid-street-address',
  IsVATIDNumber = 'is-vat-id-number',
  IsWeekday = 'is-weekday',
  IsWeekend = 'is-weekend',
  IsYear = 'is-year',
}

export enum AuthenticationCondition {
  IsAuthenticated = 'is-authenticated',
  IsNotAuthenticated = 'is-not-authenticated',
  IsUsernameAvailable = 'is-username-available',
  PasswordMismatch = 'password-mismatch',
}
