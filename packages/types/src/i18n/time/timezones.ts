import { TimezoneDetails, TimezoneOffset } from './timezone';

export enum Timezones {
  AcreTime = 'ACT',
  AfghanistanTime = 'AFT',
  AIXCentralEuropeanTime = 'DFT',
  AlaskaDaylightTime = 'AKDT',
  AlaskaStandardTime = 'AKST',
  AlmaAtaTime = 'ALMT',
  AmazonSummerTime = 'AMST',
  AmazonTime = 'AMT',
  AnadyrTime = 'ANAT',
  AqtobeTime = 'AQTT',
  ArabiaStandardTime = 'AST',
  ArgentinaTime = 'ART',
  ArmeniaTime = 'AMT',
  ASEANCommonTime = 'ASEAN',
  AtlanticDaylightTime = 'ADT',
  AtlanticStandardTime = 'AST',
  AustralianCentralDaylightSavingTime = 'ACDT',
  AustralianCentralStandardTime = 'ACST',
  AustralianCentralWesternStandardTime = 'ACWST',
  AustralianEasternDaylightSavingTime = 'AEDT',
  AustralianEasternStandardTime = 'AEST',
  AustralianEasternTime = 'AET',
  AustralianWesternStandardTime = 'AWST',
  AzerbaijanTime = 'AZT',
  AzoresStandardTime = 'AZOT',
  AzoresSummerTime = 'AZOST',
  BakerIslandTime = 'BIT',
  BangladeshStandardTime = 'BST',
  BhutanTime = 'BTT',
  BoliviaTime = 'BOT',
  BougainvilleStandardTime = 'BST',
  BrasiliaSummerTime = 'BRST',
  BrasiliaTime = 'BRT',
  BritishIndianOceanTime = 'BIOT',
  BritishSummerTime = 'BST',
  BruneiTime = 'BNT',
  CapeVerdeTime = 'CVT',
  CentralAfricaTime = 'CAT',
  CentralDaylightTime = 'CDT',
  CentralEuropeanSummerTime = 'CEST',
  CentralEuropeanTime = 'CET',
  CentralIndonesiaTime = 'WITA',
  CentralStandardTime = 'CST',
  CentralTime = 'CT',
  CentralWesternStandardTime = 'CWST',
  ChamorroStandardTime = 'CHST',
  ChathamDaylightTime = 'CHADT',
  ChathamStandardTime = 'CHAST',
  ChileStandardTime = 'CLT',
  ChileSummerTime = 'CLST',
  ChinaStandardTime = 'CST',
  ChoibalsanStandardTime = 'CHOT',
  ChoibalsanSummerTime = 'CHOST',
  ChristmasIslandTime = 'CXT',
  ChuukTime = 'CHUT',
  ClipptertonIslandStandardTime = 'CIST',
  CocosIslandsTime = 'CCT',
  ColombiaSummerTime = 'COST',
  ColombiaTime = 'COT',
  CookIslandTime = 'CKT',
  CoordinatedUniversalTime = 'UTC',
  CubaDaylightTime = 'CDT',
  CubaStandardTime = 'CST',
  DavisTime = 'DAVT',
  DumontDUrvilleTime = 'DDUT',
  EastAfricaTime = 'EAT',
  EasterIslandStandardTime = 'EAST',
  EasterIslandSummerTime = 'EASST',
  EasternCaribbeanTime = 'ECT',
  EasternDaylightTime = 'EDT',
  EasternEuropeanSummerTime = 'EEST',
  EasternEuropeanTime = 'EET',
  EasternGreenlandSummerTime = 'EGST',
  EasternGreenlandTime = 'EGT',
  EasternIndonesianTime = 'WIT',
  EasternStandardTime = 'EST',
  EasternTime = 'ET',
  EcuadorTime = 'ECT',
  FalklandIslandsSummerTime = 'FKST',
  FalklandIslandsTime = 'FKT',
  FernandoDeNoronhaTime = 'FNT',
  FijiTime = 'FJT',
  FrenchGuianaTime = 'GFT',
  FrenchSouthernAndAntarcticTime = 'TFT',
  FurtherEasternEuropeanTime = 'FET',
  GalapagosTime = 'GALT',
  GambierIslandTime = 'GIT',
  GambierIslandsTime = 'GAMT',
  GeorgiaStandardTime = 'GET',
  GilbertIslandTime = 'GILT',
  GreenwichMeanTime = 'GMT',
  GulfStandardTime = 'GST',
  GuyanaTime = 'GYT',
  HawaiiAleutianDaylightTime = 'HDT',
  HawaiiAleutianStandardTime = 'HST',
  HeardAndMcDonaldIslandsTime = 'HMT',
  HeureAvanceeDEuropeCentraleTime = 'HAEC',
  HongKongTime = 'HKT',
  HovdSummerTime = 'HOVST',
  HovdTime = 'HOVT',
  IndianOceanTime = 'IOT',
  IndianStandardTime = 'IST',
  IndochinaTime = 'ICT',
  InternationalDayLineWestTime = 'IDLW',
  IranDaylightTime = 'IRDT',
  IranStandardTime = 'IRST',
  IrishStandardTime = 'IST',
  IrkutskSummerTime = 'IRKST',
  IrkutskTime = 'IRKT',
  IsraelDaylightTime = 'IDT',
  IsraelStandardTime = 'IST',
  JapanStandardTime = 'JST',
  KaliningradTime = 'KALT',
  KamchatkaTime = 'KAMT',
  KoreaStandardTime = 'KST',
  KosraeTime = 'KOST',
  KrasnoyarskSummerTime = 'KRAST',
  KrasnoyarskTime = 'KRAT',
  KyrgyzstanTime = 'KGT',
  LineIslandsTime = 'LINT',
  KazakhstanStandardTime = 'KAST',
  LordHoweStandardTime = 'LHST',
  LordHoweSummerTime = 'LHST',
  MacquarieIslandStationTime = 'MIST',
  MagadanTime = 'MAGT',
  MalaysiaStandardTime = 'MST',
  MalaysiaTime = 'MYT',
  MaldivesTime = 'MVT',
  MarquesasIslandsTime = 'MART',
  MarshallIslandsTime = 'MHT',
  MauritiusTime = 'MUT',
  MawsonStationTime = 'MAWT',
  MiddleEuropeanSummerTime = 'MEDT',
  MiddleEuropeanTime = 'MET',
  MoscowTime = 'MSK',
  MountainDaylightTime = 'MDT',
  MountainStandardTime = 'MST',
  MyanmarStandardTime = 'MMT',
  NepalTime = 'NCT',
  NauruTime = 'NRT',
  NewCaledoniaTime = 'NCT',
  NewZealandDaylightTime = 'NZDT',
  NewZealandStandardTime = 'NZST',
  NewfoundlandDaylightTime = 'NDT',
  NewfoundlandStandardTime = 'NST',
  NewfoundlandTime = 'NT',
  NiueTime = 'NUT',
  NorfolkIslandTime = 'NFT',
  NovosibirskTime = 'NOVT',
  OmskTime = 'OMST',
  OralTime = 'ORAT',
  PacificDaylightTime = 'PDT',
  PacificStandardTime = 'PST',
  PakistanStandardTime = 'PKT',
  PalauTime = 'PWT',
  PapuaNewGuineaTime = 'PGT',
  ParaguaySummerTime = 'PYST',
  ParaguayTime = 'PYT',
  PeruTime = 'PET',
  PhilippineStandardTime = 'PHST',
  PhilippineTime = 'PHT',
  PhoenixIslandTime = 'PHOT',
  PitcairnTime = 'PST',
  PohnpeiStandardTime = 'PONT',
  ReunionTime = 'RET',
  RotheraResearchStationTime = 'ROTT',
  SaintPierreAndMiquelonDaylightTime = 'PMDT',
  SaintPierreAndMiquelonStandardTime = 'PMST',
  SakhalinIslandTime = 'SAKT',
  SamaraTime = 'SAMT',
  SamoaDaylightTime = 'SDT',
  SamoaStandardTime = 'SST',
  SeychellesTime = 'SCT',
  ShowaStationTime = 'SYOT',
  SingaporeStandardTime = 'SST',
  SingaporeTime = 'SGT',
  SolomonIslandsTime = 'SBT',
  SouthAfricanStandardTime = 'SAST',
  SouthGeorgiaAndTheSouthSandwichIslandsTime = 'GST',
  SrednekolymskTime = 'SRET',
  SriLankaStandardTime = 'SLST',
  SurinameTime = 'SRT',
  TahitiTime = 'TAHT',
  TajikistanTime = 'TJT',
  ThailandStandardTime = 'THA',
  TimorLesteTime = 'TLT',
  TokelauTime = 'TKT',
  TongaTime = 'TOT',
  TurkeyTime = 'TRT',
  TurkmenistanTime = 'TMT',
  TuvaluTime = 'TVT',
  UlaanbaatarStandardTime = 'ULAT',
  UlaanbaatarSummerTime = 'ULAST',
  UruguayStandardTime = 'UYT',
  UruguaySummerTime = 'UYST',
  UzbekistanTime = 'UZT',
  VanuatuTime = 'VUT',
  VenezuelaStandardTime = 'VET',
  VladivostokTime = 'VLAT',
  VolgogradTime = 'VOLT',
  VostokStationTime = 'VOST',
  WakeIslandTime = 'WAKT',
  WestAfricaSummerTime = 'WAST',
  WestAfricaTime = 'WAT',
  WestGreenlandSummerTime = 'WGST',
  WestGreenlandTime = 'WGT',
  WestKazakhstanTime = 'WKT',
  WesternEuropeanSummerTime = 'WEDT',
  WesternEuropeanTime = 'WET',
  WesternIndonesianTime = 'WIT',
  WesternStandardTime = 'WST',
  YakutskTime = 'YAKT',
  YekaterinburgTime = 'YEKT',
}

