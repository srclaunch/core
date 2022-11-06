import { Model } from './index';

export type Group = readonly Model[];

export type Relationship = {
  readonly belongsTo?: readonly Model['name'][];
  readonly hasMany?: readonly Model['name'][];
  readonly hasOne?: readonly Model['name'][];
};
