import { Model, ModelProps, Primitives } from '@srclaunch/types';

import { LabelProps } from '../../components/typography/label';

export type PrimitiveLabelProps = {
  readonly fieldName?: string;
  readonly model?: ModelProps;
  readonly props?: LabelProps;
  readonly type: Primitives;
  readonly value: any;
};
