import { memo, ReactElement } from 'react';

import { Label, LabelProps } from '../../label';

type PercentLabelProps = LabelProps & {
  readonly value: number;
};

export const PercentLabel = memo(
  ({ value, ...props }: PercentLabelProps): ReactElement => {
    return <Label {...props}>{value}%</Label>;
  },
);
