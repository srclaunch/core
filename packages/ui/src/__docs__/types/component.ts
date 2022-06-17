import { ElementType, ReactElement } from 'react';

import { Size } from '../../../src/index';

export type Component = {
  readonly component?: ElementType;
  readonly components?: readonly Component[];
  readonly description?: string;
  readonly examples?: readonly [
    {
      readonly code?: string;
      readonly description?: string;
      readonly properties?: Record<string, any>;
      readonly render?: () => ReactElement;
      readonly size?: Size;
      readonly title: string;
    },
  ];
  readonly name?: string;
  readonly path: string;
  readonly properties?: {
    readonly [key: string]: {
      // eslint-disable-next-line functional/prefer-readonly-type
      readonly types: string[];
      readonly required?: boolean;
    };
  };
  readonly title: string;
};

export type ComponentLibrary = {
  readonly name: string;
  readonly description?: string;
  readonly components?: readonly Component[];
};
