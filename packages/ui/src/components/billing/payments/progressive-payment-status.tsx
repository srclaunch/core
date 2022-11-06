import { formatCurrency } from '@srclaunch/i18n';
import { CurrencyCode } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Formatter } from '../../../lib/data/format';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  // BackgroundColor,
  Color,
} from '../../../types';
import { LinearGauge } from '../../charts/linear-gauge';
import { ProgressMeter } from '../../charts/progress-meter';
import { Container } from '../../layout/container';

export const ProgressivePaymentStatus = memo(
  ({
    amountPaid = 0,
    currency = CurrencyCode.UnitedStatesDollar,
    totalDue = 0,
  }: // size = Size.Default,
  {
    readonly amountPaid: number;
    readonly color?: Color;
    readonly currency?: CurrencyCode;
    readonly totalDue: number;
  }): ReactElement => {
    // const backgroundColor =
    //   amountPaid >= totalDue
    //     ? BackgroundColor.Success
    //     : BackgroundColor.Warning;
    return (
      <Container padding={{ bottom: Amount.Default }}>
        <ProgressMeter
          alignment={{
            horizontal: AlignHorizontal.Center,
            vertical: AlignVertical.Center,
          }}
          amount={amountPaid}
          // color={backgroundColor}
          borderRadius={{ all: Amount.Default }}
          label={formatCurrency({ amount: amountPaid, currency })}
          margin={{ bottom: Amount.Less }}
          total={totalDue}
        />

        <LinearGauge
          amount={amountPaid}
          // color={ BackgroundColor.Warning }
          formatter={{
            formatter: Formatter.Currency,
            options: {
              currency,
            },
          }}
          total={totalDue}
        />
      </Container>
    );
  },
);
