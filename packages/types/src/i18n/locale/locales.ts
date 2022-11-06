import { LanguageCode } from '../language/index';
import { CountryCode } from './country';

/**
 * Locale code in form of `[language]-[region]-[variant]`
 *
 * @example
 * ```
 * const localeCode: Locale.EnglishUnitedStates = 'en-US'
 * ```
 *
 */
export enum LocaleCode {
  Afrikaans = 'af',
  AfrikaansSouthAfrica = 'af-ZA',
  Albanian = 'sq',
  AlbanianAlbania = 'sq-AL',
  Amharic = 'am',
  AmharicEthiopia = 'am-ET',
  Arabic = 'ar',
  ArabicAlgeria = 'ar-DZ',
  ArabicBahrain = 'ar-BH',
  ArabicEgypt = 'ar-EG',
  ArabicIraq = 'ar-IQ',
  ArabicJordan = 'ar-JO',
  ArabicKuwait = 'ar-KW',
  ArabicLebanon = 'ar-LB',
  ArabicLibya = 'ar-LY',
  ArabicMorocco = 'ar-MA',
  ArabicOman = 'ar-OM',
  ArabicQatar = 'ar-QA',
  ArabicSaudiArabia = 'ar-SA',
  ArabicSyria = 'ar-SY',
  ArabicTunisia = 'ar-TN',
  ArabicUnitedArabEmirates = 'ar-AE',
  ArabicYemen = 'ar-YE',
  Armenian = 'hy',
  ArmenianArmenia = 'hy-AM',
  Azerbaijani = 'az',
  AzerbaijaniAzerbaijan = 'az-AZ',
  AzerbaijaniCyrillicAzerbaijan = 'az-Cyrl-AZ',
  Bashkir = 'ba',
  Basque = 'eu',
  BasqueSpain = 'eu-ES',
  Belarusian = 'be',
  BelarusianBelarus = 'be-BY',
  Bengali = 'bn',
  BengaliBangladesh = 'bn-BD',
  BengaliIndia = 'bn-IN',
  Berber = 'ber',
  Bhutani = 'dz',
  BhutaniBhutan = 'dz-BT',
  Bosnian = 'bs',
  BosnianBosniaAndHerzegovina = 'bs-BA',
  Breton = 'br',
  Bulgarian = 'bg',
  BulgarianBosniaAndHerzegovina = 'bg-BG',
  BulgarianBulgaria = 'bg-BG',
  Burmese = 'my',
  BurmeseMyanmar = 'my-MM',
  Cantonese = 'yue',
  CantoneseHongKong = 'yue-HK',
  Catalan = 'ca',
  CatalanSpain = 'ca-ES',
  Chechen = 'ce',
  Cherokee = 'chr',
  Chinese = 'zh',
  ChineseSimplified = 'zh-Hans',
  ChineseSimplifiedChina = 'zh-Hans-CN',
  ChineseSimplifiedHongKong = 'zh-Hans-HK',
  ChineseSimplifiedMacau = 'zh-Hans-MO',
  ChineseSimplifiedSingapore = 'zh-Hans-SG',
  ChineseTraditional = 'zh-Hant',
  ChineseTraditionalHongKong = 'zh-Hant-HK',
  ChineseTraditionalMacau = 'zh-Hant-MO',
  ChineseTraditionalSingapore = 'zh-Hant-SG',
  ChineseTraditionalTaiwan = 'zh-Hant-TW',
  Chuvash = 'cv',
  CorsicanFrance = 'co-FR',
  Croatian = 'hr',
  CroatianBosniaAndHerzegovina = 'hr-BA',
  CroatianCroatia = 'hr-HR',
  Czech = 'cs',
  CzechCzechRepublic = 'cs-CZ',
  Danish = 'da',
  DanishDenmark = 'da-DK',
  Dari = 'prs',
  DariAfghanistan = 'prs-AF',
  Divehi = 'dv',
  DivehiMaldives = 'dv-MV',
  Dutch = 'nl',
  DutchBelgium = 'nl-BE',
  DutchNetherlands = 'nl-NL',
  English = 'en',
  EnglishAustralia = 'en-AU',
  EnglishBelgium = 'en-BE',
  EnglishBelize = 'en-BZ',
  EnglishCanada = 'en-CA',
  EnglishCaribbean = 'en-029',
  EnglishIreland = 'en-IE',
  EnglishJamaica = 'en-JM',
  EnglishNewZealand = 'en-NZ',
  EnglishPhilippines = 'en-PH',
  EnglishSingapore = 'en-SG',
  EnglishSouthAfrica = 'en-ZA',
  EnglishTrinidadAndTobago = 'en-TT',
  EnglishUnitedKingdom = 'en-GB',
  EnglishUnitedStates = 'en-US',
  EnglishZimbabwe = 'en-ZW',
  Esperanto = 'eo',
  Estonian = 'et',
  EstonianEstonia = 'et-EE',
  Faroese = 'fo',
  FaroeseFaroeIslands = 'fo-FO',
  Farsi = 'fa',
  FarsiIran = 'fa-IR',
  Filipino = 'fil',
  FilipinoPhilippines = 'fil-PH',
  Finnish = 'fi',
  FinnishFinland = 'fi-FI',
  SpanishElementSalvador_ = 'es-SV',
  French = 'fr',
  FrenchBelgium = 'fr-BE',
  FrenchCanada = 'fr-CA',
  FrenchFrance = 'fr-FR',
  FrenchLuxembourg = 'fr-LU',
  FrenchMonaco = 'fr-MC',
  FrenchReunion = 'fr-RE',
  FrenchSwitzerland = 'fr-CH',
  Frisian = 'fy',
  FrisianNetherlands = 'fy-NL',
  Galician = 'gl',
  GalicianSpain = 'gl-ES',
  Georgian = 'ka',
  GeorgianGeorgia = 'ka-GE',
  German = 'de',
  GermanAustria = 'de-AT',
  GermanBelgium = 'de-BE',
  GermanGermany = 'de-DE',
  GermanLiechtenstein = 'de-LI',
  GermanLuxembourg = 'de-LU',
  GermanSwitzerland = 'de-CH',
  Greek = 'el',
  GreekGreece = 'el-GR',
  Greenlandic = 'kl',
  GreenlandicGreenland = 'kl-GL',
  Gujarati = 'gu',
  GujaratiIndia = 'gu-IN',
  Haitian = 'ht',
  Hausa = 'ha',
  HausaGhana = 'ha-GH',
  HausaNiger = 'ha-NE',
  HausaNigeria = 'ha-NG',
  Hebrew = 'he',
  HebrewIsrael = 'he-IL',
  Hindi = 'hi',
  HindiIndia = 'hi-IN',
  Hungarian = 'hu',
  HungarianHungary = 'hu-HU',
  Icelandic = 'is',
  IcelandicIceland = 'is-IS',
  Igbo = 'ig',
  IgboNigeria = 'ig-NG',
  Indonesian = 'id',
  IndonesianIndonesia = 'id-ID',
  Irish = 'ga',
  IrishIreland = 'ga-IE',
  Italian = 'it',
  ItalianItaly = 'it-IT',
  ItalianSwitzerland = 'it-CH',
  Japanese = 'ja',
  JapaneseJapan = 'ja-JP',
  Javanese = 'jv',
  Kannada = 'kn',
  KannadaIndia = 'kn-IN',
  Karelian = 'krl',
  Kazakh = 'kk',
  KazakhKazakhstan = 'kk-KZ',
  Khmer = 'km',
  KhmerCambodia = 'km-KH',
  KinyarwandaRwanda = 'rw-RW',
  Komi = 'kv',
  Konkani = 'kok',
  KonkaniIndia = 'kok-IN',
  Korean = 'ko',
  KoreanSouthKorea = 'ko-KR',
  Kurdish = 'ku',
  KurdishIraq = 'ku-IQ',
  KurdishTurkey = 'ku-TR',
  Kyrgyz = 'ky',
  KyrgyzKyrgyzstan = 'ky-KG',
  Lao = 'lo',
  LaoLaos = 'lo-LA',
  Latin = 'la',
  Latvian = 'lv',
  LatvianLatvia = 'lv-LV',
  Lithuanian = 'lt',
  LithuanianLithuania = 'lt-LT',
  Luxembourgish = 'lb',
  LuxembourgishBelgium = 'lb-LU',
  LuxembourgishLuxembourg = 'lb-LU',
  Macedonian = 'mk',
  MacedonianNorthMacedonia = 'mk-MK',
  Malagasy = 'mg',
  Malay = 'ms',
  MalayBrunei = 'ms-BN',
  MalayIndia = 'ms-IN',
  MalayMalaysia = 'ms-MY',
  MalaySingapore = 'ms-SG',
  Malayalam = 'ml',
  MalayalamIndia = 'ml-IN',
  Maltese = 'mt',
  MalteseMalta = 'mt-MT',
  Maori = 'mi',
  MaoriNewZealand = 'mi-NZ',
  Marathi = 'mr',
  MarathiIndia = 'mr-IN',
  Mari = 'chm',
  Mongolian = 'mn',
  MongolianMongolia = 'mn-MN',
  Montenegrin = 'me',
  MontenegrinMontenegro = 'me-ME',
  Nepali = 'ne',
  NepaliNepal = 'ne-NP',
  NorthernSotho = 'ns',
  NorthernSothoSouthAfrica = 'ns-ZA',
  Norwegian = 'nb',
  NorwegianBokmalNorway = 'nb-NO',
  NorwegianNynorskNorway = 'nn-NO',
  Oriya = 'or',
  OriyaIndia = 'or-IN',
  Ossetian = 'os',
  Pashto = 'ps',
  PashtoAfghanistan = 'ps-AF',
  Persian = 'fa',
  PersianIran = 'fa-IR',
  Polish = 'pl',
  PolishPoland = 'pl-PL',
  Portuguese = 'pt',
  PortugueseBrazil = 'pt-BR',
  PortuguesePortugal = 'pt-PT',
  Punjabi = 'pa',
  PunjabiIndia = 'pa-IN',
  PunjabiPakistan = 'pa-PK',
  Quechua = 'qu',
  QuechuaBolivia = 'qu-BO',
  QuechuaEcuador = 'qu-EC',
  QuechuaPeru = 'qu-PE',
  Romanian = 'ro',
  RomanianRomania = 'ro-RO',
  Russian = 'ru',
  RussianKazakhstan = 'ru-KZ',
  RussianKyrgyzstan = 'ru-KG',
  RussianRussia = 'ru-RU',
  RussianUkraine = 'ru-UA',
  Sakha = 'sah',
  Sami = 'se',
  SamiFinland = 'se-FI',
  SamiNorway = 'se-NO',
  SamiSweden = 'se-SE',
  Samoan = 'sm',
  SamoanSamoa = 'sm-WS',
  Sanskrit = 'sa',
  SanskritIndia = 'sa-IN',
  Scots = 'gd',
  Serbian = 'sr',
  SerbianBosniaAndHerzegovina = 'sr-BA',
  SerbianCyrillic = 'sr-SP-Cyrl',
  SerbianCyrillicBosniaAndHerzegovina = 'sr-Cyrl-BA',
  SerbianCyrillicSerbiaAndMontenegro = 'sr-Cyrl-SP',
  SerbianSerbiaAndMontenegro = 'sr-SP',
  Sesotho = 'st',
  SesothoSouthAfrica = 'st-ZA',
  Shona = 'sn',
  ShonaZimbabwe = 'sn-ZW',
  Sindhi = 'sd',
  SindhiPakistan = 'sd-PK',
  Sinhala = 'si',
  SinhalaSriLanka = 'si-LK',
  Slovak = 'sk',
  SlovakSlovakia = 'sk-SK',
  Slovenian = 'sl',
  SlovenianSlovenia = 'sl-SI',
  Somali = 'so',
  SomaliSomalia = 'so-SO',
  Spanish = 'es',
  SpanishArgentina = 'es-AR',
  SpanishBolivia = 'es-BO',
  SpanishChile = 'es-CL',
  SpanishColombia = 'es-CO',
  SpanishCostaRica = 'es-CR',
  SpanishCuba = 'es-CU',
  SpanishDominicanRepublic = 'es-DO',
  SpanishEcuador = 'es-EC',
  SpanishElSalvador = 'es-SV',
  SpanishEquatorialGuinea = 'es-GQ',
  SpanishGuatemala = 'es-GT',
  SpanishHonduras = 'es-HN',
  SpanishMexico = 'es-MX',
  SpanishNicaragua = 'es-NI',
  SpanishPanama = 'es-PA',
  SpanishParaguay = 'es-PY',
  SpanishPeru = 'es-PE',
  SpanishPuertoRico = 'es-PR',
  SpanishSpain = 'es-ES',
  SpanishUnitedStates = 'es-US',
  SpanishUruguay = 'es-UY',
  SpanishVenezuela = 'es-VE',
  Sudanese = 'su',
  Sutu = 'st',
  SutuSouthAfrica = 'st-ZA',
  Swahili = 'sw',
  SwahiliKenya = 'sw-KE',
  Swedish = 'sv',
  SwedishFinland = 'sv-FI',
  SwedishSweden = 'sv-SE',
  Syriac = 'syr',
  SyriacSyria = 'syr-SY',
  Tagalog = 'tl',
  TagalogPhilippines = 'tl-PH',
  Tajik = 'tg',
  TajikTajikistan = 'tg-TJ',
  Tamazight = 'tmh',
  Tamil = 'ta',
  TamilIndia = 'ta-IN',
  Tatar = 'tt',
  Telugu = 'te',
  TeluguIndia = 'te-IN',
  Thai = 'th',
  ThaiThailand = 'th-TH',
  Tibetan = 'bo',
  TibetanBhutan = 'bo-BT',
  TibetanChina = 'bo-CN',
  TibetanIndia = 'bo-IN',
  Tsonga = 'ts',
  Tswana = 'tn',
  TswanaSouthAfrica = 'tn-ZA',
  Turkish = 'tr',
  TurkishTurkey = 'tr-TR',
  Turkmen = 'tk',
  Ukrainian = 'uk',
  UkrainianUkraine = 'uk-UA',
  Urdu = 'ur',
  UrduAfghanistan = 'ur-AF',
  UrduIndia = 'ur-IN',
  UrduPakistan = 'ur-PK',
  Uzbek = 'uz',
  UzbekCyrillic = 'uz-Cyrl-UZ',
  UzbekLatin = 'uz-Latn-UZ',
  UzbekUzbekistan = 'uz-UZ',
  Vietnamese = 'vi',
  VietnameseVietnam = 'vi-VN',
  Welsh = 'cy',
  WelshUnitedKingdom = 'cy-GB',
  Xhosa = 'xh',
  XhosaSouthAfrica = 'xh-ZA',
  Yiddish = 'yi',
  Yoruba = 'yo',
  YorubaNigeria = 'yo-NG',
  ZhuyinMandarinChina = 'yue-Hant-CN',
  Zulu = 'zu',
  ZuluSouthAfrica = 'zu-ZA',
}

export type Locale = {
  readonly country?: {
    readonly code: CountryCode;
    readonly name: string;
    readonly native: string;
  };
  readonly id: LocaleCode;
  readonly language: {
    readonly code: LanguageCode;
    readonly name: string;
    readonly native: string;
  };
  readonly name: string;
  readonly native_name: string;
  readonly rtl: boolean;
};

export const Afrikaans: Locale = {
  id: LocaleCode.Afrikaans,
  language: {
    code: LanguageCode.Afrikaans,
    name: 'Afrikaans',
    native: 'Afrikaans',
  },
  name: 'Afrikaans',
  native_name: 'Afrikaans',
  rtl: false,
};