export const AcreTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AcreTime,
  name: 'Acre Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const AfghanistanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AfghanistanTime,
  name: 'Afghanistan Time',
  offset: TimezoneOffset.UTC_PLUS_4_30,
};

export const AIXCentralEuropeanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AIXCentralEuropeanTime,
  name: 'AIX Central European Time',
  offset: TimezoneOffset.UTC_PLUS_1,
};

export const AlaskaDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.AlaskaDaylightTime,
  name: 'Alaska Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_8,
};

export const AlaskaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AlaskaStandardTime,
  name: 'Alaska Standard Time',
  offset: TimezoneOffset.UTC_MINUS_9,
};

export const AlmaAtaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AlmaAtaTime,
  name: 'Alma-Ata Time',
  offset: TimezoneOffset.UTC_PLUS_6,
};

export const AmazonSummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AmazonSummerTime,
  name: 'Amazon Summer Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const AmazonTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AmazonTime,
  name: 'Amazon Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const AnadyrTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AnadyrTime,
  name: 'Anadyr Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const AqtobeTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AqtobeTime,
  name: 'Aqtobe Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const ArabiaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ArabiaStandardTime,
  name: 'Arabia Standard Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const ArgentinaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ArgentinaTime,
  name: 'Argentina Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const ArmeniaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ArmeniaTime,
  name: 'Armenia Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const AtlanticDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.AtlanticDaylightTime,
  name: 'Atlantic Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const AtlanticStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AtlanticStandardTime,
  name: 'Atlantic Standard Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const AustralianCentralDaylightSavingTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.AustralianCentralDaylightSavingTime,
  name: 'Australian Central Daylight Saving Time',
  offset: TimezoneOffset.UTC_PLUS_10_30,
};

