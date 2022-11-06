import { CurrencyAmount, CurrencyCode } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Label, LabelProps as LabelProperties } from '../../../label';

type CurrencyAmountLabelProperties = LabelProperties & {
  readonly amount: CurrencyAmount;
  readonly currency: CurrencyCode;
};

export const CurrencyAmountLabel = memo(
  ({
    amount,
    // currency,
    ...properties
  }: CurrencyAmountLabelProperties): ReactElement => {
    return (
      <Label {...properties}>
        {amount === 0
          ? '$0'
          : amount
          ? `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
          : ''}
      </Label>
    );
  },
);