export const AfrikaansSouthAfrica: Locale = {
  country: {
    code: CountryCode.SouthAfrica,
    name: 'South Africa',
    native: 'South Africa',
  },
  id: LocaleCode.AfrikaansSouthAfrica,
  language: {
    code: LanguageCode.Afrikaans,
    name: 'Afrikaans',
    native: 'Afrikaans',
  },
  name: 'Afrikaans (South Africa)',
  native_name: 'Afrikaans (Suid-Afrika)',
  rtl: false,
};

export const Albanian: Locale = {
  id: LocaleCode.Albanian,
  language: {
    code: LanguageCode.Albanian,
    name: 'Albanian',
    native: 'Shqip',
  },
  name: 'Albanian',
  native_name: 'Shqip',
  rtl: false,
};

export const AlbanianAlbania: Locale = {
  country: {
    code: CountryCode.Albania,
    name: 'Albania',
    native: 'Shqipëria',
  },
  id: LocaleCode.AlbanianAlbania,
  language: {
    code: LanguageCode.Albanian,
    name: 'Albanian',
    native: 'Shqip',
  },
  name: 'Albanian (Albania)',
  native_name: 'Shqip (Shqipëria)',
  rtl: false,
};

export const Amharic: Locale = {
  id: LocaleCode.Amharic,
  language: {
    code: LanguageCode.Amharic,
    name: 'Amharic',
    native: 'አማርኛ',
  },
  name: 'Amharic',
  native_name: 'አማርኛ',
  rtl: false,
};

export const AmharicEthiopia: Locale = {
  country: {
    code: CountryCode.Ethiopia,
    name: 'Ethiopia',
    native: 'ኢትዮጵያ',
  },
  id: LocaleCode.AmharicEthiopia,
  language: {
    code: LanguageCode.Amharic,
    name: 'Amharic',
    native: 'አማርኛ',
  },
  name: 'Amharic (Ethiopia)',
  native_name: 'አማርኛ (ኢትዮጵያ)',
  rtl: false,
};

export const Arabic: Locale = {
  id: LocaleCode.Arabic,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic',
  native_name: 'العربية',
  rtl: true,
};

export const ArabicAlgeria: Locale = {
  country: {
    code: CountryCode.Algeria,
    name: 'Algeria',
    native: 'الجزائر',
  },
  id: LocaleCode.ArabicAlgeria,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Algeria)',
  native_name: 'العربية (الجزائر)',
  rtl: true,
};

export const ArabicBahrain: Locale = {
  country: {
    code: CountryCode.Bahrain,
    name: 'Bahrain',
    native: 'البحرين',
  },
  id: LocaleCode.ArabicBahrain,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Bahrain)',
  native_name: 'العربية (البحرين)',
  rtl: true,
};

export const ArabicEgypt: Locale = {
  country: {
    code: CountryCode.Egypt,
    name: 'Egypt',
    native: 'مصر',
  },
  id: LocaleCode.ArabicEgypt,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Egypt)',
  native_name: 'العربية (مصر)',
  rtl: true,
};

export const ArabicIraq: Locale = {
  country: {
    code: CountryCode.Iraq,
    name: 'Iraq',
    native: 'العراق',
  },
  id: LocaleCode.ArabicIraq,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Iraq)',
  native_name: 'العربية (العراق)',
  rtl: true,
};

export const ArabicJordan: Locale = {
  country: {
    code: CountryCode.Jordan,
    name: 'Jordan',
    native: 'الأردن',
  },
  id: LocaleCode.ArabicJordan,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Jordan)',
  native_name: 'العربية (الأردن)',
  rtl: true,
};

export const ArabicKuwait: Locale = {
  country: {
    code: CountryCode.Kuwait,
    name: 'Kuwait',
    native: 'الكويت',
  },

  id: LocaleCode.ArabicKuwait,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Kuwait)',
  native_name: 'العربية (الكويت)',
  rtl: true,
};

export const ArabicLebanon: Locale = {
  country: {
    code: CountryCode.Lebanon,
    name: 'Lebanon',
    native: 'لبنان',
  },
  id: LocaleCode.ArabicLebanon,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Lebanon)',
  native_name: 'العربية (لبنان)',
  rtl: true,
};

export const ArabicLibya: Locale = {
  country: {
    code: CountryCode.Libya,
    name: 'Libya',
    native: 'ليبيا',
  },
  id: LocaleCode.ArabicLibya,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Libya)',
  native_name: 'العربية (ليبيا)',
  rtl: true,
};

export const ArabicMorocco: Locale = {
  country: {
    code: CountryCode.Morocco,
    name: 'Morocco',
    native: 'المغرب',
  },
  id: LocaleCode.ArabicMorocco,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Morocco)',
  native_name: 'العربية (المغرب)',
  rtl: true,
};

export const ArabicOman: Locale = {
  country: {
    code: CountryCode.Oman,
    name: 'Oman',
    native: 'عمان',
  },
  id: LocaleCode.ArabicOman,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Oman)',
  native_name: 'العربية (عمان)',
  rtl: true,
};

export const ArabicQatar: Locale = {
  country: {
    code: CountryCode.Qatar,
    name: 'Qatar',
    native: 'قطر',
  },
  id: LocaleCode.ArabicQatar,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Qatar)',
  native_name: 'العربية (قطر)',
  rtl: true,
};

export const ArabicSaudiArabia: Locale = {
  country: {
    code: CountryCode.SaudiArabia,
    name: 'Saudi Arabia',
    native: 'المملكة العربية السعودية',
  },
  id: LocaleCode.ArabicSaudiArabia,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Saudi Arabia)',
  native_name: 'العربية (المملكة العربية السعودية)',
  rtl: true,
};

export const ArabicTunisia: Locale = {
  country: {
    code: CountryCode.Tunisia,
    name: 'Tunisia',
    native: 'تونس',
  },
  id: LocaleCode.ArabicTunisia,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Tunisia)',
  native_name: 'العربية (تونس)',
  rtl: true,
};

export const ArabicUnitedArabEmirates: Locale = {
  country: {
    code: CountryCode.UnitedArabEmirates,
    name: 'United Arab Emirates',
    native: 'الإمارات العربية المتحدة',
  },
  id: LocaleCode.ArabicUnitedArabEmirates,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (United Arab Emirates)',
  native_name: 'العربية (الإمارات العربية المتحدة)',
  rtl: true,
};

export const ArabicYemen: Locale = {
  country: {
    code: CountryCode.Yemen,
    name: 'Yemen',
    native: 'اليمن',
  },
  id: LocaleCode.ArabicYemen,
  language: {
    code: LanguageCode.Arabic,
    name: 'Arabic',
    native: 'العربية',
  },
  name: 'Arabic (Yemen)',
  native_name: 'العربية (اليمن)',
  rtl: true,
};

export const Armenian: Locale = {
  id: LocaleCode.Armenian,
  language: {
    code: LanguageCode.Armenian,
    name: 'Armenian',
    native: 'Հայերեն',
  },
  name: 'Armenian',
  native_name: 'Հայերեն',
  rtl: false,
};

export const ArmenianArmenia: Locale = {
  country: { code: CountryCode.Armenia, name: 'Armenia', native: 'Հայաստան' },
  id: LocaleCode.ArmenianArmenia,
  language: {
    code: LanguageCode.Armenian,
    name: 'Armenian',
    native: 'հայերեն',
  },
  name: 'Armenian (Armenia)',
  native_name: 'հայերեն (Հայաստան)',
  rtl: false,
};

export const Azerbaijani = {
  id: LocaleCode.Azerbaijani,
  language: {
    code: LanguageCode.Azerbaijani,
    name: 'Azeribaijani',
    native: 'Azərbaycan',
  },
  name: 'Azeri',
  native_name: 'Azərbaycan',
  rtl: false,
};

export const AzerbaijaniAzerbaijan: Locale = {
  country: {
    code: CountryCode.Azerbaijan,
    name: 'Azerbaijan',
    native: 'Azərbaycan',
  },
  id: LocaleCode.AzerbaijaniAzerbaijan,
  language: {
    code: LanguageCode.Azerbaijani,
    name: 'Azerbaijani',
    native: 'Azərbaycan',
  },
  name: 'Azeri (Azerbaijan)',
  native_name: 'Azərbaycan (Azərbaycan)',
  rtl: false,
};

export const Basque: Locale = {
  id: LocaleCode.Basque,
  language: {
    code: LanguageCode.Basque,
    name: 'Basque',
    native: 'Euskara',
  },
  name: 'Basque',
  native_name: 'Euskara',
  rtl: false,
};

export const BasqueSpain: Locale = {
  country: {
    code: CountryCode.Spain,
    name: 'Spain',
    native: 'España',
  },
  id: LocaleCode.BasqueSpain,
  language: {
    code: LanguageCode.Basque,
    name: 'Basque',
    native: 'Euskara',
  },
  name: 'Basque (Spain)',
  native_name: 'Euskara (España)',
  rtl: false,
};

export const Belarusian: Locale = {
  id: LocaleCode.Belarusian,
  language: {
    code: LanguageCode.Belarusian,
    name: 'Belarusian',
    native: 'Беларуская',
  },
  name: 'Belarusian',
  native_name: 'Беларуская',
  rtl: false,
};

export const BelarusianBelarus: Locale = {
  country: {
    code: CountryCode.Belarus,
    name: 'Belarus',
    native: 'Беларусь',
  },
  id: LocaleCode.BelarusianBelarus,
  language: {
    code: LanguageCode.Belarusian,
    name: 'Belarusian',
    native: 'беларуская',
  },
  name: 'Belarusian (Belarus)',
  native_name: 'беларуская (Беларусь)',
  rtl: false,
};

export const Bengali: Locale = {
  id: LocaleCode.Bengali,
  language: {
    code: LanguageCode.Bengali,
    name: 'Bengali',
    native: 'বাংলা',
  },
  name: 'Bengali',
  native_name: 'বাংলা',
  rtl: false,
};

export const BengaliBangladesh: Locale = {
  country: {
    code: CountryCode.Bangladesh,
    name: 'Bangladesh',
    native: 'বাংলাদেশ',
  },
  id: LocaleCode.BengaliBangladesh,
  language: {
    code: LanguageCode.Bengali,
    name: 'Bengali',
    native: 'বাংলা',
  },
  name: 'Bengali (Bangladesh)',
  native_name: 'বাংলা (বাংলাদেশ)',
  rtl: false,
};

export const Bhutani: Locale = {
  id: LocaleCode.Bhutani,
  language: {
    code: LanguageCode.Bhutani,
    name: 'Bhutani',
    native: 'བོད་ཡིག',
  },
  name: 'Bhutani',
  native_name: 'བོད་ཡིག',
  rtl: false,
};

export const BhutaniBhutan: Locale = {
  country: {
    code: CountryCode.Bhutan,
    name: 'Bhutan',
    native: 'འབྲུག',
  },
  id: LocaleCode.BhutaniBhutan,
  language: {
    code: LanguageCode.Bhutani,
    name: 'Bhutani',
    native: 'བོད་ཡིག',
  },
  name: 'Bhutani (Bhutan)',
  native_name: 'བོད་ཡིག (འབྲུག)',
  rtl: false,
};

export const Bulgarian: Locale = {
  id: LocaleCode.Bulgarian,
  language: {
    code: LanguageCode.Bulgarian,
    name: 'Bulgarian',
    native: 'Български',
  },
  name: 'Bulgarian',
  native_name: 'Български',
  rtl: false,
};

export const BulgarianBulgaria: Locale = {
  country: {
    code: CountryCode.Bulgaria,
    name: 'Bulgaria',
    native: 'България',
  },
  id: LocaleCode.BulgarianBulgaria,
  language: {
    code: LanguageCode.Bulgarian,
    name: 'Bulgarian',
    native: 'български',
  },
  name: 'Bulgarian (Bulgaria)',
  native_name: 'български (България)',
  rtl: false,
};

export const Burmese: Locale = {
  id: LocaleCode.Burmese,
  language: {
    code: LanguageCode.Burmese,
    name: 'Burmese',
    native: 'ဗမာစာ',
  },
  name: 'Burmese',
  native_name: 'ဗမာစာ',
  rtl: false,
};

export const BurmeseMyanmar: Locale = {
  country: {
    code: CountryCode.Myanmar,
    name: 'Myanmar',
    native: 'မြန်မာ',
  },
  id: LocaleCode.BurmeseMyanmar,
  language: {
    code: LanguageCode.Burmese,
    name: 'Burmese',
    native: 'ဗမာစာ',
  },
  name: 'Burmese (Myanmar)',
  native_name: 'ဗမာစာ (မြန်မာ)',
  rtl: false,
};

export const Cantonese: Locale = {
  id: LocaleCode.Cantonese,
  language: {
    code: LanguageCode.Cantonese,
    name: 'Cantonese',
    native: '廣東話',
  },
  name: 'Cantonese',
  native_name: '廣東話',
  rtl: false,
};

export const CantoneseHongKong: Locale = {
  country: {
    code: CountryCode.HongKong,
    name: 'Hong Kong',
    native: '香港',
  },
  id: LocaleCode.CantoneseHongKong,
  language: {
    code: LanguageCode.Cantonese,
    name: 'Cantonese',
    native: '廣東話',
  },
  name: 'Cantonese (Hong Kong)',
  native_name: '廣東話 (香港)',
  rtl: false,
};

export const Catalan: Locale = {
  id: LocaleCode.Catalan,
  language: {
    code: LanguageCode.Catalan,
    name: 'Catalan',
    native: 'Català',
  },
  name: 'Catalan',
  native_name: 'Català',
  rtl: false,
};

export const CatalanSpain: Locale = {
  country: {
    code: CountryCode.Spain,
    name: 'Spain',
    native: 'España',
  },
  id: LocaleCode.CatalanSpain,
  language: {
    code: LanguageCode.Catalan,
    name: 'Catalan',
    native: 'Català',
  },
  name: 'Catalan (Spain)',
  native_name: 'Català (Espanya)',
  rtl: false,
};

export const ChineseSimplified: Locale = {
  id: LocaleCode.ChineseSimplified,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese',
    native: '中文',
  },
  name: 'Chinese (Simplified)',
  native_name: '中文',
  rtl: false,
};

export const ChineseSimplifiedChina: Locale = {
  country: {
    code: CountryCode.China,
    name: 'China',
    native: '中国',
  },
  id: LocaleCode.ChineseSimplifiedChina,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese',
    native: '中文',
  },
  name: 'Chinese (Simplified/China)',
  native_name: '中文 (中国)',
  rtl: false,
};

export const ChineseSimplifiedHongKong: Locale = {
  country: {
    code: CountryCode.HongKong,
    name: 'Hong Kong',
    native: '香港',
  },
  id: LocaleCode.ChineseSimplifiedHongKong,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese',
    native: '中文',
  },
  name: 'Chinese (Simplified/Hong Kong)',
  native_name: '中文 (香港)',
  rtl: false,
};

export const ChineseSimplifiedMacau: Locale = {
  country: {
    code: CountryCode.Macau,
    name: 'Macau',
    native: '澳門',
  },
  id: LocaleCode.ChineseSimplifiedMacau,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese',
    native: '中文',
  },
  name: 'Chinese (Simplified/Macau)',
  native_name: '中文 (澳門)',
  rtl: false,
};