export const AustralianCentralStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AustralianCentralStandardTime,
  name: 'Australian Central Standard Time',
  offset: TimezoneOffset.UTC_PLUS_9_30,
};

export const AustralianCentralWesternStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AustralianCentralWesternStandardTime,
  name: 'Australian Central Western Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8_45,
};

export const AustralianEasternDaylightSavingTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.AustralianEasternDaylightSavingTime,
  name: 'Australian Eastern Daylight Saving Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const AustralianEasternStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AustralianEasternStandardTime,
  name: 'Australian Eastern Standard Time',
  offset: TimezoneOffset.UTC_PLUS_10,
};

export const AustralianEasternTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AustralianEasternTime,
  name: 'Australian Eastern Time',
  offset: TimezoneOffset.UTC_PLUS_10,
};

export const AustralianWesternStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AustralianWesternStandardTime,
  name: 'Australian Western Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const AzerbaijanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AzerbaijanTime,
  name: 'Azerbaijan Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const AzoresStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.AzoresStandardTime,
  name: 'Azores Standard Time',
  offset: TimezoneOffset.UTC_MINUS_1,
};

export const AzoresSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.AzoresSummerTime,
  name: 'Azores Summer Time',
  offset: TimezoneOffset.UTC_0,
};

export const BakerIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.BakerIslandTime,
  name: 'Baker Island Time',
  offset: TimezoneOffset.UTC_MINUS_12,
};

export const BangladeshStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.BangladeshStandardTime,
  name: 'Bangladesh Standard Time',
  offset: TimezoneOffset.UTC_PLUS_6,
};

export const BhutanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.BhutanTime,
  name: 'Bhutan Time',
  offset: TimezoneOffset.UTC_PLUS_6,
};

