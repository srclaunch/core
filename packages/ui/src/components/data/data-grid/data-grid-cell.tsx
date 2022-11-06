import { ModelProps, Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { getLabelByFieldType } from '../../../lib/data/labels';
import { Amount } from '../../../types';
import { LabelProps } from '../../typography/label';

// import BooleanLabel from './labels/BooleanLabel';
// import CurrencyLabel from './labels/CurrencyLabel';
// import DateTimeLabel from './labels/DateTimeLabel';
// // import DueDateLabel from './labels/DueDateLabel';
// import ProgressLabel from './labels/ProgressLabel';
// import {StringLabel} from '../labels/StringLabel';
// import {NumberLabel }from '../labels/NumberLabel';
// import { DateTime } from 'luxon';

export const DataGridCell = memo(
  ({
    // as = 'label',
    fieldName,
    model,
    type,
    value,
    ...props
  }: LabelProps<{
    readonly fieldName?: string;
    readonly model?: ModelProps;
    readonly type: Primitives;
    readonly value: unknown;
  }>): ReactElement => {
    return getLabelByFieldType({
      fieldName,
      model,
      props: {
        paddingLeft: Amount.Default,
        paddingRight: Amount.Default,
        ...props,
      },
      type,
      value,
    });
  },
);
