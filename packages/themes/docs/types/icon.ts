import { ElementType } from 'react';

export type Icon = {
  readonly icon?: ElementType;
  readonly icons?: readonly Icon[];
  readonly description?: string;
  readonly examples?: readonly [
    {
      readonly code?: string;
      readonly description?: string;
      readonly properties?: Record<string, any>;
      readonly title: string;
    },
  ];
  readonly name?: string;
  readonly path: string;
  readonly properties?: {
    readonly [key: string]: {
      readonly types: readonly string[];
      readonly required?: boolean;
    };
  };
  readonly title: string;
};

export type IconLibrary = {
  readonly name: string;
  readonly description?: string;
  readonly icons?: readonly Icon[];
};