export const BoliviaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.BoliviaTime,
  name: 'Bolivia Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const BougainvilleStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.BougainvilleStandardTime,
  name: 'Bougainville Standard Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const BrasiliaSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.BrasiliaSummerTime,
  name: 'Brasilia Summer Time',
  offset: TimezoneOffset.UTC_MINUS_2,
};

export const BrasiliaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.BrasiliaTime,
  name: 'Brasilia Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const BritishIndianOceanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.BritishIndianOceanTime,
  name: 'British Indian Ocean Time',
  offset: TimezoneOffset.UTC_PLUS_6,
};

export const BritishSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.BritishSummerTime,
  name: 'British Summer Time',
  offset: TimezoneOffset.UTC_PLUS_1,
};

export const BruneiTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.BruneiTime,
  name: 'Brunei Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const CapeVerdeTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CapeVerdeTime,
  name: 'Cape Verde Time',
  offset: TimezoneOffset.UTC_MINUS_1,
};

export const CentralAfricaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CentralAfricaTime,
  name: 'Central Africa Time',
  offset: TimezoneOffset.UTC_PLUS_2,
};

export const CentralDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.CentralDaylightTime,
  name: 'Central Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const CentralEuropeanSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.CentralEuropeanSummerTime,
  name: 'Central European Summer Time',
  offset: TimezoneOffset.UTC_PLUS_2,
};

export const CentralEuropeanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CentralEuropeanTime,
  name: 'Central European Time',
  offset: TimezoneOffset.UTC_PLUS_1,
};

export const CentralIndonesiaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CentralIndonesiaTime,
  name: 'Central Indonesia Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const CentralStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CentralStandardTime,
  name: 'Central Standard Time',
  offset: TimezoneOffset.UTC_MINUS_6,
};

export const CentralTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CentralTime,
  name: 'Central Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const CentralWesternStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CentralWesternStandardTime,
  name: 'Central Western Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8_45,
};

export const ChamorroStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ChamorroStandardTime,
  name: 'Chamorro Standard Time',
  offset: TimezoneOffset.UTC_PLUS_10,
};

export const ChathamDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.ChathamDaylightTime,
  name: 'Chatham Daylight Time',
  offset: TimezoneOffset.UTC_PLUS_13_45,
};

export const ChathamStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ChathamStandardTime,
  name: 'Chatham Standard Time',
  offset: TimezoneOffset.UTC_PLUS_12_45,
};

export const ChileStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ChileStandardTime,
  name: 'Chile Standard Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const ChileSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.ChileSummerTime,
  name: 'Chile Summer Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const ChinaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ChinaStandardTime,
  name: 'China Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const ChoibalsanStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ChoibalsanStandardTime,
  name: 'Choibalsan Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const ChoibalsanSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.ChoibalsanSummerTime,
  name: 'Choibalsan Summer Time',
  offset: TimezoneOffset.UTC_PLUS_9,
};

export const ChristmasIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ChristmasIslandTime,
  name: 'Christmas Island Time',
  offset: TimezoneOffset.UTC_PLUS_7,
};

export const ChuukTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ChuukTime,
  name: 'Chuuk Time',
  offset: TimezoneOffset.UTC_PLUS_10,
};

export const ClipptertonIslandStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ClipptertonIslandStandardTime,
  name: 'Clippterton Island Standard Time',
  offset: TimezoneOffset.UTC_MINUS_8,
};

export const CocosIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CocosIslandsTime,
  name: 'Cocos Standard Time',
  offset: TimezoneOffset.UTC_PLUS_6_30,
};

export const ColombiaSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.ColombiaSummerTime,
  name: 'Colombia Summer Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const ColombiaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ColombiaTime,
  name: 'Colombia Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const CookIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CookIslandTime,
  name: 'Cook Island Time',
  offset: TimezoneOffset.UTC_MINUS_10,
};

export const CoordinatedUniversalTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CoordinatedUniversalTime,
  name: 'Coordinated Universal Time',
  offset: TimezoneOffset.UTC_0,
};

export const CubaDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.CubaDaylightTime,
  name: 'Cuba Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const CubaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.CubaStandardTime,
  name: 'Cuba Standard Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const DavisTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.DavisTime,
  name: 'Davis Time',
  offset: TimezoneOffset.UTC_PLUS_7,
};

export const DumontDUrvilleTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.DumontDUrvilleTime,
  name: "Dumont D'Urville Time",
  offset: TimezoneOffset.UTC_PLUS_10,
};

