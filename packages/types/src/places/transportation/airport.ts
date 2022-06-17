import { AirportCode } from '../../data/primitive';

export type Airport = {
  readonly id: AirportCode;
  readonly name: string;
  readonly city: string;
  readonly country: string;
  readonly iata: string;
  readonly icao: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly altitude: number;
  readonly timezone: string;
  readonly dst: string;
  readonly tz: string;
  readonly type: string;
  readonly source: string;
};
