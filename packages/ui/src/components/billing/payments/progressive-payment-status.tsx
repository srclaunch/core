import { formatCurrency } from '@srclaunch/i18n';
import { CurrencyCode } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Formatter } from '../../../lib/data/format';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  // BackgroundColors,
  Color,
} from '../../../types';
import { LinearGauge } from '../../charts/linear-gauge';
import { ProgressMeter } from '../../charts/progress-meter';
import { Container } from '../../layout/container';

type ProgressivePaymentStatusProps = {
  readonly amountPaid: number;
  readonly currency?: CurrencyCode;
  readonly color?: Color;
  readonly totalDue: number;
};

export const ProgressivePaymentStatus = memo(
  ({
    amountPaid = 0,
    currency = CurrencyCode.UnitedStatesDollar,
    totalDue = 0,
  }: // size = Size.Default,
  ProgressivePaymentStatusProps): ReactElement => {
    // const backgroundColor =
    //   amountPaid >= totalDue
    //     ? BackgroundColors.Success
    //     : BackgroundColors.Warning;
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
          // color={ BackgroundColors.Warning }
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