export const EastAfricaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EastAfricaTime,
  name: 'East Africa Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const EasterIslandStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EasterIslandStandardTime,
  name: 'Easter Island Standard Time',
  offset: TimezoneOffset.UTC_MINUS_6,
};

export const EasterIslandSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.EasterIslandSummerTime,
  name: 'Easter Island Summer Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const EasternCaribbeanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EasternCaribbeanTime,
  name: 'Eastern Caribbean Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const EasternDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.EasternDaylightTime,
  name: 'Eastern Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const EasternEuropeanSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.EasternEuropeanSummerTime,
  name: 'Eastern European Summer Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const EasternEuropeanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EasternEuropeanTime,
  name: 'Eastern European Time',
  offset: TimezoneOffset.UTC_PLUS_2,
};

export const EasternGreenlandSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.EasternGreenlandSummerTime,
  name: 'Eastern Greenland Summer Time',
  offset: TimezoneOffset.UTC_0,
};

export const EasternGreenlandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EasternGreenlandTime,
  name: 'Eastern Greenland Time',
  offset: TimezoneOffset.UTC_MINUS_1,
};

export const EasternIndonesianTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EasternIndonesianTime,
  name: 'Eastern Indonesian Time',
  offset: TimezoneOffset.UTC_PLUS_9,
};

export const EasternStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EasternStandardTime,
  name: 'Eastern Standard Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const EasternTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EasternTime,
  name: 'Eastern Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const EcuadorTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.EcuadorTime,
  name: 'Ecuador Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const FalklandIslandsSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.FalklandIslandsSummerTime,
  name: 'Falkland Islands Summer Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const FalklandIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.FalklandIslandsTime,
  name: 'Falkland Islands Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const FernandoDeNoronhaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.FernandoDeNoronhaTime,
  name: 'Fernando de Noronha Time',
  offset: TimezoneOffset.UTC_MINUS_2,
};

export const FijiTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.FijiTime,
  name: 'Fiji Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const FrenchGuianaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.FrenchGuianaTime,
  name: 'French Guiana Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const FrenchSouthernAndAntarcticTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.FrenchSouthernAndAntarcticTime,
  name: 'French Southern and Antarctic Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const FurtherEasternEuropeanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.FurtherEasternEuropeanTime,
  name: 'Further Eastern European Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const GalapagosTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.GalapagosTime,
  name: 'Galapagos Time',
  offset: TimezoneOffset.UTC_MINUS_6,
};

export const GambierIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.GambierIslandTime,
  name: 'Gambier Island Time',
  offset: TimezoneOffset.UTC_MINUS_9,
};

export const GambierIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.GambierIslandsTime,
  name: 'Gambier Islands Time',
  offset: TimezoneOffset.UTC_MINUS_9,
};

export const GeorgiaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.GeorgiaStandardTime,
  name: 'Georgia Standard Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const GilbertIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.GilbertIslandTime,
  name: 'Gilbert Island Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const GreenwichMeanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.GreenwichMeanTime,
  name: 'Greenwich Mean Time',
  offset: TimezoneOffset.UTC_0,
};

export const GulfStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.GulfStandardTime,
  name: 'Gulf Standard Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const GuyanaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.GuyanaTime,
  name: 'Guyana Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const HawaiiAleutianDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.HawaiiAleutianDaylightTime,
  name: 'Hawaii-Aleutian Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_9,
};

export const HawaiiAleutianStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.HawaiiAleutianStandardTime,
  name: 'Hawaii-Aleutian Standard Time',
  offset: TimezoneOffset.UTC_MINUS_10,
};

export const HeardAndMcDonaldIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.HeardAndMcDonaldIslandsTime,
  name: 'Heard and McDonald Islands Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const HongKongTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.HongKongTime,
  name: 'Hong Kong Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const HovdSummerTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.HovdSummerTime,
  name: 'Hovd Summer Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const HovdTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.HovdTime,
  name: 'Hovd Time',
  offset: TimezoneOffset.UTC_PLUS_7,
};

export const IndianOceanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.IndianOceanTime,
  name: 'Indian Ocean Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const IndianStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.IndianStandardTime,
  name: 'Indian Standard Time',
  offset: TimezoneOffset.UTC_PLUS_5_30,
};

export const IndochinaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.IndochinaTime,
  name: 'Indochina Time',
  offset: TimezoneOffset.UTC_PLUS_7,
};

export const InternationalDayLineWestTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.InternationalDayLineWestTime,
  name: 'International Day Line West Time',
  offset: TimezoneOffset.UTC_MINUS_12,
};