export const ChineseSimplifiedSingapore: Locale = {
  country: {
    code: CountryCode.Singapore,
    name: 'Singapore',
    native: '新加坡',
  },
  id: LocaleCode.ChineseSimplifiedSingapore,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese',
    native: '中文',
  },
  name: 'Chinese (Simplified/Singapore)',
  native_name: '中文 (新加坡)',
  rtl: false,
};

export const ChineseTraditional: Locale = {
  id: LocaleCode.ChineseTraditional,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese',
    native: '中文',
  },
  name: 'Chinese (Traditional)',
  native_name: '中文',
  rtl: false,
};

export const ChineseTraditionalHongKong: Locale = {
  country: {
    code: CountryCode.HongKong,
    name: 'Hong Kong',
    native: '香港',
  },
  id: LocaleCode.ChineseTraditionalHongKong,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese (Traditional/Hong Kong)',
    native: '中文',
  },
  name: 'Chinese (Hong Kong)',
  native_name: '中文 (香港)',
  rtl: false,
};

export const ChineseTraditionalMacau: Locale = {
  country: {
    code: CountryCode.Macau,
    name: 'Macau',
    native: '澳門',
  },
  id: LocaleCode.ChineseTraditionalMacau,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese (Traditional/Macau)',
    native: '中文',
  },
  name: 'Chinese (Macau)',
  native_name: '中文 (澳門)',
  rtl: false,
};

export const ChineseTraditionalSingapore: Locale = {
  country: {
    code: CountryCode.Singapore,
    name: 'Singapore',
    native: '新加坡',
  },
  id: LocaleCode.ChineseTraditionalSingapore,
  language: {
    code: LanguageCode.Chinese,
    name: 'Chinese (Traditional/Singapore)',
    native: '中文',
  },
  name: 'Chinese (Singapore)',
  native_name: '中文 (新加坡)',
  rtl: false,
};

export const Croatian: Locale = {
  id: LocaleCode.Croatian,
  language: {
    code: LanguageCode.Croatian,
    name: 'Croatian',
    native: 'Hrvatski',
  },
  name: 'Croatian',
  native_name: 'Hrvatski',
  rtl: false,
};

export const CroatianBosniaAndHerzegovina: Locale = {
  country: {
    code: CountryCode.BosniaAndHerzegovina,
    name: 'Bosnia and Herzegovina',
    native: 'Bosna i Hercegovina',
  },
  id: LocaleCode.CroatianBosniaAndHerzegovina,
  language: {
    code: LanguageCode.Croatian,
    name: 'Croatian',
    native: 'Hrvatski',
  },
  name: 'Croatian (Bosnia and Herzegovina)',
  native_name: 'Hrvatski (Bosna i Hercegovina)',
  rtl: false,
};

export const CroatianCroatia: Locale = {
  country: {
    code: CountryCode.Croatia,
    name: 'Croatia',
    native: 'Hrvatska',
  },
  id: LocaleCode.CroatianCroatia,
  language: {
    code: LanguageCode.Croatian,
    name: 'Croatian',
    native: 'Hrvatski',
  },
  name: 'Croatian (Croatia)',
  native_name: 'Hrvatski (Hrvatska)',
  rtl: false,
};

export const Czech: Locale = {
  id: LocaleCode.Czech,
  language: {
    code: LanguageCode.Czech,
    name: 'Czech',
    native: 'Čeština',
  },
  name: 'Czech',
  native_name: 'Čeština',
  rtl: false,
};

export const CzechCzechRepublic: Locale = {
  country: {
    code: CountryCode.CzechRepublic,
    name: 'Czech Republic',
    native: 'Česká republika',
  },
  id: LocaleCode.CzechCzechRepublic,
  language: {
    code: LanguageCode.Czech,
    name: 'Czech',
    native: 'Čeština',
  },
  name: 'Czech (Czech Republic)',
  native_name: 'Čeština (Česká republika)',
  rtl: false,
};

export const Danish: Locale = {
  id: LocaleCode.Danish,
  language: {
    code: LanguageCode.Danish,
    name: 'Danish',
    native: 'Dansk',
  },
  name: 'Danish',
  native_name: 'Dansk',
  rtl: false,
};

export const DanishDenmark: Locale = {
  country: {
    code: CountryCode.Denmark,
    name: 'Denmark',
    native: 'Danmark',
  },
  id: LocaleCode.DanishDenmark,
  language: {
    code: LanguageCode.Danish,
    name: 'Danish',
    native: 'Dansk',
  },
  name: 'Danish (Denmark)',
  native_name: 'Dansk (Danmark)',
  rtl: false,
};

export const Divehi: Locale = {
  id: LocaleCode.Divehi,
  language: {
    code: LanguageCode.Divehi,
    name: 'Divehi',
    native: 'ދިވެހިބަސް',
  },
  name: 'Divehi',
  native_name: 'ދިވެހިބަސް',
  rtl: true,
};

export const DivehiMaldives: Locale = {
  country: {
    code: CountryCode.Maldives,
    name: 'Maldives',
    native: 'ދިވެހި ރާއްޖެ',
  },
  id: LocaleCode.DivehiMaldives,
  language: {
    code: LanguageCode.Divehi,
    name: 'Divehi',
    native: 'ދިވެހިބަސް',
  },
  name: 'Divehi (Maldives)',
  native_name: 'ދިވެހިބަސް (ދިވެހި ރާއްޖެ)',
  rtl: true,
};

export const Dutch: Locale = {
  id: LocaleCode.Dutch,
  language: {
    code: LanguageCode.Dutch,
    name: 'Dutch',
    native: 'Nederlands',
  },
  name: 'Dutch',
  native_name: 'Nederlands',
  rtl: false,
};

export const DutchBelgium: Locale = {
  country: {
    code: CountryCode.Belgium,
    name: 'Belgium',
    native: 'België',
  },
  id: LocaleCode.DutchBelgium,
  language: {
    code: LanguageCode.Dutch,
    name: 'Dutch',
    native: 'Nederlands',
  },
  name: 'Dutch (Belgium)',
  native_name: 'Nederlands (België)',
  rtl: false,
};

export const DutchNetherlands: Locale = {
  country: {
    code: CountryCode.Netherlands,
    name: 'Netherlands',
    native: 'Nederland',
  },
  id: LocaleCode.DutchNetherlands,
  language: {
    code: LanguageCode.Dutch,
    name: 'Dutch',
    native: 'Nederlands',
  },
  name: 'Dutch (Netherlands)',
  native_name: 'Nederlands (Nederland)',
  rtl: false,
};

export const English: Locale = {
  id: LocaleCode.English,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English',
  native_name: 'English',
  rtl: false,
};

export const EnglishAustralia: Locale = {
  country: {
    code: CountryCode.Australia,
    name: 'Australia',
    native: 'Australia',
  },
  id: LocaleCode.EnglishAustralia,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Australia)',
  native_name: 'English (Australia)',
  rtl: false,
};

export const EnglishBelgium: Locale = {
  country: {
    code: CountryCode.Belgium,
    name: 'Belgium',
    native: 'België',
  },
  id: LocaleCode.EnglishBelgium,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Belgium)',
  native_name: 'English (België)',
  rtl: false,
};

export const EnglishCanada: Locale = {
  country: {
    code: CountryCode.Canada,
    name: 'Canada',
    native: 'Canada',
  },
  id: LocaleCode.EnglishCanada,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Canada)',
  native_name: 'English (Canada)',
  rtl: false,
};

export const EnglishIreland: Locale = {
  country: {
    code: CountryCode.Ireland,
    name: 'Ireland',
    native: 'Éire',
  },
  id: LocaleCode.EnglishIreland,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Ireland)',
  native_name: 'English (Éire)',
  rtl: false,
};

export const EnglishJamaica: Locale = {
  country: {
    code: CountryCode.Jamaica,
    name: 'Jamaica',
    native: 'Jamaica',
  },
  id: LocaleCode.EnglishJamaica,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Jamaica)',
  native_name: 'English (Jamaica)',
  rtl: false,
};

export const EnglishNewZealand: Locale = {
  country: {
    code: CountryCode.NewZealand,
    name: 'New Zealand',
    native: 'New Zealand',
  },
  id: LocaleCode.EnglishNewZealand,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (New Zealand)',
  native_name: 'English (New Zealand)',
  rtl: false,
};

export const EnglishPhilippines: Locale = {
  country: {
    code: CountryCode.Philippines,
    name: 'Philippines',
    native: 'Philippines',
  },
  id: LocaleCode.EnglishPhilippines,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Philippines)',
  native_name: 'English (Philippines)',
  rtl: false,
};

export const EnglishSingapore: Locale = {
  country: {
    code: CountryCode.Singapore,
    name: 'Singapore',
    native: 'Singapore',
  },
  id: LocaleCode.EnglishSingapore,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Singapore)',
  native_name: 'English (Singapore)',
  rtl: false,
};

export const EnglishSouthAfrica: Locale = {
  country: {
    code: CountryCode.SouthAfrica,
    name: 'South Africa',
    native: 'South Africa',
  },
  id: LocaleCode.EnglishSouthAfrica,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (South Africa)',
  native_name: 'English (South Africa)',
  rtl: false,
};

export const EnglishTrinidadAndTobago: Locale = {
  country: {
    code: CountryCode.TrinidadAndTobago,
    name: 'Trinidad and Tobago',
    native: 'Trinidad and Tobago',
  },
  id: LocaleCode.EnglishTrinidadAndTobago,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Trinidad and Tobago)',
  native_name: 'English (Trinidad and Tobago)',
  rtl: false,
};

export const EnglishUnitedKingdom: Locale = {
  country: {
    code: CountryCode.UnitedKingdom,
    name: 'United Kingdom',
    native: 'United Kingdom',
  },
  id: LocaleCode.EnglishUnitedKingdom,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (United Kingdom)',
  native_name: 'English (United Kingdom)',
  rtl: false,
};

export const EnglishUnitedStates: Locale = {
  country: {
    code: CountryCode.UnitedStates,
    name: 'United States',
    native: 'United States',
  },
  id: LocaleCode.EnglishUnitedStates,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (United States)',
  native_name: 'English (United States)',
  rtl: false,
};

export const EnglishZimbabwe: Locale = {
  country: {
    code: CountryCode.Zimbabwe,
    name: 'Zimbabwe',
    native: 'Zimbabwe',
  },
  id: LocaleCode.EnglishZimbabwe,
  language: {
    code: LanguageCode.English,
    name: 'English',
    native: 'English',
  },
  name: 'English (Zimbabwe)',
  native_name: 'English (Zimbabwe)',
  rtl: false,
};

export const Esperanto: Locale = {
  id: LocaleCode.Esperanto,
  language: {
    code: LanguageCode.Esperanto,
    name: 'Esperanto',
    native: 'Esperanto',
  },
  name: 'Esperanto',
  native_name: 'Esperanto',
  rtl: false,
};

export const Estonian: Locale = {
  id: LocaleCode.Estonian,
  language: {
    code: LanguageCode.Estonian,
    name: 'Estonian',
    native: 'Eesti',
  },
  name: 'Estonian',
  native_name: 'Eesti',
  rtl: false,
};

export const EstonianEstonia: Locale = {
  country: {
    code: CountryCode.Estonia,
    name: 'Estonia',
    native: 'Eesti',
  },
  id: LocaleCode.EstonianEstonia,
  language: {
    code: LanguageCode.Estonian,
    name: 'Estonian',
    native: 'Eesti',
  },
  name: 'Estonian (Estonia)',
  native_name: 'Eesti (Eesti)',
  rtl: false,
};

export const Faroese: Locale = {
  id: LocaleCode.Faroese,
  language: {
    code: LanguageCode.Faroese,
    name: 'Faroese',
    native: 'Føroyskt',
  },
  name: 'Faroese',
  native_name: 'Føroyskt',
  rtl: false,
};

export const FaroeseFaroeIslands: Locale = {
  country: {
    code: CountryCode.FaroeIslands,
    name: 'Faroe Islands',
    native: 'Føroyar',
  },
  id: LocaleCode.FaroeseFaroeIslands,
  language: {
    code: LanguageCode.Faroese,
    name: 'Faroese',
    native: 'Føroyskt',
  },
  name: 'Faroese (Faroe Islands)',
  native_name: 'Føroyskt (Føroyar)',
  rtl: false,
};

export const Farsi: Locale = {
  id: LocaleCode.Farsi,
  language: {
    code: LanguageCode.Farsi,
    name: 'Farsi',
    native: 'فارسی',
  },
  name: 'Farsi',
  native_name: 'فارسی',
  rtl: true,
};

export const FarsiIran: Locale = {
  country: {
    code: CountryCode.Iran,
    name: 'Iran',
    native: 'ایران',
  },
  id: LocaleCode.FarsiIran,
  language: {
    code: LanguageCode.Farsi,
    name: 'Farsi',
    native: 'فارسی',
  },
  name: 'Farsi (Iran)',
  native_name: 'فارسی (ایران)',
  rtl: true,
};

export const Filipino: Locale = {
  id: LocaleCode.Filipino,
  language: {
    code: LanguageCode.Filipino,
    name: 'Filipino',
    native: 'Filipino',
  },
  name: 'Filipino',
  native_name: 'Filipino',
  rtl: false,
};

export const FilipinoPhilippines: Locale = {
  country: {
    code: CountryCode.Philippines,
    name: 'Philippines',
    native: 'Pilipinas',
  },
  id: LocaleCode.FilipinoPhilippines,
  language: {
    code: LanguageCode.Filipino,
    name: 'Filipino',
    native: 'Filipino',
  },
  name: 'Filipino (Philippines)',
  native_name: 'Filipino (Pilipinas)',
  rtl: false,
};

export const Finnish: Locale = {
  id: LocaleCode.Finnish,
  language: {
    code: LanguageCode.Finnish,
    name: 'Finnish',
    native: 'Suomi',
  },
  name: 'Finnish',
  native_name: 'Suomi',
  rtl: false,
};

export const FinnishFinland: Locale = {
  country: {
    code: CountryCode.Finland,
    name: 'Finland',
    native: 'Suomi',
  },
  id: LocaleCode.FinnishFinland,
  language: {
    code: LanguageCode.Finnish,
    name: 'Finnish',
    native: 'Suomi',
  },
  name: 'Finnish (Finland)',
  native_name: 'Suomi (Suomi)',
  rtl: false,
};

export const French: Locale = {
  id: LocaleCode.French,
  language: {
    code: LanguageCode.French,
    name: 'French',
    native: 'Français',
  },
  name: 'French',
  native_name: 'Français',
  rtl: false,
};

export const FrenchBelgium: Locale = {
  country: {
    code: CountryCode.Belgium,
    name: 'Belgium',
    native: 'Belgique',
  },
  id: LocaleCode.FrenchBelgium,
  language: {
    code: LanguageCode.French,
    name: 'French',
    native: 'Français',
  },
  name: 'French (Belgium)',
  native_name: 'Français (Belgique)',
  rtl: false,
};

export const FrenchCanada: Locale = {
  country: {
    code: CountryCode.Canada,
    name: 'Canada',
    native: 'Canada',
  },
  id: LocaleCode.FrenchCanada,
  language: {
    code: LanguageCode.French,
    name: 'French',
    native: 'Français',
  },
  name: 'French (Canada)',
  native_name: 'Français (Canada)',
  rtl: false,
};

export const FrenchFrance: Locale = {
  country: {
    code: CountryCode.France,
    name: 'France',
    native: 'France',
  },
  id: LocaleCode.FrenchFrance,
  language: {
    code: LanguageCode.French,
    name: 'French',
    native: 'Français',
  },
  name: 'French (France)',
  native_name: 'Français (France)',
  rtl: false,
};

