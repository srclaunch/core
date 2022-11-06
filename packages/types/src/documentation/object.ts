import { Primitives } from '../data/primitive';

export type ObjectPropertyDefinition = {
  readonly defaultValue?: unknown;
  readonly description?: string;
  readonly name: string;
  readonly required?: boolean;
  readonly type: Primitives;
};

export type ObjectDefinition = {
  readonly description?: string;
  readonly name?: string;
  readonly properties: {
    readonly [name: string]: ObjectPropertyDefinition;
  };
};
