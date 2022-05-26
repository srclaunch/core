import { Model } from './index';

export type Group = Model[];

export type Relationship = {
  belongsTo?: Model['name'][];
  hasMany?: Model['name'][];
  hasOne?: Model['name'][];
};