export const FrenchLuxembourg: Locale = {
  country: {
    code: CountryCode.Luxembourg,
    name: 'Luxembourg',
    native: 'Luxembourg',
  },
  id: LocaleCode.FrenchLuxembourg,
  language: {
    code: LanguageCode.French,
    name: 'French',
    native: 'Français',
  },
  name: 'French (Luxembourg)',
  native_name: 'Français (Luxembourg)',
  rtl: false,
};

export const FrenchMonaco: Locale = {
  country: {
    code: CountryCode.Monaco,
    name: 'Monaco',
    native: 'Monaco',
  },
  id: LocaleCode.FrenchMonaco,
  language: {
    code: LanguageCode.French,
    name: 'French',
    native: 'Français',
  },
  name: 'French (Monaco)',
  native_name: 'Français (Monaco)',
  rtl: false,
};

export const FrenchReunion: Locale = {
  country: {
    code: CountryCode.Reunion,
    name: 'Reunion',
    native: 'La Réunion',
  },
  id: LocaleCode.FrenchReunion,
  language: {
    code: LanguageCode.French,
    name: 'French',
    native: 'Français',
  },
  name: 'French (Reunion)',
  native_name: 'Français (La Réunion)',
  rtl: false,
};

export const FrenchSwitzerland: Locale = {
  country: {
    code: CountryCode.Switzerland,
    name: 'Switzerland',
    native: 'Suisse',
  },
  id: LocaleCode.FrenchSwitzerland,
  language: {
    code: LanguageCode.French,
    name: 'French',
    native: 'Français',
  },
  name: 'French (Switzerland)',
  native_name: 'Français (Suisse)',
  rtl: false,
};

export const Frisian: Locale = {
  id: LocaleCode.Frisian,
  language: {
    code: LanguageCode.Frisian,
    name: 'Frisian',
    native: 'Frysk',
  },
  name: 'Frisian',
  native_name: 'Frysk',
  rtl: false,
};

export const FrisianNetherlands: Locale = {
  country: {
    code: CountryCode.Netherlands,
    name: 'Netherlands',
    native: 'Nederland',
  },
  id: LocaleCode.FrisianNetherlands,
  language: {
    code: LanguageCode.Frisian,
    name: 'Frisian',
    native: 'Frysk',
  },
  name: 'Frisian (Netherlands)',
  native_name: 'Frysk (Nederland)',
  rtl: false,
};

export const Galician: Locale = {
  id: LocaleCode.Galician,
  language: {
    code: LanguageCode.Galician,
    name: 'Galician',
    native: 'Galego',
  },
  name: 'Galician',
  native_name: 'Galego',
  rtl: false,
};

export const GalicianSpain: Locale = {
  country: {
    code: CountryCode.Spain,
    name: 'Spain',
    native: 'España',
  },
  id: LocaleCode.GalicianSpain,
  language: {
    code: LanguageCode.Galician,
    name: 'Galician',
    native: 'Galego',
  },
  name: 'Galician (Spain)',
  native_name: 'Galego (España)',
  rtl: false,
};

export const Georgian: Locale = {
  id: LocaleCode.Georgian,
  language: {
    code: LanguageCode.Georgian,
    name: 'Georgian',
    native: 'ქართული',
  },
  name: 'Georgian',
  native_name: 'ქართული',
  rtl: false,
};

export const GeorgianGeorgia: Locale = {
  country: {
    code: CountryCode.Georgia,
    name: 'Georgia',
    native: 'საქართველო',
  },
  id: LocaleCode.GeorgianGeorgia,
  language: {
    code: LanguageCode.Georgian,
    name: 'Georgian',
    native: 'ქართული',
  },
  name: 'Georgian (Georgia)',
  native_name: 'ქართული (საქართველო)',
  rtl: false,
};

export const German: Locale = {
  id: LocaleCode.German,
  language: {
    code: LanguageCode.German,
    name: 'German',
    native: 'Deutsch',
  },
  name: 'German',
  native_name: 'Deutsch',
  rtl: false,
};

export const GermanAustria: Locale = {
  country: {
    code: CountryCode.Austria,
    name: 'Austria',
    native: 'Österreich',
  },
  id: LocaleCode.GermanAustria,
  language: {
    code: LanguageCode.German,
    name: 'German',
    native: 'Deutsch',
  },
  name: 'German (Austria)',
  native_name: 'Deutsch (Österreich)',
  rtl: false,
};

export const GermanBelgium: Locale = {
  country: {
    code: CountryCode.Belgium,
    name: 'Belgium',
    native: 'België',
  },
  id: LocaleCode.GermanBelgium,
  language: {
    code: LanguageCode.German,
    name: 'German',
    native: 'Deutsch',
  },
  name: 'German (Belgium)',
  native_name: 'Deutsch (België)',
  rtl: false,
};

export const GermanSwitzerland: Locale = {
  country: {
    code: CountryCode.Switzerland,
    name: 'Switzerland',
    native: 'Suisse',
  },
  id: LocaleCode.GermanSwitzerland,
  language: {
    code: LanguageCode.German,
    name: 'German',
    native: 'Deutsch',
  },
  name: 'German (Switzerland)',
  native_name: 'Deutsch (Suisse)',
  rtl: false,
};

export const GermanLiechtenstein: Locale = {
  country: {
    code: CountryCode.Liechtenstein,
    name: 'Liechtenstein',
    native: 'Liechtenstein',
  },
  id: LocaleCode.GermanLiechtenstein,
  language: {
    code: LanguageCode.German,
    name: 'German',
    native: 'Deutsch',
  },
  name: 'German (Liechtenstein)',
  native_name: 'Deutsch (Liechtenstein)',
  rtl: false,
};

export const GermanLuxembourg: Locale = {
  country: {
    code: CountryCode.Luxembourg,
    name: 'Luxembourg',
    native: 'Luxembourg',
  },
  id: LocaleCode.GermanLuxembourg,
  language: {
    code: LanguageCode.German,
    name: 'German',
    native: 'Deutsch',
  },
  name: 'German (Luxembourg)',
  native_name: 'Deutsch (Luxembourg)',
  rtl: false,
};

export const Greek: Locale = {
  id: LocaleCode.Greek,
  language: {
    code: LanguageCode.Greek,
    name: 'Greek',
    native: 'Ελληνικά',
  },
  name: 'Greek',
  native_name: 'Ελληνικά',
  rtl: false,
};

export const GreekGreece: Locale = {
  country: {
    code: CountryCode.Greece,
    name: 'Greece',
    native: 'Ελλάδα',
  },
  id: LocaleCode.GreekGreece,
  language: {
    code: LanguageCode.Greek,
    name: 'Greek',
    native: 'Ελληνικά',
  },
  name: 'Greek (Greece)',
  native_name: 'Ελληνικά (Ελλάδα)',
  rtl: false,
};

export const Greenlandic: Locale = {
  id: LocaleCode.Greenlandic,
  language: {
    code: LanguageCode.Greenlandic,
    name: 'Greenlandic',
    native: 'Kalaallisut',
  },
  name: 'Greenlandic',
  native_name: 'Kalaallisut',
  rtl: false,
};

export const GreenlandicGreenland: Locale = {
  country: {
    code: CountryCode.Greenland,
    name: 'Greenland',
    native: 'Kalaallit Nunaat',
  },
  id: LocaleCode.GreenlandicGreenland,
  language: {
    code: LanguageCode.Greenlandic,
    name: 'Greenlandic',
    native: 'Kalaallisut',
  },
  name: 'Greenlandic (Greenland)',
  native_name: 'Kalaallisut (Kalaallit Nunaat)',
  rtl: false,
};

export const Gujarati: Locale = {
  id: LocaleCode.Gujarati,
  language: {
    code: LanguageCode.Gujarati,
    name: 'Gujarati',
    native: 'ગુજરાતી',
  },
  name: 'Gujarati',
  native_name: 'ગુજરાતી',
  rtl: false,
};

export const GujaratiIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'भारत',
  },
  id: LocaleCode.GujaratiIndia,
  language: {
    code: LanguageCode.Gujarati,
    name: 'Gujarati',
    native: 'ગુજરાતી',
  },
  name: 'Gujarati (India)',
  native_name: 'ગુજરાતી (भारत)',
  rtl: false,
};

export const Hausa: Locale = {
  id: LocaleCode.Hausa,
  language: {
    code: LanguageCode.Hausa,
    name: 'Hausa',
    native: 'هَوُسَ',
  },
  name: 'Hausa',
  native_name: 'هَوُسَ',
  rtl: false,
};

export const HausaGhana: Locale = {
  country: {
    code: CountryCode.Ghana,
    name: 'Ghana',
    native: 'Ghana',
  },
  id: LocaleCode.HausaGhana,
  language: {
    code: LanguageCode.Hausa,
    name: 'Hausa',
    native: 'هَوُسَ',
  },
  name: 'Hausa (Ghana)',
  native_name: 'هَوُسَ (Ghana)',
  rtl: false,
};

export const HausaNiger: Locale = {
  country: {
    code: CountryCode.Niger,
    name: 'Niger',
    native: 'Niger',
  },
  id: LocaleCode.HausaNiger,
  language: {
    code: LanguageCode.Hausa,
    name: 'Hausa',
    native: 'هَوُسَ',
  },
  name: 'Hausa (Niger)',
  native_name: 'هَوُسَ (Niger)',
  rtl: false,
};

export const HausaNigeria: Locale = {
  country: {
    code: CountryCode.Nigeria,
    name: 'Nigeria',
    native: 'Nigeria',
  },
  id: LocaleCode.HausaNigeria,
  language: {
    code: LanguageCode.Hausa,
    name: 'Hausa',
    native: 'هَوُسَ',
  },
  name: 'Hausa (Nigeria)',
  native_name: 'هَوُسَ (Nigeria)',
  rtl: false,
};

export const Hebrew: Locale = {
  id: LocaleCode.Hebrew,
  language: {
    code: LanguageCode.Hebrew,
    name: 'Hebrew',
    native: 'עברית',
  },
  name: 'Hebrew',
  native_name: 'עברית',
  rtl: true,
};

// TODO: Figure this out since Github is censoring it
export const HebrewIsrael: Locale = {
  country: {
    code: CountryCode.Israel,
    name: 'Hebrew',
    native: '',
  },
  id: LocaleCode.HebrewIsrael,
  language: {
    code: LanguageCode.Hebrew,
    name: 'Hebrew',
    native: '',
  },
  name: 'Hebrew (Israel)',
  native_name: '',
  rtl: true,
};

export const Hindi: Locale = {
  id: LocaleCode.Hindi,
  language: {
    code: LanguageCode.Hindi,
    name: 'Hindi',
    native: 'हिन्दी',
  },
  name: 'Hindi',
  native_name: 'हिन्दी',
  rtl: false,
};

export const HindiIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'भारत',
  },
  id: LocaleCode.HindiIndia,
  language: {
    code: LanguageCode.Hindi,
    name: 'Hindi',
    native: 'भारतीय',
  },
  name: 'Hindi (India)',
  native_name: 'भारतीय',
  rtl: false,
};

export const Hungarian: Locale = {
  id: LocaleCode.Hungarian,
  language: {
    code: LanguageCode.Hungarian,
    name: 'Hungarian',
    native: 'Magyar',
  },
  name: 'Hungarian',
  native_name: 'Magyar',
  rtl: false,
};

export const HungarianHungary: Locale = {
  country: {
    code: CountryCode.Hungary,
    name: 'Hungary',
    native: 'Magyarország',
  },
  id: LocaleCode.HungarianHungary,
  language: {
    code: LanguageCode.Hungarian,
    name: 'Hungarian',
    native: 'Magyar',
  },
  name: 'Hungarian (Hungary)',
  native_name: 'Magyar (Magyarország)',
  rtl: false,
};

export const Icelandic: Locale = {
  id: LocaleCode.Icelandic,
  language: {
    code: LanguageCode.Icelandic,
    name: 'Icelandic',
    native: 'Íslenska',
  },
  name: 'Icelandic',
  native_name: 'Íslenska',
  rtl: false,
};

export const IcelandicIceland: Locale = {
  country: {
    code: CountryCode.Iceland,
    name: 'Iceland',
    native: 'Ísland',
  },
  id: LocaleCode.IcelandicIceland,
  language: {
    code: LanguageCode.Icelandic,
    name: 'Icelandic',
    native: 'Íslenska',
  },
  name: 'Icelandic (Iceland)',
  native_name: 'Íslenska (Ísland)',
  rtl: false,
};

export const Igbo: Locale = {
  id: LocaleCode.Igbo,
  language: {
    code: LanguageCode.Igbo,
    name: 'Igbo',
    native: 'Igbo',
  },
  name: 'Igbo',
  native_name: 'Igbo',
  rtl: false,
};

export const Indonesian: Locale = {
  id: LocaleCode.Indonesian,
  language: {
    code: LanguageCode.Indonesian,
    name: 'Indonesian',
    native: 'Bahasa Indonesia',
  },
  name: 'Indonesian',
  native_name: 'Bahasa Indonesia',
  rtl: false,
};

export const IndonesianIndonesia: Locale = {
  country: {
    code: CountryCode.Indonesia,
    name: 'Indonesia',
    native: 'Indonesia',
  },
  id: LocaleCode.IndonesianIndonesia,
  language: {
    code: LanguageCode.Indonesian,
    name: 'Indonesian',
    native: 'Bahasa Indonesia',
  },
  name: 'Indonesian (Indonesia)',
  native_name: 'Bahasa Indonesia (Indonesia)',
  rtl: false,
};

export const Irish: Locale = {
  id: LocaleCode.Irish,
  language: {
    code: LanguageCode.Irish,
    name: 'Irish',
    native: 'Gaeilge',
  },
  name: 'Irish',
  native_name: 'Gaeilge',
  rtl: false,
};

export const IrishIreland: Locale = {
  country: {
    code: CountryCode.Ireland,
    name: 'Ireland',
    native: 'Éire',
  },
  id: LocaleCode.IrishIreland,
  language: {
    code: LanguageCode.Irish,
    name: 'Irish',
    native: 'Gaeilge',
  },
  name: 'Irish (Ireland)',
  native_name: 'Gaeilge (Éire)',
  rtl: false,
};

export const Italian: Locale = {
  id: LocaleCode.Italian,
  language: {
    code: LanguageCode.Italian,
    name: 'Italian',
    native: 'Italiano',
  },
  name: 'Italian',
  native_name: 'Italiano',
  rtl: false,
};

export const ItalianItaly: Locale = {
  country: {
    code: CountryCode.Italy,
    name: 'Italy',
    native: 'Italia',
  },
  id: LocaleCode.ItalianItaly,
  language: {
    code: LanguageCode.Italian,
    name: 'Italian',
    native: 'Italiano',
  },
  name: 'Italian (Italy)',
  native_name: 'Italiano (Italia)',
  rtl: false,
};

export const ItalianSwitzerland: Locale = {
  country: {
    code: CountryCode.Switzerland,
    name: 'Switzerland',
    native: 'Schweiz',
  },
  id: LocaleCode.ItalianSwitzerland,
  language: {
    code: LanguageCode.Italian,
    name: 'Italian',
    native: 'Italiano',
  },
  name: 'Italian (Switzerland)',
  native_name: 'Italiano (Svizzera)',
  rtl: false,
};

export const Japanese: Locale = {
  id: LocaleCode.Japanese,
  language: {
    code: LanguageCode.Japanese,
    name: 'Japanese',
    native: '日本語',
  },
  name: 'Japanese',
  native_name: '日本語',
  rtl: false,
};