export const IranDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.IranDaylightTime,
  name: 'Iran Daylight Time',
  offset: TimezoneOffset.UTC_PLUS_4_30,
};

export const IranStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.IranStandardTime,
  name: 'Iran Standard Time',
  offset: TimezoneOffset.UTC_PLUS_3_30,
};

export const IrishStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.IrishStandardTime,
  name: 'Irish Standard Time',
  offset: TimezoneOffset.UTC_PLUS_1,
};

export const IrkutskTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.IrkutskTime,
  name: 'Irkutsk Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const IsraelDaylightTime: TimezoneDetails = {
  dst: {
    is: true,
    uses: true,
  },
  id: Timezones.IsraelDaylightTime,
  name: 'Israel Daylight Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const IsraelStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.IsraelStandardTime,
  name: 'Israel Standard Time',
  offset: TimezoneOffset.UTC_PLUS_2,
};

export const JapanStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.JapanStandardTime,
  name: 'Japan Standard Time',
  offset: TimezoneOffset.UTC_PLUS_9,
};

export const KaliningradTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.KaliningradTime,
  name: 'Kaliningrad Time',
  offset: TimezoneOffset.UTC_PLUS_2,
};

export const KamchatkaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.KamchatkaTime,
  name: 'Kamchatka Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const KoreaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.KoreaStandardTime,
  name: 'Korea Standard Time',
  offset: TimezoneOffset.UTC_PLUS_9,
};

export const KosraeTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.KosraeTime,
  name: 'Kosrae Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const KrasnoyarskTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.KrasnoyarskTime,
  name: 'Krasnoyarsk Time',
  offset: TimezoneOffset.UTC_PLUS_7,
};

export const KyrgyzstanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.KyrgyzstanTime,
  name: 'Kyrgyzstan Time',
  offset: TimezoneOffset.UTC_PLUS_6,
};

export const LineIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.LineIslandsTime,
  name: 'Line Islands Time',
  offset: TimezoneOffset.UTC_PLUS_14,
};

export const LordHoweStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.LordHoweStandardTime,
  name: 'Lord Howe Standard Time',
  offset: TimezoneOffset.UTC_PLUS_10_30,
};

export const LordHoweSummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.LordHoweSummerTime,
  name: 'Lord Howe Summer Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const MacquarieIslandStationTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MacquarieIslandStationTime,
  name: 'Macquarie Island Station Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const MagadanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MagadanTime,
  name: 'Magadan Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const MalaysiaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MalaysiaStandardTime,
  name: 'Malaysia Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const MalaysiaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MalaysiaTime,
  name: 'Malaysia Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const MaldivesTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MaldivesTime,
  name: 'Maldives Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const MarquesasIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MarquesasIslandsTime,
  name: 'Marquesas Islands Time',
  offset: TimezoneOffset.UTC_PLUS_9_30,
};

export const MarshallIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MarshallIslandsTime,
  name: 'Marshall Islands Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const MauritiusTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MauritiusTime,
  name: 'Mauritius Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const MawsonStationTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MawsonStationTime,
  name: 'Mawson Station Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const MiddleEuropeanSummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MiddleEuropeanSummerTime,
  name: 'Middle European Summer Time',
  offset: TimezoneOffset.UTC_PLUS_2,
};

export const MiddleEuropeanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MiddleEuropeanTime,
  name: 'Middle European Time',
  offset: TimezoneOffset.UTC_PLUS_1,
};

export const MoscowTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MoscowTime,
  name: 'Moscow Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const MountainDaylightTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MountainDaylightTime,
  name: 'Mountain Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_6,
};

export const MountainStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MountainStandardTime,
  name: 'Mountain Standard Time',
  offset: TimezoneOffset.UTC_MINUS_7,
};

export const MyanmarStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.MyanmarStandardTime,
  name: 'Myanmar Standard Time',
  offset: TimezoneOffset.UTC_PLUS_6_30,
};

export const NepalTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.NepalTime,
  name: 'Nepal Time',
  offset: TimezoneOffset.UTC_PLUS_5_45,
};

export const NauruTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.NauruTime,
  name: 'Nauru Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const NewCaledoniaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.NewCaledoniaTime,
  name: 'New Caledonia Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const NewZealandDaylightTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.NewZealandDaylightTime,
  name: 'New Zealand Daylight Time',
  offset: TimezoneOffset.UTC_PLUS_13,
};

export const NewZealandStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.NewZealandStandardTime,
  name: 'New Zealand Standard Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const NewfoundlandDaylightTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.NewfoundlandDaylightTime,
  name: 'Newfoundland Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_2_30,
};

