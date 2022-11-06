import { ElementType, ReactElement } from 'react';

import { Primitives } from '../data/primitive';
import { ObjectDefinition } from './object';

export type ComponentPropertyDefinition = ObjectDefinition & {
  readonly declarations?: ReadonlyArray<{
    readonly fileName: string;
    readonly name: string;
  }>;
  readonly defaultValue: unknown;
  readonly description: string;
  readonly docPath?: string;
  readonly name: string;
  readonly parent?: {
    readonly fileName: string;
    readonly name: string;
  };
  readonly path?: string;
  readonly required: boolean;
  readonly tags?: Record<string, string>;
  readonly type: {
    readonly name: string;
    readonly primitive?: Primitives;
    readonly raw?: string;
    readonly value?: unknown;
  };
};

export type ComponentSpec = {
  readonly component?: ElementType;
  readonly description?: string;
  readonly docPath?: string;
  readonly examples?: readonly [
    {
      readonly code?: string;
      readonly description?: string;
      readonly name?: string;
      readonly props?: Record<string, unknown>;
      readonly render?: () => ReactElement;
    },
  ];
  readonly file: {
    readonly name: string;
    readonly path: string;
  };
  readonly hierarchy: ReadonlyArray<string>;
  readonly markdown?: {
    readonly content?: string;
    readonly file?: {
      readonly name: string;
      readonly path: string;
    };
  };
  readonly name: string;
  readonly props?: {
    readonly [name: string]: ComponentPropertyDefinition;
  };
  readonly tags?: Record<string, string>;
};