export const JapaneseJapan: Locale = {
  country: {
    code: CountryCode.Japan,
    name: 'Japan',
    native: '日本',
  },
  id: LocaleCode.JapaneseJapan,
  language: {
    code: LanguageCode.Japanese,
    name: 'Japanese',
    native: '日本語',
  },
  name: 'Japanese (Japan)',
  native_name: '日本語 (日本)',
  rtl: false,
};

export const Kannada: Locale = {
  id: LocaleCode.Kannada,
  language: {
    code: LanguageCode.Kannada,
    name: 'Kannada',
    native: 'ಕನ್ನಡ',
  },
  name: 'Kannada',
  native_name: 'ಕನ್ನಡ',
  rtl: false,
};

export const KannadaIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'ಭಾರತ',
  },
  id: LocaleCode.KannadaIndia,
  language: {
    code: LanguageCode.Kannada,
    name: 'Kannada',
    native: 'ಕನ್ನಡ',
  },
  name: 'Kannada (India)',
  native_name: 'ಕನ್ನಡ (ಭಾರತ)',
  rtl: false,
};

export const Kazakh: Locale = {
  id: LocaleCode.Kazakh,
  language: {
    code: LanguageCode.Kazakh,
    name: 'Kazakh',
    native: 'Қазақ тілі',
  },
  name: 'Kazakh',
  native_name: 'Қазақ тілі',
  rtl: false,
};

export const KazakhKazakhstan: Locale = {
  country: {
    code: CountryCode.Kazakhstan,
    name: 'Kazakhstan',
    native: 'Қазақстан',
  },
  id: LocaleCode.KazakhKazakhstan,
  language: {
    code: LanguageCode.Kazakh,
    name: 'Kazakh',
    native: 'Қазақ тілі',
  },
  name: 'Kazakh (Kazakhstan)',
  native_name: 'Қазақ тілі (Қазақстан)',
  rtl: false,
};

export const Khmer: Locale = {
  id: LocaleCode.Khmer,
  language: {
    code: LanguageCode.Khmer,
    name: 'Khmer',
    native: 'ភាសាខ្មែរ',
  },
  name: 'Khmer',
  native_name: 'ភាសាខ្មែរ',
  rtl: false,
};

export const KhmerCambodia: Locale = {
  country: {
    code: CountryCode.Cambodia,
    name: 'Cambodia',
    native: 'កម្ពុជា',
  },
  id: LocaleCode.KhmerCambodia,
  language: {
    code: LanguageCode.Khmer,
    name: 'Khmer',
    native: 'ភាសាខ្មែរ',
  },
  name: 'Khmer (Cambodia)',
  native_name: 'ភាសាខ្មែរ (កម្ពុជា)',
  rtl: false,
};

export const Konkani: Locale = {
  id: LocaleCode.Konkani,
  language: {
    code: LanguageCode.Konkani,
    name: 'Konkani',
    native: 'कोंकणी',
  },
  name: 'Konkani',
  native_name: 'कोंकणी',
  rtl: false,
};

export const KonkaniIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'भारत',
  },
  id: LocaleCode.KonkaniIndia,
  language: {
    code: LanguageCode.Konkani,
    name: 'Konkani',
    native: 'कोंकणी',
  },
  name: 'Konkani (India)',
  native_name: 'कोंकणी (भारत)',
  rtl: false,
};

export const Korean: Locale = {
  id: LocaleCode.Korean,
  language: {
    code: LanguageCode.Korean,
    name: 'Korean',
    native: '한국어',
  },
  name: 'Korean',
  native_name: '한국어',
  rtl: false,
};

export const KoreanSouthKorea: Locale = {
  country: {
    code: CountryCode.SouthKorea,
    name: 'South Korea',
    native: '대한민국',
  },
  id: LocaleCode.KoreanSouthKorea,
  language: {
    code: LanguageCode.Korean,
    name: 'Korean',
    native: '한국어',
  },
  name: 'Korean (South Korea)',
  native_name: '한국어 (대한민국)',
  rtl: false,
};

export const Kurdish: Locale = {
  id: LocaleCode.Kurdish,
  language: {
    code: LanguageCode.Kurdish,
    name: 'Kurdish',
    native: 'Kurdî',
  },
  name: 'Kurdish',
  native_name: 'Kurdî',
  rtl: false,
};

export const KurdishIraq: Locale = {
  country: {
    code: CountryCode.Iraq,
    name: 'Iraq',
    native: 'العراق',
  },
  id: LocaleCode.KurdishIraq,
  language: {
    code: LanguageCode.Kurdish,
    name: 'Kurdish',
    native: 'Kurdî',
  },
  name: 'Kurdish (Iraq)',
  native_name: 'Kurdî (العراق)',
  rtl: false,
};

export const KurdishTurkey: Locale = {
  country: {
    code: CountryCode.Turkey,
    name: 'Turkey',
    native: 'Türkiye',
  },
  id: LocaleCode.KurdishTurkey,
  language: {
    code: LanguageCode.Kurdish,
    name: 'Kurdish',
    native: 'Kurdî',
  },
  name: 'Kurdish (Turkey)',
  native_name: 'Kurdî (Türkiye)',
  rtl: false,
};

export const Kyrgyz: Locale = {
  id: LocaleCode.Kyrgyz,
  language: {
    code: LanguageCode.Kyrgyz,
    name: 'Kyrgyz',
    native: 'Кыргызча',
  },
  name: 'Kyrgyz',
  native_name: 'Кыргызча',
  rtl: false,
};

export const KyrgyzKyrgyzstan: Locale = {
  country: {
    code: CountryCode.Kyrgyzstan,
    name: 'Kyrgyzstan',
    native: 'Кыргызстан',
  },
  id: LocaleCode.KyrgyzKyrgyzstan,
  language: {
    code: LanguageCode.Kyrgyz,
    name: 'Kyrgyz',
    native: 'Кыргызча',
  },
  name: 'Kyrgyz (Kyrgyzstan)',
  native_name: 'Кыргызча (Кыргызстан)',
  rtl: false,
};

export const Lao: Locale = {
  id: LocaleCode.Lao,
  language: {
    code: LanguageCode.Lao,
    name: 'Lao',
    native: 'ລາວ',
  },
  name: 'Lao',
  native_name: 'ລາວ',
  rtl: false,
};

export const LaoLaos: Locale = {
  country: {
    code: CountryCode.Laos,
    name: 'Laos',
    native: 'ສ.ປ.ປະຊາທິປະໄຕ',
  },
  id: LocaleCode.LaoLaos,
  language: {
    code: LanguageCode.Lao,
    name: 'Lao',
    native: 'ລາວ',
  },
  name: 'Lao (Laos)',
  native_name: 'ລາວ (ສ.ປ.ປະຊາທິປະໄຕ)',
  rtl: false,
};

export const Latvian: Locale = {
  id: LocaleCode.Latvian,
  language: {
    code: LanguageCode.Latvian,
    name: 'Latvian',
    native: 'Latviešu',
  },
  name: 'Latvian',
  native_name: 'Latviešu',
  rtl: false,
};

export const LatvianLatvia: Locale = {
  country: {
    code: CountryCode.Latvia,
    name: 'Latvia',
    native: 'Latvija',
  },
  id: LocaleCode.LatvianLatvia,
  language: {
    code: LanguageCode.Latvian,
    name: 'Latvian',
    native: 'Latviešu',
  },
  name: 'Latvian (Latvia)',
  native_name: 'Latviešu (Latvija)',
  rtl: false,
};

export const Lithuanian: Locale = {
  id: LocaleCode.Lithuanian,
  language: {
    code: LanguageCode.Lithuanian,
    name: 'Lithuanian',
    native: 'Lietuvių',
  },
  name: 'Lithuanian',
  native_name: 'Lietuvių',
  rtl: false,
};

export const LithuanianLithuania: Locale = {
  country: {
    code: CountryCode.Lithuania,
    name: 'Lithuania',
    native: 'Lietuva',
  },
  id: LocaleCode.LithuanianLithuania,
  language: {
    code: LanguageCode.Lithuanian,
    name: 'Lithuanian',
    native: 'Lietuvių',
  },
  name: 'Lithuanian (Lithuania)',
  native_name: 'Lietuvių (Lietuva)',
  rtl: false,
};

export const Luxembourgish: Locale = {
  id: LocaleCode.Luxembourgish,
  language: {
    code: LanguageCode.Luxembourgish,
    name: 'Luxembourgish',
    native: 'Lëtzebuergesch',
  },
  name: 'Luxembourgish',
  native_name: 'Lëtzebuergesch',
  rtl: false,
};

export const LuxembourgishBelgium: Locale = {
  country: {
    code: CountryCode.Belgium,
    name: 'Belgium',
    native: 'België',
  },
  id: LocaleCode.LuxembourgishBelgium,
  language: {
    code: LanguageCode.Luxembourgish,
    name: 'Luxembourgish',
    native: 'Lëtzebuergesch',
  },
  name: 'Luxembourgish (Belgium)',
  native_name: 'Lëtzebuergesch (België)',
  rtl: false,
};

export const LuxembourgishLuxembourg: Locale = {
  country: {
    code: CountryCode.Luxembourg,
    name: 'Luxembourg',
    native: 'Luxembourg',
  },
  id: LocaleCode.LuxembourgishLuxembourg,
  language: {
    code: LanguageCode.Luxembourgish,
    name: 'Luxembourgish',
    native: 'Lëtzebuergesch',
  },
  name: 'Luxembourgish (Luxembourg)',
  native_name: 'Lëtzebuergesch (Luxembourg)',
  rtl: false,
};

export const Macedonian: Locale = {
  id: LocaleCode.Macedonian,
  language: {
    code: LanguageCode.Macedonian,
    name: 'Macedonian',
    native: 'Македонски',
  },
  name: 'Macedonian',
  native_name: 'Македонски',
  rtl: false,
};

export const MacedonianNorthMacedonia: Locale = {
  country: {
    code: CountryCode.NorthMacedonia,
    name: 'Macedonia',
    native: 'Северна Македонија',
  },
  id: LocaleCode.MacedonianNorthMacedonia,
  language: {
    code: LanguageCode.Macedonian,
    name: 'Macedonian',
    native: 'Македонски',
  },
  name: 'Macedonian (North Macedonia)',
  native_name: 'Македонски (Северна Македонија)',
  rtl: false,
};

export const Malay: Locale = {
  id: LocaleCode.Malay,
  language: {
    code: LanguageCode.Malay,
    name: 'Malay',
    native: 'Bahasa Melayu',
  },
  name: 'Malay',
  native_name: 'Bahasa Melayu',
  rtl: false,
};

export const MalayBrunei: Locale = {
  country: {
    code: CountryCode.Brunei,
    name: 'Brunei',
    native: 'Negara Brunei Darussalam',
  },
  id: LocaleCode.MalayBrunei,
  language: {
    code: LanguageCode.Malay,
    name: 'Malay',
    native: 'Bahasa Melayu',
  },
  name: 'Malay (Brunei)',
  native_name: 'Bahasa Melayu (Negara Brunei Darussalam)',
  rtl: false,
};

export const MalayMalaysia: Locale = {
  country: {
    code: CountryCode.Malaysia,
    name: 'Malaysia',
    native: 'Malaysia',
  },
  id: LocaleCode.MalayMalaysia,
  language: {
    code: LanguageCode.Malay,
    name: 'Malay',
    native: 'Bahasa Melayu',
  },
  name: 'Malay (Malaysia)',
  native_name: 'Bahasa Melayu (Malaysia)',
  rtl: false,
};

export const MalaySingapore: Locale = {
  country: {
    code: CountryCode.Singapore,
    name: 'Singapore',
    native: 'Singapore',
  },
  id: LocaleCode.MalaySingapore,
  language: {
    code: LanguageCode.Malay,
    name: 'Malay',
    native: 'Bahasa Melayu',
  },
  name: 'Malay (Singapore)',
  native_name: 'Bahasa Melayu (Singapore)',
  rtl: false,
};

export const MalayIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'भारत',
  },
  id: LocaleCode.MalayIndia,
  language: {
    code: LanguageCode.Malay,
    name: 'Malay',
    native: 'Bahasa Melayu',
  },
  name: 'Malay (India)',
  native_name: 'Bahasa Melayu (भारत)',
  rtl: false,
};

export const Maltese: Locale = {
  id: LocaleCode.Maltese,
  language: {
    code: LanguageCode.Maltese,
    name: 'Maltese',
    native: 'Malti',
  },
  name: 'Maltese',
  native_name: 'Malti',
  rtl: false,
};

export const MalteseMalta: Locale = {
  country: {
    code: CountryCode.Malta,
    name: 'Malta',
    native: 'Malta',
  },
  id: LocaleCode.MalteseMalta,
  language: {
    code: LanguageCode.Maltese,
    name: 'Maltese',
    native: 'Malti',
  },
  name: 'Maltese (Malta)',
  native_name: 'Malti (Malta)',
  rtl: false,
};

export const Maori: Locale = {
  id: LocaleCode.Maori,
  language: {
    code: LanguageCode.Maori,
    name: 'Maori',
    native: 'Māori',
  },
  name: 'Maori',
  native_name: 'Māori',
  rtl: false,
};

export const MaoriNewZealand: Locale = {
  country: {
    code: CountryCode.NewZealand,
    name: 'New Zealand',
    native: 'New Zealand',
  },
  id: LocaleCode.MaoriNewZealand,
  language: {
    code: LanguageCode.Maori,
    name: 'Maori',
    native: 'Māori',
  },
  name: 'Maori (New Zealand)',
  native_name: 'Māori (New Zealand)',
  rtl: false,
};

export const Marathi: Locale = {
  id: LocaleCode.Marathi,
  language: {
    code: LanguageCode.Marathi,
    name: 'Marathi',
    native: 'मराठी',
  },
  name: 'Marathi',
  native_name: 'मराठी',
  rtl: false,
};

export const MarathiIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'भारत',
  },
  id: LocaleCode.MarathiIndia,
  language: {
    code: LanguageCode.Marathi,
    name: 'Marathi',
    native: 'मराठी',
  },
  name: 'Marathi (India)',
  native_name: 'मराठी (भारत)',
  rtl: false,
};

export const Mongolian: Locale = {
  id: LocaleCode.Mongolian,
  language: {
    code: LanguageCode.Mongolian,
    name: 'Mongolian',
    native: 'Монгол',
  },
  name: 'Mongolian',
  native_name: 'Монгол',
  rtl: false,
};

export const MongolianMongolia: Locale = {
  country: {
    code: CountryCode.Mongolia,
    name: 'Mongolia',
    native: 'Монгол улс',
  },
  id: LocaleCode.MongolianMongolia,
  language: {
    code: LanguageCode.Mongolian,
    name: 'Mongolian',
    native: 'Монгол',
  },
  name: 'Mongolian (Mongolia)',
  native_name: 'Монгол (Монгол улс)',
  rtl: false,
};

export const Montenegrin: Locale = {
  id: LocaleCode.Montenegrin,
  language: {
    code: LanguageCode.Montenegrin,
    name: 'Montenegrin',
    native: 'Црна Горак',
  },
  name: 'Montenegrin',
  native_name: 'Црна Горак',
  rtl: false,
};

export const MontenegrinMontenegro: Locale = {
  country: {
    code: CountryCode.Montenegro,
    name: 'Montenegro',
    native: 'Црна Горак',
  },
  id: LocaleCode.MontenegrinMontenegro,
  language: {
    code: LanguageCode.Montenegrin,
    name: 'Montenegrin',
    native: 'Црна Горак',
  },
  name: 'Montenegrin (Montenegro)',
  native_name: 'Црна Горак (Црна Горак)',
  rtl: false,
};