export const NewfoundlandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },

  id: Timezones.NewfoundlandTime,
  name: 'Newfoundland Time',
  offset: TimezoneOffset.UTC_MINUS_3_30,
};

export const NiueTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.NiueTime,
  name: 'Niue Time',
  offset: TimezoneOffset.UTC_MINUS_11,
};

export const NorfolkIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },

  id: Timezones.NorfolkIslandTime,
  name: 'Norfolk Island Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const NovosibirskTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.NovosibirskTime,
  name: 'Novosibirsk Time',
  offset: TimezoneOffset.UTC_PLUS_7,
};

export const OmskTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.OmskTime,
  name: 'Omsk Time',
  offset: TimezoneOffset.UTC_PLUS_6,
};

export const OralTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.OralTime,
  name: 'Oral Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const PacificDaylightTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PacificDaylightTime,
  name: 'Pacific Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_7,
};

export const PacificStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PacificStandardTime,
  name: 'Pacific Standard Time',
  offset: TimezoneOffset.UTC_MINUS_8,
};

export const PakistanStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PakistanStandardTime,
  name: 'Pakistan Standard Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const PalauTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PalauTime,
  name: 'Palau Time',
  offset: TimezoneOffset.UTC_PLUS_9,
};

export const PapuaNewGuineaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PapuaNewGuineaTime,
  name: 'Papua New Guinea Time',
  offset: TimezoneOffset.UTC_PLUS_10,
};

export const ParaguaySummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ParaguaySummerTime,
  name: 'Paraguay Summer Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const ParaguayTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ParaguayTime,
  name: 'Paraguay Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const PeruTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PeruTime,
  name: 'Peru Time',
  offset: TimezoneOffset.UTC_MINUS_5,
};

export const PhilippineStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PhilippineStandardTime,
  name: 'Philippine Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const PhillipineTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PhilippineTime,
  name: 'Philippine Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const PhoenixIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PhoenixIslandTime,
  name: 'Phoenix Island Time',
  offset: TimezoneOffset.UTC_PLUS_13,
};

export const PitcairnTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PitcairnTime,
  name: 'Pitcairn Time',
  offset: TimezoneOffset.UTC_MINUS_8,
};

export const PohnpeiStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.PohnpeiStandardTime,
  name: 'Pohnpei Standard Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const ReunionTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ReunionTime,
  name: 'Reunion Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const RotheraResearchStationTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.RotheraResearchStationTime,
  name: 'Rothera Research Station Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const SaintPierreAndMiquelonDaylightTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SaintPierreAndMiquelonDaylightTime,
  name: 'Saint Pierre and Miquelon Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_2,
};

export const SaintPierreAndMiquelonStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SaintPierreAndMiquelonStandardTime,
  name: 'Saint Pierre and Miquelon Standard Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const SakhalinIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SakhalinIslandTime,
  name: 'Sakhalin Island Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const SamaraTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SamaraTime,
  name: 'Samara Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const SamoaDaylightTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SamoaDaylightTime,
  name: 'Samoa Daylight Time',
  offset: TimezoneOffset.UTC_MINUS_10,
};

export const SamoaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SamoaStandardTime,
  name: 'Samoa Standard Time',
  offset: TimezoneOffset.UTC_MINUS_11,
};

export const SeychellesTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SeychellesTime,
  name: 'Seychelles Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const ShowaStationTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ShowaStationTime,
  name: 'Showa Station Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const SingaporeStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SingaporeStandardTime,
  name: 'Singapore Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const SingaporeTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SingaporeTime,
  name: 'Singapore Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const SolomonIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SolomonIslandsTime,
  name: 'Solomon Islands Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const SouthAfricanStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SouthAfricanStandardTime,
  name: 'South African Standard Time',
  offset: TimezoneOffset.UTC_PLUS_2,
};

export const SouthGeorgiaAndTheSouthSandwichIslandsTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SouthGeorgiaAndTheSouthSandwichIslandsTime,
  name: 'South Georgia and the South Sandwich Islands Time',
  offset: TimezoneOffset.UTC_MINUS_2,
};

export const SrednekolymskTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SrednekolymskTime,
  name: 'Srednekolymsk Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const SriLankaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SriLankaStandardTime,
  name: 'Sri Lanka Standard Time',
  offset: TimezoneOffset.UTC_PLUS_5_30,
};

export const SurinameTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.SurinameTime,
  name: 'Suriname Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const TahitiTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.TahitiTime,
  name: 'Tahiti Time',
  offset: TimezoneOffset.UTC_MINUS_10,
};

