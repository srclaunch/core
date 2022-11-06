import { DeviceType } from '../things/device';
import { UserAccessEvent } from '../analytics/user';
import { ISO8601 } from '../data/primitive';

export type UserAccessDevice = {
  readonly id: string;
  readonly ip_addresses: readonly string[];
  readonly last_login: ISO8601;
  readonly type: DeviceType;
};

export type UserAccessDetails = {
  readonly devices: readonly UserAccessDevice[];
  readonly history?: readonly UserAccessEvent[];
  readonly ip_addresses: readonly string[];
};