export const Nepali: Locale = {
  id: LocaleCode.Nepali,
  language: {
    code: LanguageCode.Nepali,
    name: 'Nepali',
    native: 'नेपाली',
  },
  name: 'Nepali',
  native_name: 'नेपाली',
  rtl: false,
};

export const NepaliNepal: Locale = {
  country: {
    code: CountryCode.Nepal,
    name: 'Nepal',
    native: 'नेपाल',
  },
  id: LocaleCode.NepaliNepal,
  language: {
    code: LanguageCode.Nepali,
    name: 'Nepali',
    native: 'नेपाली',
  },
  name: 'Nepali (Nepal)',
  native_name: 'नेपाली (नेपाल)',
  rtl: false,
};

export const NorthernSotho: Locale = {
  id: LocaleCode.NorthernSotho,
  language: {
    code: LanguageCode.NorthernSotho,
    name: 'Northern Sotho',
    native: 'Sesotho sa Leboa',
  },
  name: 'Northern Sotho',
  native_name: 'Sesotho sa Leboa',
  rtl: false,
};

export const NorthernSothoSouthAfrica: Locale = {
  country: {
    code: CountryCode.SouthAfrica,
    name: 'South Africa',
    native: 'South Africa',
  },
  id: LocaleCode.NorthernSothoSouthAfrica,
  language: {
    code: LanguageCode.NorthernSotho,
    name: 'Northern Sotho',
    native: 'Sesotho sa Leboa',
  },
  name: 'Northern Sotho (South Africa)',
  native_name: 'Sesotho sa Leboa (South Africa)',
  rtl: false,
};

export const Norwegian: Locale = {
  id: LocaleCode.Norwegian,
  language: {
    code: LanguageCode.Norwegian,
    name: 'Norwegian',
    native: 'Norsk',
  },
  name: 'Norwegian',
  native_name: 'Norsk',
  rtl: false,
};

export const NorwegianBokmalNorway: Locale = {
  country: {
    code: CountryCode.Norway,
    name: 'Norway',
    native: 'Norge',
  },
  id: LocaleCode.NorwegianBokmalNorway,
  language: {
    code: LanguageCode.NorwegianBokmal,
    name: 'Norwegian',
    native: 'Norsk',
  },
  name: 'Norwegian (Bokmal)',
  native_name: 'Norsk (Bokmål)',
  rtl: false,
};

export const NorwegianNynorskNorway: Locale = {
  country: {
    code: CountryCode.Norway,
    name: 'Norway',
    native: 'Norge',
  },
  id: LocaleCode.NorwegianNynorskNorway,
  language: {
    code: LanguageCode.NorwegianNynorsk,
    name: 'Norwegian',
    native: 'Norsk',
  },
  name: 'Norwegian (Nynorsk)',
  native_name: 'Norsk (Nynorsk)',
  rtl: false,
};

export const Oriya: Locale = {
  id: LocaleCode.Oriya,
  language: {
    code: LanguageCode.Oriya,
    name: 'Oriya',
    native: 'ଓଡ଼ିଆ',
  },
  name: 'Oriya',
  native_name: 'ଓଡ଼ିଆ',
  rtl: false,
};

export const OriyaIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'இந்தியா',
  },
  id: LocaleCode.OriyaIndia,
  language: {
    code: LanguageCode.Oriya,
    name: 'Oriya',
    native: 'ଓଡ଼ିଆ',
  },
  name: 'Oriya (India)',
  native_name: 'ଓଡ଼ିଆ (ଭାରତ)',
  rtl: false,
};

export const Pashto: Locale = {
  id: LocaleCode.Pashto,
  language: {
    code: LanguageCode.Pashto,
    name: 'Pashto',
    native: 'پښتو',
  },
  name: 'Pashto',
  native_name: 'پښتو',
  rtl: true,
};

export const PashtoAfghanistan: Locale = {
  country: {
    code: CountryCode.Afghanistan,
    name: 'Afghanistan',
    native: 'افغانستان',
  },
  id: LocaleCode.PashtoAfghanistan,
  language: {
    code: LanguageCode.Pashto,
    name: 'Pashto',
    native: 'پښتو',
  },
  name: 'Pashto (Afghanistan)',
  native_name: 'پښتو (افغانستان)',
  rtl: true,
};

export const Persian: Locale = {
  id: LocaleCode.Persian,
  language: {
    code: LanguageCode.Persian,
    name: 'Persian',
    native: 'فارسی',
  },
  name: 'Persian',
  native_name: 'فارسی',
  rtl: true,
};

export const PersianIran: Locale = {
  country: {
    code: CountryCode.Iran,
    name: 'Iran',
    native: 'ایران',
  },
  id: LocaleCode.PersianIran,
  language: {
    code: LanguageCode.Persian,
    name: 'Persian',
    native: 'فارسی',
  },
  name: 'Persian (Iran)',
  native_name: 'فارسی (ایران)',
  rtl: true,
};

export const Polish: Locale = {
  id: LocaleCode.Polish,
  language: {
    code: LanguageCode.Polish,
    name: 'Polish',
    native: 'Polski',
  },
  name: 'Polish',
  native_name: 'Polski',
  rtl: false,
};

export const PolishPoland: Locale = {
  country: {
    code: CountryCode.Poland,
    name: 'Poland',
    native: 'Polska',
  },
  id: LocaleCode.PolishPoland,
  language: {
    code: LanguageCode.Polish,
    name: 'Polish',
    native: 'Polski',
  },
  name: 'Polish (Poland)',
  native_name: 'Polski (Polska)',
  rtl: false,
};

export const Portuguese: Locale = {
  id: LocaleCode.Portuguese,
  language: {
    code: LanguageCode.Portuguese,
    name: 'Portuguese',
    native: 'Português',
  },
  name: 'Portuguese',
  native_name: 'Português',
  rtl: false,
};

export const PortugueseBrazil: Locale = {
  country: {
    code: CountryCode.Brazil,
    name: 'Brazil',
    native: 'Brasil',
  },
  id: LocaleCode.PortugueseBrazil,
  language: {
    code: LanguageCode.Portuguese,
    name: 'Portuguese',
    native: 'Português',
  },
  name: 'Portuguese (Brazil)',
  native_name: 'Português (Brasil)',
  rtl: false,
};

export const PortuguesePortugal: Locale = {
  country: {
    code: CountryCode.Portugal,
    name: 'Portugal',
    native: 'Portugal',
  },
  id: LocaleCode.PortuguesePortugal,
  language: {
    code: LanguageCode.Portuguese,
    name: 'Portuguese',
    native: 'Português',
  },
  name: 'Portuguese (Portugal)',
  native_name: 'Português (Portugal)',
  rtl: false,
};

export const Punjabi: Locale = {
  id: LocaleCode.Punjabi,
  language: {
    code: LanguageCode.Punjabi,
    name: 'Punjabi',
    native: 'ਪੰਜਾਬੀ',
  },
  name: 'Punjabi',
  native_name: 'ਪੰਜਾਬੀ',
  rtl: true,
};

export const PunjabiPakistan: Locale = {
  country: {
    code: CountryCode.Pakistan,
    name: 'Pakistan',
    native: 'پاکستان',
  },
  id: LocaleCode.PunjabiPakistan,
  language: {
    code: LanguageCode.Punjabi,
    name: 'Punjabi',
    native: 'ਪੰਜਾਬੀ',
  },
  name: 'Punjabi (Pakistan)',
  native_name: 'ਪੰਜਾਬੀ (پاکستان)',
  rtl: true,
};

export const PunjabiIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'ਭਾਰਤ',
  },
  id: LocaleCode.PunjabiIndia,
  language: {
    code: LanguageCode.Punjabi,
    name: 'Punjabi',
    native: 'ਪੰਜਾਬੀ',
  },
  name: 'Punjabi (India)',
  native_name: 'ਪੰਜਾਬੀ (ਭਾਰਤ)',
  rtl: true,
};

export const Quechua: Locale = {
  id: LocaleCode.Quechua,
  language: {
    code: LanguageCode.Quechua,
    name: 'Quechua',
    native: 'Runa Simi',
  },
  name: 'Quechua',
  native_name: 'Runa Simi',
  rtl: false,
};

export const QuechuaBolivia: Locale = {
  country: {
    code: CountryCode.Bolivia,
    name: 'Bolivia',
    native: 'Bolivia',
  },
  id: LocaleCode.QuechuaBolivia,
  language: {
    code: LanguageCode.Quechua,
    name: 'Quechua',
    native: 'Runa Simi',
  },
  name: 'Quechua (Bolivia)',
  native_name: 'Runa Simi (Bolivia)',
  rtl: false,
};

export const QuechuaEcuador: Locale = {
  country: {
    code: CountryCode.Ecuador,
    name: 'Ecuador',
    native: 'Ecuador',
  },
  id: LocaleCode.QuechuaEcuador,
  language: {
    code: LanguageCode.Quechua,
    name: 'Quechua',
    native: 'Runa Simi',
  },
  name: 'Quechua (Ecuador)',
  native_name: 'Runa Simi (Ecuador)',
  rtl: false,
};

export const QuechuaPeru: Locale = {
  country: {
    code: CountryCode.Peru,
    name: 'Peru',
    native: 'Perú',
  },
  id: LocaleCode.QuechuaPeru,
  language: {
    code: LanguageCode.Quechua,
    name: 'Quechua',
    native: 'Runa Simi',
  },
  name: 'Quechua (Peru)',
  native_name: 'Runa Simi (Perú)',
  rtl: false,
};

export const Romanian: Locale = {
  id: LocaleCode.Romanian,
  language: {
    code: LanguageCode.Romanian,
    name: 'Romanian',
    native: 'Română',
  },
  name: 'Romanian',
  native_name: 'Română',
  rtl: false,
};

export const RomanianRomania: Locale = {
  country: {
    code: CountryCode.Romania,
    name: 'Romania',
    native: 'România',
  },
  id: LocaleCode.RomanianRomania,
  language: {
    code: LanguageCode.Romanian,
    name: 'Romanian',
    native: 'Română',
  },
  name: 'Romanian (Romania)',
  native_name: 'Română (România)',
  rtl: false,
};

export const Russian: Locale = {
  id: LocaleCode.Russian,
  language: {
    code: LanguageCode.Russian,
    name: 'Russian',
    native: 'Русский',
  },
  name: 'Russian',
  native_name: 'Русский',
  rtl: false,
};

export const RussianRussia: Locale = {
  country: {
    code: CountryCode.RussianFederation,
    name: 'Russian Federation',
    native: 'Россия',
  },
  id: LocaleCode.RussianRussia,
  language: {
    code: LanguageCode.Russian,
    name: 'Russian',
    native: 'Русский',
  },
  name: 'Russian (Russia)',
  native_name: 'Русский (Россия)',
  rtl: false,
};

export const RussianUkraine: Locale = {
  country: {
    code: CountryCode.Ukraine,
    name: 'Ukraine',
    native: 'Україна',
  },
  id: LocaleCode.RussianUkraine,
  language: {
    code: LanguageCode.Russian,
    name: 'Russian',
    native: 'Русский',
  },
  name: 'Russian (Ukraine)',
  native_name: 'Русский (Україна)',
  rtl: false,
};

export const RussianKazakhstan: Locale = {
  country: {
    code: CountryCode.Kazakhstan,
    name: 'Kazakhstan',
    native: 'Қазақстан',
  },
  id: LocaleCode.RussianKazakhstan,
  language: {
    code: LanguageCode.Russian,
    name: 'Russian',
    native: 'Русский',
  },
  name: 'Russian (Kazakhstan)',
  native_name: 'Русский (Қазақстан)',
  rtl: false,
};

export const RussianKyrgyzstan: Locale = {
  country: {
    code: CountryCode.Kyrgyzstan,
    name: 'Kyrgyzstan',
    native: 'Кыргызча',
  },
  id: LocaleCode.RussianKyrgyzstan,
  language: {
    code: LanguageCode.Russian,
    name: 'Russian',
    native: 'Русский',
  },
  name: 'Russian (Kyrgyzstan)',
  native_name: 'Русский (Кыргызча)',
  rtl: false,
};

export const Sanskrit: Locale = {
  id: LocaleCode.Sanskrit,
  language: {
    code: LanguageCode.Sanskrit,
    name: 'Sanskrit',
    native: 'संस्कृतम्',
  },
  name: 'Sanskrit',
  native_name: 'संस्कृतम्',
  rtl: false,
};

export const SanskritIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'भारत',
  },
  id: LocaleCode.SanskritIndia,
  language: {
    code: LanguageCode.Sanskrit,
    name: 'Sanskrit',
    native: 'संस्कृतम्',
  },
  name: 'Sanskrit (India)',
  native_name: 'संस्कृतम् (भारत)',
  rtl: false,
};

export const Sami: Locale = {
  id: LocaleCode.Sami,
  language: {
    code: LanguageCode.Sami,
    name: 'Sami',
    native: 'Sámegiella',
  },
  name: 'Sami',
  native_name: 'Sámegiella',
  rtl: false,
};

export const SamiFinland: Locale = {
  country: {
    code: CountryCode.Finland,
    name: 'Finland',
    native: 'Suomi',
  },
  id: LocaleCode.SamiFinland,
  language: {
    code: LanguageCode.Sami,
    name: 'Sami',
    native: 'Sámegiella',
  },
  name: 'Sami (Finland)',
  native_name: 'Sámegiella (Suomi)',
  rtl: false,
};

export const SamiNorway: Locale = {
  country: {
    code: CountryCode.Norway,
    name: 'Norway',
    native: 'Norge',
  },
  id: LocaleCode.SamiNorway,
  language: {
    code: LanguageCode.Sami,
    name: 'Sami',
    native: 'Sámegiella',
  },
  name: 'Sami (Norway)',
  native_name: 'Sámegiella (Norge)',
  rtl: false,
};

export const SamiSweden: Locale = {
  country: {
    code: CountryCode.Sweden,
    name: 'Sweden',
    native: 'Sverige',
  },
  id: LocaleCode.SamiSweden,
  language: {
    code: LanguageCode.Sami,
    name: 'Sami',
    native: 'Sámegiella',
  },
  name: 'Sami (Sweden)',
  native_name: 'Sámegiella (Sverige)',
  rtl: false,
};

export const Samoan: Locale = {
  id: LocaleCode.Samoan,
  language: {
    code: LanguageCode.Samoan,
    name: 'Samoan',
    native: 'Gagana fa’a Sāmoa',
  },
  name: 'Samoan',
  native_name: 'Gagana fa’a Sāmoa',
  rtl: false,
};

export const SamoanSamoa: Locale = {
  country: {
    code: CountryCode.Samoa,
    name: 'Samoa',
    native: 'Samoa',
  },
  id: LocaleCode.SamoanSamoa,
  language: {
    code: LanguageCode.Samoan,
    name: 'Samoan',
    native: 'Gagana fa’a Sāmoa',
  },
  name: 'Samoan (Samoa)',
  native_name: 'Gagana fa’a Sāmoa (Samoa)',
  rtl: false,
};

export const Serbian: Locale = {
  id: LocaleCode.Serbian,
  language: {
    code: LanguageCode.Serbian,
    name: 'Serbian (Latin)',
    native: 'Srpski (Latinica)',
  },
  name: 'Serbian (Latin)',
  native_name: 'Srpski (Latinica)',
  rtl: false,
};

