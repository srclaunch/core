import { TimezoneOffset } from './timezone';
import { Timezones } from './timezones';

export enum TimezoneRegions {
  AfricaAbidjan = 'Africa/Abidjan',
  AfricaAccra = 'Africa/Accra',
  AfricaAddisAbaba = 'Africa/Addis_Ababa',
  AfricaAlgiers = 'Africa/Algiers',
  AfricaAsmara = 'Africa/Asmara',
  AfricaBamako = 'Africa/Bamako',
  AfricaBangui = 'Africa/Bangui',
  AfricaBanjul = 'Africa/Banjul',
  AfricaBissau = 'Africa/Bissau',
  AfricaBlantyre = 'Africa/Blantyre',
  AfricaBrazzaville = 'Africa/Brazzaville',
  AfricaBujumbura = 'Africa/Bujumbura',
  AfricaCairo = 'Africa/Cairo',
  AfricaCasablanca = 'Africa/Casablanca',
  AfricaCeuta = 'Africa/Ceuta',
  AfricaConakry = 'Africa/Conakry',
  AfricaDakar = 'Africa/Dakar',
  AfricaDarEsSalaam = 'Africa/Dar_es_Salaam',
  AfricaDjibouti = 'Africa/Djibouti',
  AfricaDouala = 'Africa/Douala',
  AfricaElAaiun = 'Africa/El_Aaiun',
  AfricaFreetown = 'Africa/Freetown',
  AfricaGaborone = 'Africa/Gaborone',
  AfricaHarare = 'Africa/Harare',
  AfricaJohannesburg = 'Africa/Johannesburg',
  AfricaJuba = 'Africa/Juba',
  AfricaKampala = 'Africa/Kampala',
  AfricaKhartoum = 'Africa/Khartoum',
  AfricaKigali = 'Africa/Kigali',
  AfricaKinshasa = 'Africa/Kinshasa',
  AfricaLagos = 'Africa/Lagos',
  AfricaLibreville = 'Africa/Libreville',
  AfricaLome = 'Africa/Lome',
  AfricaLuanda = 'Africa/Luanda',
  AfricaLubumbashi = 'Africa/Lubumbashi',
  AfricaLusaka = 'Africa/Lusaka',
  AfricaMalabo = 'Africa/Malabo',
  AfricaMaputo = 'Africa/Maputo',
  AfricaMaseru = 'Africa/Maseru',
  AfricaMbabane = 'Africa/Mbabane',
  AfricaMogadishu = 'Africa/Mogadishu',
  AfricaMonrovia = 'Africa/Monrovia',
  AfricaNairobi = 'Africa/Nairobi',
  AfricaNdjamena = 'Africa/Ndjamena',
  AfricaNiamey = 'Africa/Niamey',
  AfricaNouakchott = 'Africa/Nouakchott',
  AfricaOuagadougou = 'Africa/Ouagadougou',
  AfricaPortoNovo = 'Africa/Porto-Novo',
  AfricaSaoTome = 'Africa/Sao_Tome',
  AfricaTripoli = 'Africa/Tripoli',
  AfricaTunis = 'Africa/Tunis',
  AfricaWindhoek = 'Africa/Windhoek',
  AmericaAdak = 'America/Adak',
  AmericaAnchorage = 'America/Anchorage',
  AmericaAnguilla = 'America/Anguilla',
  AmericaAntigua = 'America/Antigua',
  AmericaAraguaina = 'America/Araguaina',
  AmericaArgentinaBuenosAires = 'America/Argentina/Buenos_Aires',
  AmericaArgentinaCatamarca = 'America/Argentina/Catamarca',
  AmericaArgentinaCordoba = 'America/Argentina/Cordoba',
  AmericaArgentinaJujuy = 'America/Argentina/Jujuy',
  AmericaArgentinaLaRioja = 'America/Argentina/La_Rioja',
  AmericaArgentinaMendoza = 'America/Argentina/Mendoza',
  AmericaArgentinaRioGallegos = 'America/Argentina/Rio_Gallegos',
  AmericaArgentinaSalta = 'America/Argentina/Salta',
  AmericaArgentinaSanJuan = 'America/Argentina/San_Juan',
  AmericaArgentinaSanLuis = 'America/Argentina/San_Luis',
  AmericaArgentinaTucuman = 'America/Argentina/Tucuman',
  AmericaArgentinaUshuaia = 'America/Argentina/Ushuaia',
  AmericaAruba = 'America/Aruba',
  AmericaAsuncion = 'America/Asuncion',
  AmericaAtikokan = 'America/Atikokan',
  AmericaAtka = 'America/Atka',
  AmericaBahia = 'America/Bahia',
  AmericaBahiaBanderas = 'America/Bahia_Banderas',
  AmericaBarbados = 'America/Barbados',
  AmericaBelem = 'America/Belem',
  AmericaBelize = 'America/Belize',
  AmericaBlancSablon = 'America/Blanc-Sablon',
  AmericaBoaVista = 'America/Boa_Vista',
  AmericaBogota = 'America/Bogota',
  AmericaBoise = 'America/Boise',
  AmericaCambridgeBay = 'America/Cambridge_Bay',
  AmericaCampoGrande = 'America/Campo_Grande',
  AmericaCancun = 'America/Cancun',
  AmericaCaracas = 'America/Caracas',
  AmericaCayenne = 'America/Cayenne',
  AmericaCayman = 'America/Cayman',
  AmericaChicago = 'America/Chicago',
  AmericaChihuahua = 'America/Chihuahua',
  AmericaCoralHarbour = 'America/Coral_Harbour',
  AmericaCordoba = 'America/Cordoba',
  AmericaCostaRica = 'America/Costa_Rica',
  AmericaCreston = 'America/Creston',
  AmericaCuiaba = 'America/Cuiaba',
  AmericaCuracao = 'America/Curacao',
  AmericaDanmarkshavn = 'America/Danmarkshavn',
  AmericaDawson = 'America/Dawson',
  AmericaDawsonCreek = 'America/Dawson_Creek',
  AmericaDenver = 'America/Denver',
  AmericaDetroit = 'America/Detroit',
  AmericaDominica = 'America/Dominica',
  AmericaEdmonton = 'America/Edmonton',
  AmericaEirunepe = 'America/Eirunepe',
  AmericaElSalvador = 'America/El_Salvador',
  AmericaFortaleza = 'America/Fortaleza',
  AmericaGlaceBay = 'America/Glace_Bay',
  AmericaGodthab = 'America/Godthab',
  AmericaGooseBay = 'America/Goose_Bay',
  AmericaGrandTurk = 'America/Grand_Turk',
  AmericaGrenada = 'America/Grenada',
  AmericaGuadeloupe = 'America/Guadeloupe',
  AmericaGuatemala = 'America/Guatemala',
  AmericaGuayaquil = 'America/Guayaquil',
  AmericaGuyana = 'America/Guyana',
  AmericaHalifax = 'America/Halifax',
  AmericaHavana = 'America/Havana',
  AmericaHermosillo = 'America/Hermosillo',
  AmericaIndianaIndianapolis = 'America/Indiana/Indianapolis',
  AmericaIndianaKnox = 'America/Indiana/Knox',
  AmericaIndianaMarengo = 'America/Indiana/Marengo',
  AmericaIndianaPetersburg = 'America/Indiana/Petersburg',
  AmericaIndianaTellCity = 'America/Indiana/Tell_City',
  AmericaIndianaVevay = 'America/Indiana/Vevay',
  AmericaIndianaVincennes = 'America/Indiana/Vincennes',
  AmericaIndianaWinamac = 'America/Indiana/Winamac',
  AmericaInuvik = 'America/Inuvik',
  AmericaIqaluit = 'America/Iqaluit',
  AmericaJamaica = 'America/Jamaica',
  AmericaJuneau = 'America/Juneau',
  AmericaKentuckyLouisville = 'America/Kentucky/Louisville',
  AmericaKentuckyMonticello = 'America/Kentucky/Monticello',
  AmericaKralendijk = 'America/Kralendijk',
  AmericaLaPaz = 'America/La_Paz',
  AmericaLima = 'America/Lima',
  AmericaLosAngeles = 'America/Los_Angeles',
  AmericaLouisville = 'America/Louisville',
  AmericaLowerPrinces = 'America/Lower_Princes',
  AmericaMaceio = 'America/Maceio',
  AmericaManagua = 'America/Managua',
  AmericaManaus = 'America/Manaus',
  AmericaMarigot = 'America/Marigot',
  AmericaMartinique = 'America/Martinique',
  AmericaMatamoros = 'America/Matamoros',
  AmericaMazatlan = 'America/Mazatlan',
  AmericaMenominee = 'America/Menominee',
  AmericaMerida = 'America/Merida',
  AmericaMetlakatla = 'America/Metlakatla',
  AmericaMexicoCity = 'America/Mexico_City',
  AmericaMiquelon = 'America/Miquelon',
  AmericaMoncton = 'America/Moncton',
  AmericaMonterrey = 'America/Monterrey',
  AmericaMontevideo = 'America/Montevideo',
  AmericaMontserrat = 'America/Montserrat',
  AmericaMontreal = 'America/Montreal',
  AmericaNassau = 'America/Nassau',
  AmericaNewYork = 'America/New_York',
  AmericaNipigon = 'America/Nipigon',
  AmericaNome = 'America/Nome',
  AmericaNoronha = 'America/Noronha',
  AmericaNorthDakotaBeulah = 'America/North_Dakota/Beulah',
  AmericaNorthDakotaCenter = 'America/North_Dakota/Center',
  AmericaNorthDakotaNewSalem = 'America/North_Dakota/New_Salem',
  AmericaOjinaga = 'America/Ojinaga',
  AmericaPanama = 'America/Panama',
  AmericaPangnirtung = 'America/Pangnirtung',
  AmericaParamaribo = 'America/Paramaribo',
  AmericaPhoenix = 'America/Phoenix',
  AmericaPortAuPrince = 'America/Port-au-Prince',
  AmericaPortOfSpain = 'America/Port_of_Spain',
  AmericaPortoVelho = 'America/Porto_Velho',
  AmericaPuertoRico = 'America/Puerto_Rico',
  AmericaRainyRiver = 'America/Rainy_River',
  AmericaRankinInlet = 'America/Rankin_Inlet',
  AmericaRecife = 'America/Recife',
  AmericaRegina = 'America/Regina',
  AmericaResolute = 'America/Resolute',
  AmericaRioBranco = 'America/Rio_Branco',
  AmericaSantaIsabel = 'America/Santa_Isabel',
  AmericaSantarem = 'America/Santarem',
  AmericaSantiago = 'America/Santiago',
  AmericaSantoDomingo = 'America/Santo_Domingo',
  AmericaSaoPaulo = 'America/Sao_Paulo',
  AmericaScoresbysund = 'America/Scoresbysund',
  AmericaShiprock = 'America/Shiprock',
  AmericaSitka = 'America/Sitka',
  AmericaStBarthelemy = 'America/St_Barthelemy',
  AmericaStJohns = 'America/St_Johns',
  AmericaStKitts = 'America/St_Kitts',
  AmericaStLucia = 'America/St_Lucia',
  AmericaStThomas = 'America/St_Thomas',
  AmericaStVincent = 'America/St_Vincent',
  AmericaSwiftCurrent = 'America/Swift_Current',
  AmericaTegucigalpa = 'America/Tegucigalpa',
  AmericaThule = 'America/Thule',
  AmericaThunderBay = 'America/Thunder_Bay',
  AmericaTijuana = 'America/Tijuana',
  AmericaToronto = 'America/Toronto',
  AmericaTortola = 'America/Tortola',
  AmericaVancouver = 'America/Vancouver',
  AmericaWhitehorse = 'America/Whitehorse',
  AmericaWinnipeg = 'America/Winnipeg',
  AmericaYakutat = 'America/Yakutat',
  AmericaYellowknife = 'America/Yellowknife',
  AntarcticaCasey = 'Antarctica/Casey',
  AntarcticaDavis = 'Antarctica/Davis',
  AntarcticaDumontDUrville = 'Antarctica/DumontDUrville',
  AntarcticaMacquarie = 'Antarctica/Macquarie',
  AntarcticaMawson = 'Antarctica/Mawson',
  AntarcticaMcMurdo = 'Antarctica/McMurdo',
  AntarcticaPalmer = 'Antarctica/Palmer',
  AntarcticaRothera = 'Antarctica/Rothera',
  AntarcticaSyowa = 'Antarctica/Syowa',
  AntarcticaTroll = 'Antarctica/Troll',
  AntarcticaVostok = 'Antarctica/Vostok',
  ArcticLongyearbyen = 'Arctic/Longyearbyen',
  AsiaAden = 'Asia/Aden',
  AsiaAlmaty = 'Asia/Almaty',
  AsiaAmman = 'Asia/Amman',
  AsiaAnadyr = 'Asia/Anadyr',
  AsiaAqtau = 'Asia/Aqtau',
  AsiaAqtobe = 'Asia/Aqtobe',
  AsiaAshgabat = 'Asia/Ashgabat',
  AsiaBaghdad = 'Asia/Baghdad',
  AsiaBahrain = 'Asia/Bahrain',
  AsiaBaku = 'Asia/Baku',
  AsiaBangkok = 'Asia/Bangkok',
  AsiaBarnaul = 'Asia/Barnaul',
  AsiaBeirut = 'Asia/Beirut',
  AsiaBishkek = 'Asia/Bishkek',
  AsiaBrunei = 'Asia/Brunei',
  AsiaChita = 'Asia/Chita',
  AsiaChoibalsan = 'Asia/Choibalsan',
  AsiaColombo = 'Asia/Colombo',
  AsiaDamascus = 'Asia/Damascus',
  AsiaDhaka = 'Asia/Dhaka',
  AsiaDili = 'Asia/Dili',
  AsiaDubai = 'Asia/Dubai',
  AsiaDushanbe = 'Asia/Dushanbe',
  AsiaFamagusta = 'Asia/Famagusta',
  AsiaGaza = 'Asia/Gaza',
  AsiaHebron = 'Asia/Hebron',
  AsiaHoChiMinh = 'Asia/Ho_Chi_Minh',
  AsiaHongKong = 'Asia/Hong_Kong',
  AsiaHovd = 'Asia/Hovd',
  AsiaIrkutsk = 'Asia/Irkutsk',
  AsiaJakarta = 'Asia/Jakarta',
  AsiaJayapura = 'Asia/Jayapura',
  AsiaJerusalem = 'Asia/Jerusalem',
  AsiaKabul = 'Asia/Kabul',
  AsiaKamchatka = 'Asia/Kamchatka',
  AsiaKarachi = 'Asia/Karachi',
  AsiaKathmandu = 'Asia/Kathmandu',
  AsiaKhandyga = 'Asia/Khandyga',
  AsiaKolkata = 'Asia/Kolkata',
  AsiaKrasnoyarsk = 'Asia/Krasnoyarsk',
  AsiaKualaLumpur = 'Asia/Kuala_Lumpur',
  AsiaKuching = 'Asia/Kuching',
  AsiaKuwait = 'Asia/Kuwait',
  AsiaMacau = 'Asia/Macau',
  AsiaMagadan = 'Asia/Magadan',
  AsiaMakassar = 'Asia/Makassar',
  AsiaManila = 'Asia/Manila',
  AsiaMuscat = 'Asia/Muscat',
  AsiaNicosia = 'Asia/Nicosia',
  AsiaNovokuznetsk = 'Asia/Novokuznetsk',
  AsiaNovosibirsk = 'Asia/Novosibirsk',
  AsiaOmsk = 'Asia/Omsk',
  AsiaOral = 'Asia/Oral',
  AsiaPhnomPenh = 'Asia/Phnom_Penh',
  AsiaPontianak = 'Asia/Pontianak',
  AsiaPyongyang = 'Asia/Pyongyang',
  AsiaQatar = 'Asia/Qatar',
  AsiaQyzylorda = 'Asia/Qyzylorda',
  AsiaRangoon = 'Asia/Rangoon',
  AsiaRiyadh = 'Asia/Riyadh',
  AsiaSakhalin = 'Asia/Sakhalin',
  AsiaSamarkand = 'Asia/Samarkand',
  AsiaSeoul = 'Asia/Seoul',
  AsiaShanghai = 'Asia/Shanghai',
  AsiaSingapore = 'Asia/Singapore',
  AsiaSrednekolymsk = 'Asia/Srednekolymsk',
  AsiaTaipei = 'Asia/Taipei',
  AsiaTashkent = 'Asia/Tashkent',
  AsiaTbilisi = 'Asia/Tbilisi',
  AsiaTehran = 'Asia/Tehran',
  AsiaThimphu = 'Asia/Thimphu',
  AsiaTokyo = 'Asia/Tokyo',
  AsiaTomsk = 'Asia/Tomsk',
  AsiaUlaanbaatar = 'Asia/Ulaanbaatar',
  AsiaUrumqi = 'Asia/Urumqi',
  AsiaUstNera = 'Asia/Ust-Nera',
  AsiaVientiane = 'Asia/Vientiane',
  AsiaVladivostok = 'Asia/Vladivostok',
  AsiaYakutsk = 'Asia/Yakutsk',
  AsiaYekaterinburg = 'Asia/Yekaterinburg',
  AsiaYerevan = 'Asia/Yerevan',
  AtlanticAzores = 'Atlantic/Azores',
  AtlanticBermuda = 'Atlantic/Bermuda',
  AtlanticCanary = 'Atlantic/Canary',
  AtlanticCapeVerde = 'Atlantic/Cape_Verde',
  AtlanticFaroe = 'Atlantic/Faroe',
  AtlanticMadeira = 'Atlantic/Madeira',
  AtlanticReykjavik = 'Atlantic/Reykjavik',
  AtlanticSouthGeorgia = 'Atlantic/South_Georgia',
  AtlanticStHelena = 'Atlantic/St_Helena',
  AtlanticStanley = 'Atlantic/Stanley',
  AustraliaAdelaide = 'Australia/Adelaide',
  AustraliaBrisbane = 'Australia/Brisbane',
  AustraliaBrokenHill = 'Australia/Broken_Hill',
  AustraliaCanberra = 'Australia/Canberra',
  AustraliaCurrie = 'Australia/Currie',
  AustraliaDarwin = 'Australia/Darwin',
  AustraliaEucla = 'Australia/Eucla',
  AustraliaHobart = 'Australia/Hobart',
  AustraliaLindeman = 'Australia/Lindeman',
  AustraliaLordHowe = 'Australia/Lord_Howe',
  AustraliaMelbourne = 'Australia/Melbourne',
  AustraliaPerth = 'Australia/Perth',
  AustraliaSydney = 'Australia/Sydney',
  EuropeAmsterdam = 'Europe/Amsterdam',
  EuropeAndorra = 'Europe/Andorra',
  EuropeAthens = 'Europe/Athens',
  EuropeBelgrade = 'Europe/Belgrade',
  EuropeBerlin = 'Europe/Berlin',
  EuropeBratislava = 'Europe/Bratislava',
  EuropeBrussels = 'Europe/Brussels',
  EuropeBucharest = 'Europe/Bucharest',
  EuropeBudapest = 'Europe/Budapest',
  EuropeBusingen = 'Europe/Busingen',
  EuropeChisinau = 'Europe/Chisinau',
  EuropeCopenhagen = 'Europe/Copenhagen',
  EuropeDublin = 'Europe/Dublin',
  EuropeGibraltar = 'Europe/Gibraltar',
  EuropeGuernsey = 'Europe/Guernsey',
  EuropeHelsinki = 'Europe/Helsinki',
  EuropeIsleOfMan = 'Europe/Isle_of_Man',
  EuropeIstanbul = 'Europe/Istanbul',
  EuropeJersey = 'Europe/Jersey',
  EuropeKaliningrad = 'Europe/Kaliningrad',
  EuropeKiev = 'Europe/Kiev',
  EuropeKirov = 'Europe/Kirov',
  EuropeLisbon = 'Europe/Lisbon',
  EuropeLjubljana = 'Europe/Ljubljana',
  EuropeLondon = 'Europe/London',
  EuropeLuxembourg = 'Europe/Luxembourg',
  EuropeMadrid = 'Europe/Madrid',
  EuropeMalta = 'Europe/Malta',
  EuropeMariehamn = 'Europe/Mariehamn',
  EuropeMinsk = 'Europe/Minsk',
  EuropeMonaco = 'Europe/Monaco',
  EuropeMoscow = 'Europe/Moscow',
  EuropeOslo = 'Europe/Oslo',
  EuropeParis = 'Europe/Paris',
  EuropePodgorica = 'Europe/Podgorica',
  EuropePrague = 'Europe/Prague',
  EuropeRiga = 'Europe/Riga',
  EuropeRome = 'Europe/Rome',
  EuropeSamara = 'Europe/Samara',
  EuropeSanMarino = 'Europe/San_Marino',
  EuropeSarajevo = 'Europe/Sarajevo',
  EuropeSimferopol = 'Europe/Simferopol',
  EuropeSkopje = 'Europe/Skopje',
  EuropeSofia = 'Europe/Sofia',
  EuropeStockholm = 'Europe/Stockholm',
  EuropeTallinn = 'Europe/Tallinn',
  EuropeTirane = 'Europe/Tirane',
  EuropeUzhgorod = 'Europe/Uzhgorod',
  EuropeVaduz = 'Europe/Vaduz',
  EuropeVatican = 'Europe/Vatican',
  EuropeVienna = 'Europe/Vienna',
  EuropeVilnius = 'Europe/Vilnius',
  EuropeVolgograd = 'Europe/Volgograd',
  EuropeWarsaw = 'Europe/Warsaw',
  EuropeZagreb = 'Europe/Zagreb',
  EuropeZaporozhye = 'Europe/Zaporozhye',
  EuropeZurich = 'Europe/Zurich',
  GMT = 'GMT',
  IndianAntananarivo = 'Indian/Antananarivo',
  IndianChagos = 'Indian/Chagos',
  IndianChristmas = 'Indian/Christmas',
  IndianCocos = 'Indian/Cocos',
  IndianComoro = 'Indian/Comoro',
  IndianKerguelen = 'Indian/Kerguelen',
  IndianMahe = 'Indian/Mahe',
  IndianMaldives = 'Indian/Maldives',
  IndianMauritius = 'Indian/Mauritius',
  IndianMayotte = 'Indian/Mayotte',
  IndianReunion = 'Indian/Reunion',
  PacificApia = 'Pacific/Apia',
  PacificAuckland = 'Pacific/Auckland',
  PacificBougainville = 'Pacific/Bougainville',
  PacificChatham = 'Pacific/Chatham',
  PacificChuuk = 'Pacific/Chuuk',
  PacificEaster = 'Pacific/Easter',
  PacificEfate = 'Pacific/Efate',
  PacificEnderbury = 'Pacific/Enderbury',
  PacificFakaofo = 'Pacific/Fakaofo',
  PacificFiji = 'Pacific/Fiji',
  PacificFunafuti = 'Pacific/Funafuti',
  PacificGalapagos = 'Pacific/Galapagos',
  PacificGambier = 'Pacific/Gambier',
  PacificGuadalcanal = 'Pacific/Guadalcanal',
  PacificGuam = 'Pacific/Guam',
  PacificHonolulu = 'Pacific/Honolulu',
  PacificJohnston = 'Pacific/Johnston',
  PacificKiritimati = 'Pacific/Kiritimati',
  PacificKosrae = 'Pacific/Kosrae',
  PacificKwajalein = 'Pacific/Kwajalein',
  PacificMajuro = 'Pacific/Majuro',
  PacificMarquesas = 'Pacific/Marquesas',
  PacificMidway = 'Pacific/Midway',
  PacificNauru = 'Pacific/Nauru',
  PacificNiue = 'Pacific/Niue',
  PacificNorfolk = 'Pacific/Norfolk',
  PacificNoumea = 'Pacific/Noumea',
  PacificPagoPago = 'Pacific/Pago_Pago',
  PacificPalau = 'Pacific/Palau',
  PacificPitcairn = 'Pacific/Pitcairn',
  PacificPohnpei = 'Pacific/Pohnpei',
  PacificPonape = 'Pacific/Ponape',
  PacificPortMoresby = 'Pacific/Port_Moresby',
  PacificRarotonga = 'Pacific/Rarotonga',
  PacificSaipan = 'Pacific/Saipan',
  PacificSamoa = 'Pacific/Samoa',
  PacificTahiti = 'Pacific/Tahiti',
  PacificTarawa = 'Pacific/Tarawa',
  PacificTongatapu = 'Pacific/Tongatapu',
  PacificTruk = 'Pacific/Truk',
  PacificWake = 'Pacific/Wake',
  PacificWallis = 'Pacific/Wallis',
  PacificYap = 'Pacific/Yap',
  // USAlaska = 'US/Alaska',
  // USAleutian = 'US/Aleutian',
  // USArizona = 'US/Arizona',
  // USCentral = 'US/Central',
  // USCentralStandard = 'US/Central Standard',
  // USCentralDaylight = 'US/Central Daylight',
  // USEastern = 'US/Eastern',
  // USEasternStandard = 'US/Eastern Standard',
  // USEasternDaylight = 'US/Eastern Daylight',
  // USHawaii = 'US/Hawaii',
  // USMountain = 'US/Mountain',
  // USMountainStandard = 'US/Mountain Standard',
  // USMountainDaylight = 'US/Mountain Daylight',
  // USPacific = 'US/Pacific',
  // USPacificStandard = 'US/Pacific Standard',
  // USPacificDaylight = 'US/Pacific Daylight',
  // USPacificIsland = 'US/Pacific-Island',
}

export type TimezoneRegion = {
  id: TimezoneRegions;
  name: string;
  offset: TimezoneOffset;
  timezone: Timezones;
};