export const TajikistanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.TajikistanTime,
  name: 'Tajikistan Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const ThailandStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.ThailandStandardTime,
  name: 'Thailand Standard Time',
  offset: TimezoneOffset.UTC_PLUS_7,
};

export const TimorLesteTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.TimorLesteTime,
  name: 'Timor-Leste Time',
  offset: TimezoneOffset.UTC_PLUS_9,
};

export const TokelauTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.TokelauTime,
  name: 'Tokelau Time',
  offset: TimezoneOffset.UTC_PLUS_13,
};

export const TongaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.TongaTime,
  name: 'Tonga Time',
  offset: TimezoneOffset.UTC_PLUS_13,
};

export const TurkeyTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.TurkeyTime,
  name: 'Turkey Time',
  offset: TimezoneOffset.UTC_PLUS_3,
};

export const TurkmenistanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.TurkmenistanTime,
  name: 'Turkmenistan Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const TuvaluTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.TuvaluTime,
  name: 'Tuvalu Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const UlaanbaatarStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.UlaanbaatarStandardTime,
  name: 'Ulaanbaatar Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const UlaanbaatarSummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.UlaanbaatarSummerTime,
  name: 'Ulaanbaatar Summer Time',
  offset: TimezoneOffset.UTC_PLUS_9,
};

export const UruguayStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.UruguayStandardTime,
  name: 'Uruguay Standard Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const UruguaySummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.UruguaySummerTime,
  name: 'Uruguay Summer Time',
  offset: TimezoneOffset.UTC_MINUS_2,
};

export const UzbekistanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.UzbekistanTime,
  name: 'Uzbekistan Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const VanuatuTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.VanuatuTime,
  name: 'Vanuatu Time',
  offset: TimezoneOffset.UTC_PLUS_11,
};

export const VenezuelaStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.VenezuelaStandardTime,
  name: 'Venezuela Standard Time',
  offset: TimezoneOffset.UTC_MINUS_4,
};

export const VladivostokTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.VladivostokTime,
  name: 'Vladivostok Time',
  offset: TimezoneOffset.UTC_PLUS_10,
};

export const VolgogradTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.VolgogradTime,
  name: 'Volgograd Time',
  offset: TimezoneOffset.UTC_PLUS_4,
};

export const VostokStationTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.VostokStationTime,
  name: 'Vostok Station Time',
  offset: TimezoneOffset.UTC_PLUS_6,
};

export const WakeIslandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WakeIslandTime,
  name: 'Wake Island Time',
  offset: TimezoneOffset.UTC_PLUS_12,
};

export const WestAfricaSummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WestAfricaSummerTime,
  name: 'West Africa Summer Time',
  offset: TimezoneOffset.UTC_PLUS_2,
};

export const WestAfricaTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WestAfricaTime,
  name: 'West Africa Time',
  offset: TimezoneOffset.UTC_PLUS_1,
};

export const WestGreenlandSummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WestGreenlandSummerTime,
  name: 'West Greenland Summer Time',
  offset: TimezoneOffset.UTC_MINUS_2,
};

export const WestGreenlandTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WestGreenlandTime,
  name: 'West Greenland Time',
  offset: TimezoneOffset.UTC_MINUS_3,
};

export const WestKazakhstanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WestKazakhstanTime,
  name: 'West Kazakhstan Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};

export const WesternEuropeanSummerTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WesternEuropeanSummerTime,
  name: 'Western European Summer Time',
  offset: TimezoneOffset.UTC_PLUS_1,
};

export const WesternEuropeanTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WesternEuropeanTime,
  name: 'Western European Time',
  offset: TimezoneOffset.UTC_0,
};

export const WesternIndonesianTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WesternIndonesianTime,
  name: 'Western Indonesian Time',
  offset: TimezoneOffset.UTC_PLUS_7,
};

export const WesternStandardTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.WesternStandardTime,
  name: 'Western Standard Time',
  offset: TimezoneOffset.UTC_PLUS_8,
};

export const YakutskTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.YakutskTime,
  name: 'Yakutsk Time',
  offset: TimezoneOffset.UTC_PLUS_9,
};

export const YekaterinburgTime: TimezoneDetails = {
  dst: {
    is: false,
    uses: true,
  },
  id: Timezones.YekaterinburgTime,
  name: 'Yekaterinburg Time',
  offset: TimezoneOffset.UTC_PLUS_5,
};