export const SerbianBosniaAndHerzegovina: Locale = {
  country: {
    code: CountryCode.BosniaAndHerzegovina,
    name: 'Bosnia and Herzegovina',
    native: 'Bosna i Hercegovina',
  },
  id: LocaleCode.SerbianBosniaAndHerzegovina,
  language: {
    code: LanguageCode.Serbian,
    name: 'Serbian (Latin)',
    native: 'Srpski (Latinica)',
  },
  name: 'Serbian (Latin) (Bosnia and Herzegovina)',
  native_name: 'Srpski (Latinica) (Bosna i Hercegovina)',
  rtl: false,
};

export const SerbianSerbiaAndMontenegro: Locale = {
  country: {
    code: CountryCode.SerbiaAndMontenegro,
    name: 'Serbia and Montenegro',
    native: 'Srbija i Crna Gora',
  },
  id: LocaleCode.SerbianSerbiaAndMontenegro,
  language: {
    code: LanguageCode.Serbian,
    name: 'Serbian (Latin)',
    native: 'Srpski (Latinica)',
  },
  name: 'Serbian (Latin) (Serbia and Montenegro)',
  native_name: 'Srpski (Latinica) (Srbija i Crna Gora)',
  rtl: false,
};

export const SerbianCyrillic: Locale = {
  id: LocaleCode.SerbianCyrillic,
  language: {
    code: LanguageCode.SerbianCyrillic,
    name: 'Serbian',
    native: 'Српски',
  },
  name: 'Serbian (Cyrillic)',
  native_name: 'Српски (Ћирилица)',
  rtl: false,
};

export const SerbianCyrillicBosniaAndHerzegovina: Locale = {
  country: {
    code: CountryCode.BosniaAndHerzegovina,
    name: 'Bosnia and Herzegovina',
    native: 'Босна и Херцеговина',
  },
  id: LocaleCode.SerbianCyrillicBosniaAndHerzegovina,
  language: {
    code: LanguageCode.SerbianCyrillic,
    name: 'Serbian',
    native: 'Српски',
  },
  name: 'Serbian (Cyrillic, Bosnia and Herzegovina)',
  native_name: 'Српски (Ћирилица, Босна и Херцеговина)',
  rtl: false,
};

export const SerbianCyrillicSerbiaAndMontenegro: Locale = {
  country: {
    code: CountryCode.SerbiaAndMontenegro,
    name: 'Serbia and Montenegro',
    native: 'Србија и Црна Гора',
  },
  id: LocaleCode.SerbianCyrillicSerbiaAndMontenegro,
  language: {
    code: LanguageCode.SerbianCyrillic,
    name: 'Serbian',
    native: 'Српски',
  },
  name: 'Serbian (Cyrillic, Serbia and Montenegro)',
  native_name: 'Српски (Ћирилица, Србија и Црна Гора)',
  rtl: false,
};

export const Slovak: Locale = {
  id: LocaleCode.Slovak,
  language: {
    code: LanguageCode.Slovak,
    name: 'Slovak',
    native: 'Slovenčina',
  },
  name: 'Slovak',
  native_name: 'Slovenčina',
  rtl: false,
};

export const SlovakSlovakia: Locale = {
  country: {
    code: CountryCode.Slovakia,
    name: 'Slovakia',
    native: 'Slovensko',
  },
  id: LocaleCode.SlovakSlovakia,
  language: {
    code: LanguageCode.Slovak,
    name: 'Slovak',
    native: 'Slovenčina',
  },
  name: 'Slovak (Slovakia)',
  native_name: 'Slovenčina (Slovensko)',
  rtl: false,
};

export const Slovenian: Locale = {
  id: LocaleCode.Slovenian,
  language: {
    code: LanguageCode.Slovenian,
    name: 'Slovenian',
    native: 'Slovenščina',
  },
  name: 'Slovenian',
  native_name: 'Slovenščina',
  rtl: false,
};

export const SlovenianSlovenia: Locale = {
  country: {
    code: CountryCode.Slovenia,
    name: 'Slovenia',
    native: 'Slovenija',
  },
  id: LocaleCode.SlovenianSlovenia,
  language: {
    code: LanguageCode.Slovenian,
    name: 'Slovenian',
    native: 'Slovenščina',
  },
  name: 'Slovenian (Slovenia)',
  native_name: 'Slovenščina (Slovenija)',
  rtl: false,
};

export const Somali: Locale = {
  id: LocaleCode.Somali,
  language: {
    code: LanguageCode.Somali,
    name: 'Somali',
    native: 'Soomaaliga',
  },
  name: 'Somali',
  native_name: 'Soomaaliga',
  rtl: true,
};

export const SomaliSomalia: Locale = {
  country: {
    code: CountryCode.Somalia,
    name: 'Somalia',
    native: 'Soomaaliya',
  },
  id: LocaleCode.SomaliSomalia,
  language: {
    code: LanguageCode.Somali,
    name: 'Somali',
    native: 'Soomaaliga',
  },
  name: 'Somali (Somalia)',
  native_name: 'Soomaaliga (Soomaaliya)',
  rtl: true,
};

export const Spanish: Locale = {
  id: LocaleCode.Spanish,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish',
  native_name: 'Español',
  rtl: false,
};

export const SpanishArgentina: Locale = {
  country: {
    code: CountryCode.Argentina,
    name: 'Argentina',
    native: 'Argentina',
  },
  id: LocaleCode.SpanishArgentina,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Argentina)',
  native_name: 'Español (Argentina)',
  rtl: false,
};

export const SpanishBolivia: Locale = {
  country: {
    code: CountryCode.Bolivia,
    name: 'Bolivia',
    native: 'Bolivia',
  },
  id: LocaleCode.SpanishBolivia,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Bolivia)',
  native_name: 'Español (Bolivia)',
  rtl: false,
};

export const SpanishChile: Locale = {
  country: {
    code: CountryCode.Chile,
    name: 'Chile',
    native: 'Chile',
  },
  id: LocaleCode.SpanishChile,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Chile)',
  native_name: 'Español (Chile)',
  rtl: false,
};

export const SpanishColombia: Locale = {
  country: {
    code: CountryCode.Colombia,
    name: 'Colombia',
    native: 'Colombia',
  },
  id: LocaleCode.SpanishColombia,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Colombia)',
  native_name: 'Español (Colombia)',
  rtl: false,
};

export const SpanishCostaRica: Locale = {
  country: {
    code: CountryCode.CostaRica,
    name: 'Costa Rica',
    native: 'Costa Rica',
  },
  id: LocaleCode.SpanishCostaRica,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Costa Rica)',
  native_name: 'Español (Costa Rica)',
  rtl: false,
};

export const SpanishCuba: Locale = {
  country: {
    code: CountryCode.Cuba,
    name: 'Cuba',
    native: 'Cuba',
  },
  id: LocaleCode.SpanishCuba,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Cuba)',
  native_name: 'Español (Cuba)',
  rtl: false,
};

export const SpanishDominicanRepublic: Locale = {
  country: {
    code: CountryCode.DominicanRepublic,
    name: 'Dominican Republic',
    native: 'República Dominicana',
  },
  id: LocaleCode.SpanishDominicanRepublic,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Dominican Republic)',
  native_name: 'Español (República Dominicana)',
  rtl: false,
};

export const SpanishEcuador: Locale = {
  country: {
    code: CountryCode.Ecuador,
    name: 'Ecuador',
    native: 'Ecuador',
  },
  id: LocaleCode.SpanishEcuador,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Ecuador)',
  native_name: 'Español (Ecuador)',
  rtl: false,
};

export const SpanishElSalvador: Locale = {
  country: {
    code: CountryCode.ElSalvador,
    name: 'El Salvador',
    native: 'El Salvador',
  },
  id: LocaleCode.SpanishElSalvador,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (El Salvador)',
  native_name: 'Español (El Salvador)',
  rtl: false,
};

export const SpanishEquatorialGuinea: Locale = {
  country: {
    code: CountryCode.EquatorialGuinea,
    name: 'Equatorial Guinea',
    native: 'Guinea Ecuatorial',
  },
  id: LocaleCode.SpanishEquatorialGuinea,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Equatorial Guinea)',
  native_name: 'Español (Guinea Ecuatorial)',
  rtl: false,
};

export const SpanishGuatemala: Locale = {
  country: {
    code: CountryCode.Guatemala,
    name: 'Guatemala',
    native: 'Guatemala',
  },
  id: LocaleCode.SpanishGuatemala,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Guatemala)',
  native_name: 'Español (Guatemala)',
  rtl: false,
};

export const SpanishHonduras: Locale = {
  country: {
    code: CountryCode.Honduras,
    name: 'Honduras',
    native: 'Honduras',
  },
  id: LocaleCode.SpanishHonduras,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Honduras)',
  native_name: 'Español (Honduras)',
  rtl: false,
};

export const SpanishMexico: Locale = {
  country: {
    code: CountryCode.Mexico,
    name: 'Mexico',
    native: 'México',
  },
  id: LocaleCode.SpanishMexico,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Mexico)',
  native_name: 'Español (México)',
  rtl: false,
};

export const SpanishNicaragua: Locale = {
  country: {
    code: CountryCode.Nicaragua,
    name: 'Nicaragua',
    native: 'Nicaragua',
  },
  id: LocaleCode.SpanishNicaragua,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Nicaragua)',
  native_name: 'Español (Nicaragua)',
  rtl: false,
};

export const SpanishPanama: Locale = {
  country: {
    code: CountryCode.Panama,
    name: 'Panama',
    native: 'Panamá',
  },
  id: LocaleCode.SpanishPanama,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Panama)',
  native_name: 'Español (Panamá)',
  rtl: false,
};

export const SpanishParaguay: Locale = {
  country: {
    code: CountryCode.Paraguay,
    name: 'Paraguay',
    native: 'Paraguay',
  },
  id: LocaleCode.SpanishParaguay,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Paraguay)',
  native_name: 'Español (Paraguay)',
  rtl: false,
};

export const SpanishPeru: Locale = {
  country: {
    code: CountryCode.Peru,
    name: 'Peru',
    native: 'Perú',
  },
  id: LocaleCode.SpanishPeru,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Peru)',
  native_name: 'Español (Perú)',
  rtl: false,
};

export const SpanishPuertoRico: Locale = {
  country: {
    code: CountryCode.PuertoRico,
    name: 'Puerto Rico',
    native: 'Puerto Rico',
  },
  id: LocaleCode.SpanishPuertoRico,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Puerto Rico)',
  native_name: 'Español (Puerto Rico)',
  rtl: false,
};

export const SpanishUruguay: Locale = {
  country: {
    code: CountryCode.Uruguay,
    name: 'Uruguay',
    native: 'Uruguay',
  },
  id: LocaleCode.SpanishUruguay,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Uruguay)',
  native_name: 'Español (Uruguay)',
  rtl: false,
};

export const SpanishVenezuela: Locale = {
  country: {
    code: CountryCode.Venezuela,
    name: 'Venezuela',
    native: 'Venezuela',
  },
  id: LocaleCode.SpanishVenezuela,
  language: {
    code: LanguageCode.Spanish,
    name: 'Spanish',
    native: 'Español',
  },
  name: 'Spanish (Venezuela)',
  native_name: 'Español (Venezuela)',
  rtl: false,
};

export const SutuSouthAfrica: Locale = {
  country: {
    code: CountryCode.SouthAfrica,
    name: 'South Africa',
    native: 'South Africa',
  },
  id: LocaleCode.SutuSouthAfrica,
  language: {
    code: LanguageCode.Sutu,
    name: 'Sutu',
    native: 'Sesotho',
  },
  name: 'Sutu (South Africa)',
  native_name: 'Sesotho (Afrika Borwa)',
  rtl: false,
};

export const Swahili: Locale = {
  id: LocaleCode.Swahili,
  language: {
    code: LanguageCode.Swahili,
    name: 'Swahili',
    native: 'Kiswahili',
  },
  name: 'Swahili',
  native_name: 'Kiswahili',
  rtl: false,
};

export const SwahiliKenya: Locale = {
  country: {
    code: CountryCode.Kenya,
    name: 'Kenya',
    native: 'Kenya',
  },
  id: LocaleCode.SwahiliKenya,
  language: {
    code: LanguageCode.Swahili,
    name: 'Swahili',
    native: 'Kiswahili',
  },
  name: 'Swahili (Kenya)',
  native_name: 'Kiswahili (Kenya)',
  rtl: false,
};

export const Swedish: Locale = {
  id: LocaleCode.Swedish,
  language: {
    code: LanguageCode.Swedish,
    name: 'Swedish',
    native: 'Svenska',
  },
  name: 'Swedish',
  native_name: 'Svenska',
  rtl: false,
};

export const SwedishFinland: Locale = {
  country: {
    code: CountryCode.Finland,
    name: 'Finland',
    native: 'Suomi',
  },
  id: LocaleCode.SwedishFinland,
  language: {
    code: LanguageCode.Swedish,
    name: 'Swedish',
    native: 'Svenska',
  },
  name: 'Swedish (Finland)',
  native_name: 'Svenska (Finland)',
  rtl: false,
};

export const SwedishSweden: Locale = {
  country: {
    code: CountryCode.Sweden,
    name: 'Sweden',
    native: 'Sverige',
  },
  id: LocaleCode.SwedishSweden,
  language: {
    code: LanguageCode.Swedish,
    name: 'Swedish',
    native: 'Svenska',
  },
  name: 'Swedish (Sweden)',
  native_name: 'Svenska (Sverige)',
  rtl: false,
};

export const Syriac: Locale = {
  id: LocaleCode.Syriac,
  language: {
    code: LanguageCode.Syriac,
    name: 'Syriac',
    native: 'ܣܘܪܝܝܐ',
  },
  name: 'Syriac',
  native_name: 'ܣܘܪܝܝܐ',
  rtl: true,
};

export const SyriacSyria: Locale = {
  country: {
    code: CountryCode.Syria,
    name: 'Syria',
    native: 'سوريا',
  },
  id: LocaleCode.SyriacSyria,
  language: {
    code: LanguageCode.Syriac,
    name: 'Syriac',
    native: 'ܣܘܪܝܝܐ',
  },
  name: 'Syriac (Syria)',
  native_name: 'ܣܘܪܝܝܐ (سوريا)',
  rtl: true,
};

export const Tajik: Locale = {
  id: LocaleCode.Tajik,
  language: {
    code: LanguageCode.Tajik,
    name: 'Tajik',
    native: 'Тоҷикӣ',
  },
  name: 'Tajik',
  native_name: 'Тоҷикӣ',
  rtl: false,
};

export const TajikTajikistan: Locale = {
  country: {
    code: CountryCode.Tajikistan,
    name: 'Tajikistan',
    native: 'Тоҷикистон',
  },
  id: LocaleCode.TajikTajikistan,
  language: {
    code: LanguageCode.Tajik,
    name: 'Tajik',
    native: 'Тоҷикӣ',
  },
  name: 'Tajik (Tajikistan)',
  native_name: 'Тоҷикӣ (Тоҷикистон)',
  rtl: false,
};

export const Tagalog: Locale = {
  id: LocaleCode.Tagalog,
  language: {
    code: LanguageCode.Tagalog,
    name: 'Tagalog',
    native: 'Tagalog',
  },
  name: 'Tagalog',
  native_name: 'Tagalog',
  rtl: false,
};

export const TagalogPhilippines: Locale = {
  country: {
    code: CountryCode.Philippines,
    name: 'Philippines',
    native: 'Pilipinas',
  },
  id: LocaleCode.TagalogPhilippines,
  language: {
    code: LanguageCode.Tagalog,
    name: 'Tagalog',
    native: 'Tagalog',
  },
  name: 'Tagalog (Philippines)',
  native_name: 'Tagalog (Pilipinas)',
  rtl: false,
};

