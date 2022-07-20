import { ElementType, ReactElement } from 'react';

export type ComponentProps = Record<
  string,
  {
    readonly name: string;
    readonly required: boolean;
    readonly type: {
      readonly name: string;
      readonly value?: unknown;
      readonly raw?: string;
    };
    readonly description: string;
    readonly defaultValue: unknown;
    readonly parent?: {
      readonly name: string;
      readonly fileName: string;
    };
    readonly declarations?: ReadonlyArray<{
      readonly name: string;
      readonly fileName: string;
    }>;
    readonly tags?: Record<string, string>;
  }
>;

export type ComponentSpec = {
  readonly component?: ElementType;
  readonly description?: string;
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
  readonly name: string;
  readonly hierarchy: ReadonlyArray<string>;
  readonly props?: ComponentProps;
  readonly tags?: Record<string, string>;
};
