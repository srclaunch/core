import { ModelProps, Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { getLabelByFieldType } from '../../../lib/data/labels';
import { Amount, Size, TextColor } from '../../../types';
import { LabelProps } from '../../typography/label';

// import BooleanLabel from './labels/BooleanLabel';
// import CurrencyLabel from './labels/CurrencyLabel';
// import DateTimeLabel from './labels/DateTimeLabel';
// // import DueDateLabel from './labels/DueDateLabel';
// import ProgressLabel from './labels/ProgressLabel';
// import {StringLabel} from '../labels/StringLabel';
// import {NumberLabel }from '../labels/NumberLabel';
// import { DateTime } from 'luxon';

type DataGridCellProps = LabelProps & {
  readonly fieldName?: string;
  readonly lineHeight?: Size;
  readonly model?: ModelProps;
  readonly textColor?: TextColor;
  readonly type: Primitives;
  readonly value: unknown;
};

export const DataGridCell = memo(
  ({
    // as = 'label',
    fieldName,
    model,
    type,
    value,
    ...props
  }: DataGridCellProps): ReactElement => {
    return getLabelByFieldType({
      fieldName,
      model,
      props: {
        padding: {
          left: Amount.Default,
          right: Amount.Default,
        },
        ...props,
      },
      type,
      value,
    });
  },
);
