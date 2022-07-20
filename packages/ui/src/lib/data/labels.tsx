import { CurrencyCode, Primitives } from '@srclaunch/types';
import { ReactElement } from 'react';

import { BooleanLabel } from '../..';
import { DateLabel } from '../../components/typography/labels/dates/date-label';
import { CurrencyAmountLabel } from '../../components/typography/labels/finance/currency/currency-amount-label';
import { MenuItemLabel } from '../../components/typography/labels/menu/menu-item-label';
import { NumberLabel } from '../../components/typography/labels/numbers/number-label';
import { PercentLabel } from '../../components/typography/labels/numbers/percent-label';
import { StringLabel } from '../../components/typography/labels/text/string-label';
import { PrimitiveLabelProps } from '../../types';

export function getLabelByFieldType({
  fieldName,
  model,
  props,
  type,
  value,
}: PrimitiveLabelProps): ReactElement {
  switch (type) {
    case Primitives.Boolean:
      return <BooleanLabel value={value} {...props} />;
    case Primitives.CurrencyAmount:
      return (
        <CurrencyAmountLabel
          amount={value}
          currency={CurrencyCode.UnitedStatesDollar}
          {...props}
        />
      );
    case Primitives.Date:
      return <DateLabel value={value} {...props} />;
    case Primitives.Percent:
      return <PercentLabel value={value} {...props} />;
    case Primitives.Menu:
      return (
        <MenuItemLabel
          fieldName={fieldName}
          model={model}
          value={value}
          {...props}
        />
      );
    case Primitives.Number:
      return <NumberLabel value={value} {...props} />;
    case Primitives.String:
      return <StringLabel value={value} {...props} />;

    default:
      return <StringLabel value={value} {...props} />;
  }
}