export const Tamil: Locale = {
  id: LocaleCode.Tamil,
  language: {
    code: LanguageCode.Tamil,
    name: 'Tamil',
    native: 'தமிழ்',
  },
  name: 'Tamil',
  native_name: 'தமிழ்',
  rtl: false,
};

export const TamilIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'இந்தியா',
  },
  id: LocaleCode.TamilIndia,
  language: {
    code: LanguageCode.Tamil,
    name: 'Tamil',
    native: 'தமிழ்',
  },
  name: 'Tamil (India)',
  native_name: 'தமிழ் (இந்தியா)',
  rtl: false,
};

export const Telugu: Locale = {
  id: LocaleCode.Telugu,
  language: {
    code: LanguageCode.Telugu,
    name: 'Telugu',
    native: 'తెలుగు',
  },
  name: 'Telugu',
  native_name: 'తెలుగు',
  rtl: false,
};

export const TeluguIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'భారతదేశం',
  },
  id: LocaleCode.TeluguIndia,
  language: {
    code: LanguageCode.Telugu,
    name: 'Telugu',
    native: 'తెలుగు',
  },
  name: 'Telugu (India)',
  native_name: 'తెలుగు (భారతదేశం)',
  rtl: false,
};

export const Thai: Locale = {
  id: LocaleCode.Thai,
  language: {
    code: LanguageCode.Thai,
    name: 'Thai',
    native: 'ไทย',
  },
  name: 'Thai',
  native_name: 'ไทย',
  rtl: false,
};

export const ThaiThailand: Locale = {
  country: {
    code: CountryCode.Thailand,
    name: 'Thailand',
    native: 'ประเทศไทย',
  },
  id: LocaleCode.ThaiThailand,
  language: {
    code: LanguageCode.Thai,
    name: 'Thai',
    native: 'ไทย',
  },
  name: 'Thai (Thailand)',
  native_name: 'ไทย (ประเทศไทย)',
  rtl: false,
};

export const Tibetan: Locale = {
  id: LocaleCode.Tibetan,
  language: {
    code: LanguageCode.Tibetan,
    name: 'Tibetan',
    native: 'བོད་ཡིག',
  },
  name: 'Tibetan',
  native_name: 'བོད་ཡིག',
  rtl: false,
};

export const TibetanChina: Locale = {
  country: {
    code: CountryCode.China,
    name: 'China',
    native: '中国',
  },
  id: LocaleCode.TibetanChina,
  language: {
    code: LanguageCode.Tibetan,
    name: 'Tibetan',
    native: 'བོད་ཡིག',
  },
  name: 'Tibetan (China)',
  native_name: 'བོད་ཡིག (རྒྱ་ནག)',
  rtl: false,
};

export const TibetanBhutan: Locale = {
  country: {
    code: CountryCode.Bhutan,
    name: 'Bhutan',
    native: 'འབྲུག་ཡུལ་སྤྱི་ལེནཌ།',
  },
  id: LocaleCode.TibetanBhutan,
  language: {
    code: LanguageCode.Tibetan,
    name: 'Tibetan',
    native: 'བོད་ཡིག',
  },
  name: 'Tibetan (Bhutan)',
  native_name: 'བོད་ཡིག (འབྲུག་ཡུལ་སྤྱི་ལེནཌ།)',
  rtl: false,
};

export const TibetanIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'இந்தியா',
  },
  id: LocaleCode.TibetanIndia,
  language: {
    code: LanguageCode.Tibetan,
    name: 'Tibetan',
    native: 'བོད་ཡིག',
  },
  name: 'Tibetan (India)',
  native_name: 'བོད་ཡིག (இந்தியா)',
  rtl: false,
};

export const Tsonga: Locale = {
  id: LocaleCode.Tsonga,
  language: {
    code: LanguageCode.Tsonga,
    name: 'Tsonga',
    native: 'Xitsonga',
  },
  name: 'Tsonga',
  native_name: 'Xitsonga',
  rtl: false,
};

export const Tswana: Locale = {
  id: LocaleCode.Tswana,
  language: {
    code: LanguageCode.Tswana,
    name: 'Tswana',
    native: 'Setswana',
  },
  name: 'Tswana',
  native_name: 'Setswana',
  rtl: false,
};

export const TswanaSouthAfrica: Locale = {
  country: {
    code: CountryCode.SouthAfrica,
    name: 'South Africa',
    native: 'South Africa',
  },
  id: LocaleCode.TswanaSouthAfrica,
  language: {
    code: LanguageCode.Tswana,
    name: 'Tswana',
    native: 'Setswana',
  },
  name: 'Tswana (South Africa)',
  native_name: 'Setswana (South Africa)',
  rtl: false,
};

export const Turkish: Locale = {
  id: LocaleCode.Turkish,
  language: {
    code: LanguageCode.Turkish,
    name: 'Turkish',
    native: 'Türkçe',
  },
  name: 'Turkish',
  native_name: 'Türkçe',
  rtl: false,
};

export const TurkishTurkey: Locale = {
  country: {
    code: CountryCode.Turkey,
    name: 'Turkey',
    native: 'Türkiye',
  },
  id: LocaleCode.TurkishTurkey,
  language: {
    code: LanguageCode.Turkish,
    name: 'Turkish',
    native: 'Türkçe',
  },
  name: 'Turkish (Turkey)',
  native_name: 'Türkçe (Türkiye)',
  rtl: false,
};

export const Ukrainian: Locale = {
  id: LocaleCode.Ukrainian,
  language: {
    code: LanguageCode.Ukrainian,
    name: 'Ukrainian',
    native: 'Українська',
  },
  name: 'Ukrainian',
  native_name: 'Українська',
  rtl: false,
};

export const UkrainianUkraine: Locale = {
  country: {
    code: CountryCode.Ukraine,
    name: 'Ukraine',
    native: 'Україна',
  },
  id: LocaleCode.UkrainianUkraine,
  language: {
    code: LanguageCode.Ukrainian,
    name: 'Ukrainian',
    native: 'Українська',
  },
  name: 'Ukrainian (Ukraine)',
  native_name: 'Українська (Україна)',
  rtl: false,
};

export const Urdu: Locale = {
  id: LocaleCode.Urdu,
  language: {
    code: LanguageCode.Urdu,
    name: 'Urdu',
    native: 'اردو',
  },
  name: 'Urdu',
  native_name: 'اردو',
  rtl: true,
};

export const UrduAfghanistan: Locale = {
  country: {
    code: CountryCode.Afghanistan,
    name: 'Afghanistan',
    native: 'افغانستان',
  },
  id: LocaleCode.UrduAfghanistan,
  language: {
    code: LanguageCode.Urdu,
    name: 'Urdu',
    native: 'اردو',
  },
  name: 'Urdu (Afghanistan)',
  native_name: 'اردو (افغانستان)',
  rtl: true,
};

export const UrduIndia: Locale = {
  country: {
    code: CountryCode.India,
    name: 'India',
    native: 'भारत',
  },
  id: LocaleCode.UrduIndia,
  language: {
    code: LanguageCode.Urdu,
    name: 'Urdu',
    native: 'اردو',
  },
  name: 'Urdu (India)',
  native_name: 'اردو (भारत)',
  rtl: true,
};

export const UrduPakistan: Locale = {
  country: {
    code: CountryCode.Pakistan,
    name: 'Pakistan',
    native: 'پاکستان',
  },
  id: LocaleCode.UrduPakistan,
  language: {
    code: LanguageCode.Urdu,
    name: 'Urdu',
    native: 'اردو',
  },
  name: 'Urdu (Pakistan)',
  native_name: 'اردو (پاکستان)',
  rtl: true,
};

export const UzbekLatin: Locale = {
  id: LocaleCode.Uzbek,
  language: {
    code: LanguageCode.Uzbek,
    name: 'Uzbek',
    native: 'Oʻzbekcha',
  },
  name: 'Uzbek',
  native_name: 'Oʻzbekcha',
  rtl: false,
};

export const UzbekUzbekistan: Locale = {
  country: {
    code: CountryCode.Uzbekistan,
    name: 'Uzbekistan',
    native: 'Oʻzbekiston',
  },
  id: LocaleCode.UzbekUzbekistan,
  language: {
    code: LanguageCode.Uzbek,
    name: 'Uzbek',
    native: 'Oʻzbekcha',
  },
  name: 'Uzbek (Latin, Uzbekistan)',
  native_name: 'Oʻzbekcha (Oʻzbekiston)',
  rtl: false,
};

export const UzbekCyrillic: Locale = {
  country: {
    code: CountryCode.Uzbekistan,
    name: 'Uzbekistan',
    native: 'Ўзбекистон',
  },
  id: LocaleCode.UzbekCyrillic,
  language: {
    code: LanguageCode.Uzbek,
    name: 'Uzbek',
    native: 'Ўзбекистон',
  },
  name: 'Uzbek (Cyrillic)',
  native_name: 'Ўзбекистон (Ўзбекистон)',
  rtl: false,
};

export const Vietnamese: Locale = {
  id: LocaleCode.Vietnamese,
  language: {
    code: LanguageCode.Vietnamese,
    name: 'Vietnamese',
    native: 'Tiếng Việt',
  },
  name: 'Vietnamese',
  native_name: 'Tiếng Việt',
  rtl: false,
};

export const VietnameseVietnam: Locale = {
  country: {
    code: CountryCode.Vietnam,
    name: 'Vietnam',
    native: 'Việt Nam',
  },
  id: LocaleCode.VietnameseVietnam,
  language: {
    code: LanguageCode.Vietnamese,
    name: 'Vietnamese',
    native: 'Tiếng Việt',
  },
  name: 'Vietnamese (Vietnam)',
  native_name: 'Tiếng Việt (Việt Nam)',
  rtl: false,
};

export const Welsh: Locale = {
  id: LocaleCode.Welsh,
  language: {
    code: LanguageCode.Welsh,
    name: 'Welsh',
    native: 'Cymraeg',
  },
  name: 'Welsh',
  native_name: 'Cymraeg',
  rtl: false,
};

export const WelshUnitedKingdom: Locale = {
  country: {
    code: CountryCode.UnitedKingdom,
    name: 'United Kingdom',
    native: 'United Kingdom',
  },
  id: LocaleCode.WelshUnitedKingdom,
  language: {
    code: LanguageCode.Welsh,
    name: 'Welsh',
    native: 'Cymraeg',
  },
  name: 'Welsh (United Kingdom)',
  native_name: 'Cymraeg (United Kingdom)',
  rtl: false,
};

export const Xhosa: Locale = {
  id: LocaleCode.Xhosa,
  language: {
    code: LanguageCode.Xhosa,
    name: 'Xhosa',
    native: 'isiXhosa',
  },
  name: 'Xhosa',
  native_name: 'isiXhosa',
  rtl: false,
};

export const XhosaSouthAfrica: Locale = {
  country: {
    code: CountryCode.SouthAfrica,
    name: 'South Africa',
    native: 'South Africa',
  },
  id: LocaleCode.XhosaSouthAfrica,
  language: {
    code: LanguageCode.Xhosa,
    name: 'Xhosa',
    native: 'isiXhosa',
  },
  name: 'Xhosa (South Africa)',
  native_name: 'isiXhosa (South Africa)',
  rtl: false,
};

export const Yiddish: Locale = {
  id: LocaleCode.Yiddish,
  language: {
    code: LanguageCode.Yiddish,
    name: 'Yiddish',
    native: 'ייִדיש',
  },
  name: 'Yiddish',
  native_name: 'ייִדיש',
  rtl: false,
};

export const Yoruba: Locale = {
  id: LocaleCode.Yoruba,
  language: {
    code: LanguageCode.Yoruba,
    name: 'Yoruba',
    native: 'Yorùbá',
  },
  name: 'Yoruba',
  native_name: 'Yorùbá',
  rtl: false,
};

export const YorubaNigeria: Locale = {
  country: {
    code: CountryCode.Nigeria,
    name: 'Nigeria',
    native: 'Nigeria',
  },
  id: LocaleCode.YorubaNigeria,
  language: {
    code: LanguageCode.Yoruba,
    name: 'Yoruba',
    native: 'Yorùbá',
  },
  name: 'Yoruba (Nigeria)',
  native_name: 'Yorùbá (Nigeria)',
  rtl: false,
};

// export const ZhuyinMandarin: Locale = {
//   id: LocaleCode.ZhuyinMandarin,
//   language: {
//     code: LanguageCode.Mandarin,
//     name: 'Mandarin',
//     native: '普通话',
//   },
//   name: 'Zhuyin (Mandarin)',
//   native_name: '普通话 (普通话)',
//   rtl: false,
// };

// export const ZhuyinMandarinChina: Locale = {
//   country: {
//     code: CountryCode.China,
//     name: 'China',
//     native: '中国',
//   },
//   id: LocaleCode.ZhuyinMandarinChina,
//   language: {
//     code: LanguageCode.Zhuyin,
//     name: 'Zhuyin',
//     native: 'Zhuyin',
//   },
//   name: 'Zhuyin (Mandarin, China)',
//   native_name: 'Zhuyin (Mandarin, China)',
//   rtl: false,
// };

// export const ZhuyinMandarinTaiwan: Locale = {
//   country: {
//     code: CountryCode.Taiwan,
//     name: 'Taiwan',
//     native: '臺灣',
//   },
//   id: LocaleCode.ZhuyinMandarinTaiwan,
//   language: {
//     code: LanguageCode.Zhuyin,
//     name: 'Zhuyin',
//     native: 'Zhuyin',
//   },
//   name: 'Zhuyin (Mandarin, Taiwan)',
//   native_name: 'Zhuyin (Mandarin, Taiwan)',
//   rtl: false,
// };

// export const ZhuyinMandarinHongKong: Locale = {
//   country: {
//     code: CountryCode.HongKong,
//     name: 'Hong Kong',
//     native: '香港',
//   },
//   id: LocaleCode.ZhuyinMandarinHongKong,
//   language: {
//     code: LanguageCode.Zhuyin,
//     name: 'Zhuyin',
//     native: 'Zhuyin',
//   },
//   name: 'Zhuyin (Mandarin, Hong Kong)',
//   native_name: 'Zhuyin (Mandarin, Hong Kong)',
//   rtl: false,
// };

// export const ZhuyinMandarinMacau: Locale = {
//   country: {
//     code: CountryCode.Macau,
//     name: 'Macau',
//     native: '澳門',
//   },
//   id: LocaleCode.ZhuyinMandarinMacau,
//   language: {
//     code: LanguageCode.Zhuyin,
//     name: 'Zhuyin',
//     native: 'Zhuyin',
//   },
//   name: 'Zhuyin (Mandarin, Macau)',
//   native_name: 'Zhuyin (Mandarin, Macau)',
//   rtl: false,
// };

export const Zulu: Locale = {
  id: LocaleCode.Zulu,
  language: {
    code: LanguageCode.Zulu,
    name: 'Zulu',
    native: 'isiZulu',
  },
  name: 'Zulu',
  native_name: 'isiZulu',
  rtl: false,
};

export const ZuluSouthAfrica: Locale = {
  country: {
    code: CountryCode.SouthAfrica,
    name: 'South Africa',
    native: 'South Africa',
  },
  id: LocaleCode.ZuluSouthAfrica,
  language: {
    code: LanguageCode.Zulu,
    name: 'Zulu',
    native: 'isiZulu',
  },
  name: 'Zulu (South Africa)',
  native_name: 'isiZulu (South Africa)',
  rtl: false,
};
