import { Timezones } from './timezones';

export enum TimezoneOffset {
  UTC_MINUS_12 = 'UTC-12',
  UTC_MINUS_11_30 = 'UTC-11:30',
  UTC_MINUS_11 = 'UTC-11',
  UTC_MINUS_10_30 = 'UTC-10:30',
  UTC_MINUS_10 = 'UTC-10',
  UTC_MINUS_9_30 = 'UTC-9:30',
  UTC_MINUS_9 = 'UTC-09',
  UTC_MINUS_8_45 = 'UTC-8:45',
  UTC_MINUS_8 = 'UTC-08',
  UTC_MINUS_7 = 'UTC-07',
  UTC_MINUS_6_30 = 'UTC-6:30',
  UTC_MINUS_6 = 'UTC-06',
  UTC_MINUS_5_45 = 'UTC-5:45',
  UTC_MINUS_5_30 = 'UTC-5:30',
  UTC_MINUS_5 = 'UTC-05',
  UTC_MINUS_4_30 = 'UTC-4:30',
  UTC_MINUS_4 = 'UTC-04',
  UTC_MINUS_3_30 = 'UTC-3:30',
  UTC_MINUS_3 = 'UTC-03',
  UTC_MINUS_2_30 = 'UTC-2:30',
  UTC_MINUS_2 = 'UTC-02',
  UTC_MINUS_1 = 'UTC-01',
  UTC_0 = 'UTC+00',
  UTC_PLUS_1 = 'UTC+01',
  UTC_PLUS_2 = 'UTC+02',
  UTC_PLUS_3 = 'UTC+03',
  UTC_PLUS_3_30 = 'UTC+3:30',
  UTC_PLUS_4 = 'UTC+04',
  UTC_PLUS_4_30 = 'UTC+4:30',
  UTC_PLUS_5 = 'UTC+05',
  UTC_PLUS_5_30 = 'UTC+5:30',
  UTC_PLUS_5_45 = 'UTC+5:45',
  UTC_PLUS_6 = 'UTC+06',
  UTC_PLUS_6_30 = 'UTC+6:30',
  UTC_PLUS_7 = 'UTC+07',
  UTC_PLUS_8 = 'UTC+08',
  UTC_PLUS_8_45 = 'UTC+8:45',
  UTC_PLUS_9 = 'UTC+09',
  UTC_PLUS_9_30 = 'UTC+9:30',
  UTC_PLUS_10 = 'UTC+10',
  UTC_PLUS_10_30 = 'UTC+10:30',
  UTC_PLUS_11 = 'UTC+11',
  UTC_PLUS_11_30 = 'UTC+11:30',
  UTC_PLUS_12 = 'UTC+12',
  UTC_PLUS_12_45 = 'UTC+12:45',
  UTC_PLUS_13 = 'UTC+13',
  UTC_PLUS_13_45 = 'UTC+13:45',
  UTC_PLUS_14 = 'UTC+14',
}

export type TimezoneDetails = {
  dst: {
    is: boolean;
    uses: boolean;
  };
  id: Timezones;
  name: string;
  offset: TimezoneOffset;
};
